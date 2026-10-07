// A pointer-local texture displacement, inspired by Codrops' interactive bulge demos.
// It shares Mesh Flow's Gaussian and timing, without changing the original images.
export function createPhotoGravity(hero: HTMLElement, size: number, sigmaSquared: number) {
  const canvas = document.createElement("canvas");
  canvas.className = "hero-photo-gravity";
  canvas.setAttribute("aria-hidden", "true");
  canvas.dataset.photoGravity = "";
  canvas.hidden = true;
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    premultipliedAlpha: false,
    depth: false,
    stencil: false,
  });
  if (!gl) return null;

  function shader(type: number, source: string) {
    const result = gl!.createShader(type);
    if (!result) return null;
    gl!.shaderSource(result, source);
    gl!.compileShader(result);
    if (!gl!.getShaderParameter(result, gl!.COMPILE_STATUS)) {
      gl!.deleteShader(result);
      return null;
    }
    return result;
  }
  const vertex = shader(gl.VERTEX_SHADER, `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `);
  const fragment = shader(gl.FRAGMENT_SHADER, `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uImage;
    uniform vec2 uOrigin;
    uniform vec2 uImageOffset;
    uniform vec2 uImageSize;
    uniform float uStrength;
    void main() {
      vec2 local = vec2(vUv.x, 1.0 - vUv.y) * ${size.toFixed(1)};
      vec2 delta = local - ${ (size / 2).toFixed(1) };
      float distanceSquared = dot(delta, delta);
      float field = exp(-distanceSquared / ${ (2 * sigmaSquared).toFixed(1) });
      // Inverse sampling pulls the visible photograph inward like a rubber sheet.
      vec2 displaced = uOrigin + local + delta * field * uStrength * 0.42;
      vec2 imageUv = (displaced - uImageOffset) / uImageSize;
      float edge = 1.0 - smoothstep(180.0, 250.0, sqrt(distanceSquared));
      float valid = step(0.0, imageUv.x) * step(imageUv.x, 1.0)
        * step(0.0, imageUv.y) * step(imageUv.y, 1.0);
      vec4 photo = texture2D(uImage, clamp(imageUv, 0.0, 1.0));
      gl_FragColor = vec4(photo.rgb, photo.a * edge * valid * smoothstep(0.0, 0.12, uStrength));
    }
  `);
  if (!vertex || !fragment) {
    if (vertex) gl.deleteShader(vertex);
    if (fragment) gl.deleteShader(fragment);
    return null;
  }
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  gl.useProgram(program);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "aPosition");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const origin = gl.getUniformLocation(program, "uOrigin");
  const imageOffset = gl.getUniformLocation(program, "uImageOffset");
  const imageSize = gl.getUniformLocation(program, "uImageSize");
  const strengthUniform = gl.getUniformLocation(program, "uStrength");
  gl.uniform1i(gl.getUniformLocation(program, "uImage"), 0);
  let texture: WebGLTexture | null = null;
  let source = "";
  let failed = false;

  function reset() {
    canvas.hidden = true;
    canvas.dataset.gravityState = failed ? "unavailable" : "idle";
    if (!gl!.isContextLost()) gl!.clear(gl!.COLOR_BUFFER_BIT);
  }
  canvas.addEventListener("webglcontextlost", () => {
    failed = true;
    reset();
  });

  function render(x: number, y: number, strength: number, width: number, height: number) {
    if (failed || strength < 0.004 || gl!.isContextLost()) return reset();
    const image = hero.querySelector<HTMLImageElement>(".hero-slide.is-active img");
    if (!image?.complete || !image.naturalWidth) return reset();
    const slide = image.parentElement;
    if (!slide) return reset();

    // Read CSS geometry before any DOM writes. This matches cover/contain and Ken Burns scale.
    const style = getComputedStyle(image);
    const transform = new DOMMatrixReadOnly(style.transform === "none" ? undefined : style.transform);
    const scaleX = transform.a;
    const scaleY = transform.d;
    const fit = style.objectFit === "contain" ? Math.min : Math.max;
    const fitScale = fit(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * fitScale * scaleX;
    const drawHeight = image.naturalHeight * fitScale * scaleY;
    const positions = style.objectPosition.split(" ");
    const offsetX = parseFloat(positions[0]) / 100;
    const offsetY = parseFloat(positions[1]) / 100;
    const left = (width - width * scaleX) / 2 + (width * scaleX - drawWidth) * offsetX + transform.e;
    const top = (height - height * scaleY) / 2 + (height * scaleY - drawHeight) * offsetY + transform.f;

    if (source !== image.currentSrc) {
      if (texture) gl!.deleteTexture(texture);
      texture = gl!.createTexture();
      gl!.bindTexture(gl!.TEXTURE_2D, texture);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR);
      try {
        gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGBA, gl!.RGBA, gl!.UNSIGNED_BYTE, image);
        if (gl!.getError() !== gl!.NO_ERROR) throw new Error("Texture unavailable");
        source = image.currentSrc;
      } catch {
        failed = true;
        return reset();
      }
    }
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    const pixels = Math.round(size * ratio);
    if (canvas.width !== pixels) {
      canvas.width = canvas.height = pixels;
      gl!.viewport(0, 0, pixels, pixels);
    }
    if (canvas.parentElement !== slide) slide.append(canvas);
    canvas.hidden = false;
    canvas.dataset.gravityState = "active";
    canvas.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
    gl!.uniform2f(origin, x - size / 2, y - size / 2);
    gl!.uniform2f(imageOffset, left, top);
    gl!.uniform2f(imageSize, drawWidth, drawHeight);
    gl!.uniform1f(strengthUniform, strength);
    gl!.drawArrays(gl!.TRIANGLES, 0, 3);
  }
  return { render, reset };
}
