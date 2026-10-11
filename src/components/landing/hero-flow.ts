// Adapted from version-carlos-corporativa's title-flow.ts.
// Filter the real DOM with a small velocity map: text stays selectable, links stay native.
const SVG_NS = "http://www.w3.org/2000/svg";
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
let instance = 0;

function createFlowSurface(element: HTMLElement, definitions: SVGSVGElement, id: string) {
  const texture = document.createElement("canvas");
  const context = texture.getContext("2d");
  if (!context) return null;
  const kind = element.dataset.heroFlow;
  const amplitude = kind === "title" ? 36 : kind === "copy" ? 20 : 16;
  const radius = kind === "title" ? 60 : kind === "copy" ? 42 : 32;
  const padding = 28;
  const filter = document.createElementNS(SVG_NS, "filter");
  filter.id = id;
  filter.setAttribute("filterUnits", "userSpaceOnUse");
  filter.setAttribute("primitiveUnits", "userSpaceOnUse");
  filter.setAttribute("color-interpolation-filters", "sRGB");
  const map = document.createElementNS(SVG_NS, "feImage");
  map.setAttribute("result", "flow");
  map.setAttribute("preserveAspectRatio", "none");
  const displacement = document.createElementNS(SVG_NS, "feDisplacementMap");
  displacement.setAttribute("in", "SourceGraphic");
  displacement.setAttribute("in2", "flow");
  displacement.setAttribute("xChannelSelector", "R");
  displacement.setAttribute("yChannelSelector", "G");
  displacement.setAttribute("scale", String(-amplitude));
  filter.append(map, displacement);
  definitions.append(filter);

  const originalFilter = element.style.filter;
  let bounds: DOMRect | null = null;
  let columns = 0;
  let rows = 0;
  let flowX = new Float32Array(0);
  let flowY = new Float32Array(0);
  let pixels: ImageData | null = null;
  let active = false;

  function reset() {
    if (active) {
      if (originalFilter) element.style.filter = originalFilter;
      else element.style.removeProperty("filter");
    }
    element.dataset.heroFlowState = "idle";
    flowX.fill(0);
    flowY.fill(0);
    active = false;
  }

  function measure(rect: DOMRect) {
    bounds = rect.width && rect.height ? rect : null;
    if (!bounds) { reset(); return; }
    const width = bounds.width + padding * 2;
    const height = bounds.height + padding * 2;
    const nextColumns = clamp(Math.ceil(width / 5), 32, 128);
    const nextRows = clamp(Math.round(nextColumns * height / width), 16, 64);
    // Position-only changes preserve the trail instead of reallocating its texture.
    if (columns !== nextColumns || rows !== nextRows) {
      reset();
      columns = nextColumns;
      rows = nextRows;
      texture.width = columns;
      texture.height = rows;
      flowX = new Float32Array(columns * rows);
      flowY = new Float32Array(columns * rows);
      pixels = context!.createImageData(columns, rows);
    }
    for (const primitive of [filter, map, displacement]) {
      primitive.setAttribute("x", String(-padding));
      primitive.setAttribute("y", String(-padding));
      primitive.setAttribute("width", String(width));
      primitive.setAttribute("height", String(height));
    }
  }

  function render(x: number, y: number, velocityX: number, velocityY: number, delta: number, strength: number) {
    if (!bounds || !pixels) return false;
    if (element.matches(":focus-visible")) { reset(); return false; }
    const width = bounds.width + padding * 2;
    const height = bounds.height + padding * 2;
    const mouseX = x - bounds.left + padding;
    const mouseY = y - bounds.top + padding;
    const over = mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
    const speed = Math.abs(velocityX) + Math.abs(velocityY);
    const brush = over && strength > 0.01 && speed > 0.012;
    if (!active && !brush) return false;
    const decay = Math.exp(-delta / 190);
    const gain = (1 - Math.exp(-delta / 65)) * strength;
    const impulseX = clamp(velocityX * 0.65, -1, 1);
    const impulseY = clamp(velocityY * 0.65, -1, 1);
    let energy = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const index = row * columns + col;
        const dx = (col + 0.5) * width / columns - mouseX;
        const dy = (row + 0.5) * height / rows - mouseY;
        const weight = brush ? Math.exp(-(dx * dx + dy * dy) / (2 * radius * radius)) : 0;
        flowX[index] = clamp(flowX[index] * decay + impulseX * weight * gain, -1, 1);
        flowY[index] = clamp(flowY[index] * decay + impulseY * weight * gain, -1, 1);
        energy = Math.max(energy, Math.abs(flowX[index]) + Math.abs(flowY[index]));
        const offset = index * 4;
        pixels.data[offset] = Math.round(128 + flowX[index] * 127);
        pixels.data[offset + 1] = Math.round(128 + flowY[index] * 127);
        pixels.data[offset + 2] = 128;
        pixels.data[offset + 3] = 255;
      }
    }
    if (energy < 0.012) { reset(); return false; }
    context!.putImageData(pixels, 0, 0);
    map.setAttribute("href", texture.toDataURL("image/png"));
    if (!active) {
      element.style.filter = `url(#${id})`;
      element.dataset.heroFlowState = "active";
      active = true;
    }
    return true;
  }

  return { element, measure, render, reset };
}

