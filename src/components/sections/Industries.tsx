"use client";

import type { ElementType } from "react";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChartLineUpIcon,
  FactoryIcon,
  FirstAidIcon,
  GavelIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@phosphor-icons/react";
import { FadeInView } from "@/components/animations/FadeInView";
import { getIndustryItems } from "@/components/industries/industry-data";
import type { IndustryItem } from "@/components/industries/industry-data";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE, getLocalizedPath } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import {
  primaryCtaArrowClass,
  primaryCtaBaseClass,
} from "@/components/ui/cta-styles";

const INDUSTRY_ICONS = [
  TruckIcon,
  FactoryIcon,
  GavelIcon,
  ShieldCheckIcon,
  ChartLineUpIcon,
  FirstAidIcon,
] as const satisfies readonly ElementType[];

const INDUSTRY_GRADIENTS = [
  "radial-gradient(circle at 88% 12%, rgba(22,163,74,0.08) 0%, transparent 46%), linear-gradient(135deg, rgba(240,253,244,0.42) 0%, transparent 58%)",
  "radial-gradient(circle at 16% 18%, rgba(22,163,74,0.07) 0%, transparent 44%), linear-gradient(225deg, rgba(220,252,231,0.38) 0%, transparent 60%)",
  "radial-gradient(circle at 92% 82%, rgba(22,163,74,0.075) 0%, transparent 48%), linear-gradient(135deg, rgba(240,253,244,0.36) 0%, transparent 62%)",
  "radial-gradient(circle at 12% 88%, rgba(22,163,74,0.07) 0%, transparent 48%), linear-gradient(45deg, rgba(220,252,231,0.36) 0%, transparent 58%)",
  "radial-gradient(circle at 86% 16%, rgba(22,163,74,0.08) 0%, transparent 45%), linear-gradient(180deg, rgba(240,253,244,0.4) 0%, transparent 64%)",
  "radial-gradient(circle at 18% 18%, rgba(22,163,74,0.075) 0%, transparent 46%), linear-gradient(225deg, rgba(220,252,231,0.4) 0%, transparent 62%)",
] as const;

function IndustryCard({
  industry,
  index,
}: {
  industry: IndustryItem;
  index: number;
}) {
  const Icon = INDUSTRY_ICONS[index % INDUSTRY_ICONS.length] ?? TruckIcon;
  const gradient = INDUSTRY_GRADIENTS[index % INDUSTRY_GRADIENTS.length] ?? "";

  return (
    <FadeInView delay={0.08 + index * 0.06}>
      <article
        className="group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-[1.65rem] border border-gray-200/85 bg-white/88 p-6 shadow-[0_22px_60px_-48px_rgba(31,31,31,0.42)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white/94 hover:shadow-[0_30px_72px_-46px_rgba(31,31,31,0.5)] sm:p-7"
        style={{ backgroundImage: gradient }}
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-100/42 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-7 flex items-start justify-between gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/75 bg-brand-50 text-brand-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Icon weight="duotone" className="h-6 w-6" />
            </div>
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-brand-50 group-hover:text-brand-700"
            >
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </div>

          <h3 className="font-heading text-xl font-semibold text-gray-900">
            {industry.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            {industry.summary}
          </p>

          <div className="mt-auto pt-6">
            <div className="h-px w-full bg-gray-200/70" />
            <div className="mt-4 flex flex-wrap gap-2">
              {industry.tags.map((tag) => (
                <span
                  className="rounded-full border border-gray-200 bg-white/74 px-3 py-1 text-xs leading-5 text-gray-500"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </FadeInView>
  );
}

export function Industries({
  locale = DEFAULT_LOCALE,
}: {
  readonly locale?: Locale;
}) {
  const copy = getContent(locale).home.industries;
  const industries = getIndustryItems(locale);

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
            <h2 className="mt-4 max-w-4xl font-heading text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-500">
              {copy.description}
            </p>
          </div>
        </FadeInView>

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard
              industry={industry}
              index={index}
              key={industry.title}
            />
          ))}
        </div>

        <FadeInView delay={0.18}>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              className={`${primaryCtaBaseClass} min-h-14 w-full px-3 pl-6 text-base font-semibold sm:w-fit sm:min-w-[224px]`}
              href={getLocalizedPath(locale, "industries")}
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
