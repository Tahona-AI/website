"use client";

import {
  BrainIcon,
  GearIcon,
  UsersIcon,
  ChartLineUpIcon,
  RobotIcon,
  NetworkIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";

interface BentoCard {
  readonly title: string;
  readonly description: string;
  readonly icon: React.ElementType;
  readonly span?: boolean;
  readonly gradient: string;
  readonly accent: string;
}

const CARDS: readonly BentoCard[] = [
  {
    title: "Equipo pequeño de alto rendimiento",
    description:
      "Equipos pequeños, ágiles, cercanos y altamente cualificados para conocer a fondo tu negocio y optimizar sus procesos.",
    icon: UsersIcon,
    span: true,
    gradient:
      "radial-gradient(circle at 90% 10%, rgba(22,163,74,0.08) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(22,163,74,0.05) 0%, transparent 40%)",
    accent: "bg-brand-50 text-brand-600",
  },
  {
    title: "Tecnología punta al alcance",
    description:
      "Hemos estudiado y trabajado en China, Estados Unidos, México, Portugal y España. Acercamos lo último a las provincias españolas.",
    icon: BrainIcon,
    gradient:
      "radial-gradient(circle at 80% 80%, rgba(22,163,74,0.07) 0%, transparent 50%), linear-gradient(135deg, rgba(240,253,244,0.6) 0%, transparent 60%)",
    accent: "bg-brand-50 text-brand-600",
  },
  {
    title: "Reducción de costes operativos",
    description:
      "Cuando se optimizan procesos mediante la tecnología, se reducen los costes operativos y se aumenta la facturación del negocio.",
    icon: ChartLineUpIcon,
    gradient:
      "radial-gradient(circle at 20% 20%, rgba(22,163,74,0.06) 0%, transparent 50%), linear-gradient(225deg, rgba(220,252,231,0.5) 0%, transparent 60%)",
    accent: "bg-brand-50 text-brand-600",
  },
  {
    title: "Ingeniería de Contexto",
    description:
      "No solo desarrollamos herramientas. Implementamos ingeniería de contexto a los agentes de IA para que trabajen en los procesos de tu empresa de manera óptima.",
    icon: NetworkIcon,
    span: true,
    gradient:
      "radial-gradient(circle at 50% 50%, rgba(22,163,74,0.06) 0%, transparent 60%), radial-gradient(circle at 0% 100%, rgba(22,163,74,0.08) 0%, transparent 40%)",
    accent: "bg-brand-50 text-brand-600",
  },
  {
    title: "Soluciones a medida",
    description:
      "Diseñamos implementaciones adaptadas a tu contexto, no demostraciones genéricas. Construimos sobre tus datos, tus herramientas y tus restricciones reales.",
    icon: GearIcon,
    gradient:
      "radial-gradient(circle at 10% 10%, rgba(22,163,74,0.07) 0%, transparent 45%), linear-gradient(45deg, rgba(240,253,244,0.5) 0%, transparent 55%)",
    accent: "bg-brand-50 text-brand-600",
  },
  {
    title: "Resultados en semanas",
    description:
      "Nos movemos rápido, iteramos contigo y buscamos impacto operativo desde las primeras fases del proyecto.",
    icon: RobotIcon,
    gradient:
      "radial-gradient(circle at 90% 90%, rgba(22,163,74,0.07) 0%, transparent 45%), linear-gradient(315deg, rgba(220,252,231,0.5) 0%, transparent 55%)",
    accent: "bg-brand-50 text-brand-600",
  },
];

function BentoCardComponent({
  card,
  index,
}: {
  card: BentoCard;
  index: number;
}) {
  const Icon = card.icon;

  return (
    <FadeInView delay={0.1 + index * 0.08}>
      <div
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/75 bg-white/84 p-6 backdrop-blur-md shadow-[0_22px_60px_-46px_rgba(31,31,31,0.42)] transition-all duration-300 hover:border-brand-200 hover:bg-white/90 hover:shadow-[0_28px_70px_-44px_rgba(31,31,31,0.48)] sm:p-8",
          card.span && "md:col-span-2"
        )}
        style={{ backgroundImage: card.gradient }}
      >
        <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-100/40 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col">
          <div
            className={cn(
              "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/75 shadow-sm transition-transform duration-300 group-hover:scale-105",
              card.accent
            )}
          >
            <Icon weight="duotone" className="h-6 w-6" />
          </div>

          <h3 className="font-heading text-lg font-semibold text-gray-900 sm:text-xl">
            {card.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base sm:leading-7">
            {card.description}
          </p>
        </div>
      </div>
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
            <div className="inline-flex items-center gap-3 text-sm text-gray-500">
              <span className="h-px w-10 bg-brand-300" />
              <span className="font-medium text-gray-600">Solución</span>
            </div>
            <h2 className="mt-4 max-w-4xl font-heading text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
              La tecnología ya existe. Falta la implementación adecuada.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-500">
              Los modelos de Inteligencia Artificial han llegado a la capacidad
              suficiente para delegar procesos cognitivos humanos en la
              operativa de las empresas.
            </p>
          </FadeInView>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {CARDS.map((card, index) => (
              <BentoCardComponent key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
