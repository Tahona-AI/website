import { oliveFragment, oliveVertex } from "./olive-shaders";
import { createDitherMesh } from "./dither-mesh";

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const smooth = (low: number, high: number, n: number) => {
  const t = clamp((n - low) / (high - low));
  return t * t * (3 - 2 * t);
};

/** Soft silhouettes authored against the original photograph (top-left image coordinates). */
function ellipse(x: number, y: number, cx: number, cy: number, rx: number, ry: number) {
  const distance = Math.hypot((x - cx) / rx, (y - cy) / ry);
  return 1 - smooth(0.84, 1.12, distance);
}

function relief(x: number, y: number) {
  const crown = Math.max(
    ellipse(x, y, 0.731, 0.267, 0.254, 0.25),
    ellipse(x, y, 0.578, 0.385, 0.111, 0.191),
    ellipse(x, y, 0.890, 0.348, 0.096, 0.185),
  );
  const trunkX = 0.751 + smooth(0.48, 0.79, y) * 0.072;
  const trunk = (1 - smooth(0.026, 0.066, Math.abs(x - trunkX)))
    * smooth(0.40, 0.51, y) * (1 - smooth(0.79, 0.89, y));
  const ground = smooth(0.46, 1, y);
  const terrain = 0.06 + ground * ground * 0.8;
  const tree = Math.max(crown * 0.7, trunk * 0.8);
  // The canopy moves as branches attached to the fork; the trunk never bends.
  const canopy = crown * (1 - smooth(0.40, 0.59, y))
    * (0.28 + 0.72 * clamp(Math.abs(x - 0.765) / 0.20 + (0.49 - y) / 0.65));
  return { depth: Math.max(terrain, tree), canopy };
}

