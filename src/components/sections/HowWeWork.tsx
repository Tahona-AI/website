"use client";

import { ScrollArea } from "@base-ui/react/scroll-area";
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
    title: "Entendemos dónde se atasca la operación en 1-2 semanas",
    intro:
      "Entramos en el proceso real: quién hace qué, con qué herramientas y dónde se rompe el flujo cuando hay volumen, excepciones o trabajo manual.",
    bullets: [
      "Hablamos con quien opera el día a día, no solo con dirección.",
      "Priorizamos por impacto, frecuencia y riesgo de error; no por intuición ni por moda.",
    ],
    outcome:
      "Un mapa de fricción priorizado. Sabes qué merece resolverse primero y qué puede esperar.",
  },
  {
    number: "02",
    tab: "Alcance",
    title: "Cerramos qué entra, qué no y cómo se mide",
    intro:
      "Antes de construir, dejamos por escrito el alcance, las dependencias y los criterios de éxito. Así evitamos proyectos que se ensanchan solos.",
    bullets: [
      "Definimos una primera fase corta pero útil, con entregable operativo y rango temporal creíble.",
      "Cada entrega lleva criterios de éxito explícitos: qué debe pasar para darla por válida.",
    ],
    outcome:
      "Un plan ejecutable y acotado. Sabes qué vas a recibir, en qué orden y bajo qué condiciones se considera hecho.",
  },
  {
    number: "03",
    tab: "Construcción",
    title: "Construimos y validamos en el entorno real",
    intro:
      "Construimos la solución con ciclos cortos de validación sobre tu operativa, no en una demo separada del negocio.",
    bullets: [
      "Revisión en tu entorno real cada 3-5 días para ajustar decisiones, datos y excepciones mientras avanzamos.",
      "Empezamos por el camino más corto que resuelve el problema y añadimos complejidad solo si hace falta.",
    ],
    outcome:
      "Una solución validada con casos reales y lista para entrar en uso sin rehacer el trabajo al final.",
  },
  {
    number: "04",
    tab: "Arranque y transferencia",
    title: "Ponemos en marcha y dejamos la operación en tus manos",
    intro:
      "El trabajo no acaba al entregar. Acompañamos el arranque, resolvemos ajustes finos y dejamos claro cómo operar el sistema sin depender de nosotros para lo básico.",
    bullets: [
      "Soporte directo en el arranque: ajustes, dudas y casos borde que solo aparecen con uso real.",
      "Transferimos contexto, criterios y documentación útil para que el equipo pueda operar y seguir sin fricción.",
    ],
    outcome:
      "El sistema arranca con seguimiento real y tu equipo sabe qué hacer para operarlo desde el primer día.",
  },
];

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const currentStep = steps[activeStep] ?? steps[0];

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const createObserver = () =>
      new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          const current = visibleEntries[0];
          if (!current) return;

          if (!(current.target instanceof HTMLElement)) return;

          const index = Number(current.target.dataset.stepIndex ?? "-1");

          if (!Number.isNaN(index) && index >= 0) {
            setActiveStep(index);
          }
        },
        {
          root: desktopQuery.matches ? viewport : null,
          rootMargin: desktopQuery.matches
            ? "-16% 0px -40% 0px"
            : "-18% 0px -42% 0px",
          threshold: [0.35, 0.55, 0.75],
        },
      );

    let observer = createObserver();

    const observeSections = () => {
      sectionRefs.current.forEach((element) => {
        if (element) observer.observe(element);
      });
    };

    observeSections();

    const handleBreakpointChange = () => {
      observer.disconnect();
      observer = createObserver();
      observeSections();
    };

    desktopQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      desktopQuery.removeEventListener("change", handleBreakpointChange);
      observer.disconnect();
    };
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
            Así pasamos de una necesidad difusa a un sistema funcionando
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 text-pretty md:text-lg">
            Con alcance cerrado, validación continua y un arranque real. Sin fases decorativas, sin entregables que no aterrizan en la operación.
          </p>
        </FadeInView>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <FadeInView className="lg:col-span-4">
            <aside className="lg:sticky lg:top-28">
              <div className="mb-10">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-700">
                  Paso activo
                </p>
                <div
                  aria-live="polite"
                  className="mt-3 flex items-end gap-3 text-gray-900"
                >
                  <span className="font-heading text-6xl font-semibold leading-none sm:text-7xl">
                    {currentStep.number}
                  </span>
                  <span className="pb-2 text-sm font-medium text-gray-500">
                    {currentStep.tab}
                  </span>
                </div>
              </div>

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
            <ScrollArea.Root className="relative lg:h-[42rem]">
              <ScrollArea.Viewport
                ref={viewportRef}
                className="scrollbar-hidden max-h-none overflow-y-visible pr-1 lg:h-full lg:overflow-y-auto lg:pr-6"
              >
                <ScrollArea.Content>
                  {steps.map((step, index) => {
                    const isActive = index === activeStep;

                    return (
                      <section
                        key={step.number}
                        ref={(element) => {
                          sectionRefs.current[index] = element;
                        }}
                        data-step-index={index}
                        className="flex min-h-[30rem] scroll-mt-28 flex-col justify-center py-6 first:pt-0 last:pb-0 lg:min-h-[36rem]"
                      >
                        <FadeInView>
                          <div className="max-w-3xl rounded-[2rem] bg-white/92 py-1">
                            <p
                              className={cn(
                                "text-sm font-medium uppercase tracking-[0.12em] transition-colors",
                                isActive ? "text-brand-700" : "text-gray-400",
                              )}
                            >
                              Paso {step.number}
                            </p>
                            <h3 className="mt-4 font-heading text-3xl font-semibold text-gray-900 text-balance sm:text-4xl">
                              {step.title}
                            </h3>
                            <p className="mt-5 text-lg leading-relaxed text-gray-600 text-pretty">
                              {step.intro}
                            </p>

                            <div className="mt-8 space-y-5">
                              {step.bullets.map((bullet) => (
                                <div key={bullet} className="pl-5">
                                  <p className="relative text-base leading-relaxed text-gray-700 text-pretty before:absolute before:left-[-1.25rem] before:top-[0.72rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500">
                                    {bullet}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <p className="mt-8 text-sm font-medium text-brand-700 text-pretty">
                              Resultado esperado: {step.outcome}
                            </p>
                          </div>
                        </FadeInView>
                      </section>
                    );
                  })}
                </ScrollArea.Content>
              </ScrollArea.Viewport>
            </ScrollArea.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
