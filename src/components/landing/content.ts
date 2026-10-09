/**
 * Copy for the single-page landing (Spanish).
 *
 * Voice: neutral corporate Spanish, no "tú"/"usted"; Tahona as an end-to-end
 * technology partner with three first-class capabilities. Every figure here must
 * be confirmed by the Tahona team before publishing (see KPI notes).
 *
 * Section ids are part of the contract: the navbar, CTAs and in-page links all
 * point at `LANDING_SECTIONS`.
 */

import type { IconSlot, Visual } from "@/components/landing/visuals";

export const LANDING_SECTIONS = {
  hero: "inicio",
  capabilities: "capacidades",
  engagement: "colaboracion",
  about: "nosotros",
  cases: "casos",
  industries: "industrias",
  method: "metodo",
  team: "equipo",
  faq: "preguntas",
  contact: "contacto",
} as const;

export type SectionId = (typeof LANDING_SECTIONS)[keyof typeof LANDING_SECTIONS];

export const sectionHref = (id: SectionId): `#${SectionId}` => `#${id}`;

type SectionHeading = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
};

type NavItem = { readonly label: string; readonly section: SectionId };

export const navigation = {
  items: [
    { label: "Capacidades", section: LANDING_SECTIONS.capabilities },
    { label: "Colaboración", section: LANDING_SECTIONS.engagement },
    { label: "Casos", section: LANDING_SECTIONS.cases },
    { label: "Industrias", section: LANDING_SECTIONS.industries },
    { label: "Equipo", section: LANDING_SECTIONS.team },
  ],
  contactLabel: "Hablemos",
  openMenuLabel: "Abrir menú",
  closeMenuLabel: "Cerrar menú",
  homeLabel: "Tahona, inicio",
} as const satisfies {
  readonly items: readonly NavItem[];
  readonly contactLabel: string;
  readonly openMenuLabel: string;
  readonly closeMenuLabel: string;
  readonly homeLabel: string;
};

export const hero = {
  eyebrow: "Partner tecnológico de principio a fin",
  titleLead: "Tecnología que impulsa",
  titleAccent: "el negocio.",
  description:
    "Estrategia, producto, software e inteligencia artificial en un mismo equipo. De la primera decisión a la solución que se usa cada día.",
  primary: { label: "Hablemos de un reto", section: LANDING_SECTIONS.contact },
  secondary: { label: "Ver capacidades", section: LANDING_SECTIONS.capabilities },
  values: ["Cercanía", "Agilidad", "Confianza"],
  visual: {
    kind: "ready",
    src: "/images/landing/olive-dither-green.webp",
    alt: "Olivo mediterráneo en un paisaje de colinas, con textura dither verde",
  },
} as const satisfies {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleAccent: string;
  readonly description: string;
  readonly primary: NavItem;
  readonly secondary: NavItem;
  readonly values: readonly string[];
  readonly visual: Visual;
};

/**
 * KPI figures. `value` is animated from 0 on first view; `prefix`/`suffix` stay
 * static. All four must be validated by the team before going live.
 */
export type Kpi = {
  readonly value: number;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly label: string;
  readonly detail: string;
};

export const proof = {
  eyebrow: "Tahona en cifras",
  statementLead: "Un equipo senior que entiende el negocio.",
  statementTail: "Decidimos con criterio técnico y construimos lo que se va a usar cada día.",
  kpis: [
    {
      value: 10,
      prefix: "+",
      label: "años de experiencia combinada",
      detail: "En ingeniería de software, datos e inteligencia artificial.",
    },
    {
      value: 100,
      suffix: " %",
      label: "de retención de clientes",
      detail: "Los clientes con los que empezamos siguen trabajando con Tahona.",
    },
    {
      value: 3,
      label: "capacidades en un mismo equipo",
      detail: "Estrategia, inteligencia artificial y producto y software.",
    },
    {
      value: 0,
      label: "intermediarios",
      detail: "Interlocución directa con quien diseña y construye la solución.",
    },
  ],
} as const satisfies {
  readonly eyebrow: string;
  readonly statementLead: string;
  readonly statementTail: string;
  readonly kpis: readonly Kpi[];
};

