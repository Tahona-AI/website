"use client";

import { ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { FadeInView } from "@/components/animations/FadeInView";
import { getIndustryItems } from "@/components/industries/industry-data";
import type {
  PrimaryIndustryItem,
  SecondaryIndustryItem,
} from "@/components/industries/industry-data";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE, getLocalizedPath } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import {
  primaryCtaArrowClass,
  primaryCtaBaseClass,
} from "@/components/ui/cta-styles";

function PrimaryIndustryCard({
  industry,
  href,
  index,
}: {
  readonly href: string;
  readonly index: number;
  readonly industry: PrimaryIndustryItem;
}) {
  return (
    <FadeInView delay={0.08 + index * 0.06}>
      <article
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gray-200/85 bg-white shadow-[0_24px_64px_-50px_rgba(31,31,31,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_32px_76px_-48px_rgba(31,31,31,0.55)] motion-reduce:transition-none"
        data-industry-level="primary"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-gray-200/80 bg-[radial-gradient(circle_at_76%_18%,rgba(45,106,79,0.14),transparent_33%),linear-gradient(145deg,#f7faf8,#eef5f1)]">
          <span className="absolute left-5 top-5 z-10 text-sm font-semibold text-brand-700">
            {industry.marker}
          </span>
          <img
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transition-none sm:p-6"
            decoding="async"
            loading="lazy"
            src={industry.visualSrc}
          />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-5">
            <h3 className="font-heading text-2xl font-semibold text-gray-900 text-balance">
              {industry.cardTitle ?? industry.title}
            </h3>
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-700"
            >
              <ArrowUpRightIcon className="size-4" />
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600 text-pretty">
            {industry.summary}
          </p>

          <div className="mt-auto flex flex-wrap gap-x-2 gap-y-2 border-t border-gray-200/80 pt-5 text-[0.7rem] text-gray-500">
            {industry.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <a
          aria-label={industry.title}
          className="absolute inset-0 rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          href={href}
        />
      </article>
    </FadeInView>
  );
}

function SecondaryIndustryRow({
  industry,
  href,
}: {
  readonly href: string;
  readonly industry: SecondaryIndustryItem;
}) {
  return (
    <li className="group border-t border-gray-300/80">
      <a
        className="grid grid-cols-[1.75rem_1fr_auto] items-start gap-3 py-5 text-left transition-colors hover:text-brand-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
        href={href}
      >
        <span className="text-sm font-semibold leading-7 text-brand-700">
          {industry.marker}
        </span>
        <span>
          <span className="block font-heading text-lg font-semibold leading-7 text-gray-900">
            {industry.title}
          </span>
          <span className="mt-1.5 block max-w-xl text-sm leading-6 text-gray-600">
            {industry.summary}
          </span>
        </span>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="mt-1 size-4 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700 motion-reduce:transition-none"
        />
      </a>
    </li>
  );
}

export function Industries({
  locale = DEFAULT_LOCALE,
}: {
  readonly locale?: Locale;
}) {
  const copy = getContent(locale).home.industries;
  const industries = getIndustryItems(locale);
  const primaryIndustries = industries.filter(
    (industry): industry is PrimaryIndustryItem => industry.level === "primary",
  );
  const secondaryIndustries = industries.filter(
    (industry): industry is SecondaryIndustryItem => industry.level === "secondary",
  );
  const industriesPath = getLocalizedPath(locale, "industries");

  return (
    <section
      id="industrias"
      className="relative overflow-hidden bg-white py-24 lg:py-28"
    >
      <div className="section-fade-surface-to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <div>
            <div className="inline-flex items-center gap-3 text-sm text-gray-500">
              <span className="h-px w-10 bg-brand-300" />
              <span className="font-medium text-gray-600">{copy.eyebrow}</span>
            </div>
            <h2 className="mt-4 max-w-4xl font-heading text-3xl font-semibold text-gray-900 text-balance sm:text-4xl md:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-500 text-pretty">
              {copy.description}
            </p>
          </div>
        </FadeInView>

        <div className="mt-14 flex items-center gap-4">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.08em] text-brand-800">
            {copy.primaryLabel}
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {primaryIndustries.map((industry, index) => (
            <PrimaryIndustryCard
              href={`${industriesPath}#${industry.id}`}
              index={index}
              industry={industry}
              key={industry.id}
            />
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-14">
          <FadeInView>
            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.08em] text-brand-800">
                {copy.secondaryLabel}
              </p>
              <div className="mt-4 h-px w-12 bg-brand-300" />
            </div>
          </FadeInView>

          <FadeInView delay={0.08}>
            <ol className="grid gap-x-10 md:grid-cols-2">
              {secondaryIndustries.map((industry) => (
                <SecondaryIndustryRow
                  href={`${industriesPath}#${industry.id}`}
                  industry={industry}
                  key={industry.id}
                />
              ))}
            </ol>
          </FadeInView>
        </div>

        <FadeInView delay={0.18}>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              className={`${primaryCtaBaseClass} min-h-14 w-full px-3 pl-6 text-base font-semibold sm:w-fit sm:min-w-[224px]`}
              href={industriesPath}
            >
              <span>{copy.ctaLabel}</span>
              <span className={primaryCtaArrowClass} aria-hidden="true">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
