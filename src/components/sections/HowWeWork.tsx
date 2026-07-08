"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

export function HowWeWork({
  locale = DEFAULT_LOCALE,
}: {
  readonly locale?: Locale;
}) {
  const copy = getContent(locale).home.howWeWork;

  return (
    <section id="proceso" className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="section-fade-surface-to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
            <span className="h-px w-10 bg-brand-300" />
            <span className="font-medium text-gray-600">{copy.eyebrow}</span>
          </div>
          <h2 className="mt-4 max-w-4xl font-heading text-3xl font-bold text-gray-900 text-balance sm:text-4xl md:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            {copy.description}
          </p>
        </FadeInView>

        <div className="mt-14 space-y-4">
          {copy.steps.map((step, index) => (
            <FadeInView key={step.number} delay={index * 0.1}>
              <div
                className={cn(
                  "group grid rounded-[2rem] border border-white/75 bg-white/84 p-6 shadow-sm backdrop-blur-md sm:grid-cols-[7rem_1fr] sm:items-center sm:gap-8 sm:p-8",
                  "transition-all duration-300 hover:border-brand-200 hover:shadow-lg"
                )}
              >
                <span className="font-heading text-5xl font-semibold leading-none text-brand-300 transition-colors duration-300 group-hover:text-brand-500 sm:text-6xl">
                  {step.number}
                </span>

                <div className="mt-5 sm:mt-0">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 text-balance sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 text-pretty sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