/** One on-demand scheduler for all hero surfaces; independent of the landscape camera. */
export function mountHeroFlow(hero: HTMLElement): () => void {
  const elements = [...hero.querySelectorAll<HTMLElement>("[data-hero-flow]")];
  if (!elements.length) return () => {};
  const definitions = document.createElementNS(SVG_NS, "svg");
  definitions.setAttribute("aria-hidden", "true");
  definitions.setAttribute("focusable", "false");
  definitions.setAttribute("width", "0");
  definitions.setAttribute("height", "0");
  definitions.style.cssText = "position:absolute;pointer-events:none;overflow:hidden";
  document.body.append(definitions);
  const prefix = `tahona-hero-flow-${++instance}`;
  const surfaces = elements.map((element, i) => createFlowSurface(element, definitions, `${prefix}-${i}`))
    .filter((surface) => surface !== null);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const fine = matchMedia("(hover: hover) and (pointer: fine)");
  const listeners = new AbortController();
  const { signal } = listeners;
  let disposed = false;
  let visible = true;
  let suspended = false;
  let needsMeasure = true;
  let entered = false;
  let frame = 0;
  let previousTime = 0;
  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;
  let strength = 0;
  let targetStrength = 0;
  const enabled = () => !disposed && !suspended && visible && !document.hidden && fine.matches && !reduced.matches;

  function stop() {
    cancelAnimationFrame(frame);
    frame = previousTime = 0;
    entered = false;
    strength = targetStrength = 0;
    for (const surface of surfaces) surface.reset();
  }
  function invalidate() { needsMeasure = true; }

  function draw(now: number) {
    frame = 0;
    if (!enabled()) { stop(); return; }
    // Encoding SVG displacement maps at most 60 times/s leaves headroom for Three.js.
    if (previousTime && now - previousTime < 1000 / 60 - 1) {
      frame = requestAnimationFrame(draw);
      return;
    }
    const delta = previousTime ? Math.min(now - previousTime, 40) : 16.7;
    previousTime = now;
    if (needsMeasure) {
      // Batch all reads before any filter or canvas writes. No layout reads while animating.
      const rectangles = surfaces.map(({ element }) => element.getBoundingClientRect());
      surfaces.forEach((surface, i) => surface.measure(rectangles[i]));
      needsMeasure = false;
    }
    const previousX = x;
    const previousY = y;
    const follow = 1 - Math.exp(-delta / 85);
    x += (targetX - x) * follow;
    y += (targetY - y) * follow;
    strength += (targetStrength - strength) * (1 - Math.exp(-delta / (targetStrength ? 130 : 260)));
    let moving = false;
    for (const surface of surfaces) {
      moving = surface.render(x, y, (x - previousX) / delta, (y - previousY) / delta, delta, strength) || moving;
    }
    if (moving || Math.abs(targetX - x) + Math.abs(targetY - y) > 0.12 || Math.abs(targetStrength - strength) > 0.004) {
      frame = requestAnimationFrame(draw);
    } else {
      previousTime = 0;
    }
  }

  function start() {
    if (!frame && enabled()) {
      previousTime = 0;
      frame = requestAnimationFrame(draw);
    }
  }
  function leave() {
    entered = false;
    targetStrength = 0;
    if (strength) start();
  }
  hero.addEventListener("pointermove", (event) => {
    if (!enabled() || event.pointerType !== "mouse") return;
    targetX = event.clientX;
    targetY = event.clientY;
    if (!entered) {
      x = targetX;
      y = targetY;
      entered = true;
      invalidate();
    }
    targetStrength = 1;
    start();
  }, { signal, passive: true });
  hero.addEventListener("pointerleave", leave, { signal });
  hero.addEventListener("pointercancel", leave, { signal });
  // Keep keyboard focus rings completely undistorted, including when switching from a mouse.
  hero.addEventListener("focusin", stop, { signal });
  hero.addEventListener("animationend", invalidate, { signal });
  hero.addEventListener("transitionend", (event) => {
    if (event.propertyName === "transform" || event.propertyName === "translate") invalidate();
  }, { signal });
  window.addEventListener("blur", stop, { signal });
  window.addEventListener("resize", invalidate, { signal, passive: true });
  document.addEventListener("scroll", invalidate, { signal, passive: true, capture: true });
  document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); }, { signal });
  window.addEventListener("pagehide", () => { suspended = true; stop(); }, { signal });
  window.addEventListener("pageshow", () => { suspended = false; invalidate(); }, { signal });
  reduced.addEventListener("change", stop, { signal });
  fine.addEventListener("change", stop, { signal });
  const size = new ResizeObserver(invalidate);
  for (const surface of surfaces) size.observe(surface.element);
  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (!visible) stop();
  });
  visibility.observe(hero);
  void document.fonts.ready.then(() => { if (!disposed) invalidate(); });

  return () => {
    disposed = true;
    stop();
    listeners.abort();
    size.disconnect();
    visibility.disconnect();
    definitions.remove();
    for (const { element } of surfaces) delete element.dataset.heroFlowState;
  };
}
