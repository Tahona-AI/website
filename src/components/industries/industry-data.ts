export type IndustryItem = {
  readonly id: string;
  readonly marker: string;
  readonly title: string;
  readonly summary: string;
  readonly description: string;
  readonly visualSrc: string;
  readonly visualAlt: string;
  readonly bullets: readonly string[];
  readonly relatedServices: readonly string[];
};

export const INDUSTRY_ITEMS = [
  {
    id: "logistica",
    marker: "01",
    title: "Logística",
    summary:
      "Planificación, rutas, documentación logística, eventos operativos, reporting e integración con herramientas de operación.",
    description:
      "En logística aparecen rutas, planificación, eventos, documentación de transporte, datos de operación, reporting y coordinación entre herramientas. Trabajamos sobre ingesta de datos, optimización operativa, procesamiento documental, mapas, reporting e integración con los sistemas existentes.",
    visualSrc: "/images/visual-logistics.png",
    visualAlt: "Visual 3D de operación logística",
    bullets: [
      "Optimización de rutas y planificación",
      "Documentación logística y procesamiento de archivos",
      "Reporting de servicio",
      "Gestión de flotas",
      "Eventos operativos y seguimiento",
      "Integración con herramientas, APIs y hojas",
    ],
    relatedServices: [
      "Optimización de procesos",
      "Herramientas a medida",
      "Integraciones / plataformas",
      "Procesamiento documental",
    ],
  },
  {
    id: "industria",
    marker: "02",
    title: "Industria",
    summary:
      "Calidad, documentación, trazabilidad, procesos internos, reporting y herramientas para coordinar el trabajo operativo.",
    description:
      "En entornos industriales y de operación aparecen controles de calidad, documentación recurrente, trazabilidad, coordinación entre equipos y reporting. Trabajamos sobre herramientas internas, flujos documentales, bases de conocimiento, integraciones y automatización.",
    visualSrc: "/images/visual-industry-manufacturing.png",
    visualAlt: "Visual 3D de operación industrial",
    bullets: [
      "Calidad y documentación",
      "Gestión de stock",
      "Herramientas internas e integraciones",
      "Trazabilidad de procesos",
      "Reporting operativo",
      "Trazabilidad APPCC como patrón",
    ],
    relatedServices: [
      "Procesamiento documental",
      "Herramientas internas",
      "Optimización de procesos",
      "Integraciones / plataformas",
    ],
  },
  {
    id: "legal",
    marker: "03",
    title: "Legal",
    summary:
      "Flujos documentales, generación y revisión de documentos, automatización administrativa y validación humana.",
    description:
      "Muchos procesos legales y administrativos combinan documentos, datos, plantillas, revisión, comunicación y seguimiento. Podemos construir flujos para generar, revisar, clasificar y coordinar documentos sin eliminar los puntos de validación humana.",
    visualSrc: "/images/visual-industry-legal.png",
    visualAlt: "Visual 3D de documentación legal",
    bullets: [
      "Generación y revisión de documentos",
      "Procesamiento documental",
      "Herramientas internas para seguimiento",
      "Flujos administrativos",
      "Validación humana",
      "Trazabilidad del flujo",
    ],
    relatedServices: [
      "Procesamiento documental",
      "Herramientas internas",
      "Optimización de procesos",
      "Bases de conocimiento",
    ],
  },
  {
    id: "seguros",
    marker: "04",
    title: "Seguros",
    summary:
      "Captación, cualificación, CRM, cotización, seguimiento, documentación y reporting comercial.",
    description:
      "En seguros, la operación comercial depende de captación, cualificación, documentación, cotización, CRM, seguimiento y reporting. Podemos conectar esas piezas con herramientas internas, automatización supervisada y flujos de información más claros.",
    visualSrc: "/images/visual-industry-insurance.png",
    visualAlt: "Visual 3D de operación de seguros",
    bullets: [
      "Captación y cualificación",
      "CRM y cotización",
      "Reporting y control operativo",
      "Seguimiento comercial",
      "Documentación y handoffs",
      "Automatización supervisada",
    ],
    relatedServices: [
      "Optimización de procesos",
      "Integraciones / plataformas",
      "Herramientas internas",
      "Agentes de IA",
    ],
  },
  {
    id: "marketing-growth",
    marker: "05",
    title: "Marketing y growth",
    summary:
      "Lead ops, captación, cualificación, reporting, CRM, herramientas internas y coordinación comercial.",
    description:
      "No prestamos servicios de agencia de marketing. El encaje está en la operación: captación, lead ops, cualificación, CRM, reporting, herramientas internas y coordinación de campañas o procesos comerciales.",
    visualSrc: "/images/visual-industry-marketing.png",
    visualAlt: "Visual 3D de operación de marketing y growth",
    bullets: [
      "Captación y formularios",
      "Automatizaciones",
      "Reporting comercial",
      "Lead ops y cualificación",
      "Integración con CRM y seguimiento",
      "Herramientas internas",
    ],
    relatedServices: [
      "Optimización de procesos",
      "Integraciones / plataformas",
      "Herramientas internas",
      "Agentes de IA",
    ],
  },
  {
    id: "salud",
    marker: "06",
    title: "Salud",
    summary:
      "Soporte operativo, documentación, conocimiento interno y PoCs no clínicos, sin claims diagnósticos o regulatorios.",
    description:
      "En salud solo trabajamos sobre capas operativas no clínicas: documentación, conocimiento interno, coordinación, reporting y PoCs de apoyo administrativo. No planteamos claims diagnósticos, regulatorios ni de dispositivo médico.",
    visualSrc: "/images/visual-industry-health.png",
    visualAlt: "Visual 3D de operación de salud no clínica",
    bullets: [
      "Documentación operativa",
      "Conocimiento interno",
      "Coordinación administrativa",
      "PoCs no clínicos",
      "Reporting interno",
      "Validación y revisión humana",
    ],
    relatedServices: [
      "Bases de conocimiento",
      "Procesamiento documental",
      "Herramientas internas",
      "Integraciones / plataformas",
    ],
  },
] as const satisfies readonly IndustryItem[];