export type Capability = {
  readonly marker: string;
  readonly title: string;
  readonly tagline: string;
  readonly description: string;
  readonly services: readonly string[];
  readonly icon: IconSlot;
  readonly visual: Visual;
};

export const capabilities = {
  heading: {
    eyebrow: "Capacidades",
    titleLead: "Una visión integral.",
    titleMuted: "Un impacto concreto.",
    description:
      "Entendemos los procesos, definimos lo que hace falta y lo construimos. Tres capacidades al mismo nivel que se combinan según el reto.",
  },
  ctaLabel: "Hablemos de un reto",
  items: [
    {
      marker: "01",
      title: "Estrategia y arquitectura",
      tagline: "Decidir bien antes de construir.",
      description:
        "Diagnóstico de procesos y sistemas, prioridades claras y una hoja de ruta sobre la tecnología que ya existe. También como dirección tecnológica continua.",
      services: [
        "Diagnóstico y definición",
        "Estrategia de producto y tecnología",
        "Arquitectura y hoja de ruta",
        "CTO y AI engineer fractional",
      ],
      icon: {
        kind: "ready",
        slot: "icon-strategy",
        src: "/images/landing/icons/icon-strategy.webp",
      },
      visual: {
        kind: "ready",
        src: "/images/landing/capability-strategy.webp",
        alt: "Mapa de decisiones con caminos que convergen en una ruta, en dither verde",
      },
    },
    {
      marker: "02",
      title: "Inteligencia artificial",
      tagline: "IA con contexto, evaluación y supervisión.",
      description:
        "Llevamos la IA al trabajo diario con el contexto de cada empresa, criterios de evaluación claros y revisión humana donde hace falta.",
      services: [
        "Soluciones y productos con IA",
        "Agentes y automatización",
        "Procesamiento documental y conocimiento",
      ],
      icon: {
        kind: "ready",
        slot: "icon-ai",
        src: "/images/landing/icons/icon-ai.webp",
      },
      visual: {
        kind: "ready",
        src: "/images/landing/dither-knowledge.webp",
        alt: "Esfera central conectada a varios documentos, ilustración dither verde",
      },
    },
    {
      marker: "03",
      title: "Producto y software",
      tagline: "Herramientas que el equipo usa cada día.",
      description:
        "Diseñamos y construimos productos digitales y software a medida que conectan personas, información y procesos con los sistemas existentes.",
      services: [
        "Productos digitales",
        "Software a medida",
        "Integraciones y plataformas",
      ],
      icon: {
        kind: "ready",
        slot: "icon-product",
        src: "/images/landing/icons/icon-product.webp",
      },
      visual: {
        kind: "ready",
        src: "/images/landing/capability-product.webp",
        alt: "Interfaces apiladas y unidas por conectores, en dither verde",
      },
    },
  ],
} as const satisfies {
  readonly heading: Omit<SectionHeading, "title"> & {
    readonly titleLead: string;
    readonly titleMuted: string;
  };
  readonly ctaLabel: string;
  readonly items: readonly Capability[];
};

export type EngagementMode = {
  readonly marker: string;
  readonly title: string;
  readonly tag: string;
  readonly description: string;
  readonly fit: string;
  readonly icon: IconSlot;
};

