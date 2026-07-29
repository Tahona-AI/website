"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import {
  METR_HORIZON_POINTS,
  METR_HORIZON_SOURCE_URL,
} from "@/data/metr-horizon";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

const CHART_WIDTH = 720;
const CHART_HEIGHT = 500;
const PLOT = {
  bottom: 426,
  left: 78,
  right: 692,
  top: 42,
} as const;
const START_DATE = Date.parse("2019-01-01");
const END_DATE = Date.parse("2026-06-01");
const MAX_MINUTES = 1080;
const UNRELIABLE_FROM_MINUTES = 960;

const YEAR_TICKS = [2020, 2021, 2022, 2023, 2024, 2025, 2026] as const;
const DURATION_TICKS = [
  { label: "0", minutes: 0 },
  { label: "30m", minutes: 30 },
  { label: "1h", minutes: 60 },
  { label: "4h", minutes: 240 },
  { label: "8h", minutes: 480 },
  { label: "12h", minutes: 720 },
  { label: "16h", minutes: 960 },
] as const;

function clampMinutes(value: number) {
  return Math.min(Math.max(value, 0), MAX_MINUTES);
}

function xForDate(releaseDate: string) {
  const ratio = (Date.parse(releaseDate) - START_DATE) / (END_DATE - START_DATE);
  return PLOT.left + ratio * (PLOT.right - PLOT.left);
}

function yForMinutes(minutes: number) {
  const ratio = clampMinutes(minutes) / MAX_MINUTES;
  return PLOT.bottom - ratio * (PLOT.bottom - PLOT.top);
}

function xForYear(year: number) {
  return xForDate(`${year}-01-01`);
}

