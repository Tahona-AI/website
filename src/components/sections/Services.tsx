"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";
import { getServiceFamilies } from "@/components/services/service-families";
import type { ServiceFamily } from "@/components/services/service-families";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE, getLocalizedPath } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import {
  primaryCtaArrowClass,
  primaryCtaBaseClass,
} from "@/components/ui/cta-styles";

const FAMILY_GRADIENTS = [
  "radial-gradient(circle at 90% 10%, rgba(22,163,74,0.08) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(22,163,74,0.05) 0%, transparent 40%)",
  "radial-gradient(circle at 80% 80%, rgba(22,163,74,0.07) 0%, transparent 50%), linear-gradient(135deg, rgba(240,253,244,0.6) 0%, transparent 60%)",
  "radial-gradient(circle at 20% 20%, rgba(22,163,74,0.06) 0%, transparent 50%), linear-gradient(225deg, rgba(220,252,231,0.5) 0%, transparent 60%)",
] as const;

function ServiceFamilyCard({
  family,
  index,
}: {
  family: ServiceFamily;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <FadeInView delay={0.1 + index * 0.08}>
      <article
        className={cn(
          "group relative grid min-h-[26rem] overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-white/84 p-6 shadow-[0_22px_60px_-46px_rgba(31,31,31,0.42)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white/92 hover:shadow-[0_30px_72px_-44px_rgba(31,31,31,0.5)] sm:p-8 md:items-stretch md:gap-10 lg:min-h-[28rem] lg:p-9",
          isReversed
            ? "md:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)]"
            : "md:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)]"
        )}
        style={{ backgroundImage: FAMILY_GRADIENTS[index] }}
      >
        <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-100/40 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div
          className={cn(
            "relative z-10 flex h-full flex-col py-1",
            isReversed ? "md:order-2" : "md:order-1"
          )}
        >
          <p className="text-sm font-semibold text-brand-700">
            {family.marker}
          </p>

          <h3 className="mt-4 font-heading text-2xl font-semibold text-gray-900 sm:text-3xl">
            {family.title}
          </h3>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            {family.description}
          </p>

          <ol className="mt-8 space-y-3 md:mt-auto md:pt-8">
            {family.services.map((service, serviceIndex) => (
              <li
                className="grid grid-cols-[1.75rem_1fr] items-start gap-3 text-sm leading-6 text-gray-700"
                key={service.id}
              >
                <span className="text-sm font-semibold text-brand-700">
                  {String(serviceIndex + 1).padStart(2, "0")}
                </span>
                <span>{service.title}</span>
              </li>
            ))}
          </ol>
        </div>

        <div
          className={cn(
            "relative z-10 mt-8 flex items-center justify-center md:mt-0",
            isReversed ? "md:order-1" : "md:order-2"
          )}
        >
          <div className="relative aspect-square w-full max-w-[21rem] overflow-hidden rounded-[1.5rem] border border-white/70 bg-[radial-gradient(circle_at_22%_18%,rgba(45,106,79,0.18),transparent_31%),radial-gradient(circle_at_78%_74%,rgba(64,145,108,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.18))] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-sm">
            <img
              src={family.visualSrc}
              alt=""
              aria-hidden="true"
              className={cn(
                "h-full w-full object-contain p-2 sm:p-3",
                family.visualScaleClass
              )}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </article>
    </FadeInView>
  );
}

export function Services({
  locale = DEFAULT_LOCALE,
}: {
  readonly locale?: Locale;
}) {
  const copy = getContent(locale).home.services;
  const serviceFamilies = getServiceFamilies(locale);

  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-20 lg:pb-28"
    >
      <div className="section-fade-surface-to-white" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-20 px-6 sm:px-10 lg:px-16">
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

          <div className="mt-16 grid grid-cols-1 gap-6" id="servicios-grid">
            {serviceFamilies.map((family, index) => (
              <ServiceFamilyCard
                family={family}
                index={index}
                key={family.title}
              />
            ))}
          </div>

          <FadeInView delay={0.18}>
            <div className="mt-12 flex justify-center lg:justify-start">
              <a
                className={`${primaryCtaBaseClass} min-h-14 w-full px-3 pl-6 text-base font-semibold sm:w-fit sm:min-w-[188px]`}
                href={getLocalizedPath(locale, "services")}
              >
                <span>{copy.ctaLabel}</span>
                <span className={primaryCtaArrowClass} aria-hidden="true">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </a>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
