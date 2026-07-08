"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

function FlowDiagram() {
  return (
    <div className="relative mx-auto min-h-[43rem] w-full max-w-[34rem]">
      <div className="pointer-events-none absolute -inset-10 rounded-[2.75rem] bg-[radial-gradient(circle_at_8%_10%,rgba(45,106,79,0.08),transparent_32%),radial-gradient(circle_at_92%_90%,rgba(64,145,108,0.1),transparent_36%)] blur-xl" />

      <div className="relative min-h-[43rem] overflow-hidden rounded-[2rem] border border-gray-200/75 bg-white shadow-[0_28px_80px_-52px_rgba(31,31,31,0.55)]">
        <img
          src="/images/whatwedo-illustration.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain p-3 sm:p-5 lg:p-6"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export function WhatWeDo({
  locale = DEFAULT_LOCALE,
}: {
  readonly locale?: Locale;
}) {
  const copy = getContent(locale).home.whatWeDo;

  return (
    <section id="que-hacemos" className="relative overflow-hidden bg-surface py-24 lg:py-28">
      <div className="section-fade-white-to-surface" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-16">
        <FadeInView>
          <div>
            <div className="inline-flex items-center gap-3 text-sm text-gray-500">
              <span className="h-px w-10 bg-brand-300" />
              <span className="font-medium text-gray-600">{copy.eyebrow}</span>
            </div>
            <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-tight text-gray-900 text-balance sm:text-4xl md:text-5xl">
              {copy.title}
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-gray-500">
              {copy.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {copy.bullets.map((item) => (
                <li
                  className="grid grid-cols-[0.75rem_1fr] gap-4 text-base leading-7 text-gray-600"
                  key={item}
                >
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInView>

        <FadeInView delay={0.12}>
          <FlowDiagram />
        </FadeInView>
      </div>
    </section>
  );
}
