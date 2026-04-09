"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";

interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly points: readonly string[];
  readonly tags: readonly string[];
}

const SERVICES: readonly ServiceItem[] = [
  {
    id: "agents",
    title: "Agentes de IA a medida",
    description:
      "Creamos agentes de inteligencia artificial especializados que trabajan de forma autónoma dentro de tus procesos de negocio. Estos agentes capturan el conocimiento de tus mejores empleados y lo aplican de manera consistente, escalable y disponible las 24 horas.",
    points: [
      "Agentes que comprenden el contexto específico de tu industria y empresa",
      "Supervisión humana configurable con reglas de negocio claras",
      "Integración nativa con tus herramientas existentes (CRM, ERP, email)",
      "Aprendizaje continuo basado en retroalimentación y casos reales",
    ],
    tags: ["Producción", "Escalabilidad", "Integración"],
  },
  {
    id: "automations",
    title: "Automatizaciones complejas",
    description:
      "Diseñamos y orquestamos flujos de trabajo automatizados que conectan múltiples departamentos, sistemas y fuentes de datos. Eliminamos los cuellos de botella donde la información se pierde o depende de intervención manual.",
    points: [
      "Orquestación de procesos de negocio de extremo a extremo",
      "Manejo inteligente de excepciones y casos borde",
      "Validaciones automáticas con reglas configurables por tu equipo",
      "Auditoría completa de cada decisión y acción tomada",
    ],
    tags: ["Eficiencia", "Trazabilidad", "Conectividad"],
  },
  {
    id: "strategy",
    title: "Consultoría en estrategia IA",
    description:
      "Te ayudamos a definir una hoja de ruta clara para adoptar la inteligencia artificial en tu organización. Analizamos tus procesos actuales, identificamos oportunidades de alto impacto y priorizamos iniciativas según viabilidad y retorno de inversión.",
    points: [
      "Diagnóstico operativo para identificar dónde la IA genera valor real",
      "Roadmap priorizado con fases de implementación y hitos medibles",
      "Evaluación de herramientas y tecnologías según tus necesidades específicas",
      "Acompañamiento en la toma de decisiones técnicas y de inversión",
    ],
    tags: ["Estrategia", "Priorización", "ROI"],
  },
  {
    id: "context",
    title: "Gestión del contexto empresarial",
    description:
      "Estructuramos la información y el conocimiento de tu empresa para que los sistemas de IA puedan utilizarlos efectivamente. Sin datos bien organizados, incluso la mejor inteligencia artificial produce resultados mediocres.",
    points: [
      "Diseño de arquitectura de información para consumo por agentes de IA",
      "Unificación de datos dispersos en diferentes sistemas y formatos",
      "Sistemas de recuperación de información inteligente (RAG avanzado)",
      "Actualización automática del conocimiento sin intervención manual",
    ],
    tags: ["Fundación", "Datos", "Contexto"],
  },
  {
    id: "architecture",
    title: "Arquitectura de datos para IA",
    description:
      "Construimos las infraestructuras de datos que hacen posibles los proyectos de inteligencia artificial a escala. Desde pipelines de ingestión hasta vectores stores optimizados, creamos la base técnica para que tus agentes accedan a la información correcta en el momento adecuado.",
    points: [
      "Diseño de pipelines de datos eficientes y mantenibles",
      "Implementación de vector stores y bases de datos vectoriales",
      "Integración con múltiples fuentes de datos (SQL, NoSQL, APIs, documentos)",
      "Monitoreo y optimización continua del rendimiento",
    ],
    tags: ["Infraestructura", "Escalabilidad", "Rendimiento"],
  },
  {
    id: "training",
    title: "Formación en sistemas IA",
    description:
      "Capacitamos a tus equipos en el uso avanzado de herramientas de inteligencia artificial como Claude Cowork y Openclaw. Transferimos conocimiento técnico y metodológico para que tu organización sea autosuficiente en la operación y evolución de los sistemas implementados.",
    points: [
      "Formación práctica en prompting avanzado y orquestación de agentes",
      "Workshops específicos para equipos técnicos y de negocio",
      "Documentación y playbooks adaptados a tus procesos internos",
      "Programas de mentoría para roles clave de tu organización",
    ],
    tags: ["Capacitación", "Autonomía", "Conocimiento"],
  },
  {
    id: "integration",
    title: "Integración de sistemas",
    description:
      "Conectamos tus herramientas actuales para que funcionen como un ecosistema cohesionado. ERP, CRM, hojas de cálculo, sistemas de comunicación y bases de datos operan en sincronía sin necesidad de cambiar lo que ya funciona en tu organización.",
    points: [
      "Conectores robustos para sistemas empresariales líderes del mercado",
      "Sincronización bidireccional de datos en tiempo real o por lotes",
      "Mapeo y transformación de datos entre formatos incompatibles",
      "Manejo de errores y reintentos automáticos para garantizar integridad",
    ],
    tags: ["Conectividad", "ERP", "CRM"],
  },
  {
    id: "documents",
    title: "Procesamiento documental con IA",
    description:
      "Automatizamos la extracción, clasificación y procesamiento de documentos de cualquier formato. Facturas, contratos, informes y comunicaciones se digitalizan estructuradamente, eliminando la entrada manual de datos y reduciendo errores de transcripción.",
    points: [
      "Extracción inteligente de datos desde PDFs, imágenes y escaneos",
      "Clasificación automática de documentos por tipo y contenido",
      "Validación de datos extraídos contra reglas de negocio configurables",
      "Archivado estructurado con búsqueda semántica habilitada",
    ],
    tags: ["Documentos", "Extracción", "Precisión"],
  },
];

function AgentIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="40" y="20" width="120" height="100" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <circle cx="70" cy="55" r="12" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M65 55L68 58L75 51" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="90" y="45" width="55" height="6" rx="3" fill="#16a34a" opacity="0.3" />
      <rect x="90" y="58" width="40" height="6" rx="3" fill="#16a34a" opacity="0.2" />
      <rect x="55" y="85" width="90" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
      <circle cx="70" cy="97" r="6" fill="#16a34a" opacity="0.3" />
      <rect x="82" y="93" width="50" height="4" rx="2" fill="#16a34a" opacity="0.3" />
      <rect x="82" y="100" width="35" height="3" rx="1.5" fill="#16a34a" opacity="0.2" />
      <circle cx="160" cy="40" r="20" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M152 40L157 45L168 34" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AutomationIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="60" width="50" height="40" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="75" y="60" width="50" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="130" y="60" width="50" height="40" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M70 80H75" stroke="#16a34a" strokeWidth="2" />
      <path d="M125 80H130" stroke="#16a34a" strokeWidth="2" />
      <circle cx="45" cy="80" r="8" fill="#16a34a" opacity="0.3" />
      <circle cx="100" cy="80" r="8" fill="#16a34a" opacity="0.5" />
      <circle cx="155" cy="80" r="8" fill="#16a34a" opacity="0.3" />
      <path d="M100 40V60" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d="M45 100V120" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d="M155 100V120" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2" />
      <rect x="75" y="25" width="50" height="20" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
      <rect x="20" y="125" width="50" height="20" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
      <rect x="130" y="125" width="50" height="20" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
    </svg>
  );
}

function StrategyIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="100" cy="60" r="35" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <circle cx="100" cy="60" r="25" fill="none" stroke="#16a34a" strokeWidth="1" strokeDasharray="4 2" />
      <circle cx="100" cy="60" r="15" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M95 60L98 63L105 56" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="30" y="110" width="45" height="30" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" />
      <rect x="77" y="110" width="45" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
      <rect x="125" y="110" width="45" height="30" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" />
      <path d="M52 110V95H100" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M100 95V110" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M147 110V95H100" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="52" cy="125" r="5" fill="#16a34a" opacity="0.4" />
      <circle cx="100" cy="125" r="5" fill="#16a34a" opacity="0.6" />
      <circle cx="147" cy="125" r="5" fill="#16a34a" opacity="0.4" />
    </svg>
  );
}

function ContextIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="70" y="20" width="60" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <circle cx="100" cy="40" r="10" fill="#16a34a" opacity="0.3" />
      <rect x="30" y="75" width="50" height="35" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" />
      <rect x="120" y="75" width="50" height="35" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" />
      <rect x="75" y="75" width="50" height="35" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" />
      <path d="M85 60V75" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M100 60V75" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M115 60V75" stroke="#16a34a" strokeWidth="1.5" />
      <circle cx="55" cy="92" r="6" fill="#16a34a" opacity="0.3" />
      <circle cx="100" cy="92" r="6" fill="#16a34a" opacity="0.5" />
      <circle cx="145" cy="92" r="6" fill="#16a34a" opacity="0.3" />
      <rect x="55" y="125" width="90" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
      <circle cx="70" cy="137" r="5" fill="#16a34a" opacity="0.4" />
      <rect x="82" y="134" width="50" height="3" rx="1.5" fill="#16a34a" opacity="0.3" />
    </svg>
  );
}

function ArchitectureIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="25" width="55" height="40" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="125" y="25" width="55" height="40" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="72" y="90" width="55" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M47 65V75H72" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M152 65V75H127" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="47" cy="45" r="8" fill="#16a34a" opacity="0.3" />
      <circle cx="152" cy="45" r="8" fill="#16a34a" opacity="0.3" />
      <circle cx="100" cy="112" r="10" fill="#16a34a" opacity="0.4" />
      <rect x="28" y="35" width="40" height="4" rx="2" fill="#16a34a" opacity="0.3" />
      <rect x="28" y="44" width="30" height="3" rx="1.5" fill="#16a34a" opacity="0.2" />
      <rect x="133" y="35" width="40" height="4" rx="2" fill="#16a34a" opacity="0.3" />
      <rect x="133" y="44" width="30" height="3" rx="1.5" fill="#16a34a" opacity="0.2" />
    </svg>
  );
}

function TrainingIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="40" y="30" width="120" height="100" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="55" y="45" width="90" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
      <circle cx="70" cy="57" r="6" fill="#16a34a" opacity="0.4" />
      <rect x="82" y="53" width="50" height="3" rx="1.5" fill="#16a34a" opacity="0.3" />
      <rect x="82" y="60" width="35" height="3" rx="1.5" fill="#16a34a" opacity="0.2" />
      <rect x="55" y="80" width="90" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
      <rect x="65" y="90" width="70" height="4" rx="2" fill="#16a34a" opacity="0.3" />
      <rect x="65" y="100" width="55" height="4" rx="2" fill="#16a34a" opacity="0.2" />
      <rect x="65" y="110" width="40" height="4" rx="2" fill="#16a34a" opacity="0.15" />
      <circle cx="165" cy="45" r="15" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M160 45L163 48L170 41" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntegrationIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="25" y="50" width="45" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="77" y="50" width="45" height="60" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="130" y="50" width="45" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M70 80H77" stroke="#16a34a" strokeWidth="3" />
      <path d="M122 80H130" stroke="#16a34a" strokeWidth="3" />
      <circle cx="47" cy="70" r="6" fill="#16a34a" opacity="0.4" />
      <circle cx="100" cy="70" r="6" fill="#16a34a" opacity="0.6" />
      <circle cx="152" cy="70" r="6" fill="#16a34a" opacity="0.4" />
      <path d="M47 80V95" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M100 80V95" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M152 80V95" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="35" y="100" width="25" height="8" rx="2" fill="#16a34a" opacity="0.3" />
      <rect x="87" y="100" width="25" height="8" rx="2" fill="#16a34a" opacity="0.3" />
      <rect x="140" y="100" width="25" height="8" rx="2" fill="#16a34a" opacity="0.3" />
    </svg>
  );
}

function DocumentIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="50" y="20" width="70" height="90" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="60" y="35" width="50" height="4" rx="2" fill="#16a34a" opacity="0.3" />
      <rect x="60" y="45" width="40" height="3" rx="1.5" fill="#16a34a" opacity="0.2" />
      <rect x="60" y="52" width="45" height="3" rx="1.5" fill="#16a34a" opacity="0.2" />
      <rect x="60" y="65" width="50" height="3" rx="1.5" fill="#16a34a" opacity="0.2" />
      <rect x="60" y="72" width="35" height="3" rx="1.5" fill="#16a34a" opacity="0.2" />
      <rect x="60" y="85" width="30" height="3" rx="1.5" fill="#16a34a" opacity="0.15" />
      <circle cx="130" cy="50" r="25" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <path d="M120 50L126 56L140 42" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="110" y="85" width="55" height="50" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
      <rect x="120" y="95" width="35" height="3" rx="1.5" fill="#16a34a" opacity="0.3" />
      <rect x="120" y="105" width="30" height="3" rx="1.5" fill="#16a34a" opacity="0.2" />
      <rect x="120" y="115" width="25" height="3" rx="1.5" fill="#16a34a" opacity="0.15" />
    </svg>
  );
}

const ILLUSTRATIONS: Record<string, React.FC> = {
  agents: AgentIllustration,
  automations: AutomationIllustration,
  strategy: StrategyIllustration,
  context: ContextIllustration,
  architecture: ArchitectureIllustration,
  training: TrainingIllustration,
  integration: IntegrationIllustration,
  documents: DocumentIllustration,
};