export const engagement = {
  heading: {
    eyebrow: "Modelos de colaboración",
    title: "Tres formas de trabajar juntos. El mismo criterio.",
    description:
      "Cada organización necesita algo distinto: un proyecto con un resultado acordado, un producto que evoluciona o capacidad senior dentro de su equipo.",
  },
  fitLabel: "Encaja cuando",
  items: [
    {
      marker: "01",
      title: "Proyecto",
      tag: "Orientado a resultado",
      description:
        "Alcance, criterios de éxito y entregables definidos desde el inicio. Un equipo completo que diseña, construye e integra hasta la puesta en uso.",
      fit: "El reto está acotado y el resultado se puede medir.",
      icon: {
        kind: "ready",
        slot: "icon-mode-project",
        src: "/images/landing/icons/icon-mode-project.webp",
      },
    },
    {
      marker: "02",
      title: "Producto",
      tag: "Evolución continua",
      description:
        "Diseño, construcción y evolución de un producto digital o sistema interno en ciclos cortos, con prioridades compartidas y avances visibles.",
      fit: "La solución tiene que crecer con el negocio y sus usuarios.",
      icon: {
        kind: "ready",
        slot: "icon-mode-product",
        src: "/images/landing/icons/icon-mode-product.webp",
      },
    },
    {
      marker: "03",
      title: "Capacidad senior integrada",
      tag: "CTO o AI engineer fractional",
      description:
        "Un perfil senior que se incorpora al equipo con dedicación parcial: dirección técnica, decisiones de arquitectura e implantación de IA sin contratar a tiempo completo.",
      fit: "Hace falta criterio técnico continuo más que un proyecto cerrado.",
      icon: {
        kind: "ready",
        slot: "icon-mode-fractional",
        src: "/images/landing/icons/icon-mode-fractional.webp",
      },
    },
  ],
  note:
    "En procesos acotados y medibles, el alcance puede incluir la operación acordada y la gestión de excepciones.",
} as const satisfies {
  readonly heading: SectionHeading;
  readonly fitLabel: string;
  readonly items: readonly EngagementMode[];
  readonly note: string;
};

export const about = {
  eyebrow: "Sobre Tahona",
  title: "La tecnología se construye con las personas.",
  lead:
    "Tahona es un partner tecnológico que une estrategia, producto, software e inteligencia artificial para construir soluciones que se utilizan cada día.",
  body:
    "Escuchamos antes de proponer. Trabajamos junto al equipo del cliente, compartimos los avances y explicamos cada decisión. Importa tanto lo que se construye como la confianza con la que se pone en marcha.",
  principles: [
    {
      numeral: "I",
      title: "Cercanía",
      description: "Interlocución directa con el equipo que diseña y construye la solución.",
    },
    {
      numeral: "II",
      title: "Agilidad",
      description: "Avances frecuentes para probar, decidir y ajustar sobre trabajo real.",
    },
    {
      numeral: "III",
      title: "Confianza",
      description: "Alcance claro, decisiones compartidas y revisión humana.",
    },
  ],
  visual: {
    kind: "ready",
    src: "/images/landing/patio-andaluz-dither.webp",
    alt: "Patio andaluz con arcos encalados y un naranjo, con textura dither verde",
  },
  visualCaption: "Cercanía, agilidad y confianza.",
  visualCta: { label: "Conocer al equipo", section: LANDING_SECTIONS.team },
} as const satisfies {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly body: string;
  readonly principles: readonly {
    readonly numeral: string;
    readonly title: string;
    readonly description: string;
  }[];
  readonly visual: Visual;
  readonly visualCaption: string;
  readonly visualCta: NavItem;
};

export const method = {
  heading: {
    eyebrow: "Cómo trabajamos",
    title: "De la estrategia a la implementación.",
    description:
      "Un diagnóstico inicial, prioridades claras y avances visibles. Un equipo con el que se puede hablar en cada etapa.",
  },
  steps: [
    {
      title: "Diagnóstico",
      description:
        "Revisamos cómo trabaja la organización: datos, esperas, tareas repetidas y puntos de bloqueo. Localizamos dónde una mejora aporta valor concreto.",
    },
    {
      title: "Estrategia y definición",
      description:
        "Elegimos por dónde empezar y definimos el alcance, las prioridades y cómo se va a evaluar el resultado.",
    },
    {
      title: "Producto y arquitectura",
      description:
        "Diseñamos la experiencia, las integraciones y el sistema que necesita el equipo, sobre las herramientas que ya utiliza.",
    },
    {
      title: "Construcción e integración",
      description:
        "Construimos en ciclos cortos. Cada avance se prueba con el equipo y con el trabajo real.",
    },
    {
      title: "Puesta en uso y evolución",
      description:
        "Acompañamos la adopción, observamos el uso y ajustamos lo necesario para que la solución siga aportando valor.",
    },
  ],
  visual: {
    kind: "ready",
    src: "/images/landing/method-path.webp",
    alt: "Camino entre olivos que avanza hacia el horizonte, en dither verde",
  },
} as const satisfies {
  readonly heading: SectionHeading;
  readonly steps: readonly { readonly title: string; readonly description: string }[];
  readonly visual: Visual;
};

