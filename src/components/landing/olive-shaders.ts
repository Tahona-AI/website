/** An ink landscape: macro relief and branch motion, never noise over the dither. */
export const oliveVertex = /* glsl */ `
  uniform float uTime;
  uniform float uStrength;
  uniform float uScale;
  attribute float aDepth;
  attribute float aCanopy;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 p = position;
    p.z = aDepth * 0.82;

    // A broad, slow gust followed by smaller branch movement. Roots stay anchored.
    float gust = 0.76 + 0.18 * sin(uTime * 0.37) + 0.06 * sin(uTime * 0.83);
    float branch = sin(uTime * 0.91 + uv.x * 5.0 - uv.y * 2.0);
    float leaves = sin(uTime * 1.73 + uv.x * 17.0 + uv.y * 12.0);
    p.x += (branch * 0.014 + leaves * 0.003) * aCanopy * gust * uStrength * uScale;
    p.y += (sin(uTime * 0.79 + uv.x * 7.0) * 0.0045 + leaves * 0.0013)
      * aCanopy * gust * uStrength * uScale;
    p.z += sin(uTime * 0.67 + uv.x * 8.0) * aCanopy * 0.012 * uStrength;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

export const oliveFragment = /* glsl */ `
  uniform sampler2D uImage;
  uniform vec2 uResolution;
  uniform float uPixelRatio;
  uniform vec3 uLens;
  varying vec2 vUv;
  void main() {
    vec2 screen = vec2(gl_FragCoord.x, uResolution.y - gl_FragCoord.y) / uPixelRatio;
    vec2 delta = screen - uLens.xy;
    float field = exp(-dot(delta, delta) / (2.0 * 96.0 * 96.0));
    // Same Gaussian pull as corporate photo-gravity (.42), reduced to .10.
    // Screen-space derivatives follow the moving 3D photograph, avoiding a static overlay.
    vec2 offset = (dFdx(vUv) * delta.x - dFdy(vUv) * delta.y) * uPixelRatio;
    vec2 sampleUv = vUv + offset * field * uLens.z * 0.10;
    gl_FragColor = texture2D(uImage, clamp(sampleUv, 0.0, 1.0));
    #include <colorspace_fragment>
  }
`;
