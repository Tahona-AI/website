"use client";

import { useEffect, useRef, useState } from "react";
import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";

interface Step {
  readonly number: string;
  readonly tab: string;
  readonly title: string;
  readonly intro: string;
  readonly bullets: readonly string[];
  readonly outcome: string;
}

const steps: readonly Step[] = [
  {
    number: "01",
    tab: "Diagnóstico",
    title: "Diagnóstico operativo en contexto real",
    intro:
      "Entramos en la operativa para entender cómo se mueve hoy la información, qué tareas dependen de alguien y dónde se acumula el trabajo invisible.",
    bullets: [
      "Revisamos flujos, documentos, herramientas y puntos de bloqueo con quien lleva el día a día.",
      "Priorizamos por impacto real: tiempo ahorrable, riesgo operativo y frecuencia del problema.",
    ],
    outcome: "Sales con un mapa claro de fricción, ordenado por impacto y viabilidad.",
  },
  {
    number: "02",
    tab: "Alcance y plan",
    title: "Alcance cerrado, prioridades claras y sin ambigüedad",
    intro:
      "Traducimos ese diagnóstico en un plan ejecutable: qué se hace primero, qué sistemas toca, qué resultados se esperan y qué no entra todavía.",
    bullets: [
      "Definimos entregables, plazos, dependencias y criterios de éxito antes de mover una pieza.",
      "Diseñamos una primera fase pequeña pero útil, pensada para demostrar valor pronto sin romper nada.",
    ],
    outcome: "Todo el mundo sabe qué se implementa, en qué orden y con qué resultado esperado.",
  },
  {
    number: "03",
    tab: "Implementación",
    title: "Implementación por bloques sobre lo que ya utilizas",
    intro:
      "Construimos encima de tu operativa actual: ERP, Excel, correo, trazabilidad o herramientas internas. No pedimos empezar de cero.",
    bullets: [
      "Integramos automatizaciones, paneles y agentes por capas para que el cambio sea asumible desde el primer día.",
      "Validamos en entorno real con revisiones frecuentes, para corregir rápido y evitar soluciones bonitas pero inútiles.",
    ],
    outcome: "Empiezan a funcionar procesos concretos en semanas, no después de un proyecto eterno.",
  },
  {
    number: "04",
    tab: "Despliegue y mejora",
    title: "Despliegue guiado, adopción estable y mejora continua",
    intro:
      "No soltamos el sistema al final y desaparecemos. Lo ponemos en marcha contigo, afinamos lo necesario y medimos si realmente aligera la operación.",
    bullets: [
      "Acompañamos al equipo en el arranque, ajustamos reglas y resolvemos incidencias de adopción.",
      "Seguimos el rendimiento con métricas simples: tiempo recuperado, errores evitados y tareas que dejan de depender de perseguir a alguien.",
    ],
    outcome: "El sistema se integra en la rutina y mejora con uso real, no solo en una demo.",
  },
];

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const current = visibleEntries[0];
        if (!current) return;

        const index = Number(
          (current.target as HTMLElement).dataset.stepIndex ?? "-1",
        );

        if (!Number.isNaN(index) && index >= 0) {
          setActiveStep(index);
        }
      },
      {
        rootMargin: "-18% 0px -42% 0px",
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sectionRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proceso" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
            <span className="h-px w-10 bg-brand-300" />
            <span className="font-medium text-gray-600">Nuestro Proceso</span>
          </div>
          <h2 className="mt-4 max-w-5xl font-heading text-3xl font-bold text-gray-900 text-balance sm:text-4xl md:text-5xl">
            De la primera llamada al sistema en marcha
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 text-pretty md:text-lg">
            Trabajamos por etapas visibles, con alcance claro y resultados que se pueden medir desde el principio. Sin proyectos eternos, sin capas innecesarias y sin cambiar lo que ya te funciona.
          </p>
        </FadeInView>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <FadeInView className="lg:col-span-4">
            <aside className="lg:sticky lg:top-28">
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => {
                        sectionRefs.current[index]?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      className="w-full text-left"
                      aria-pressed={isActive}
                    >
                      <div className="flex items-start gap-4 py-3">
                        <div className="mt-1 flex flex-col items-center gap-2">
                          <span
                            className={cn(
                              "h-2.5 w-2.5 rounded-full transition-colors",
                              isActive ? "bg-brand-600" : "bg-gray-300",
                            )}
                          />
                          <span
                            className={cn(
                              "h-10 w-px transition-colors",
                              index === steps.length - 1
                                ? "bg-transparent"
                                : isActive
                                  ? "bg-brand-300"
                                  : "bg-gray-200",
                            )}
                          />
                        </div>

                        <div className="min-w-0">
                          <p
                            className={cn(
                              "text-xs font-medium uppercase",
                              isActive ? "text-brand-700" : "text-gray-400",
                            )}
                          >
                            Paso {step.number}
                          </p>
                          <p
                            className={cn(
                              "mt-1 font-heading text-lg text-balance transition-colors",
                              isActive
                                ? "text-gray-900"
                                : "text-gray-400",
                            )}
                          >
                            {step.tab}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>
          </FadeInView>

          <div className="lg:col-span-8">
            {steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <section
                  key={step.number}
                  ref={(element) => {
                    sectionRefs.current[index] = element;
                  }}
                  data-step-index={index}
                  className="flex min-h-[35vh] scroll-mt-28 flex-col justify-center py-4 first:pt-0 last:pb-0 lg:min-h-[40vh]"
                >
                  <FadeInView>
                    <p
                      className={cn(
                        "text-sm font-medium uppercase tracking-[0.12em]",
                        isActive ? "text-brand-700" : "text-gray-400",
                      )}
                    >
                      Paso {step.number}
                    </p>
                    <h3 className="mt-4 max-w-3xl font-heading text-3xl font-semibold text-gray-900 text-balance sm:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600 text-pretty">
                      {step.intro}
                    </p>

                    <div className="mt-8 space-y-5">
                      {step.bullets.map((bullet) => (
                        <div key={bullet} className="max-w-3xl pl-5">
                          <p className="relative text-base leading-relaxed text-gray-700 text-pretty before:absolute before:left-[-1.25rem] before:top-[0.72rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-8 max-w-3xl text-sm font-medium text-brand-700 text-pretty">
                      Resultado esperado: {step.outcome}
                    </p>
                  </FadeInView>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
