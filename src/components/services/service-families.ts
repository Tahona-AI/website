export type ServiceItem = {
  readonly id: string;
  readonly title: string;
  readonly menuLabel: string;
  readonly summary: string;
  readonly bullets: readonly string[];
};

export type ServiceFamily = {
  readonly id: string;
  readonly marker: string;
  readonly title: string;
  readonly description: string;
  readonly visualSrc: string;
  readonly visualScaleClass: string;
  readonly services: readonly ServiceItem[];
};

export const SERVICE_FAMILIES = [
  {
    id: "fundamentos",
    marker: "01",
    title: "Fundamentos",
    description:
      "Antes de construir se ordena el problema. Diagnóstico, estrategia y conocimiento interno para tomar decisiones técnicas con contexto.",
    visualSrc: "/images/service1-illustration.png",
    visualScaleClass: "scale-[1.08]",
    services: [
      {
        id: "consultoria-auditoria-operativa",
        title: "Consultoría y auditoría operativa",
        menuLabel: "Consultoría",
        summary:
          "Revisión de procesos, herramientas, documentos, datos y dependencias internas para entender dónde se pierde claridad, control o capacidad operativa.",
        bullets: [
          "Mapa del proceso actual",
          "Inventario de trabajo manual y bloqueos",
          "Riesgos, dependencias y prioridades",
          "Recomendación de siguientes pasos",
        ],
      },
      {
        id: "estrategia-tecnica-operativa",
        title: "Estrategia técnica y operativa",
        menuLabel: "Estrategia",
        summary:
          "Hoja de ruta para decidir qué implementar, en qué orden y con qué restricciones. Sirve cuando el equipo necesita claridad antes de invertir en desarrollo.",
        bullets: [
          "Roadmap por fases",
          "Alcance funcional y técnico",
          "Criterios de decisión",
          "Riesgos de adopción, datos e integración",
        ],
      },
      {
        id: "bases-conocimiento-enterprise",
        title: "Bases de conocimiento enterprise",
        menuLabel: "Bases de conocimiento",
        summary:
          "Infraestructura de conocimiento y contexto interno para consultar documentos, datos y contexto de empresa con fuentes, permisos, evaluación y revisión humana.",
        bullets: [
          "Ingesta documental y normalización",
          "Respuestas con citas y trazabilidad",
          "Diseño de permisos y alcance",
          "Integración con Drive, CRM, ERP y reporting",
        ],
      },
    ],
  },
  {
    id: "desarrollo-ia",
    marker: "02",
    title: "Desarrollo de IA",
    description:
      "La IA entra cuando mejora un flujo concreto. El diseño incluye límites, supervisión, fuentes, trazabilidad y adopción.",
    visualSrc: "/images/service2-illustration.png",
    visualScaleClass: "scale-[1.1]",
    services: [
      {
        id: "optimizacion-procesos",
        title: "Optimización de procesos",
        menuLabel: "Optimización de procesos",
        summary:
          "Mejora de flujos operativos con reglas, automatización, modelos o software cuando reducen pasos manuales y encajan con las herramientas existentes.",
        bullets: [
          "Simplificación del flujo antes de automatizar",
          "Automatizaciones con revisión donde haga falta",
          "Integraciones entre herramientas",
          "Medición operativa y ajustes",
        ],
      },
      {
        id: "agentes-ia",
        title: "Agentes de IA",
        menuLabel: "Agentes de IA",
        summary:
          "Agentes conectados a herramientas internas para tareas acotadas: buscar información, preparar trabajo, ejecutar pasos repetibles o coordinar un flujo con supervisión.",
        bullets: [
          "Definición de tarea, límites y permisos",
          "Herramientas y fuentes disponibles",
          "Trazabilidad de las acciones",
          "Revisión humana y escalado",
        ],
      },
      {
        id: "procesamiento-documental",
        title: "Procesamiento documental",
        menuLabel: "Procesamiento documental",
        summary:
          "Extracción, clasificación, validación y revisión asistida de documentos para convertir información dispersa en flujos operativos útiles.",
        bullets: [
          "Ingesta de PDFs, hojas, correos o formularios",
          "Extracción de campos y validación con reglas",
          "Clasificación, enrutado y generación de borradores",
          "Revisión humana e inserción en CRM o ERP",
        ],
      },
    ],
  },
  {
    id: "otros-desarrollos",
    marker: "03",
    title: "Otros desarrollos",
    description:
      "Muchas mejoras no necesitan solo IA. Necesitan una herramienta clara, una integración fiable o una plataforma interna que encaje con la forma real de trabajar.",
    visualSrc: "/images/service3-illustration.png",
    visualScaleClass: "scale-[1.12]",
    services: [
      {
        id: "herramientas-medida",
        title: "Herramientas a medida",
        menuLabel: "Herramientas a medida",
        summary:
          "Software construido alrededor de un proceso concreto, con la complejidad justa y sobre los datos y restricciones reales de la operación.",
        bullets: [
          "Aplicaciones internas",
          "Paneles operativos",
          "Flujos de aprobación",
          "Gestión documental o administrativa",
        ],
      },
      {
        id: "herramientas-internas",
        title: "Herramientas internas",
        menuLabel: "Herramientas internas",
        summary:
          "Sistemas para centralizar tareas, información y decisiones que hoy viven en Excel, correo, Drive, WhatsApp o herramientas inconexas.",
        bullets: [
          "Backoffice operativo",
          "Panel de seguimiento",
          "Formularios y workflows internos",
          "Control de estado, alertas y reporting",
        ],
      },
      {
        id: "integraciones-plataformas-operativas",
        title: "Integraciones y plataformas operativas",
        menuLabel: "Integraciones / plataformas",
        summary:
          "Conexión entre Drive, CRM, ERP, hojas de cálculo, APIs, reporting y sistemas internos para evitar duplicidades y trabajo manual.",
        bullets: [
          "Sincronización de datos",
          "Conectores entre herramientas",
          "Automatización de handoffs",
          "Monitorización básica y control de errores",
        ],
      },
    ],
  },
] as const satisfies readonly ServiceFamily[];
