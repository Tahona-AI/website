export type CaseStudy = {
  readonly id: string;
  readonly marker: string;
  readonly sector: string;
  readonly title: string;
  readonly summary: string;
  readonly visualSrc: string;
  readonly visualAlt: string;
  readonly bullets: readonly string[];
  readonly tags: readonly string[];
};

export const CASE_STUDIES = [
  {
    id: "plataforma-documental-operativa",
    marker: "01",
    sector: "Legal",
    title: "Plataforma documental y operativa",
    summary:
      "Diseño e implementación de una plataforma interna para coordinar procesos documentales, generación de borradores, validación humana, tareas repetibles y seguimiento operativo.",
    visualSrc: "/images/visual-case-legal-document-platform.png",
    visualAlt: "Visual 3D de plataforma documental",
    bullets: [
      "Flujos documentales con estados",
      "Generación de borradores",
      "Validación humana antes de cierre",
      "Tareas repetibles y seguimiento",
      "Trazabilidad de cambios",
      "Base operativa para documentación interna",
    ],
    tags: [
      "Procesamiento documental",
      "Herramientas internas",
      "Bases de conocimiento",
      "Validación humana",
    ],
  },
  {
    id: "planificacion-logistica-reporting",
    marker: "02",
    sector: "Logística",
    title: "Planificación logística y reporting",
    summary:
      "Sistemas para planificar rutas, importar datos operativos, coordinar eventos, revisar documentación logística y generar reporting útil para la operación.",
    visualSrc: "/images/visual-logistics.png",
    visualAlt: "Visual 3D de planificación logística",
    bullets: [
      "Planificación de rutas",
      "Importación de datos operativos",
      "Coordinación de eventos",
      "Revisión documental",
      "Reporting operativo",
      "Integración con herramientas existentes",
    ],
    tags: [
      "Optimización de procesos",
      "Integraciones / plataformas",
      "Procesamiento documental",
      "Reporting",
    ],
  },
  {
    id: "base-conocimiento-empresarial",
    marker: "03",
    sector: "Transversal",
    title: "Base de conocimiento empresarial",
    summary:
      "Capa de conocimiento interno agéntica con ingesta documental, procesamiento, fuentes citables, metadatos, permisos, evaluación, revisión humana e integración con herramientas internas.",
    visualSrc: "/images/visual-case-enterprise-knowledge.png",
    visualAlt: "Visual 3D de base de conocimiento enterprise",
    bullets: [
      "Ingesta documental",
      "Normalización y metadatos",
      "Fuentes citables",
      "Permisos y alcance",
      "Evaluación de respuestas",
      "Integración con herramientas internas",
    ],
    tags: [
      "Bases de conocimiento",
      "Procesamiento documental",
      "Permisos",
      "Trazabilidad",
    ],
  },
  {
    id: "documentacion-calidad-trazabilidad",
    marker: "04",
    sector: "Industria",
    title: "Documentación, calidad y trazabilidad",
    summary:
      "Flujos para ordenar documentación, validar información, mantener trazabilidad y generar reporting en procesos de calidad.",
    visualSrc: "/images/visual-case-appcc-quality.png",
    visualAlt: "Visual 3D de calidad y trazabilidad industrial",
    bullets: [
      "Orden documental",
      "APPCC",
      "Validación de información",
      "Trazabilidad de procesos",
      "Reporting de calidad",
      "Controles operativos",
      "Integración con sistemas existentes",
    ],
    tags: [
      "Herramientas internas",
      "Procesamiento documental",
      "Optimización de procesos",
      "Trazabilidad",
    ],
  },
] as const satisfies readonly CaseStudy[];
