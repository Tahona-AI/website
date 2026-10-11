// The corporate Mesh Flow field, rendered as an ordered stipple instead of continuous lines.
// This small decorative canvas shares the olive scene's clock, pointer and lifecycle.
const SIZE = 528;
const HALF = SIZE / 2;
const SPACING = 32;
const SIGMA_SQUARED = 96 * 96;
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
const mod4 = (value: number) => ((value % 4) + 4) % 4;

export function createDitherMesh(host: HTMLElement) {
  const canvas = document.createElement("canvas");
  canvas.className = "olive-dither-mesh";
  canvas.setAttribute("aria-hidden", "true");
  canvas.hidden = true;
  const context = canvas.getContext("2d");
  host.append(canvas);
  const field = { x: 0, y: 0, strength: 0 };
  let targetX = 0;
  let targetY = 0;
  let targetStrength = 0;
  let entered = false;
  let dirty = false;
  let sincePaint = 0;

  function reset() {
    field.strength = targetStrength = 0;
    entered = false;
    dirty = false;
    sincePaint = 0;
    canvas.hidden = true;
    context?.clearRect(0, 0, SIZE, SIZE);
  }

  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = canvas.height = Math.round(SIZE * ratio);
    context?.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (context) context.imageSmoothingEnabled = false;
    dirty = true;
  }

  function move(event: PointerEvent, bounds: DOMRect) {
    // Native buttons stay calm. Do not paint a lens/grid under their hover or focus states.
    const control = event.target instanceof Element && event.target.closest("a, button, summary, input, textarea, select");
    if (control) { reset(); return; }
    targetX = event.clientX - bounds.left;
    targetY = event.clientY - bounds.top;
    if (!entered && field.strength < 0.004) {
      field.x = targetX;
      field.y = targetY;
    }
    entered = true;
    targetStrength = 1;
  }

  function point(px: number, py: number) {
    const dx = HALF - px;
    const dy = HALF - py;
    const weight = Math.exp(-(dx * dx + dy * dy) / (2 * SIGMA_SQUARED));
    return {
      x: px + dx * weight * field.strength * 0.30,
      y: py + dy * weight * field.strength * 0.30,
      weight,
    };
  }

  function draw() {
    if (!context) return;
    context.clearRect(0, 0, SIZE, SIZE);
    canvas.hidden = false;
    canvas.style.transform = `translate3d(${field.x - HALF}px, ${field.y - HALF}px, 0)`;
    const startCol = Math.floor((field.x - HALF) / SPACING);
    const startRow = Math.floor((field.y - HALF) / SPACING);
    const cells = Math.ceil(SIZE / SPACING) + 1;
    // World-anchored samples and a fixed Bayer matrix keep the dither from flickering.
    for (let row = startRow; row <= startRow + cells; row++) {
      for (let col = startCol; col <= startCol + cells; col++) {
        const localX = col * SPACING - field.x + HALF;
        const localY = row * SPACING - field.y + HALF;
        for (let axis = 0; axis < 2; axis++) {
          for (let sample = 0; sample < 8; sample++) {
            const p = point(localX + (axis === 0 ? sample * 4 : 0), localY + (axis === 1 ? sample * 4 : 0));
            const threshold = (BAYER[mod4(row * 2 + sample + axis) * 4 + mod4(col * 3 + sample)] + 0.5) / 16;
            if (p.weight * field.strength * 0.9 < threshold) continue;
            const alpha = p.weight * field.strength;
            // A pale offset and green ink read on both the white wash and dark foliage.
            context.fillStyle = `rgba(229,242,231,${alpha * 0.32})`;
            context.fillRect(Math.round(p.x) - 1, Math.round(p.y) - 1, 1.4, 1.4);
            context.fillStyle = `rgba(45,106,79,${alpha * 0.48})`;
            context.fillRect(Math.round(p.x), Math.round(p.y), 1.4, 1.4);
          }
        }
        const node = point(localX, localY);
        if (node.weight * field.strength < 0.12) continue;
        context.fillStyle = `rgba(45,106,79,${node.weight * field.strength * 0.5})`;
        // A tiny printed cross at each intersection, never a smooth glowing dot.
        context.fillRect(Math.round(node.x) - 1, Math.round(node.y), 3, 1);
        context.fillRect(Math.round(node.x), Math.round(node.y) - 1, 1, 3);
      }
    }
  }

  function update(delta: number) {
    if (!dirty && !targetStrength && field.strength === 0) return field;
    const follow = 1 - Math.exp(-delta / 0.085);
    const fade = 1 - Math.exp(-delta / (targetStrength ? 0.16 : 0.28));
    const changeX = (targetX - field.x) * follow;
    const changeY = (targetY - field.y) * follow;
    const changeStrength = (targetStrength - field.strength) * fade;
    field.x += changeX;
    field.y += changeY;
    field.strength += changeStrength;
    if (!targetStrength && field.strength < 0.004) { reset(); return field; }
    sincePaint += delta;
    const changed = Math.abs(changeX) + Math.abs(changeY) > 0.02 || Math.abs(changeStrength) > 0.0005;
    // The lens follows every WebGL frame; repaint the stipple at most around 60 Hz.
    if (dirty || (changed && sincePaint >= 1 / 60 - 0.001)) {
      draw();
      sincePaint = 0;
    }
    dirty = false;
    return field;
  }

  resize();
  return {
    move, update, resize, reset,
    leave() { entered = false; targetStrength = 0; },
    dispose() { reset(); canvas.remove(); },
  };
}
