import { createPhotoGravity } from "./photo-gravity";
import { createTitleFlow } from "./title-flow";

// A local Canvas 2D field: one Gaussian attracts a quiet grid toward the pointer.
export function initMeshFlow(hero: HTMLElement, reducedMotion: MediaQueryList) {
  const canvas = hero.querySelector<HTMLCanvasElement>("[data-mesh-flow]");
  const context = canvas?.getContext("2d");
  if (!canvas || !context) return;

  const pointerMedia = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (min-width: 768px)",
  );
  const size = 528;
  const half = size / 2;
  const spacing = 32;
  const sigmaSquared = 96 * 96;
  let bounds: DOMRect | null = null;
  let frame = 0;
  let previousTime = 0;
  let visible = true;
  let enabled = false;
  let entered = false;
  let strength = 0;
  let targetStrength = 0;
  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;
  let pixelRatio = 1;
  let gravity: ReturnType<typeof createPhotoGravity> | undefined;
  let titleFlow: ReturnType<typeof createTitleFlow> | undefined;

  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    entered = false;
    strength = targetStrength = 0;
    context!.clearRect(0, 0, size, size);
    gravity?.reset();
    titleFlow?.reset();
    canvas!.dataset.meshState = enabled ? "idle" : "disabled";
  }

  function resize() {
    bounds = null;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    if (ratio === pixelRatio && canvas!.width === Math.round(size * ratio)) return;
    pixelRatio = ratio;
    canvas!.width = Math.round(size * ratio);
    canvas!.height = Math.round(size * ratio);
    context!.setTransform(ratio, 0, 0, ratio, 0, 0);
    stop();
  }

  function syncPreference() {
    enabled = pointerMedia.matches && !reducedMotion.matches;
    canvas!.hidden = !enabled;
    stop();
    if (enabled) resize();
  }

  type Point = { x: number; y: number; weight: number };
  function point(px: number, py: number): Point {
    const dx = half - px;
    const dy = half - py;
    const weight = Math.exp(-(dx * dx + dy * dy) / (2 * sigmaSquared));
    return {
      x: px + dx * weight * strength * 0.36,
      y: py + dy * weight * strength * 0.36,
      weight,
    };
  }

  function draw(time: number) {
    frame = 0;
    if (!enabled || !visible || document.hidden) return stop();
    const delta = previousTime ? Math.min(time - previousTime, 40) : 16.7;
    previousTime = time;
    const follow = 1 - Math.exp(-delta / 85);
    const fade = 1 - Math.exp(-delta / (targetStrength ? 130 : 260));
    const previousX = x;
    const previousY = y;
    x += (targetX - x) * follow;
    y += (targetY - y) * follow;
    strength += (targetStrength - strength) * fade;
    context!.clearRect(0, 0, size, size);
    if (!targetStrength && strength < 0.004) return stop();

    if (titleFlow === undefined) titleFlow = createTitleFlow(hero);
    const titleMoving = titleFlow?.render(
      x + (bounds?.left ?? 0), y + (bounds?.top ?? 0),
      (x - previousX) / delta, (y - previousY) / delta, delta, strength,
    ) ?? false;

    // Share the same field with the photograph; it sits beneath the existing color overlays.
    if (gravity === undefined) gravity = createPhotoGravity(hero, size, sigmaSquared);
    gravity?.render(x, y, strength, bounds?.width ?? hero.clientWidth, bounds?.height ?? hero.clientHeight);

    // Transform only the small patch. Grid coordinates stay anchored to the photo.
    canvas!.style.transform = `translate3d(${x - half}px, ${y - half}px, 0)`;
    canvas!.dataset.meshState = "active";
    const startX = ((half - x) % spacing + spacing) % spacing - spacing;
    const startY = ((half - y) % spacing + spacing) % spacing - spacing;
    context!.lineWidth = 0.65;
    for (let row = startY; row <= size + spacing; row += spacing) {
      for (let col = startX; col <= size + spacing; col += spacing) {
        const origin = point(col, row);
        if (origin.weight < 0.008) continue;
        // Midpoints describe smooth curves rather than sharp grid corners.
        for (const [dx, dy] of [[spacing, 0], [0, spacing]]) {
          const end = point(col + dx, row + dy);
          const middle = point(col + dx / 2, row + dy / 2);
          const alpha = middle.weight * strength * 0.2;
          context!.strokeStyle = `rgba(219, 236, 226, ${alpha})`;
          context!.beginPath();
          context!.moveTo(origin.x, origin.y);
          context!.quadraticCurveTo(
            2 * middle.x - (origin.x + end.x) / 2,
            2 * middle.y - (origin.y + end.y) / 2,
            end.x, end.y,
          );
          context!.stroke();
        }
        context!.fillStyle = `rgba(232, 244, 236, ${origin.weight * strength * 0.48})`;
        context!.beginPath();
        context!.arc(origin.x, origin.y, 0.85, 0, Math.PI * 2);
        context!.fill();
      }
    }
    const moving = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.12;
    const photographMoving = strength > 0.004 && hero.dataset.playing === "true";
    if (moving || titleMoving || photographMoving || Math.abs(targetStrength - strength) > 0.004) {
      frame = requestAnimationFrame(draw);
    } else {
      previousTime = 0;
    }
  }

  function start() {
    if (!frame && enabled && visible && !document.hidden) {
      previousTime = 0;
      frame = requestAnimationFrame(draw);
    }
  }

  hero.addEventListener("pointermove", (event) => {
    if (!enabled || event.pointerType !== "mouse" || !visible) return;
    bounds ??= hero.getBoundingClientRect();
    targetX = event.clientX - bounds.left;
    targetY = event.clientY - bounds.top;
    if (!entered) {
      if (strength < 0.004) {
        x = targetX;
        y = targetY;
      }
      entered = true;
    }
    const control = event.target instanceof Element && event.target.closest("a, button, summary");
    targetStrength = control ? 0 : 1;
    start();
  }, { passive: true });
  function leave() {
    entered = false;
    targetStrength = 0;
    if (strength) start();
  }
  hero.addEventListener("pointerleave", leave);
  hero.addEventListener("pointercancel", leave);
  window.addEventListener("scroll", () => { bounds = null; }, { passive: true });
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("blur", leave);
  window.addEventListener("pagehide", stop);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
  });
  pointerMedia.addEventListener("change", syncPreference);
  reducedMotion.addEventListener("change", syncPreference);
  const resizeObserver = new ResizeObserver(() => { bounds = null; });
  resizeObserver.observe(hero);
  const visibilityObserver = new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? false;
    if (!visible) stop();
  });
  visibilityObserver.observe(hero);
  // Explicit carousel playback can continue beneath a stationary pointer.
  const playbackObserver = new MutationObserver(() => {
    if (strength > 0.004) start();
  });
  playbackObserver.observe(hero, { attributes: true, attributeFilter: ["data-playing"] });
  syncPreference();
}
