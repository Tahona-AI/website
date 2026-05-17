"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";

interface Step {
  readonly number: string;
  readonly tab: string;
  readonly title: string;
  readonly description: string;
  readonly outcome: string;
}

const steps: readonly Step[] = [
  {
    number: "01",
    tab: "Reunión inicial",
    title: "Una primera reunión sin compromiso",
    description:
      "Para conocernos y ver si puede tener sentido trabajar juntos.",
    outcome: "Valoración honesta",
  },
  {
    number: "02",
    tab: "Diagnóstico",
    title: "Analizamos procesos con detalle",
    description:
      "Analizamos más a fondo los procesos de la empresa.",
    outcome: "Diagnóstico práctico",
  },
  {
    number: "03",
    tab: "Prueba de Concepto",
    title: "Validamos con un caso real",
    description:
      "Desarrollamos una Prueba de Concepto para que te hagas a la idea de cómo sería tu implementación.",
    outcome: "Validación temprana",
  },
  {
    number: "04",
    tab: "Proyecto completo",
    title: "Construimos la solución",
    description:
      "Construimos la solución y validamos en el entorno real.",
    outcome: "Solución en entorno real",
  },
  {
    number: "05",
    tab: "Entrega y Arranque",
    title: "Acompañamos en la puesta en marcha",
    description:
      "Acompañamos y dejamos claro cómo operar el sistema.",
    outcome: "Sistema operativo",
  },
];

export function HowWeWork() {
  return (
    <section id="proceso" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
            <span className="h-px w-10 bg-brand-300" />
            <span className="font-medium text-gray-600">Nuestro Proceso</span>
          </div>
          <h2 className="mt-4 max-w-5xl font-heading text-3xl font-bold text-gray-900 text-balance sm:text-4xl md:text-5xl">
            Trabajamos cerca del cliente y entregamos valor en semanas.
          </h2>
        </FadeInView>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <FadeInView key={step.number} delay={index * 0.1}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-[2rem] border border-white/75 bg-white/84 p-6 backdrop-blur-md shadow-sm",
                  "transition-all duration-300 hover:shadow-lg hover:border-brand-200"
                )}
              >
                <div className="flex items-start justify-between">
                  <span className="font-heading text-4xl font-semibold text-brand-600">
                    {step.number}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-700">
                    {step.tab}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-gray-900 text-balance">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 text-pretty">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700">
                    {step.outcome}
                  </span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