export const faq = {
  heading: {
    eyebrow: "Preguntas frecuentes",
    title: "Antes de empezar.",
    description: "Lo que suele preguntarse en la primera conversación.",
  },
  asideTitle: "¿Otra pregunta?",
  asideBody: "Se resuelve mejor en una conversación de treinta minutos.",
  asideCta: { label: "Hablemos", section: LANDING_SECTIONS.contact },
  items: [
    {
      question: "¿Tahona siempre usa IA?",
      answer:
        "No. La IA es una capacidad central, pero se usa cuando mejora la solución. En otros casos la respuesta correcta es producto, software, integraciones o una combinación.",
    },
    {
      question: "¿Hay que contratar un proyecto completo de principio a fin?",
      answer:
        "No. Un diagnóstico, una arquitectura, una integración o un desarrollo concreto pueden ser un encargo por sí mismos. También es posible incorporar un CTO o AI engineer fractional con dedicación parcial.",
    },
    {
      question: "¿Qué significa CTO o AI engineer fractional?",
      answer:
        "Un perfil senior de Tahona que se integra en el equipo del cliente con dedicación parcial y continuidad: dirige decisiones técnicas, prioriza, revisa arquitectura y acompaña la implantación de IA.",
    },
    {
      question: "¿Se puede trabajar con la tecnología que ya existe en la empresa?",
      answer:
        "Sí. La mayoría de proyectos conviven con sistemas ya presentes: CRM, ERP, Drive, hojas de cálculo, APIs, datos internos o plataformas de terceros.",
    },
    {
      question: "¿Cómo se decide por dónde empezar?",
      answer:
        "Se parte del objetivo y del contexto. Definimos el alcance mínimo que permite validar valor, riesgo y viabilidad antes de ampliar la solución.",
    },
    {
      question: "¿Qué pasa con los sectores regulados?",
      answer:
        "Se trabaja con límites claros, revisión humana, trazabilidad y separación entre soporte operativo y decisiones reguladas. No sustituimos revisión legal, clínica ni de compliance.",
    },
  ],
} as const satisfies {
  readonly heading: SectionHeading;
  readonly asideTitle: string;
  readonly asideBody: string;
  readonly asideCta: NavItem;
  readonly items: readonly { readonly question: string; readonly answer: string }[];
};

/**
 * Closing section: invitation and contact form in one block. The form fields
 * and messages come from the shared contact copy in `@/i18n/content`.
 */
export const contactSection = {
  eyebrow: "Construyamos el siguiente paso",
  titleLead: "Las grandes decisiones empiezan con",
  titleAccent: "una conversación.",
  description:
    "Qué se quiere mejorar, conectar o construir. Empezamos por entender la organización y lo que necesita conseguir.",
  email: "hola@tahona.ai",
  emailLabel: "Escribir directamente",
  promises: [
    "Interlocución directa con quien diseña y construye",
    "Primera conversación sin compromiso",
    "Si no hay encaje, lo decimos claro",
  ],
  visual: {
    kind: "ready",
    src: "/images/landing/dehesa-dither.webp",
    alt: "",
  },
} as const satisfies {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleAccent: string;
  readonly description: string;
  readonly email: string;
  readonly emailLabel: string;
  readonly promises: readonly string[];
  readonly visual: Visual;
};

export const footer = {
  tagline: "Estrategia, producto y tecnología en un mismo equipo.",
  navLabel: "Secciones",
  contactLabel: "Contacto",
  email: "hola@tahona.ai",
  rights: "Todos los derechos reservados.",
  backToTop: "Volver arriba",
} as const;

export type CaseStudy = {
  readonly id: string;
  readonly sector: string;
  readonly title: string;
  readonly challenge: string;
  readonly solution: string;
  readonly outcomes: readonly [string, string, string];
  readonly capabilities: readonly string[];
  readonly visual: Visual;
};

/**
 * Anonymised case studies. Client names never appear on the site; sector is the
 * only identifier. Cases 05 and 06 are new and need the team's sign-off.
 */
