"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import { motion } from "motion/react";
import type { PanInfo } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowIcon, VisualFrame, cardClass } from "@/components/landing/primitives";
import { cases } from "@/components/landing/content";
import type { CaseStudy } from "@/components/landing/content";

const ITEMS = cases.items;
const TOTAL = String(ITEMS.length).padStart(2, "0");
/** Horizontal drag distance (px) that counts as a swipe on touch devices. */
const SWIPE_THRESHOLD = 60;

const wrap = (index: number) => (index + ITEMS.length) % ITEMS.length;

function NavButton({
  direction,
  onClick,
}: {
  readonly direction: "previous" | "next";
  readonly onClick: () => void;
}) {
  return (
    <button
      aria-label={direction === "previous" ? "Caso anterior" : "Caso siguiente"}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-[0_14px_30px_-22px_rgba(31,31,31,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
      onClick={onClick}
      type="button"
    >
      <ArrowIcon className={cn("h-4 w-4", direction === "previous" && "rotate-180")} />
    </button>
  );
}

export function CasesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const go = (index: number) => setActiveIndex(wrap(index));
  const step = (delta: 1 | -1) => setActiveIndex((current) => wrap(current + delta));

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  const onPanEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) step(1);
    else if (info.offset.x > SWIPE_THRESHOLD) step(-1);
  };

  return (
    <div
      aria-label="Casos de éxito"
      aria-roledescription="carrusel"
      className="outline-none"
      onKeyDown={onKeyDown}
      role="region"
      tabIndex={0}
    >
      {/*
        Every slide shares one grid cell, so the stage is as tall as the tallest
        case and the controls never jump. Inactive slides are hidden from AT.
      */}
      <motion.div className="grid touch-pan-y" onPanEnd={onPanEnd}>
        {ITEMS.map((item, index) => (
          <CaseSlide
            isActive={index === activeIndex}
            item={item}
            key={item.id}
            offset={Math.sign(index - activeIndex)}
            position={index + 1}
          />
        ))}
      </motion.div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Sector index doubles as progress indicator and direct navigation. */}
        <ol className="grid grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-6 lg:flex-1">
          {ITEMS.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={item.id}>
                <button
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Ver caso: ${item.sector}`}
                  className="group flex w-full flex-col gap-2 text-left"
                  onClick={() => go(index)}
                  type="button"
                >
                  <span className="relative block h-0.5 w-full overflow-hidden rounded-full bg-gray-200">
                    <span
                      className={cn(
                        "absolute inset-y-0 left-0 rounded-full bg-brand-600 transition-[width] duration-500",
                        isActive ? "w-full" : "w-0 group-hover:w-1/3"
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      "truncate text-xs font-semibold transition-colors",
                      isActive ? "text-brand-700" : "text-gray-400 group-hover:text-gray-600"
                    )}
                  >
                    {item.sector}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="flex items-center gap-4 lg:pl-10">
          <span aria-live="polite" className="min-w-16 text-sm font-semibold tabular-nums text-gray-500">
            {String(activeIndex + 1).padStart(2, "0")} / {TOTAL}
          </span>
          <NavButton direction="previous" onClick={() => step(-1)} />
          <NavButton direction="next" onClick={() => step(1)} />
        </div>
      </div>
    </div>
  );
}

function CaseSlide({
  item,
  isActive,
  offset,
  position,
}: {
  readonly item: CaseStudy;
  readonly isActive: boolean;
  /** -1 before the active slide, 1 after, 0 when active: sets the resting side. */
  readonly offset: number;
  readonly position: number;
}) {
  return (
    <article
      aria-hidden={!isActive}
      aria-label={`${position} de ${ITEMS.length}: ${item.title}`}
      aria-roledescription="diapositiva"
      className={cn(
        cardClass,
        "grid overflow-hidden [grid-area:1/1] transition-[opacity,transform,visibility] ease-[cubic-bezier(0.22,1,0.36,1)] lg:grid-cols-[1.1fr_1fr]",
        // Sequenced crossfade: the outgoing slide clears before the incoming one
        // appears, so two cards' text never overlaps mid-transition.
        isActive
          ? "visible opacity-100 duration-[420ms] delay-[160ms]"
          : "invisible opacity-0 duration-150 delay-0",
        offset < 0 && "-translate-x-6",
        offset > 0 && "translate-x-6"
      )}
      id={item.id}
    >
      <div className="flex flex-col p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">{item.sector}</span>
          <span className="text-gray-400">{cases.anonymisedLabel}</span>
        </div>
        <h3 className="mt-6 max-w-xl font-heading text-2xl font-semibold text-gray-900 text-balance sm:text-3xl lg:text-4xl">
          {item.title}
        </h3>

        <dl className="mt-7 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-400">{cases.challengeLabel}</dt>
            <dd className="mt-2 text-sm leading-6 text-gray-600">{item.challenge}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-400">{cases.solutionLabel}</dt>
            <dd className="mt-2 text-sm leading-6 text-gray-600">{item.solution}</dd>
          </div>
        </dl>

        <div className="mt-auto pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-400">{cases.outcomesLabel}</p>
          <ul className="mt-3 space-y-2 border-t border-gray-200/80 pt-4">
            {item.outcomes.map((outcome) => (
              <li className="flex items-start gap-3 text-sm leading-6 text-gray-800" key={outcome}>
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {outcome}
              </li>
            ))}
          </ul>
          <ul aria-label="Capacidades" className="mt-6 flex flex-wrap gap-2">
            {item.capabilities.map((capability) => (
              <li className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600" key={capability}>
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pointer-events-none p-3 lg:pl-0">
        <VisualFrame
          aspect="fill"
          className="aspect-[4/3] rounded-[1.25rem] lg:aspect-auto lg:h-full"
          imageClassName="object-contain bg-white p-8"
          visual={item.visual}
        />
      </div>
    </article>
  );
}
