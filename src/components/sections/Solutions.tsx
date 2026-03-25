"use client";

import type { ReactNode } from "react";
import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";

interface SolutionCard {
  readonly title: string;
  readonly description: string;
  readonly note: string;
  readonly size: "large" | "small";
  readonly visual: ReactNode;
}

function ImageVisual({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size: "large" | "small";
}) {
  return (
    <div className="flex h-full items-center justify-center overflow-hidden bg-white">
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-full w-full max-w-none object-contain object-center",
          size === "large"
            ? "scale-[1.26] sm:scale-[1.3]"
            : "scale-[1.22] sm:scale-[1.26]",
        )}
        loading="lazy"
      />
    </div>
  );
}

const SOLUTION_CARDS: readonly SolutionCard[] = [
  {
    title: "Agentes de IA a medida",
    description:
      "Creamos agentes especializados para tareas de soporte, control y seguimiento que se integran en tus flujos de trabajo reales.",
    note: "Con supervisión humana configurable y reglas de negocio claras.",
    size: "large",
    visual: <ImageVisual size="large" src="/images/solutions/agents-orchestration.svg" alt="Ilustración de agentes de IA a medida conectando soporte, control y seguimiento" />,
  },
  {
    title: "Automatización de procesos",
    description:
      "Orquestamos tareas repetitivas entre equipos y sistemas para que las operaciones avancen sin cuellos de botella.",
    note: "Empieza en pequeño, escala con resultados medibles.",
    size: "large",
    visual: <ImageVisual size="large" src="/images/solutions/process-automation.svg" alt="Ilustración de automatización de procesos con entrada, validación, acción y confirmación" />,
  },
  {
    title: "Integración de sistemas",
    description:
      "Conectamos ERP, CRM, hojas de cálculo y canales internos sin necesidad de cambiar tus sistemas actuales.",
    note: "Sin migraciones traumáticas ni interrupciones del negocio.",
    size: "small",
    visual: <ImageVisual size="small" src="/images/solutions/systems-integration.svg" alt="Ilustración de integración de sistemas con ERP, correo, hojas de cálculo y BI" />,
  },
  {
    title: "Arquitectura de contexto",
    description:
      "Estructuramos la información y conocimiento de tu empresa para que los sistemas de IA puedan utilizarlos efectivamente.",
    note: "La base técnica que hace posible la inteligencia artificial.",
    size: "small",
    visual: <ImageVisual size="small" src="/images/solutions/traceability-appcc.svg" alt="Ilustración de arquitectura de contexto empresarial" />,
  },
  {
    title: "Procesamiento documental",
    description:
      "Automatizamos la extracción, validación y registro de información desde documentos de cualquier formato.",
    note: "Facturas, contratos y documentos con trazabilidad desde el primer día.",
    size: "small",
    visual: <ImageVisual size="small" src="/images/solutions/document-processing.svg" alt="Ilustración de procesamiento documental con extracción de datos" />,
  },
];

export function Solutions() {
  return (
    <section id="soluciones" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
            <span className="h-px w-10 bg-brand-300" />
            <span className="font-medium text-gray-600">Nuestros Servicios</span>
          </div>
        </FadeInView>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <FadeInView className="lg:col-span-7">
            <h2 className="font-heading text-3xl font-semibold text-gray-900 text-balance sm:text-4xl md:text-5xl">
              Sistemas de IA que operan en producción desde el primer día
            </h2>
          </FadeInView>
          <FadeInView delay={0.1} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-gray-600 text-pretty md:text-lg">
              Tahona actúa como partner tecnológico: diagnosticamos primero, construimos sobre tus sistemas actuales y desplegamos por etapas para demostrar valor temprano con riesgo controlado.
            </p>
          </FadeInView>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {SOLUTION_CARDS.map((card, index) => (
            <FadeInView
              key={card.title}
              delay={0.12 + index * 0.06}
              className={cn(
                card.size === "large"
                  ? "md:col-span-1 lg:col-span-3"
                  : "md:col-span-1 lg:col-span-2",
              )}
            >
              <article className="group flex h-full flex-col border border-gray-200 bg-white p-7 shadow-sm transition-colors hover:border-brand-200 sm:p-8">
                <div className="mb-7 overflow-hidden">
                  <div className={cn(card.size === "large" ? "h-72 sm:h-80 lg:h-[22rem]" : "h-56 sm:h-60 lg:h-64")}>{card.visual}</div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 text-balance">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 text-pretty sm:text-base">{card.description}</p>
                <p className="mt-4 border-l-2 border-brand-300 pl-3 text-sm text-gray-700 text-pretty">{card.note}</p>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