export const cases = {
  heading: {
    eyebrow: "Casos de éxito",
    title: "Retos reales. Soluciones que conectan.",
    description:
      "Casos anonimizados que muestran cómo se combinan el conocimiento del negocio, el diseño y la tecnología.",
  },
  challengeLabel: "El reto",
  solutionLabel: "La solución",
  outcomesLabel: "Qué permite",
  anonymisedLabel: "Caso anonimizado",
  ctaLabel: "Hablemos de un reto similar",
  items: [
    {
      id: "caso-legal",
      sector: "Legal",
      title: "Documentación legal conectada con el expediente.",
      challenge:
        "Documentos, contexto del expediente, revisión humana y trazabilidad estaban repartidos entre herramientas y pasos desconectados.",
      solution:
        "Una plataforma interna que reúne expedientes, extracción documental, preparación de borradores y seguimiento, con validación humana dentro del mismo flujo.",
      outcomes: [
        "Documentos y datos vinculados al expediente",
        "Validación humana antes de cada avance",
        "Versiones, decisiones y tareas trazables",
      ],
      capabilities: ["Estrategia y arquitectura", "Procesamiento documental", "Software a medida"],
      visual: {
        kind: "ready",
        src: "/images/landing/case-legal.webp",
        alt: "Expediente abierto con documentos y un sello de validación, en dither verde",
      },
    },
    {
      id: "caso-conocimiento",
      sector: "Educación",
      title: "Un asistente que responde con las fuentes de la plataforma.",
      challenge:
        "Una plataforma educativa con una base documental técnica muy amplia necesitaba respuestas precisas, trazables y disponibles en cualquier momento.",
      solution:
        "Un asistente con IA en producción que recupera y ordena la documentación relevante, responde en tiempo real y cita sus fuentes, con gestión documental para el equipo.",
      outcomes: [
        "Respuestas acompañadas de sus fuentes",
        "Documentación gestionada por el propio equipo",
        "Producto en uso por los alumnos de la plataforma",
      ],
      capabilities: ["Soluciones y productos con IA", "Productos digitales"],
      visual: {
        kind: "ready",
        src: "/images/landing/dither-knowledge.webp",
        alt: "Esfera central conectada a varios documentos, ilustración dither verde",
      },
    },
    {
      id: "caso-logistica",
      sector: "Logística",
      title: "Planificación conectada con la realidad operativa.",
      challenge:
        "Planificar con capacidad, franjas horarias, rutas e incidencias, a partir de datos operativos de calidad desigual.",
      solution:
        "Una interfaz de planificación con importación y validación de datos, revisión de rutas e integración con las herramientas y el reporting existentes.",
      outcomes: [
        "Un plan revisable antes de su ejecución",
        "Restricciones e incidencias explícitas",
        "Decisiones conectadas con las herramientas operativas",
      ],
      capabilities: ["Diagnóstico y definición", "Software a medida", "Integraciones"],
      visual: {
        kind: "ready",
        src: "/images/landing/case-logistics.webp",
        alt: "Flujos geométricos y bloques conectados que representan la planificación logística, en dither verde",
      },
    },
    {
      id: "caso-industria",
      sector: "Industria alimentaria",
      title: "Trazabilidad desde la recepción hasta la salida.",
      challenge:
        "Recepción, controles, lotes, registros y evidencias debían mantener continuidad a lo largo de los flujos de calidad alimentaria.",
      solution:
        "Un sistema de documentación, validación y trazabilidad por lote, con integraciones cuando el proceso las requiere.",
      outcomes: [
        "Registros conectados de principio a fin",
        "Puntos de revisión claros en cada control",
        "Evidencia recuperable por lote y flujo",
      ],
      capabilities: ["Diagnóstico y definición", "Software a medida", "Integraciones"],
      visual: {
        kind: "ready",
        src: "/images/landing/case-industry.webp",
        alt: "Cajas sobre una cinta geométrica continua con hitos de trazabilidad, en dither verde",
      },
    },
    {
      id: "caso-transversal",
      sector: "Transversal",
      title: "Conocimiento interno con fuentes, permisos y evaluación.",
      challenge:
        "Fuentes internas fragmentadas, permisos distintos según el contexto y respuestas que debían ser atribuibles y evaluables.",
      solution:
        "Un sistema de conocimiento con ingesta y normalización, recuperación asistida por IA con citas, permisos y evaluación integrada en las herramientas internas.",
      outcomes: [
        "Respuestas acompañadas de sus fuentes",
        "Acceso limitado por permisos y alcance",
        "Evaluación y revisión continuas",
      ],
      capabilities: ["Soluciones y productos con IA", "Procesamiento documental", "Estrategia y arquitectura"],
      visual: {
        kind: "ready",
        src: "/images/landing/case-knowledge.webp",
        alt: "Documentos con candados conectados a una esfera, en dither verde",
      },
    },
    {
      id: "caso-retail",
      sector: "Distribución y comercio",
      title: "Una vista ejecutiva sobre el ERP y la tienda online.",
      challenge:
        "La información de ventas, tesorería y cierre mensual estaba repartida entre el ERP, la tienda online y hojas de cálculo.",
      solution:
        "Definición de los casos de uso y diseño de un centro de mando que consulta los sistemas existentes y presenta la información por áreas de decisión.",
      outcomes: [
        "Ventas, tesorería y cierre en una misma vista",
        "Consultas sobre los sistemas existentes",
        "Prioridades de integración acordadas",
      ],
      capabilities: ["Estrategia de producto", "Productos digitales", "Integraciones"],
      visual: {
        kind: "ready",
        src: "/images/landing/case-retail.webp",
        alt: "Mostrador geométrico unido a un gráfico de barras y una línea de seguimiento, en dither verde",
      },
    },
  ],
} as const satisfies {
  readonly heading: SectionHeading;
  readonly challengeLabel: string;
  readonly solutionLabel: string;
  readonly outcomesLabel: string;
  readonly anonymisedLabel: string;
  readonly ctaLabel: string;
  readonly items: readonly CaseStudy[];
};