function MetrHorizonChart({
  copy,
}: {
  readonly copy: ReturnType<typeof getContent>["aiApplied"]["chart"];
}) {
  const linePath = METR_HORIZON_POINTS.map((point, index) => {
    const command = index === 0 ? "M" : "L";
    return `${command} ${xForDate(point.releaseDate).toFixed(1)} ${yForMinutes(point.estimateMinutes).toFixed(1)}`;
  }).join(" ");

  return (
    <figure className="min-w-0 max-w-full overflow-hidden rounded-[1.75rem] border border-gray-200/85 bg-white shadow-[0_30px_90px_-60px_rgba(31,31,31,0.58)]">
      <header className="px-5 pt-5 sm:px-6 sm:pt-6">
        <h3 className="max-w-xl font-heading text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
          {copy.title}
        </h3>
        <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-gray-500 sm:hidden">
          {copy.scrollLabel} →
        </p>
      </header>
      <div
        aria-label={copy.scrollLabel}
        className="w-full max-w-full overflow-x-auto overscroll-x-contain"
        tabIndex={0}
      >
        <svg
          aria-label={copy.ariaLabel}
          className="h-auto min-w-[42rem] w-full sm:min-w-0"
          role="img"
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        >
          <title>{copy.title}</title>
          <desc>{copy.description}</desc>
          <defs>
            <pattern
              height="8"
              id="metr-unreliable-hatch"
              patternTransform="rotate(45)"
              patternUnits="userSpaceOnUse"
              width="8"
            >
              <line
                stroke="rgba(31,31,31,0.12)"
                strokeWidth="2"
                x1="0"
                x2="0"
                y1="0"
                y2="8"
              />
            </pattern>
            <clipPath id="metr-plot-clip">
              <rect
                height={PLOT.bottom - PLOT.top}
                width={PLOT.right - PLOT.left}
                x={PLOT.left}
                y={PLOT.top}
              />
            </clipPath>
          </defs>

          <rect fill="#ffffff" height={CHART_HEIGHT} width={CHART_WIDTH} />
          <rect
            fill="url(#metr-unreliable-hatch)"
            height={yForMinutes(UNRELIABLE_FROM_MINUTES) - PLOT.top}
            width={PLOT.right - PLOT.left}
            x={PLOT.left}
            y={PLOT.top}
          />

          {DURATION_TICKS.map((tick) => {
            const y = yForMinutes(tick.minutes);
            return (
              <g key={tick.minutes}>
                <line
                  stroke={tick.minutes === 0 ? "#9ca3af" : "#e5e7eb"}
                  strokeDasharray={tick.minutes === 0 ? undefined : "4 6"}
                  x1={PLOT.left}
                  x2={PLOT.right}
                  y1={y}
                  y2={y}
                />
                <text
                  fill="#6b7280"
                  fontSize="12"
                  textAnchor="end"
                  x={PLOT.left - 12}
                  y={y + 4}
                >
                  {tick.label}
                </text>
              </g>
            );
          })}

          {YEAR_TICKS.map((year) => {
            const x = xForYear(year);
            return (
              <g key={year}>
                <line
                  stroke="#eef0ef"
                  x1={x}
                  x2={x}
                  y1={PLOT.top}
                  y2={PLOT.bottom}
                />
                <text
                  fill="#6b7280"
                  fontSize="12"
                  textAnchor="middle"
                  x={x}
                  y={PLOT.bottom + 24}
                >
                  {year}
                </text>
              </g>
            );
          })}

          <text
            fill="#4b5563"
            fontSize="12"
            fontWeight="600"
            textAnchor="middle"
            x={(PLOT.left + PLOT.right) / 2}
            y={CHART_HEIGHT - 14}
          >
            {copy.axisDateLabel}
          </text>
          <text
            fill="#4b5563"
            fontSize="12"
            fontWeight="600"
            textAnchor="middle"
            transform={`rotate(-90 18 ${(PLOT.top + PLOT.bottom) / 2})`}
            x="18"
            y={(PLOT.top + PLOT.bottom) / 2}
          >
            {copy.axisDurationLabel}
          </text>

          <text
            fill="#6b7280"
            fontSize="11"
            fontStyle="italic"
            textAnchor="middle"
            x={(PLOT.left + PLOT.right) / 2}
            y={PLOT.top + 24}
          >
            {copy.unreliableLabel}
          </text>

          <g clipPath="url(#metr-plot-clip)">
            <path
              d={linePath}
              fill="none"
              stroke="#82b298"
              strokeDasharray="7 8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />

            {METR_HORIZON_POINTS.map((point) => {
              const x = xForDate(point.releaseDate);
              const y = yForMinutes(point.estimateMinutes);
              const ciTop = yForMinutes(point.ciHighMinutes);
              const ciBottom = yForMinutes(point.ciLowMinutes);
              const isPreview = point.tone === "preview";

              return (
                <g key={point.id}>
                  <line
                    stroke={isPreview ? "#a3a3a3" : "#9fc4ae"}
                    strokeOpacity="0.62"
                    strokeWidth="1.5"
                    x1={x}
                    x2={x}
                    y1={ciTop}
                    y2={ciBottom}
                  />
                  <line
                    stroke={isPreview ? "#a3a3a3" : "#9fc4ae"}
                    strokeOpacity="0.62"
                    strokeWidth="1.5"
                    x1={x - 4}
                    x2={x + 4}
                    y1={ciTop}
                    y2={ciTop}
                  />
                  <line
                    stroke={isPreview ? "#a3a3a3" : "#9fc4ae"}
                    strokeOpacity="0.62"
                    strokeWidth="1.5"
                    x1={x - 4}
                    x2={x + 4}
                    y1={ciBottom}
                    y2={ciBottom}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    fill={
                      isPreview
                        ? "#8c8c8c"
                        : point.tone === "current"
                          ? "#245840"
                          : "#6ea987"
                    }
                    r={point.tone === "current" || isPreview ? 5.5 : 4.5}
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </g>
              );
            })}
          </g>

          {METR_HORIZON_POINTS.filter((point) => point.showLabel).map((point) => (
            <text
              fill={point.tone === "preview" ? "#525252" : "#374151"}
              fontSize="11"
              fontWeight="600"
              key={`${point.id}-label`}
              x={xForDate(point.releaseDate) + (point.labelDx ?? 0)}
              y={yForMinutes(point.estimateMinutes) + (point.labelDy ?? -12)}
            >
              {point.label}
            </text>
          ))}
        </svg>
      </div>

      <figcaption className="border-t border-gray-200/80 px-5 py-3 text-[0.7rem] leading-5 text-gray-400 sm:px-6">
        {copy.caption}{" "}
        <a
          className="font-normal text-gray-500 underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
          href={METR_HORIZON_SOURCE_URL}
          rel="noreferrer"
          target="_blank"
        >
          {copy.sourceLabel}
        </a>
      </figcaption>
    </figure>
  );
}

export function AiApplied({
  locale = DEFAULT_LOCALE,
}: {
  readonly locale?: Locale;
}) {
  const copy = getContent(locale).aiApplied;

  return (
    <section
      id="ia-aplicada"
      className="relative overflow-hidden bg-[#f7f8f6] py-24 lg:py-28"
    >
      <div className="section-fade-white-to-surface" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:px-16">
        <FadeInView className="min-w-0">
          <MetrHorizonChart copy={copy.chart} />
        </FadeInView>

        <FadeInView delay={0.12}>
          <div>
            <div className="inline-flex items-center gap-3 text-sm text-gray-500">
              <span className="h-px w-10 bg-brand-300" />
              <span className="font-medium text-gray-600">{copy.eyebrow}</span>
            </div>
            <h2 className="mt-5 max-w-2xl font-heading text-3xl font-semibold leading-tight text-gray-900 text-balance sm:text-4xl md:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              {copy.description}
            </p>

            <ol className="mt-9 divide-y divide-gray-300/80 border-y border-gray-300/80">
              {copy.principles.map((principle, index) => (
                <li
                  className="grid grid-cols-[1.75rem_1fr] items-baseline gap-3 py-4"
                  key={principle.title}
                >
                  <span className="text-sm font-semibold leading-6 text-brand-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold leading-6 text-gray-900">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {principle.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