/** Progressive enhancement of the existing image. No React island or render loop in the DOM. */
export function mountOliveScene(hero: HTMLElement): () => void {
  const host = hero.querySelector<HTMLElement>("[data-olive-scene]");
  const poster = host?.querySelector<HTMLImageElement>("img");
  const button = hero.querySelector<HTMLButtonElement>("[data-olive-toggle]");
  if (!host || !poster || !button) return () => {};

  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const narrow = matchMedia("(max-width: 767px)");
  const coarse = matchMedia("(pointer: coarse)");
  const fine = matchMedia("(hover: hover) and (pointer: fine)");
  let disposed = false;
  let loading = false;
  let ready = false;
  let visible = true;
  let suspended = false;
  let paused = false;
  let failed = false;
  let frame = 0;
  let lastTime = 0;
  let elapsed = 0;
  let paintTime = 0;
  let bounds: DOMRect | undefined;
  let render: (delta: number) => void = () => {};
  let resize: () => void = () => {};
  let release: () => void = () => {};
  let resetHover: () => void = () => {};
  let mesh: ReturnType<typeof createDitherMesh> | undefined;
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
  const listeners = new AbortController();
  const { signal } = listeners;

  function running() {
    return ready && visible && !document.hidden && !suspended && !paused && !reduced.matches && !failed && !disposed;
  }

  function tick(now: number) {
    frame = 0;
    if (!running()) return;
    // Touch screens render at 30 fps. Desktop remains responsive at its native refresh rate.
    if (narrow.matches && now - paintTime < 1000 / 30 - 1) {
      frame = requestAnimationFrame(tick);
      return;
    }
    const delta = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 1 / 60;
    lastTime = paintTime = now;
    elapsed += delta;
    const follow = 1 - Math.exp(-delta / 0.72);
    pointer.x += (pointer.targetX - pointer.x) * follow;
    pointer.y += (pointer.targetY - pointer.y) * follow;
    render(delta);
    frame = requestAnimationFrame(tick);
  }

  function sync() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = paintTime = 0;
    const active = running();
    hero.dataset.oliveState = failed ? "fallback" : reduced.matches ? "reduced" : !ready ? "loading" : active ? "playing" : "paused";
    host!.classList.toggle("is-animated", ready && !reduced.matches && !failed);
    button!.hidden = !ready || reduced.matches || failed;
    button!.setAttribute("aria-pressed", String(paused));
    button!.setAttribute("aria-label", paused ? "Reanudar movimiento del paisaje" : "Pausar movimiento del paisaje");
    button!.title = paused ? "Reanudar movimiento" : "Pausar movimiento";
    if (active) frame = requestAnimationFrame(tick);
    else resetHover();
  }

  async function load() {
    if (loading || ready || disposed || reduced.matches || failed) return;
    loading = true;
    try {
      // Three is a separate, deferred chunk; the original HTML image paints first.
      const [THREE] = await Promise.all([import("./olive-three"), poster!.decode()]);
      if (disposed || reduced.matches) { loading = false; return; }
      const renderer = new THREE.WebGLRenderer({
        alpha: false, antialias: false, depth: false, stencil: false, powerPreference: "low-power",
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setClearColor(0xf7faf7, 1);
      renderer.debug.onShaderError = () => {
        failed = true;
        sync();
      };
      // Release the renderer even if preparing another resource fails before setup completes.
      release = () => { renderer.dispose(); renderer.forceContextLoss(); };
      const canvas = renderer.domElement;
      canvas.className = "olive-canvas";
      canvas.setAttribute("aria-hidden", "true");

      const texture = new THREE.Texture(poster!);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
      texture.needsUpdate = true;
      const aspect = poster!.naturalWidth / poster!.naturalHeight;
      const columns = narrow.matches ? 128 : 224;
      const rows = Math.round(columns / aspect);
      const geometry = new THREE.PlaneGeometry(aspect * 2, 2, columns, rows);
      const uv = geometry.getAttribute("uv");
      const depth = new Float32Array(uv.count);
      const canopy = new Float32Array(uv.count);
      for (let i = 0; i < uv.count; i++) {
        const sample = relief(uv.getX(i), 1 - uv.getY(i));
        depth[i] = sample.depth;
        canopy[i] = sample.canopy;
      }
      geometry.setAttribute("aDepth", new THREE.BufferAttribute(depth, 1));
      geometry.setAttribute("aCanopy", new THREE.BufferAttribute(canopy, 1));
      const uniforms = {
        uImage: { value: texture }, uTime: { value: 0 },
        uStrength: { value: 0 }, uScale: { value: 1 },
        uLens: { value: [0, 0, 0] }, uResolution: { value: [1, 1] }, uPixelRatio: { value: 1 },
      };
      const material = new THREE.ShaderMaterial({
        uniforms, vertexShader: oliveVertex, fragmentShader: oliveFragment,
        depthTest: false, depthWrite: false, toneMapped: false,
      });
      const landscape = new THREE.Mesh(geometry, material);
      landscape.frustumCulled = false;
      const scene = new THREE.Scene();
      scene.add(landscape);
      const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 20);
      camera.position.set(0, 0, 4);
      camera.lookAt(0, 0, 0.15);
      let failedFrames = 0;
      let sampledFrames = 0;
      let qualityScale = 1;
      const visual = hero.querySelector<HTMLElement>(".hero-visual");
      if (visual) mesh = createDitherMesh(visual);
      resetHover = () => {
        mesh?.reset();
        uniforms.uLens.value[2] = 0;
        if (ready && !failed && !disposed) renderer.render(scene, camera);
      };

      resize = () => {
        // All layout reads are confined to resize and pointer entry, never the render loop.
        bounds = hero.getBoundingClientRect();
        const width = host!.clientWidth;
        const height = host!.clientHeight;
        if (!width || !height) return;
        const viewAspect = width / height;
        const imagePosition = getComputedStyle(poster!).objectPosition.split(" ").map(parseFloat);
        const posX = (imagePosition[0] || 50) / 100;
        const posY = (imagePosition[1] || 50) / 100;
        // Overscan leaves breathing room for the orbit, with the original cover framing.
        const baseCover = Math.max(1, viewAspect / aspect);
        const cover = baseCover * 1.12;
        landscape.scale.set(cover, cover, 1);
        landscape.position.set((viewAspect * 2 - aspect * 2 * baseCover) * (posX - 0.5), (2 * baseCover - 2) * (posY - 0.5), 0);
        uniforms.uScale.value = 1; // Vertex x/y inherit the mesh's cover scale.
        camera.left = -viewAspect;
        camera.right = viewAspect;
        camera.updateProjectionMatrix();
        const cap = narrow.matches ? 1.35 : 1.75;
        const pixelBudget = Math.sqrt(2_600_000 / (width * height));
        renderer.setPixelRatio(Math.min(devicePixelRatio || 1, cap, pixelBudget) * qualityScale);
        renderer.setSize(width, height, false);
        uniforms.uResolution.value[0] = canvas.width;
        uniforms.uResolution.value[1] = canvas.height;
        uniforms.uPixelRatio.value = renderer.getPixelRatio();
        mesh?.resize();
        renderer.render(scene, camera);
      };

      render = (delta) => {
        const intensity = narrow.matches ? 0.68 : 1;
        const arrival = smooth(0, 2.5, elapsed);
        // Incommensurate periods make a long continuous orbit without a visible loop seam.
        const orbitX = Math.sin(elapsed * 0.205) * 0.245 + Math.sin(elapsed * 0.083) * 0.085;
        const orbitY = (Math.sin(elapsed * 0.163 + 0.4) - Math.sin(0.4)) * 0.075;
        camera.position.x = (orbitX + pointer.x * 0.46) * intensity * arrival;
        camera.position.y = (orbitY + pointer.y * 0.18) * intensity * arrival;
        camera.lookAt(0, 0, 0.15);
        uniforms.uTime.value = elapsed;
        uniforms.uStrength.value = intensity * arrival;
        const lens = mesh?.update(delta);
        if (lens) {
          uniforms.uLens.value[0] = lens.x;
          uniforms.uLens.value[1] = lens.y;
          uniforms.uLens.value[2] = lens.strength;
        }
        renderer.render(scene, camera);
        // One downgrade on sustained slow frames, rather than a changing resolution each frame.
        if (!narrow.matches && elapsed > 3 && qualityScale === 1 && sampledFrames < 180) {
          sampledFrames++;
          if (delta > 0.026) failedFrames++;
          if (sampledFrames === 180 && failedFrames > 70) {
            qualityScale = 0.72;
            requestAnimationFrame(() => { if (!disposed) resize(); });
          }
        }
      };

      release = () => {
        resize = () => {};
        render = () => {};
        resetHover = () => {};
        mesh?.dispose();
        mesh = undefined;
        geometry.dispose(); material.dispose(); texture.dispose();
        renderer.dispose(); renderer.forceContextLoss(); canvas.remove();
      };
      canvas.addEventListener("webglcontextlost", (event) => {
        event.preventDefault();
        if (disposed) return;
        failed = true;
        sync();
      }, { signal });
      resize();
      if (failed) { release(); return; }
      if (disposed) { release(); return; }
      host!.append(canvas);
      ready = true;
      sync();
    } catch {
      release();
      failed = true;
      sync();
    } finally {
      loading = false;
    }
  }

  button.addEventListener("click", () => { paused = !paused; sync(); }, { signal });
  hero.addEventListener("pointerenter", () => { bounds = hero.getBoundingClientRect(); }, { signal, passive: true });
  // Scrolling only invalidates the cached rectangle; it never drives the animation.
  document.addEventListener("scroll", () => { bounds = undefined; }, { signal, passive: true });
  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || coarse.matches || !running()) return;
    bounds ??= hero.getBoundingClientRect();
    if (fine.matches) mesh?.move(event, bounds);
    pointer.targetX = clamp((event.clientX - bounds.left) / bounds.width * 2 - 1, -1, 1);
    pointer.targetY = clamp(1 - (event.clientY - bounds.top) / bounds.height * 2, -1, 1);
  }, { signal, passive: true });
  function leavePointer() {
    pointer.targetX = pointer.targetY = 0;
    mesh?.leave();
  }
  hero.addEventListener("pointerleave", leavePointer, { signal, passive: true });
  hero.addEventListener("pointercancel", leavePointer, { signal, passive: true });
  window.addEventListener("blur", leavePointer, { signal });
  hero.addEventListener("focusin", () => { leavePointer(); resetHover(); }, { signal });
  fine.addEventListener("change", () => resetHover(), { signal });
  document.addEventListener("visibilitychange", sync, { signal });
  reduced.addEventListener("change", () => { sync(); void load(); }, { signal });
  narrow.addEventListener("change", () => { resize(); }, { signal });
  window.addEventListener("pagehide", () => { suspended = true; sync(); }, { signal });
  window.addEventListener("pageshow", () => { suspended = false; sync(); }, { signal });
  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (!visible) pointer.targetX = pointer.targetY = 0;
    sync();
  }, { threshold: 0.05 });
  visibility.observe(hero);
  const size = new ResizeObserver(() => resize());
  size.observe(host);
  sync();
  void load();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    listeners.abort();
    visibility.disconnect(); size.disconnect();
    release();
  };
}
