"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

const EMPTY_STAGE = {
  body: "",
  label: "",
  title: "",
} as const;

function LifecycleCenter({
  centerLabel,
  centerTitle,
  className,
}: {
  readonly centerLabel: string;
  readonly centerTitle: string;
  readonly className: string;
}) {
  return (
    <div className={className}>
      <div className="absolute inset-3 rounded-full border border-brand-200/70" />
      <div className="absolute inset-7 rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.95),rgba(236,246,240,0.92)_55%,rgba(209,231,219,0.82))] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]" />
      <div className="relative z-10 max-w-[9rem] text-center">
        <p className="font-mono text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-brand-700">
          {centerLabel}
        </p>
        <p className="mt-2 font-heading text-base font-semibold leading-tight text-gray-900">
          {centerTitle}
        </p>
      </div>
    </div>
  );
}

function AiLifecycleVisual({
  lifecycle,
}: {
  readonly lifecycle: ReturnType<typeof getContent>["aiApplied"]["lifecycle"];
}) {
  const stages = [
    lifecycle.stages[0] ?? EMPTY_STAGE,
    lifecycle.stages[1] ?? EMPTY_STAGE,
    lifecycle.stages[2] ?? EMPTY_STAGE,
    lifecycle.stages[3] ?? EMPTY_STAGE,
  ];

  return (
    <div
      aria-label={lifecycle.ariaLabel}
      className="relative overflow-hidden rounded-[2rem] border border-gray-200/85 bg-[#f8faf9] p-5 shadow-[0_30px_90px_-58px_rgba(31,31,31,0.58)] sm:p-7 lg:p-8"
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(45,106,79,0.15),transparent_24%),radial-gradient(circle_at_12%_10%,rgba(183,211,194,0.38),transparent_30%),radial-gradient(circle_at_88%_90%,rgba(127,184,158,0.24),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(45,106,79,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(45,106,79,0.08)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <LifecycleCenter
        centerLabel={lifecycle.centerLabel}
        centerTitle={lifecycle.centerTitle}
        className="relative mx-auto mb-5 flex size-40 items-center justify-center rounded-full border border-white/90 bg-white/72 shadow-[0_22px_55px_-34px_rgba(36,88,64,0.6)] backdrop-blur-md md:hidden"
      />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
        fill="none"
        viewBox="0 0 620 520"
      >
        <path d="M226 150 C267 150 272 211 310 211" stroke="rgba(45,106,79,0.34)" strokeDasharray="5 8" strokeWidth="1.5" />
        <path d="M394 150 C353 150 348 211 310 211" stroke="rgba(45,106,79,0.34)" strokeDasharray="5 8" strokeWidth="1.5" />
        <path d="M226 370 C267 370 272 309 310 309" stroke="rgba(45,106,79,0.34)" strokeDasharray="5 8" strokeWidth="1.5" />
        <path d="M394 370 C353 370 348 309 310 309" stroke="rgba(45,106,79,0.34)" strokeDasharray="5 8" strokeWidth="1.5" />
        <circle cx="310" cy="260" fill="rgba(45,106,79,0.08)" r="112" stroke="rgba(45,106,79,0.18)" strokeWidth="1.5" />
        <circle cx="310" cy="260" fill="none" r="136" stroke="rgba(45,106,79,0.12)" strokeDasharray="3 9" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 grid gap-4 md:grid-cols-2 md:gap-x-24 md:gap-y-20">
        {stages.map((stage, index) => (
          <article
            data-lifecycle-stage={index + 1}
            className="group relative min-h-[10.5rem] overflow-hidden rounded-[1.6rem] border border-white/90 bg-white/88 p-5 shadow-[0_18px_50px_-34px_rgba(31,31,31,0.32)] backdrop-blur-sm transition-transform duration-300 motion-reduce:transition-none hover:-translate-y-1 sm:p-6"
            key={stage.title}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-brand-700">
                {stage.label}
              </span>
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-brand-100 bg-brand-50 font-mono text-xs font-semibold text-brand-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 font-heading text-base font-semibold leading-tight text-gray-900 sm:text-lg">
              {stage.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {stage.body}
            </p>
          </article>
        ))}
      </div>

      <LifecycleCenter
        centerLabel={lifecycle.centerLabel}
        centerTitle={lifecycle.centerTitle}
        className="absolute left-1/2 top-1/2 z-20 hidden size-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-white/76 shadow-[0_28px_70px_-38px_rgba(36,88,64,0.68)] backdrop-blur-xl md:flex"
      />
    </div>
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
      className="relative overflow-hidden bg-[#f7f8f6] py-24 lg:py-32"
    >
      <div className="section-fade-white-to-surface" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-16">
        <FadeInView>
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
        </FadeInView>

        <FadeInView delay={0.12}>
          <AiLifecycleVisual lifecycle={copy.lifecycle} />
        </FadeInView>
      </div>
    </section>
  );
}
