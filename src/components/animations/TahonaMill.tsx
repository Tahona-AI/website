"use client";

import { useRef, useEffect, memo } from "react";

interface TahonaMillProps {
  className?: string;
}

const BRAND_R = 45;
const BRAND_G = 106;
const BRAND_B = 79;

const DOT_SPACING = 8;
const BASE_RADIUS = 1.4;

const TERRAIN_Y_RATIO = 0.50;
const TERRAIN_AMPLITUDE = 0.10;
const CREST_SIGMA = 18;
const ABOVE_LIMIT = 40;
const FALLOFF_DEPTH = 0.50;
const JITTER_AMOUNT = 0.85;

const WAVE_SPEED = 0.12;

function hash(a: number, b: number): number {
  let h = (a * 374761393 + b * 668265263) | 0;
  h = ((h ^ (h >>> 13)) * 1274126177) | 0;
  return ((h ^ (h >>> 16)) & 0x7fffffff) / 0x7fffffff;
}

function terrainY(
  x: number,
  w: number,
  h: number,
  t: number,
): number {
  const nx = x / w;
  const base = h * TERRAIN_Y_RATIO;
  const amp = h * TERRAIN_AMPLITUDE;
  return (
    base +
    Math.sin(nx * Math.PI * 3 + t) * amp * 0.45 +
    Math.sin(nx * Math.PI * 5.5 + t * 0.7) * amp * 0.3 +
    Math.sin(nx * Math.PI * 9 + t * 0.35) * amp * 0.15 +
    Math.sin(nx * Math.PI * 14 + t * 0.15) * amp * 0.1
  );
}

export const TahonaMill = memo(function TahonaMill({
  className = "",
}: TahonaMillProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(
        window.devicePixelRatio,
        0,
        0,
        window.devicePixelRatio,
        0,
        0,
      );
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(canvas);
    resizeCanvas();

    const draw = (timestamp: number) => {
      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const time = prefersReducedMotion ? 0 : (timestamp / 1000) * WAVE_SPEED;
      const falloffPx = height * FALLOFF_DEPTH;

      const cols = Math.ceil(width / DOT_SPACING) + 1;
      const rows = Math.ceil(height / DOT_SPACING) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const gx = col * DOT_SPACING;
          const gy = row * DOT_SPACING;

          const phase = hash(col + 2000, row + 2000) * Math.PI * 2;
          const jx =
            (hash(col, row) - 0.5) * DOT_SPACING * JITTER_AMOUNT +
            Math.sin(time * 3 + phase) * 1.5;
          const jy =
            (hash(col + 1000, row) - 0.5) * DOT_SPACING * JITTER_AMOUNT +
            Math.cos(time * 2.2 + phase) * 1.5;
          const x = gx + jx;
          const y = gy + jy;

          if (x < 0 || x > width || y < 0 || y > height) continue;

          const tY = terrainY(x, width, height, time);
          const distFromCrest = y - tY;

          if (distFromCrest < -ABOVE_LIMIT) continue;
          if (distFromCrest > falloffPx) continue;

          let dotR: number;
          let opacity: number;

          if (distFromCrest < 0) {
            const aboveFade = 1 - Math.abs(distFromCrest) / ABOVE_LIMIT;
            const sparse = hash(col + 3000, row + 7000);
            if (sparse > aboveFade * 0.4) continue;
            dotR = BASE_RADIUS * (0.3 + aboveFade * 0.5);
            opacity = 0.15 * aboveFade * aboveFade;
          } else if (distFromCrest < CREST_SIGMA) {
            const crestStrength = 1 - distFromCrest / CREST_SIGMA;
            dotR = BASE_RADIUS * (0.6 + crestStrength * 1.0);
            opacity = 0.2 + crestStrength * 0.45;
          } else {
            const belowNorm = (distFromCrest - CREST_SIGMA) / (falloffPx - CREST_SIGMA);
            const fade = (1 - belowNorm) * (1 - belowNorm);
            const sparse = hash(col + 5000, row + 3000);
            if (sparse > fade * 0.7 + 0.05) continue;
            dotR = BASE_RADIUS * (0.3 + fade * 0.6);
            opacity = 0.08 + fade * 0.2;
          }

          if (dotR < 0.2 || opacity < 0.01) continue;
          opacity = Math.min(1, opacity);

          ctx.beginPath();
          ctx.arc(x, y, dotR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${BRAND_R}, ${BRAND_G}, ${BRAND_B}, ${opacity})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block h-full w-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
});