export type Industry = {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly visual: Visual;
};

export const industries = {
  heading: {
    eyebrow: "Industrias",
    title: "Entender el sector. Resolver el reto.",
    description:
      "Los procesos, los datos y las responsabilidades cambian en cada sector. La primera tarea es entenderlos.",
  },
  otherLabel: "También trabajamos con retos de",
  others: ["Energía", "Servicios profesionales"],
  ctaLabel: "Explorar un reto del sector",
  items: [
    {
      id: "logistica",
      name: "Logística y transporte",
      title: "Planificación que sigue el ritmo de la operación.",
      description:
        "Pedidos, disponibilidad, rutas y restricciones conectados para que el equipo revise y ajuste la planificación con los sistemas que ya utiliza.",
      tags: ["Planificación de rutas", "Restricciones operativas", "Integraciones"],
      visual: {
        kind: "ready",
        src: "/images/landing/industry-logistics.webp",
        alt: "Terminal logística junto a un puerto mediterráneo, en dither verde",
      },
    },
    {
      id: "legal",
      name: "Legal y gestión documental",
      title: "Conocimiento conectado. Decisiones trazables.",
      description:
        "Expedientes, documentos y conocimiento experto en herramientas para el trabajo jurídico y documental, con permisos definidos y validación humana.",
      tags: ["Expedientes", "Gestión documental", "Validación humana"],
      visual: {
        kind: "ready",
        src: "/images/landing/industry-legal.webp",
        alt: "Biblioteca con estanterías y columnas abiertas a un patio mediterráneo, en dither verde",
      },
    },
    {
      id: "industria",
      name: "Industria y alimentación",
      title: "Información fiable en cada etapa del proceso.",
      description:
        "Controles de calidad, registros, lotes y documentación conectados para coordinar la operación y seguir la información de principio a fin.",
      tags: ["Calidad", "Lotes y registros", "Trazabilidad"],
      visual: {
        kind: "ready",
        src: "/images/landing/industry-manufacturing.webp",
        alt: "Almazara entre olivos con una nave de procesamiento, en dither verde",
      },
    },
    {
      id: "distribucion-comercio",
      name: "Distribución y comercio",
      title: "Información conectada del pedido a la venta.",
      description:
        "Pedidos, catálogo, existencias y ventas conectados con el ERP, la tienda online y las herramientas del equipo para revisar la operación desde una misma vista.",
      tags: ["Pedidos y existencias", "ERP y comercio online", "Seguimiento de ventas"],
      visual: {
        kind: "ready",
        src: "/images/landing/industry-distribution.webp",
        alt: "Galería de comercios y puestos de un mercado mediterráneo, en dither verde",
      },
    },
    {
      id: "construccion",
      name: "Construcción",
      title: "Información coordinada entre oficina y obra.",
      description:
        "Planificación, documentación técnica y seguimiento de proyectos reunidos en herramientas que conectan a los equipos y mantienen el contexto de cada obra.",
      tags: ["Planificación", "Documentación técnica", "Seguimiento de proyectos"],
      visual: {
        kind: "ready",
        src: "/images/landing/industry-construction.webp",
        alt: "Estructura de un edificio en construcción sobre una ladera ibérica, en dither verde",
      },
    },
    {
      id: "educacion-formacion",
      name: "Educación y formación",
      title: "Conocimiento conectado con la formación.",
      description:
        "Contenidos, documentación y plataformas formativas conectados para gestionar el conocimiento y ofrecer asistentes con fuentes, revisión y herramientas de seguimiento.",
      tags: ["Plataformas formativas", "Asistentes con fuentes", "Gestión del conocimiento"],
      visual: {
        kind: "ready",
        src: "/images/landing/industry-education.webp",
        alt: "Patio de formación mediterráneo con gradas y aulas abiertas, en dither verde",
      },
    },
  ],
} as const satisfies {
  readonly heading: SectionHeading;
  readonly otherLabel: string;
  readonly others: readonly string[];
  readonly ctaLabel: string;
  readonly items: readonly Industry[];
};

