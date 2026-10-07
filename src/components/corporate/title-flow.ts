// Flowmap-style typography, inspired by Codrops' Flowmap Deformation demo 3.
// A small vector texture filters the live heading: no duplicated/rasterized text.
export function createTitleFlow(hero: HTMLElement) {
  const heading = hero.querySelector<HTMLHeadingElement>("#hero-heading");
  if (!heading) return null;
  const namespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(namespace, "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.classList.add("title-flow-definitions");
  const filter = document.createElementNS(namespace, "filter");
  filter.id = "tahona-title-flow";
  filter.setAttribute("filterUnits", "userSpaceOnUse");
  filter.setAttribute("primitiveUnits", "userSpaceOnUse");
  filter.setAttribute("color-interpolation-filters", "sRGB");
  const map = document.createElementNS(namespace, "feImage");
  map.setAttribute("result", "flow");
  map.setAttribute("preserveAspectRatio", "none");
  const displacement = document.createElementNS(namespace, "feDisplacementMap");
  displacement.setAttribute("in", "SourceGraphic");
  displacement.setAttribute("in2", "flow");
  displacement.setAttribute("xChannelSelector", "R");
  displacement.setAttribute("yChannelSelector", "G");
  displacement.setAttribute("scale", "-36");
  filter.append(map, displacement);
  svg.append(filter);
  document.body.append(svg);

  const texture = document.createElement("canvas");
  const context = texture.getContext("2d");
  if (!context) {
    svg.remove();
    return null;
  }
  const padding = 28;
  let bounds: DOMRect | null = null;
  let columns = 0;
  let rows = 0;
  let flowX = new Float32Array(0);
  let flowY = new Float32Array(0);
  let pixels: ImageData | null = null;
  let active = false;

  function reset() {
    heading!.style.removeProperty("filter");
    heading!.dataset.titleFlowState = "idle";
    flowX.fill(0);
    flowY.fill(0);
    active = false;
  }
  function invalidate() {
    reset();
    bounds = null;
  }
  new ResizeObserver(invalidate).observe(heading);
  document.fonts.ready.then(invalidate);
  window.addEventListener("resize", invalidate, { passive: true });
  window.addEventListener("scroll", () => { bounds = null; }, { passive: true });

  function measure() {
    bounds = heading!.getBoundingClientRect();
    const width = bounds.width + padding * 2;
    const height = bounds.height + padding * 2;
    columns = 128;
    rows = Math.max(24, Math.min(64, Math.round(columns * height / width)));
    texture.width = columns;
    texture.height = rows;
    flowX = new Float32Array(columns * rows);
    flowY = new Float32Array(columns * rows);
    pixels = context!.createImageData(columns, rows);
    for (const primitive of [filter, map, displacement]) {
      primitive.setAttribute("x", String(-padding));
      primitive.setAttribute("y", String(-padding));
      primitive.setAttribute("width", String(width));
      primitive.setAttribute("height", String(height));
    }
  }

  function render(clientX: number, clientY: number, velocityX: number, velocityY: number, delta: number, strength: number) {
    if (!bounds) measure();
    if (!bounds || !pixels) return false;
    const width = bounds.width + padding * 2;
    const height = bounds.height + padding * 2;
    const mouseX = clientX - bounds.left + padding;
    const mouseY = clientY - bounds.top + padding;
    const overHeading = mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
    const speed = Math.abs(velocityX) + Math.abs(velocityY);
    if (!active && (!overHeading || speed < 0.012 || strength < 0.01)) return false;
    const decay = Math.exp(-delta / 190);
    const impulseX = Math.max(-1, Math.min(1, velocityX * 0.65));
    const impulseY = Math.max(-1, Math.min(1, velocityY * 0.65));
    const brush = overHeading && strength > 0.01 && speed > 0.012;
    const gain = (1 - Math.exp(-delta / 65)) * strength;
    let energy = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const index = row * columns + col;
        const dx = (col + 0.5) * width / columns - mouseX;
        const dy = (row + 0.5) * height / rows - mouseY;
        const weight = brush ? Math.exp(-(dx * dx + dy * dy) / (2 * 60 * 60)) : 0;
        // Accumulated local velocity leaves a short elastic trail, then dissipates.
        flowX[index] = Math.max(-1, Math.min(1, flowX[index] * decay + impulseX * weight * gain));
        flowY[index] = Math.max(-1, Math.min(1, flowY[index] * decay + impulseY * weight * gain));
        energy = Math.max(energy, Math.abs(flowX[index]) + Math.abs(flowY[index]));
        const offset = index * 4;
        pixels.data[offset] = Math.round(128 + flowX[index] * 127);
        pixels.data[offset + 1] = Math.round(128 + flowY[index] * 127);
        pixels.data[offset + 2] = 128;
        pixels.data[offset + 3] = 255;
      }
    }
    if (energy < 0.012) {
      reset();
      return false;
    }
    context!.putImageData(pixels, 0, 0);
    map.setAttribute("href", texture.toDataURL("image/png"));
    heading!.style.filter = "url(#tahona-title-flow)";
    heading!.dataset.titleFlowState = "active";
    active = true;
    return true;
  }
  return { render, reset };
}
