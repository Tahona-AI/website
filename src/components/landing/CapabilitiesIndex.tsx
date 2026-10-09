"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { DitherIcon, VisualFrame } from "@/components/landing/primitives";
import { capabilities } from "@/components/landing/content";

const ITEMS = capabilities.items;

/**
 * Typographic index of the three capabilities. Selecting a row
 * expands it and swaps the pinned visual on the right (lg+); on small screens
 * the rows behave as an accordion with the visual inline.
 */
export function CapabilitiesIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);
  const active = ITEMS[activeIndex] ?? ITEMS[0];

  /**
   * On small screens the panel above collapses while the new one opens, which
   * can push the chosen row off-screen; bring it back once the motion settles.
   */
  const select = (index: number) => {
    setActiveIndex(index);
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    window.setTimeout(() => {
      rowRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 380);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <ol className="border-t border-gray-300/70">
        {ITEMS.map((item, index) => {
          const isActive = index === activeIndex;
          const panelId = `capacidad-${item.marker}`;
          return (
            <li
              className="scroll-mt-24 border-b border-gray-300/70"
              key={item.marker}
              ref={(node) => {
                rowRefs.current[index] = node;
              }}
            >
              <h3>
                <button
                  aria-controls={panelId}
                  aria-expanded={isActive}
                  className="group grid w-full grid-cols-[3.25rem_1fr_auto] items-baseline gap-4 py-7 text-left sm:grid-cols-[5rem_1fr_auto] lg:py-8"
                  onClick={() => select(index)}
                  type="button"
                >
                  <span
                    className={cn(
                      "font-die-grotesk text-3xl font-medium tracking-[-0.04em] transition-colors duration-300 sm:text-5xl",
                      isActive ? "text-brand-600" : "text-gray-300 group-hover:text-brand-300"
                    )}
                  >
                    {item.marker}
                  </span>
                  <span>
                    <span
                      className={cn(
                        "block font-heading text-2xl font-semibold tracking-[-0.02em] transition-colors duration-300 sm:text-4xl",
                        isActive ? "text-gray-900" : "text-gray-500 group-hover:text-gray-800"
                      )}
                    >
                      {item.title}
                    </span>
                    <span
                      className={cn(
                        "mt-2 block text-sm font-medium transition-colors duration-300 sm:text-base",
                        isActive ? "text-brand-600" : "text-gray-400"
                      )}
                    >
                      {item.tagline}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "relative mt-2 inline-flex h-9 w-9 items-center justify-center self-start rounded-full border transition-colors duration-300",
                      isActive ? "border-brand-600 bg-brand-600" : "border-gray-300 bg-white group-hover:border-brand-300"
                    )}
                  >
                    <span className={cn("absolute h-px w-3.5", isActive ? "bg-white" : "bg-gray-600")} />
                    <span
                      className={cn(
                        "absolute h-3.5 w-px transition-transform duration-300",
                        isActive ? "rotate-90 bg-white" : "bg-gray-600"
                      )}
                    />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="grid gap-6 pb-8 pl-[4.25rem] sm:pl-[6rem]">
                      <p className="max-w-xl text-base leading-7 text-gray-600">{item.description}</p>
                      <ul className="flex flex-wrap gap-2">
                        {item.services.map((service) => (
                          <li
                            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-sm font-medium text-gray-800"
                            key={service}
                          >
                            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                            {service}
                          </li>
                        ))}
                      </ul>
                      <VisualFrame
                        aspect="landscape"
                        className="rounded-[1.5rem] border border-gray-200/80 bg-white lg:hidden"
                        imageClassName="object-contain p-6"
                        visual={item.visual}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>

      <div className="hidden lg:block">
        <div className="sticky top-28 overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white shadow-[0_40px_90px_-60px_rgba(10,31,20,0.5)]">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              initial={{ opacity: 0, scale: 1.015 }}
              key={active.marker}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <VisualFrame aspect="square" imageClassName="object-contain p-10" visual={active.visual} />
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-between gap-4 border-t border-gray-200/80 px-6 py-4">
            <span className="flex items-center gap-3">
              <DitherIcon icon={active.icon} size="sm" />
              <span className="font-heading text-base font-semibold text-gray-900">{active.title}</span>
            </span>
            <span className="text-sm font-semibold tabular-nums text-gray-400">
              {active.marker} / {String(ITEMS.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
