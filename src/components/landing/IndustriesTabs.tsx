"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowIcon, CtaLink, VisualFrame, cardClass } from "@/components/landing/primitives";
import { LANDING_SECTIONS, industries } from "@/components/landing/content";

const ITEMS = industries.items;
const TOTAL = String(ITEMS.length).padStart(2, "0");

/** Wraps an index into [0, ITEMS.length). */
const wrap = (index: number) => (index + ITEMS.length) % ITEMS.length;

export function IndustriesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = ITEMS[activeIndex] ?? ITEMS[0];

  const select = (index: number, focus = false) => {
    const next = wrap(index);
    setActiveIndex(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Partial<Record<string, number>> = {
      ArrowRight: activeIndex + 1,
      ArrowLeft: activeIndex - 1,
      Home: 0,
      End: ITEMS.length - 1,
    };
    const target = moves[event.key];
    if (target === undefined) return;
    event.preventDefault();
    select(target, true);
  };

  return (
    <div>
      <div
        aria-label="Industrias"
        className="scrollbar-hidden -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
        role="tablist"
      >
        {ITEMS.map((item, index) => {
          const selected = index === activeIndex;
          return (
            <button
              aria-controls={`industria-panel-${item.id}`}
              aria-selected={selected}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                selected
                  ? "border-brand-600 bg-brand-600 text-white shadow-[0_14px_30px_-18px_rgba(36,88,64,0.9)]"
                  : "border-gray-200 bg-white text-gray-700 hover:border-brand-200 hover:text-brand-700"
              )}
              id={`industria-tab-${item.id}`}
              key={item.id}
              onClick={() => select(index)}
              onKeyDown={onTabKeyDown}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              tabIndex={selected ? 0 : -1}
              type="button"
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div
        aria-labelledby={`industria-tab-${active.id}`}
        className={cn(cardClass, "mt-6 grid overflow-hidden lg:grid-cols-[1fr_1.35fr]")}
        id={`industria-panel-${active.id}`}
        role="tabpanel"
      >
        <div className="flex flex-col p-7 sm:p-10">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 10 }}
              key={active.id}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <p className="text-sm font-semibold text-brand-600">{active.name}</p>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-gray-900 text-balance sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">{active.description}</p>
              <ul aria-label="Ámbitos" className="mt-6 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <li
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                    key={tag}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
            <CtaLink section={LANDING_SECTIONS.contact} variant="secondary">
              {industries.ctaLabel}
            </CtaLink>
            <div className="flex items-center gap-3">
              <button
                aria-label="Industria anterior"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                onClick={() => select(activeIndex - 1)}
                type="button"
              >
                <ArrowIcon className="rotate-180" />
              </button>
              <span className="min-w-14 text-center text-sm font-semibold tabular-nums text-gray-500">
                {String(activeIndex + 1).padStart(2, "0")} / {TOTAL}
              </span>
              <button
                aria-label="Industria siguiente"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                onClick={() => select(activeIndex + 1)}
                type="button"
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 lg:pl-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1 }}
              className="h-full"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              key={active.id}
              transition={{ duration: 0.3 }}
            >
              <VisualFrame
                aspect="fill"
                className="aspect-[16/10] rounded-[1.25rem] lg:aspect-auto lg:min-h-[26rem]"
                visual={active.visual}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
