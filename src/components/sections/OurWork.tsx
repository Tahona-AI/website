"use client";

import { useState } from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";
import {
  primaryCtaArrowClass,
  primaryCtaBaseClass,
} from "@/components/ui/cta-styles";
import {
  DOCUMENT_PLATFORM_WORK,
  WORK_ITEMS,
} from "@/components/sections/work/workItems";
import type { WorkId, WorkItem } from "@/components/sections/work/workItems";

function WorkAccordionItem({
  index,
  isActive,
  item,
  onSelect,
}: {
  readonly index: number;
  readonly isActive: boolean;
  readonly item: WorkItem;
  readonly onSelect: (id: WorkId) => void;
}) {
  const detailId = `work-detail-${item.id}`;

  return (
    <FadeInView delay={0.08 + index * 0.08}>
      <button
        aria-controls={detailId}
        aria-expanded={isActive}
        className={cn(
          "group relative w-full overflow-hidden rounded-[1.6rem] border bg-white/86 p-6 text-left shadow-[0_22px_58px_-48px_rgba(31,31,31,0.46)] backdrop-blur-md transition-all duration-300 sm:p-7",
          isActive
            ? "border-brand-200 bg-white/94"
            : "border-gray-200/86 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white/92"
        )}
        onClick={() => onSelect(item.id)}
        type="button"
      >
        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-100/52 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="font-medium text-gray-500">{item.sector}</span>
            </div>

            <h3 className="mt-4 max-w-3xl font-heading text-2xl font-semibold tracking-[-0.02em] text-gray-900 text-balance">
              {item.title}
            </h3>
          </div>

          <span
            aria-hidden="true"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/78 text-gray-700 transition-all duration-300",
              isActive
                ? "-translate-y-0.5 translate-x-0.5 border-brand-200 bg-brand-50 text-brand-700"
                : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-700"
            )}
          >
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>

        <div
          className={cn(
            "relative z-10 grid transition-[grid-template-rows] duration-300 ease-out",
            isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
          id={detailId}
        >
          <div className="overflow-hidden">
            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
              {item.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  className="rounded-full border border-gray-200 bg-white/76 px-3 py-1 text-xs leading-5 text-gray-500"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </button>
    </FadeInView>
  );
}

export function OurWork() {
  const [activeWorkId, setActiveWorkId] = useState<WorkId>(
    DOCUMENT_PLATFORM_WORK.id
  );
  const activeWork =
    WORK_ITEMS.find((item) => item.id === activeWorkId) ??
    DOCUMENT_PLATFORM_WORK;

  return (
    <section id="trabajo" className="relative overflow-hidden bg-surface py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(245,244,246,0)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <div>
            <div className="inline-flex items-center gap-3 text-sm text-gray-500">
              <span className="h-px w-10 bg-brand-300" />
              <span className="font-medium text-gray-600">Nuestro Trabajo</span>
            </div>
            <h2 className="mt-4 max-w-4xl font-heading text-3xl font-semibold text-gray-900 text-balance sm:text-4xl md:text-5xl">
              Proyectos reales en los que hemos trabajado.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-500">
              Algunos ejemplos de trabajo aplicado en operaciones reales:
              plataformas internas, planificación, documentación, datos e
              integraciones construidas alrededor de cómo trabaja cada equipo.
            </p>
          </div>
        </FadeInView>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,2.1fr)_minmax(18rem,0.9fr)] lg:items-start">
          <div className="space-y-4">
            {WORK_ITEMS.map((item, index) => (
              <WorkAccordionItem
                index={index}
                isActive={item.id === activeWork.id}
                item={item}
                key={item.id}
                onSelect={setActiveWorkId}
              />
            ))}
          </div>

          <FadeInView delay={0.12} className="lg:sticky lg:top-28">
            <div
              className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-gray-200/85 bg-white/86 shadow-[0_26px_70px_-52px_rgba(31,31,31,0.5)] backdrop-blur-md"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 18% 16%, rgba(45,106,79,0.15) 0%, transparent 34%), radial-gradient(circle at 82% 78%, rgba(64,145,108,0.12) 0%, transparent 34%), linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,255,255,0.26))",
              }}
            >
              <img
                src={activeWork.imageSrc}
                alt=""
                aria-hidden="true"
                className="h-full w-full scale-[1.08] object-contain p-4 sm:p-5"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeInView>
        </div>

        <FadeInView delay={0.18}>
          <div className="mt-12 flex justify-center lg:justify-start">
            <a
              className={`${primaryCtaBaseClass} min-h-14 w-full px-3 pl-6 text-base font-semibold sm:w-fit sm:min-w-[220px]`}
              href="/proyectos/"
            >
              <span>Ver más proyectos</span>
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