export function Services() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const activeService = SERVICES.find((s) => s.id === activeId);

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
              <span className="font-medium text-gray-600">Servicios</span>
            </div>
            <h2 className="mt-4 max-w-4xl font-heading text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
              Production AI que encaja en tu operativa
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-500">
              Desde agentes que trabajan de forma autónoma hasta la arquitectura de datos que los hace posibles.
            </p>
          </FadeInView>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <FadeInView delay={0.1}>
              <div className="space-y-4">
                {SERVICES.map((service) => {
                  const isActive = activeId === service.id;

                  return (
                    <div
                      key={service.id}
                      className={cn(
                        "overflow-hidden rounded-[1.75rem] border backdrop-blur-md transition-all duration-200",
                        isActive
                          ? "border-white/75 bg-white/88 shadow-[0_30px_80px_-40px_rgba(31,31,31,0.48)]"
                          : "border-white/65 bg-white/72 shadow-[0_22px_60px_-46px_rgba(31,31,31,0.42)] hover:border-brand-200/70 hover:bg-white/84 hover:shadow-[0_28px_70px_-44px_rgba(31,31,31,0.45)]"
                      )}
                    >
                      <button
                        onClick={() => handleToggle(service.id)}
                        className="flex w-full cursor-pointer items-center justify-between px-5 py-5 text-left sm:px-6"
                        aria-expanded={isActive}
                      >
                        <div>
                          <span
                            className={cn(
                              "font-heading text-base font-semibold sm:text-lg",
                              isActive ? "text-brand-700" : "text-gray-900"
                            )}
                          >
                            {service.title}
                          </span>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className={cn(
                                  "rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.02em]",
                                  isActive
                                    ? "border-brand-100 bg-brand-50/90 text-brand-700"
                                    : "border-gray-200 bg-white/78 text-gray-500"
                                )}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span
                          className={cn(
                            "ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors",
                            isActive
                              ? "border-brand-100 bg-brand-50 text-brand-600"
                              : "border-gray-200 bg-white/86 text-gray-500"
                          )}
                        >
                          {isActive ? (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          )}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-white/70 bg-gradient-to-b from-white/34 to-white/12 px-5 pb-5 pt-4 sm:px-6">
                              <p className="text-sm leading-7 text-gray-600">
                                {service.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="sticky top-28">
                <AnimatePresence mode="wait">
                  {activeService ? (
                    <motion.div
                      key={activeService.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-[2rem] border border-white/75 bg-white/84 p-6 shadow-[0_30px_80px_-40px_rgba(31,31,31,0.45)] backdrop-blur-md lg:p-8"
                    >
                      <div className="inline-flex items-center gap-3 text-sm text-gray-500">
                        <span className="h-px w-10 bg-brand-300" />
                        <span className="font-medium text-gray-600">Caso de uso</span>
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-bold text-gray-900 lg:text-2xl">
                        {activeService.title}
                      </h3>

                      <p className="mt-4 text-base leading-8 text-gray-500">
                        {activeService.description}
                      </p>

                      <div className="mt-7 space-y-2.5">
                        {activeService.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 rounded-2xl border border-white/75 bg-white/74 px-4 py-2.5 shadow-[0_22px_55px_-46px_rgba(31,31,31,0.48)]"
                          >
                            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                            <p className="text-sm leading-6 text-gray-700">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 rounded-[1.75rem] border border-white/75 bg-gradient-to-br from-white via-white/86 to-brand-50/70 p-6">
                        <div className="mx-auto h-32 w-full max-w-[200px]">
                          {(() => {
                            const Illustration =
                              ILLUSTRATIONS[activeService.id] || AgentIllustration;
                            return <Illustration />;
                          })()}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-2">
                          {activeService.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-brand-100 bg-brand-50/90 px-3 py-1 text-xs font-medium text-brand-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href="#contacto"
                          className="flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
                        >
                          Solicitar información
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-[2rem] border border-white/75 bg-white/78 p-8 text-center shadow-[0_30px_80px_-40px_rgba(31,31,31,0.45)] backdrop-blur-md"
                    >
                      <div className="mb-5 rounded-full border border-brand-100 bg-brand-50 p-4 shadow-[0_18px_40px_-28px_rgba(36,88,64,0.35)]">
                        <svg
                          className="h-8 w-8 text-brand-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 6h16M4 12h16M4 18h7"
                          />
                        </svg>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-gray-900">
                        Explore nuestros servicios
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-gray-500">
                        Haz clic en cualquiera de los servicios de la izquierda para ver los detalles, capacidades y cómo pueden aplicarse a tu negocio.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
