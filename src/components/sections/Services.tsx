"use client";

import type { ElementType } from "react";
import {
  ArrowRightIcon,
  ClipboardTextIcon,
  NetworkIcon,
  PlugsConnectedIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  primaryCtaArrowClass,
  primaryCtaBaseClass,
} from "@/components/ui/cta-styles";

interface ServiceFamily {
  readonly marker: string;
  readonly title: string;
  readonly description: string;
  readonly services: readonly string[];
  readonly icon: ElementType;
  readonly gradient: string;
  readonly accent: string;
}

const SERVICE_FAMILIES: readonly ServiceFamily[] = [
  {
    marker: "01 · Servicios",
    title: "Fundaciones",
    description:
      "Antes de construir se ordena el problema. Diagnóstico, estrategia y conocimiento interno para tomar decisiones técnicas con contexto.",
    services: [
      "Consultoría y auditoría operativa",
      "Estrategia técnica y operativa",
      "Bases de conocimiento enterprise",
    ],
    icon: ClipboardTextIcon,
    gradient:
      "radial-gradient(circle at 90% 10%, rgba(22,163,74,0.08) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(22,163,74,0.05) 0%, transparent 40%)",
    accent: "bg-brand-50 text-brand-600",
  },
  {
    marker: "02 · Servicios",
    title: "Desarrollo de IA",
    description:
      "La IA entra cuando mejora un flujo concreto. El diseño incluye límites, supervisión, fuentes, trazabilidad y adopción.",
    services: [
      "Optimización de procesos",
      "Agentes de IA",
      "Procesamiento documental",
    ],
    icon: NetworkIcon,
    gradient:
      "radial-gradient(circle at 80% 80%, rgba(22,163,74,0.07) 0%, transparent 50%), linear-gradient(135deg, rgba(240,253,244,0.6) 0%, transparent 60%)",
    accent: "bg-brand-50 text-brand-600",
  },
  {
    marker: "03 · Servicios",
    title: "Otros desarrollos",
    description:
      "Muchas mejoras no necesitan solo IA. Necesitan una herramienta clara, una integración fiable o una plataforma interna que encaje con la forma real de trabajar.",
    services: [
      "Herramientas a medida",
      "Herramientas internas",
      "Integraciones y plataformas operativas",
    ],
    icon: PlugsConnectedIcon,
    gradient:
      "radial-gradient(circle at 20% 20%, rgba(22,163,74,0.06) 0%, transparent 50%), linear-gradient(225deg, rgba(220,252,231,0.5) 0%, transparent 60%)",
    accent: "bg-brand-50 text-brand-600",
  },
];

function ServiceFamilyCard({
  family,
  index,
}: {
  family: ServiceFamily;
  index: number;
}) {
  const Icon = family.icon;

  return (
    <FadeInView delay={0.1 + index * 0.08}>
      <article
        className="group relative flex h-full min-h-[34rem] flex-col overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-white/84 p-6 shadow-[0_22px_60px_-46px_rgba(31,31,31,0.42)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white/92 hover:shadow-[0_30px_72px_-44px_rgba(31,31,31,0.5)] sm:p-8 lg:p-9"
        style={{ backgroundImage: family.gradient }}
      >
        <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-100/40 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col">
          <div
            className={cn(
              "mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/75 shadow-sm transition-transform duration-300 group-hover:scale-105",
              family.accent
            )}
          >
            <Icon weight="duotone" className="h-8 w-8" />
          </div>

          <p className="text-sm font-semibold tracking-[0.04em] text-brand-700">
            {family.marker}
          </p>

          <h3 className="mt-4 font-heading text-2xl font-semibold tracking-[-0.02em] text-gray-900">
            {family.title}
          </h3>

          <p className="mt-4 text-base leading-7 text-gray-600 md:min-h-[8.75rem]">
            {family.description}
          </p>

          <ol className="mt-7 space-y-3">
            {family.services.map((service, serviceIndex) => (
              <li
                className="grid grid-cols-[1.75rem_1fr] items-start gap-3 text-sm leading-6 text-gray-700"
                key={service}
              >
                <span className="text-sm font-semibold text-brand-700">
                  {String(serviceIndex + 1).padStart(2, "0")}
                </span>
                <span>{service}</span>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </FadeInView>
  );
}

export function Services() {
  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-surface pt-16 pb-24 lg:pt-20 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,249,249,0.94)_38%,rgba(245,244,246,0.78)_74%,rgba(245,244,246,0)_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-20 px-6 sm:px-10 lg:px-16">
          <FadeInView>
            <div>
              <div className="inline-flex items-center gap-3 text-sm text-gray-500">
                <span className="h-px w-10 bg-brand-300" />
                <span className="font-medium text-gray-600">Servicios</span>
              </div>
              <h2 className="mt-4 max-w-4xl font-heading text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
                Tres familias de trabajo.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-500">
                Primero se entiende la operación. Después se decide si hace
                falta estrategia, software, IA, integraciones, acompañamiento de
                adopción o formación.
              </p>
            </div>
          </FadeInView>

          <div
            className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6"
            id="servicios-grid"
          >
            {SERVICE_FAMILIES.map((family, index) => (
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
                href="#servicios-grid"
              >
                <span>Ver servicios</span>
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
