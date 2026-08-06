"use client";

import { motion } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { primaryCtaArrowClass, primaryCtaBaseClass } from "@/components/ui/cta-styles";

type HeroProps = {
  readonly title?: ReactNode;
  readonly description?: string;
  readonly locale?: Locale;
  readonly primaryLabel?: string;
  readonly primaryHref?: string;
  readonly secondaryLabel?: string;
  readonly secondaryHref?: string;
};

export function Hero({
  title,
  description,
  locale = DEFAULT_LOCALE,
  primaryLabel,
  primaryHref,
}: HeroProps) {
  const homeHero = getContent(locale).home.hero;
  const resolvedDescription = description ?? homeHero.description;
  const resolvedPrimaryHref = primaryHref ?? homeHero.primaryHref;
  const resolvedPrimaryLabel = primaryLabel ?? homeHero.primaryLabel;
  const resolvedTitle =
    title ??
    homeHero.titleLines.map((line, index) => (
      <span className={index > 0 ? "mt-3 block" : undefined} key={line}>
        {line}
      </span>
    ));
  const handleHeroLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    if (href.length <= 1) {
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-16 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative left-1/2 h-[52svh] min-h-[22rem] w-screen -translate-x-1/2 overflow-hidden sm:h-[58svh]"
        >
          <img
            src="/images/fondo_olivo.png"
            alt="Paisaje mediterráneo con un olivo"
            className="h-full w-full object-cover object-[center_85%]"
          />
        </motion.div>

        <div className="grid items-start gap-10 pt-6 pb-12 sm:pt-8 lg:grid-cols-2 lg:gap-20 lg:pt-2 lg:pb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-die-grotesk relative -left-2 mt-4 max-w-2xl text-[clamp(1.7rem,3.5vw,3.2rem)] font-medium leading-[1.22] tracking-[-0.03em] text-gray-900 sm:-left-3 lg:-left-8 lg:mt-8"
          >
            {resolvedTitle}
          </motion.h1>

          <div className="mt-4 flex flex-col ml-16 sm:ml-20 lg:mt-8 lg:ml-32 xl:ml-40">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-die-grotesk max-w-md text-[clamp(0.95rem,1.35vw,1.15rem)] font-light leading-[1.45] text-gray-500 lg:max-w-sm"
            >
              {resolvedDescription}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              href={resolvedPrimaryHref}
              onClick={(event) => handleHeroLinkClick(event, resolvedPrimaryHref)}
              className={`${primaryCtaBaseClass} mt-6 inline-flex min-h-12 w-fit cursor-pointer px-3 pl-6 text-sm font-semibold`}
            >
              <span>{resolvedPrimaryLabel}</span>
              <span className={`${primaryCtaArrowClass} h-8 w-8`} aria-hidden="true">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
