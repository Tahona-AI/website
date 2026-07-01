"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";

interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

const steps: readonly Step[] = [
  {
    number: "01",
    title: "Contexto",
    description:
      "Primera lectura de la operación, prioridades y fricciones principales.",
  },
  {
    number: "02",
    title: "Diagnóstico",
    description:
      "Revisión de procesos, datos, documentos, herramientas y dependencias internas.",
  },
  {
    number: "03",
    title: "Priorización",
    description:
      "Selección de oportunidades por valor operativo, complejidad, riesgo y adopción.",
  },
  {
    number: "04",
    title: "Construcción",
    description:
      "Diseño e implementación de software, IA, integraciones o automatización según el caso.",
  },
  {
    number: "05",
    title: "Adopción",
    description:
      "Ajustes, documentación y handoff para que el sistema entre en el trabajo diario.",
  },
];

export function HowWeWork() {
  return (
    <section id="proceso" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
            <span className="h-px w-10 bg-brand-300" />
            <span className="font-medium text-gray-600">Cómo trabajamos</span>
          </div>
          <h2 className="mt-4 max-w-4xl font-heading text-3xl font-bold text-gray-900 text-balance sm:text-4xl md:text-5xl">
            Entender la operación antes de cambiarla.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            Cada empresa tiene una forma distinta de trabajar. El proceso
            empieza leyendo procesos, datos, herramientas, documentos y
            restricciones reales. Después se priorizan mejoras con sentido
            práctico y se implementan de forma que el equipo pueda adoptarlas.
          </p>
        </FadeInView>

        <div className="mt-14 space-y-4">
          {steps.map((step, index) => (
            <FadeInView key={step.number} delay={index * 0.1}>
              <div
                className={cn(
                  "group grid rounded-[2rem] border border-white/75 bg-white/84 p-6 shadow-sm backdrop-blur-md sm:grid-cols-[7rem_1fr] sm:items-center sm:gap-8 sm:p-8",
                  "transition-all duration-300 hover:border-brand-200 hover:shadow-lg"
                )}
              >
                <span className="font-heading text-5xl font-semibold leading-none text-brand-300 transition-colors duration-300 group-hover:text-brand-500 sm:text-6xl">
                  {step.number}
                </span>

                <div className="mt-5 sm:mt-0">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 text-balance sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 text-pretty sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
