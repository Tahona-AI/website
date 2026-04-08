"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

type WavyBackgroundProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    waveCount?: number;
  }
>;

const DEFAULT_WAVE_COLORS = [
  "#38bdf8",
  "#818cf8",
  "#c084fc",
  "#e879f9",
  "#22d3ee",
] as const;

function getAnimationSpeed(speed: "slow" | "fast"): number {
  if (speed === "slow") {
    return 0.001;
  }

  return 0.002;
}

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  waveCount = 5,
  ...props
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const noise = useMemo(() => createNoise3D(), []);
  const waveColors = useMemo(
    () => colors ?? [...DEFAULT_WAVE_COLORS],
    [colors],
  );
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome"),
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let noiseTime = 0;
    const animationSpeed = getAnimationSpeed(speed);

    const updateCanvasSize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      context.filter = `blur(${blur}px)`;
      context.lineCap = "round";
      context.lineJoin = "round";
    };

    const drawWave = () => {
      noiseTime += animationSpeed;

      for (let waveIndex = 0; waveIndex < waveCount; waveIndex += 1) {
        context.beginPath();
        context.lineWidth = waveWidth ?? 50;
        context.strokeStyle = waveColors[waveIndex % waveColors.length];

        for (let x = 0; x <= width; x += 5) {
          const y = noise(x / 820, 0.32 * waveIndex, noiseTime) * 100;
          context.lineTo(x, y + height * 0.5);
        }

        context.stroke();
        context.closePath();
      }
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = backgroundFill ?? "transparent";
      context.globalAlpha = waveOpacity;
      context.fillRect(0, 0, width, height);
      drawWave();
      animationFrameRef.current = requestAnimationFrame(render);
    };

    updateCanvasSize();
    render();

    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [backgroundFill, blur, noise, speed, waveColors, waveCount, waveOpacity, waveWidth]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex h-full w-full flex-col items-center justify-center overflow-hidden",
        containerClassName,
      )}
    >
      <canvas
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full"
        ref={canvasRef}
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