export type TeamMember = {
  readonly name: string;
  readonly focus: string;
  readonly background: readonly string[];
  readonly initials: string;
  readonly portrait: Visual;
};

/** Team bios as stated in the corporate pitch deck (p. 5). Roles pending. */
export const team = {
  heading: {
    eyebrow: "Equipo",
    title: "Estrategia, producto e ingeniería en un mismo equipo.",
    description:
      "Un equipo senior y cercano. Quien escucha el reto es quien diseña y construye la solución.",
  },
  items: [
    {
      name: "Carlos Galán Carracedo",
      focus: "Matemáticas, ingeniería informática y dirección de proyectos",
      background: [
        "Doble Grado en Ingeniería Informática y Matemáticas (Universidad de Granada)",
        "Máster en Gestión de Proyectos",
        "Ingeniero de IA en seguros y preventa de IA para pymes",
      ],
      initials: "CG",
      portrait: {
        kind: "pending",
        slot: "team-carlos",
        brief: "Retrato real de Carlos (foto, no dither)",
        aspect: "portrait",
      },
    },
    {
      name: "Sergio Galiana Velasco",
      focus: "Matemáticas, ingeniería informática e inteligencia artificial",
      background: [
        "Doble Grado en Ingeniería Informática y Matemáticas (Universidad de Granada)",
        "Máster en Inteligencia Artificial",
        "Ingeniero de IA y análisis de datos para grandes clientes",
      ],
      initials: "SG",
      portrait: {
        kind: "pending",
        slot: "team-sergio",
        brief: "Retrato real de Sergio (foto, no dither)",
        aspect: "portrait",
      },
    },
    {
      name: "Daniel Kwapien Teler",
      focus: "Ciencia e ingeniería de datos",
      background: [
        "Ciencia e Ingeniería de Datos (Universidad Carlos III de Madrid)",
        "Ingeniero de IA y preventa de datos e IA",
        "Soluciones de IA generativa y arquitecturas en Google Cloud",
      ],
      initials: "DK",
      portrait: {
        kind: "pending",
        slot: "team-daniel",
        brief: "Retrato real de Daniel (foto, no dither)",
        aspect: "portrait",
      },
    },
  ],
} as const satisfies {
  readonly heading: SectionHeading;
  readonly items: readonly TeamMember[];
};
