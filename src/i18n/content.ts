import type { Locale, RouteKey } from "@/i18n/routing";

type PageMeta = {
  readonly name: string;
  readonly title: string;
  readonly description: string;
};

type HeroCopy = {
  readonly titleLines: readonly string[];
  readonly description: string;
  readonly primaryLabel: string;
  readonly primaryHref: string;
  readonly secondaryLabel: string;
  readonly secondaryHref: string;
};

type NavItem = {
  readonly activeHref: string;
  readonly label: string;
  readonly routeKey: RouteKey;
};

type ServiceMenuItem = {
  readonly description: string;
  readonly href: string;
  readonly label: string;
};

type ServiceMenuColumn = {
  readonly items: readonly ServiceMenuItem[];
  readonly title: string;
};

type ServiceItem = {
  readonly bullets: readonly string[];
  readonly id: string;
  readonly menuLabel: string;
  readonly summary: string;
  readonly title: string;
};

type ServiceFamily = {
  readonly description: string;
  readonly id: string;
  readonly marker: string;
  readonly services: readonly ServiceItem[];
  readonly title: string;
  readonly visualScaleClass: string;
  readonly visualSrc: string;
};

type ImplementationExample = {
  readonly className: string;
  readonly description: string;
  readonly marker: string;
  readonly title: string;
};

type FaqItem = {
  readonly answer: string;
  readonly question: string;
};

type IndustryItem = {
  readonly bullets: readonly string[];
  readonly description: string;
  readonly id: string;
  readonly marker: string;
  readonly relatedServices: readonly string[];
  readonly summary: string;
  readonly tags: readonly string[];
  readonly title: string;
  readonly visualAlt: string;
  readonly visualSrc: string;
};

type CaseStudy = {
  readonly bullets: readonly string[];
  readonly id: string;
  readonly marker: string;
  readonly sector: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly title: string;
  readonly visualAlt: string;
  readonly visualSrc: string;
};

type WorkItem = {
  readonly description: string;
  readonly id: "document-platform" | "logistics-planning";
  readonly imageSrc: string;
  readonly sector: string;
  readonly tags: readonly string[];
  readonly title: string;
};

type SiteContent = {
  readonly aiApplied: {
    readonly curve: {
      readonly ariaLabel: string;
      readonly automationLabel: string;
      readonly levels: readonly {
        readonly body: string;
        readonly label: string;
        readonly title: readonly string[];
      }[];
      readonly valueLabel: string;
    };
    readonly description: string;
    readonly eyebrow: string;
    readonly title: string;
  };
  readonly caseStudies: readonly CaseStudy[];
  readonly casesPage: {
    readonly hero: HeroCopy;
    readonly section: {
      readonly eyebrow: string;
      readonly relatedAreasLabel: string;
      readonly text: string;
      readonly title: string;
    };
  };
  readonly contact: {
    readonly closeLabel: string;
    readonly description: string;
    readonly detailsLabel: string;
    readonly detailsPlaceholder: string;
    readonly emailHint: string;
    readonly emailLabel: string;
    readonly emailPlaceholder: string;
    readonly emailValueLabel: string;
    readonly errorMessages: {
      readonly detailsLong: string;
      readonly detailsShort: string;
      readonly emailInvalid: string;
      readonly nameLong: string;
      readonly nameShort: string;
      readonly submit: string;
    };
    readonly eyebrow: string;
    readonly formIntro: string;
    readonly formTitle: string;
    readonly mailCtaText: string;
    readonly modalEmailText: string;
    readonly modalEyebrow: string;
    readonly modalText: string;
    readonly modalTitle: string;
    readonly nameLabel: string;
    readonly namePlaceholder: string;
    readonly phoneHint: string;
    readonly phoneLabel: string;
    readonly privacyNote: string;
    readonly sidebarBody: string;
    readonly sidebarEyebrow: string;
    readonly submitLabel: string;
    readonly submittingLabel: string;
    readonly title: string;
    readonly trustBadges: readonly string[];
  };
  readonly footer: {
    readonly contactLabel: string;
    readonly copyright: string;
    readonly description: string;
  };
  readonly home: {
    readonly hero: HeroCopy;
    readonly howWeWork: {
      readonly description: string;
      readonly eyebrow: string;
      readonly steps: readonly {
        readonly description: string;
        readonly number: string;
        readonly title: string;
      }[];
      readonly title: string;
    };
    readonly industries: {
      readonly ctaLabel: string;
      readonly description: string;
      readonly eyebrow: string;
      readonly title: string;
    };
    readonly ourWork: {
      readonly ctaLabel: string;
      readonly description: string;
      readonly eyebrow: string;
      readonly title: string;
    };
    readonly services: {
      readonly ctaLabel: string;
      readonly description: string;
      readonly eyebrow: string;
      readonly title: string;
    };
    readonly whatWeDo: {
      readonly bullets: readonly string[];
      readonly description: readonly string[];
      readonly eyebrow: string;
      readonly title: string;
    };
  };
  readonly implementationExamples: readonly ImplementationExample[];
  readonly industriesFaq: readonly FaqItem[];
  readonly industriesPage: {
    readonly detailSection: {
      readonly eyebrow: string;
      readonly relatedServicesLabel: string;
      readonly title: string;
    };
    readonly faqSection: {
      readonly description: string;
      readonly eyebrow: string;
      readonly title: string;
    };
    readonly gridSection: {
      readonly description: string;
      readonly eyebrow: string;
      readonly title: string;
    };
    readonly hero: HeroCopy;
  };
  readonly industryItems: readonly IndustryItem[];
  readonly metadata: Record<RouteKey, PageMeta> & {
    readonly keywords: string;
  };
  readonly navigation: {
    readonly closeMenuLabel: string;
    readonly contactLabel: string;
    readonly languageLabel: string;
    readonly menuTitle: string;
    readonly openMenuLabel: string;
    readonly pageItems: readonly NavItem[];
    readonly serviceColumns: readonly ServiceMenuColumn[];
    readonly servicesLabel: string;
    readonly servicesOverviewLabel: string;
  };
  readonly servicesFaq: readonly FaqItem[];
  readonly serviceFamilies: readonly ServiceFamily[];
  readonly servicesPage: {
    readonly detailSection: {
      readonly eyebrow: string;
      readonly title: string;
    };
    readonly examplesSection: {
      readonly description: string;
      readonly eyebrow: string;
      readonly title: string;
    };
    readonly faqSection: {
      readonly description: string;
      readonly eyebrow: string;
      readonly title: string;
    };
    readonly hero: HeroCopy;
    readonly pillarsSection: {
      readonly description: string;
      readonly eyebrow: string;
      readonly title: string;
    };
  };
  readonly skipLink: string;
  readonly structuredData: {
    readonly casesListName: string;
    readonly industryListName: string;
    readonly knowsAbout: readonly string[];
    readonly organizationDescription: string;
    readonly serviceCatalogName: string;
    readonly serviceSchemaName: string;
  };
  readonly workItems: readonly WorkItem[];
};

export const SITE_CONTENT = {
  es: {
    metadata: {
      home: {
        name: "Inicio",
        title: "Tahona | Procesos, datos y herramientas internas",
        description:
          "Mejoramos operaciones internas con diagnóstico operativo, implementación técnica y automatización solo cuando encaja con el trabajo real.",
      },
      services: {
        name: "Servicios",
        title: "Servicios Tahona | Operaciones, IA e integraciones",
        description:
          "Servicios para ordenar procesos, datos, documentos, herramientas internas, desarrollo de IA e integraciones alrededor de la operación real.",
      },
      industries: {
        name: "Industrias",
        title: "Industrias Tahona | Software e IA por sector",
        description:
          "Aplicamos software, IA e integraciones en logística, industria, legal, seguros, marketing y salud con foco en procesos y herramientas internas.",
      },
      cases: {
        name: "Casos",
        title: "Casos Tahona | Proyectos operativos anonimizados",
        description:
          "Proyectos anonimizados sobre documentación, planificación, conocimiento, reporting e integraciones, explicados desde el problema operativo y la solución.",
      },
      keywords:
        "diagnóstico operativo, implementación técnica, automatización de procesos, herramientas internas, datos documentos reporting, eficiencia operativa",
    },
    skipLink: "Saltar al contenido principal",
    navigation: {
      closeMenuLabel: "Cerrar menú",
      contactLabel: "Contacto",
      languageLabel: "Idioma",
      menuTitle: "Menú",
      openMenuLabel: "Abrir menú",
      servicesLabel: "Servicios",
      servicesOverviewLabel: "Ver todos los servicios",
      pageItems: [
        { label: "Inicio", routeKey: "home", activeHref: "#hero" },
        { label: "Industrias", routeKey: "industries", activeHref: "#industrias" },
        { label: "Casos", routeKey: "cases", activeHref: "#trabajo" },
      ],
      serviceColumns: [
        {
          title: "Fundamentos",
          items: [
            {
              label: "Consultoría",
              description:
                "Auditoría operativa y diagnóstico de procesos, datos y herramientas.",
              href: "#consultoria-auditoria-operativa",
            },
            {
              label: "Estrategia",
              description: "Hoja de ruta técnica y operativa antes de construir.",
              href: "#estrategia-tecnica-operativa",
            },
            {
              label: "Bases de conocimiento",
              description:
                "Conocimiento interno con fuentes, permisos y revisión humana.",
              href: "#bases-conocimiento-empresarial",
            },
          ],
        },
        {
          title: "Desarrollo de IA",
          items: [
            {
              label: "Optimización de procesos",
              description:
                "Menos pasos manuales sobre las herramientas existentes.",
              href: "#optimizacion-procesos",
            },
            {
              label: "Agentes de IA",
              description:
                "Tareas acotadas con límites, supervisión y trazabilidad.",
              href: "#agentes-ia",
            },
            {
              label: "Procesamiento documental",
              description: "Extracción, validación y clasificación de documentos.",
              href: "#procesamiento-documental",
            },
          ],
        },
        {
          title: "Otros desarrollos",
          items: [
            {
              label: "Herramientas a medida",
              description:
                "Software alrededor de un proceso concreto, con la complejidad justa.",
              href: "#herramientas-medida",
            },
            {
              label: "Herramientas internas",
              description: "Backoffice, paneles y workflows para el día a día.",
              href: "#herramientas-internas",
            },
            {
              label: "Integraciones / plataformas",
              description: "Drive, CRM, ERP, hojas de cálculo y APIs conectados.",
              href: "#integraciones-plataformas-operativas",
            },
          ],
        },
      ],
    },
    home: {
      hero: {
        titleLines: ["Del diagnóstico a la implementación."],
        description:
          "Tahona es el partner tecnológico para mejorar cómo funciona una empresa por dentro.",
        primaryLabel: "Hablemos",
        primaryHref: "#contacto",
        secondaryLabel: "Ver servicios",
        secondaryHref: "#soluciones",
      },
      whatWeDo: {
        eyebrow: "Qué hacemos",
        title:
          "Mejoramos operaciones internas donde procesos, datos y herramientas se cruzan.",
        description: [
          "El trabajo no empieza por elegir una tecnología. Empieza por entender cómo funciona la operación, qué información se mueve, dónde se repite trabajo manual y qué necesita el equipo para operar con más control.",
          "A partir de ese diagnóstico se construyen herramientas internas, integraciones, bases de conocimiento, procesamiento documental o automatización con IA cuando encaja con el flujo real.",
        ],
        bullets: [
          "Procesos con demasiados pasos manuales.",
          "Documentos que requieren revisión, extracción o clasificación.",
          "Información repartida entre Drive, hojas de cálculo, CRM, ERP, correo y herramientas internas.",
          "Reporting que llega tarde o depende de preparación manual.",
          "Equipos que necesitan adoptar una solución sin añadir otra capa de fricción.",
        ],
      },
      services: {
        eyebrow: "Servicios",
        title: "Tres familias de trabajo.",
        description:
          "Primero se entiende la operación. Después se decide si hace falta estrategia, software, IA, integraciones, acompañamiento de adopción o formación.",
        ctaLabel: "Ver servicios",
      },
      industries: {
        eyebrow: "Industrias",
        title: "Sectores que trabajamos.",
        description:
          "No nos encerramos en un vertical. El patrón común son operaciones con información dispersa, tareas repetibles, documentación e integraciones entre herramientas.",
        ctaLabel: "Ver industrias",
      },
      ourWork: {
        eyebrow: "Nuestro trabajo",
        title: "Proyectos reales en los que hemos trabajado.",
        description:
          "Algunos ejemplos de trabajo aplicado en operaciones reales: plataformas internas, planificación, documentación, datos e integraciones construidas alrededor de cómo trabaja cada equipo.",
        ctaLabel: "Ver casos",
      },
      howWeWork: {
        eyebrow: "Cómo trabajamos",
        title: "Entender la operación antes de cambiarla.",
        description:
          "Cada empresa tiene una forma distinta de trabajar. El proceso empieza leyendo procesos, datos, herramientas, documentos y restricciones reales. Después se priorizan mejoras con sentido práctico y se implementan de forma que el equipo pueda adoptarlas.",
        steps: [
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
        ],
      },
    },
    aiApplied: {
      eyebrow: "IA aplicada",
      title: "IA cuando mejora un proceso, no cuando solo añade ruido.",
      description:
        "Trabajamos con modelos, asistentes y agentes cuando ayudan a leer documentos, preparar información, ejecutar pasos repetibles, revisar resultados o conectar herramientas internas. Cada sistema debe tener límites, trazabilidad y un punto claro de supervisión.",
      curve: {
        ariaLabel: "Curva de valor de la IA aplicada",
        valueLabel: "Valor",
        automationLabel: "Automatización",
        levels: [
          { label: "NIVEL 01", title: ["Uso con criterio"], body: "Decisión humana." },
          { label: "NIVEL 02", title: ["Asistentes específicos"], body: "Lectura y revisión." },
          { label: "NIVEL 03", title: ["Automatización", "supervisada"], body: "Reglas y trazabilidad." },
          { label: "NIVEL 04", title: ["Agentes con contexto"], body: "Permisos y límites." },
        ],
      },
    },
    servicesPage: {
      hero: {
        titleLines: ["Servicios para ordenar, construir e integrar operaciones internas."],
        description:
          "Trabajamos desde la operación real de cada empresa. El objetivo es entender procesos, datos, documentos y herramientas para decidir qué conviene construir, integrar o automatizar.",
        primaryLabel: "Solicitar una primera conversación",
        primaryHref: "#contacto",
        secondaryLabel: "Ver cómo trabajamos",
        secondaryHref: "#familias-servicios",
      },
      pillarsSection: {
        eyebrow: "Cómo se ordenan los servicios",
        title: "Tres familias de trabajo que se ordenan en una secuencia.",
        description:
          "Los Fundamentos entienden y ordenan la operación. El Desarrollo de IA y los Otros desarrollos construyen sobre esa base, no al revés.",
      },
      detailSection: {
        eyebrow: "Servicios en detalle",
        title: "Lo que hacemos, agrupado por familia.",
      },
      examplesSection: {
        eyebrow: "Qué construimos",
        title: "Ejemplos de sistemas concretos para operaciones concretas.",
        description:
          "No trabajamos con entregables genéricos. Implementaciones adaptadas al contexto, construidas sobre datos y restricciones reales.",
      },
      faqSection: {
        eyebrow: "Preguntas frecuentes",
        title: "Preguntas frecuentes sobre los servicios.",
        description: "Lo que más nos preguntan antes de empezar.",
      },
    },
    industriesPage: {
      hero: {
        titleLines: ["Software, IA e integraciones para cada sector."],
        description:
          "En cada sector hay procesos, documentos, datos, reporting y herramientas que necesitan funcionar mejor juntos. La forma de operar es la misma: entender, implementar y mejorar.",
        primaryLabel: "Solicitar una primera conversación",
        primaryHref: "#contacto",
        secondaryLabel: "Ver servicios",
        secondaryHref: "/services/",
      },
      gridSection: {
        eyebrow: "Industrias",
        title: "Sectores que trabajamos.",
        description:
          "No nos encerramos en un vertical. El patrón común son operaciones con información dispersa, tareas repetibles, documentación e integraciones entre herramientas.",
      },
      detailSection: {
        eyebrow: "En detalle",
        title: "Cómo se ve el trabajo en cada sector.",
        relatedServicesLabel: "Servicios relacionados",
      },
      faqSection: {
        eyebrow: "Preguntas frecuentes",
        title: "Preguntas frecuentes sobre industrias.",
        description: "Cómo encajamos en cada sector.",
      },
    },
    casesPage: {
      hero: {
        titleLines: ["Nuestro trabajo aplicado a operaciones reales."],
        description:
          "Proyectos y patrones abordados por Tahona, presentados de forma anonimizada y sin métricas, testimonios ni logos inventados. El foco está en qué problema operativo se ordena y qué se construye alrededor.",
        primaryLabel: "Solicitar una primera conversación",
        primaryHref: "#contacto",
        secondaryLabel: "Ver servicios",
        secondaryHref: "/services/",
      },
      section: {
        eyebrow: "Casos",
        title: "Trabajo aplicado a operaciones reales.",
        text:
          "Proyectos y patrones abordados desde operaciones internas: documentación, planificación, conocimiento, reporting e integraciones.",
        relatedAreasLabel: "Áreas relacionadas",
      },
    },
    contact: {
      eyebrow: "Contacto",
      title: "Una primera conversación para entender el contexto.",
      description:
        "Una primera conversación permite revisar la operación, detectar si existe una oportunidad real de mejora y decidir el siguiente paso con claridad.",
      sidebarEyebrow: "Contacto",
      sidebarBody:
        "Revisamos el contexto con criterio práctico. Si hay una oportunidad real, indicamos por dónde empezar y qué conviene validar primero.",
      emailLabel: "Correo",
      emailPlaceholder: "nombre@empresa.com",
      emailValueLabel: "hola@tahona.ai",
      emailHint: "Un correo basta para empezar a valorar el encaje.",
      phoneLabel: "Teléfono",
      phoneHint:
        "Si se prefiere ir al grano, se puede ver en una llamada breve.",
      trustBadges: [
        "Respuesta en 24h laborables",
        "Primera oportunidad clara",
        "Sin compromiso ni presión comercial",
      ],
      formTitle: "Punto de partida",
      formIntro:
        "Con lo básico basta. Respondemos con una valoración inicial y el siguiente paso más útil.",
      nameLabel: "Nombre",
      namePlaceholder: "Nombre y apellidos",
      detailsLabel: "Proceso o problema a revisar",
      detailsPlaceholder:
        "Proceso actual, qué se hace hoy a mano, dónde se atasca y qué equipo está implicado.",
      privacyNote:
        "Respondemos en 24h laborables. Sin presión comercial: si el encaje no es claro, se dirá con la misma claridad.",
      submitLabel: "Solicitar una primera conversación",
      submittingLabel: "Enviando...",
      closeLabel: "Cerrar",
      modalEyebrow: "Mensaje recibido",
      modalTitle: "Mensaje recibido",
      modalText:
        "Lo revisaremos y te responderemos en 24h laborables con el siguiente paso más útil.",
      modalEmailText:
        "Si prefieres ampliarlo por correo, escríbenos a hola@tahona.ai",
      mailCtaText: "hola@tahona.ai",
      errorMessages: {
        nameShort: "El nombre debe tener al menos 2 caracteres",
        nameLong: "El nombre es demasiado largo",
        emailInvalid: "Por favor, introduce un email válido",
        detailsShort: "Por favor, cuéntanos un poco más sobre tu proyecto",
        detailsLong: "El mensaje es demasiado largo",
        submit: "Hubo un error al enviar el formulario. Inténtalo de nuevo.",
      },
    },
    footer: {
      contactLabel: "Contacta con nosotros",
      copyright: "Todos los derechos reservados.",
      description:
        "Equipo técnico que mejora procesos, datos y herramientas internas con criterio práctico.",
    },
    structuredData: {
      organizationDescription:
        "Estudio técnico de consultoría e implementación para mejorar operaciones internas, procesos, datos, documentos, herramientas e integraciones.",
      knowsAbout: [
        "diagnóstico operativo",
        "implementación técnica",
        "automatización de procesos",
        "herramientas internas",
        "procesamiento documental",
        "integraciones operativas",
      ],
      serviceSchemaName:
        "Servicios de implementación técnica para operaciones internas",
      serviceCatalogName: "Familias de servicios Tahona",
      industryListName: "Sectores y patrones operativos",
      casesListName: "Casos anonimizados de trabajo operativo",
    },
    serviceFamilies: [
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
            id: "bases-conocimiento-empresarial",
            title: "Bases de conocimiento empresarial",
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
          "Implementación de IA a nivel interno. El diseño de estos sistemas incluye límites, supervisión, fuentes, trazabilidad y adopción.",
        visualSrc: "/images/service2-illustration.png",
        visualScaleClass: "scale-[1.1]",
        services: [
          {
            id: "optimizacion-procesos",
            title: "Optimización de procesos",
            menuLabel: "Optimización de procesos",
            summary:
              "Mejora de flujos operativos con reglas, automatización, modelos o software, reduciendo pasos manuales e integración con las herramientas existentes.",
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
              "Agentes conectados a herramientas internas para tareas acotadas como buscar información, preparar borradores, ejecutar pasos repetibles o coordinar un flujo con supervisión.",
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
              "Extracción, clasificación, validación y revisión asistida de documentos para convertir información dispersa en información estructurada y flujos operativos útiles.",
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
              "Software construido alrededor de un proceso concreto, sobre los datos y restricciones reales de la operación.",
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
              "Sistemas para centralizar tareas, información y decisiones que hoy están en Excel, correos, Drive, WhatsApp o herramientas inconexas.",
            bullets: [
              "Backoffice operativo",
              "Panel de seguimiento y dashboards",
              "Workflows internos",
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
    ],
    implementationExamples: [
      {
        marker: "01",
        title: "Bases de conocimiento",
        description:
          "Con fuentes citables, permisos, evaluación y revisión humana sobre documentos reales.",
        className: "lg:col-span-3",
      },
      {
        marker: "02",
        title: "Herramientas internas",
        description:
          "Para coordinar procesos, documentos, tareas y responsables del día a día.",
        className: "lg:col-span-3",
      },
      {
        marker: "03",
        title: "Integraciones",
        description:
          "Entre Drive, CRM, ERP, hojas de cálculo, reporting y sistemas internos.",
        className: "lg:col-span-2",
      },
      {
        marker: "04",
        title: "Procesamiento documental",
        description:
          "Extracción, validación, clasificación y handoff humano en flujos reales.",
        className: "lg:col-span-2",
      },
      {
        marker: "05",
        title: "Agentes de IA",
        description:
          "Para tareas acotadas, con límites, herramientas controladas y trazabilidad.",
        className: "lg:col-span-2",
      },
      {
        marker: "06",
        title: "Paneles e informes operativos",
        description:
          "Reporting construido sobre datos reales de la operación, no sobre informes manuales.",
        className: "lg:col-span-3",
      },
      {
        marker: "07",
        title: "Workflows de aprobación",
        description:
          "Estados, responsables, alertas y registro para procesos que hoy dependen del seguimiento manual.",
        className: "lg:col-span-3",
      },
    ],
    servicesFaq: [
      {
        question: "¿Tahona siempre usa IA?",
        answer:
          "No. La IA se usa cuando mejora el proceso. En algunos casos la solución correcta es una integración, una herramienta interna, una regla de negocio o una simplificación del flujo.",
      },
      {
        question: "¿Puedo trabajar con herramientas existentes?",
        answer:
          "Sí. La mayoría de proyectos parten de herramientas ya presentes en la empresa: Drive, CRM, ERP, hojas de cálculo, correo, reporting, APIs o sistemas internos.",
      },
      {
        question:
          "¿Qué diferencia hay entre automatización y optimización de procesos?",
        answer:
          "Automatizar ejecuta pasos. Optimizar procesos exige revisar si esos pasos tienen sentido, qué datos necesitan, dónde debe mantenerse revisión humana y cómo entra el cambio en el trabajo diario.",
      },
      {
        question: "¿Qué es una base de conocimiento enterprise?",
        answer:
          "Es una capa de conocimiento interno con ingesta documental, normalización, fuentes citables, permisos, evaluación, revisión humana e integración con herramientas reales. No es solo un buscador sobre documentos.",
      },
      {
        question: "¿Cuándo tiene sentido un agente de IA?",
        answer:
          "Cuando existe una tarea operativa concreta, fuentes fiables, límites claros, herramientas controladas, trazabilidad y un punto de supervisión. Si esas condiciones no existen, conviene resolver primero el proceso.",
      },
    ],
    industryItems: [
      {
        id: "logistica",
        marker: "01",
        title: "Logística",
        summary:
          "Planificación, optimización de rutas, documentación logística, eventos operativos, reporting e integración con herramientas de operación.",
        description:
          "En logística encontramos rutas, planificación, eventos, documentación de transporte, datos de operación, reporting y coordinación entre herramientas. Trabajamos sobre ingesta de datos, optimización operativa, optimización de rutas, procesamiento documental, reporting e integración con los sistemas existentes.",
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "Visual 3D de operación logística",
        tags: ["Rutas", "Flota", "Documentación", "Reporting"],
        bullets: [
          "Optimización de rutas y planificación",
          "Documentación logística y procesamiento de archivos",
          "Reporting de servicio",
          "Gestión de flotas",
          "Eventos operativos y seguimiento",
          "Integración con herramientas, APIs y hojas de cálculo",
        ],
        relatedServices: [
          "Optimización de procesos",
          "Optimización de rutas",
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
          "Control de calidad, documentación, trazabilidad, procesos internos, reporting y herramientas para coordinar el trabajo operativo.",
        description:
          "En entornos industriales y de operación aparecen controles de calidad, documentación recurrente, trazabilidad, coordinación entre equipos y reporting. Trabajamos sobre herramientas internas, flujos documentales, bases de conocimiento, integraciones y automatización.",
        visualSrc: "/images/visual-industry-manufacturing.png",
        visualAlt: "Visual 3D de operación industrial",
        tags: ["Calidad", "Documentación", "Trazabilidad", "Reporting"],
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
        tags: ["Documentos", "Validación", "Flujos", "Seguimiento"],
        bullets: [
          "Generación y revisión de documentos",
          "Procesamiento documental",
          "Contabilidad",
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
        tags: ["Captación", "CRM", "Cotización", "Reporting"],
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
        tags: ["Lead ops", "Cualificación", "CRM", "Reporting"],
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
          "Integraciones y plataformas",
          "Herramientas internas",
          "Agentes de IA",
        ],
      },
      {
        id: "salud",
        marker: "06",
        title: "Salud",
        summary:
          "Soporte operativo, documentación, conocimiento interno y sistemas no clínicos.",
        description:
          "En salud solo trabajamos sobre capas operativas no clínicas: documentación, conocimiento interno, coordinación, reporting y apoyo administrativo.",
        visualSrc: "/images/visual-industry-health.png",
        visualAlt: "Visual 3D de operación de salud no clínica",
        tags: ["Soporte", "Documentación", "Conocimiento", "PoC"],
        bullets: [
          "Documentación operativa",
          "Conocimiento interno",
          "Coordinación administrativa",
          "Sistemas no clínicos",
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
    ],
    industriesFaq: [
      {
        question: "¿Tahona se especializa en un solo sector?",
        answer:
          "No. Trabajamos sobre operaciones internas. Algunos sectores tienen patrones especialmente claros, pero la decisión depende del proceso, los datos, los documentos y las herramientas de cada empresa.",
      },
      {
        question: "¿Qué pasa con los sectores regulados?",
        answer:
          "Se trabaja con más cautela: límites claros, revisión humana, trazabilidad y separación entre soporte operativo y decisiones reguladas. No sustituimos revisión legal, clínica, normativa o de compliance.",
      },
      {
        question: "¿Hace falta tener procesos ya documentados?",
        answer:
          "No. Muchas veces el primer trabajo es mapear cómo funciona la operación real: qué se hace, quién interviene, qué documentos aparecen, qué datos faltan y dónde se pierde control.",
      },
      {
        question: "¿Podemos usar herramientas existentes del sector?",
        answer:
          "Sí. Normalmente se parte de lo que ya usa el equipo: CRM, ERP, Drive, hojas de cálculo, correo, reporting, APIs o sistemas internos. La solución debe encajar con ese contexto.",
      },
      {
        question: "¿Qué cambia de un sector a otro?",
        answer:
          "Cambian los documentos, las restricciones, el vocabulario, los sistemas y los puntos de revisión. El método se mantiene: entender la operación, ordenar el flujo y construir solo lo que mejora el trabajo.",
      },
      {
        question: "¿Se puede empezar por un área pequeña?",
        answer:
          "Sí. Tiene sentido empezar por un flujo concreto cuando hay suficiente información, responsables definidos y un criterio claro para saber si la mejora funciona antes de extenderla.",
      },
    ],
    caseStudies: [
      {
        id: "plataforma-documental-operativa",
        marker: "01",
        sector: "Legal",
        title: "Plataforma documental y operativa",
        summary:
          "Diseño e implementación de una plataforma interna para coordinar procesos documentales, extracción de información, generación de borradores, validación humana, tareas repetibles y seguimiento operativo.",
        visualSrc: "/images/visual-case-legal-document-platform.png",
        visualAlt: "Visual 3D de plataforma documental",
        bullets: [
          "Flujos documentales con estados",
          "Sistema agéntico",
          "Generación de borradores",
          "Validación humana antes",
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
        title: "Plataforma de planificación logística",
        summary:
          "Plataforma para planificar rutas, importar datos operativos, coordinar eventos, revisar documentación logística y generar reporting útil para la operación.",
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "Visual 3D de planificación logística",
        bullets: [
          "Optimización de rutas",
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
        title:
          "Plataforma de documentación, calidad y trazabilidad para sector alimenticio",
        summary:
          "Plataforma de flujos para ordenar documentación, validar información, mantener trazabilidad y generar reporting en procesos de calidad en el sector alimenticio.",
        visualSrc: "/images/visual-case-appcc-quality.png",
        visualAlt: "Visual 3D de calidad y trazabilidad industrial",
        bullets: [
          "Procesamiento documental",
          "APPCC",
          "Validación de información",
          "Trazabilidad de procesos",
          "Reporting de calidad",
          "Controles operativos",
          "Integración de sistemas",
        ],
        tags: [
          "Herramientas internas",
          "Procesamiento documental",
          "Optimización de procesos",
          "Trazabilidad",
        ],
      },
    ],
    workItems: [
      {
        id: "document-platform",
        sector: "Legal",
        title: "Plataforma documental y operativa",
        description:
          "Diseño e implementación de una herramienta interna para coordinar procesos documentales, extracción de datos de documentos complejos, generación de borradores, validación humana, RPA, tareas repetibles y seguimiento operativo.",
        tags: [
          "Procesamiento documental",
          "Validación humana",
          "Tareas internas",
          "Seguimiento",
        ],
        imageSrc: "/images/visual-case-legal-document-platform.png",
      },
      {
        id: "logistics-planning",
        sector: "Logística",
        title: "Plataforma de optimización logística",
        description:
          "Plataforma para planificar rutas, importar pedidos, coordinar eventos, revisar documentación logística y generar reporting útil para la operación.",
        tags: ["Planificación", "Optimización de rutas", "Reporting"],
        imageSrc: "/images/visual-logistics.png",
      },
    ],
  },
  en: {
    metadata: {
      home: {
        name: "Home",
        title: "Tahona | Internal processes, data and tools",
        description:
          "We improve internal operations through operational diagnosis, technical implementation and automation only when it fits the real work.",
      },
      services: {
        name: "Services",
        title: "Tahona Services | Operations, AI and integrations",
        description:
          "Services for organizing processes, data, documents, internal tools, AI development and integrations around real operations.",
      },
      industries: {
        name: "Industries",
        title: "Tahona Industries | Software and AI by sector",
        description:
          "We apply software, AI and integrations in logistics, industry, legal, insurance, marketing and healthcare with an operational focus.",
      },
      cases: {
        name: "Cases",
        title: "Tahona Cases | Anonymized operations projects",
        description:
          "Anonymized projects on documentation, planning, knowledge, reporting and integrations, explained from the operational problem and the solution built around it.",
      },
      keywords:
        "operational diagnosis, technical implementation, process automation, internal tools, data documents reporting, operational efficiency",
    },
    skipLink: "Skip to main content",
    navigation: {
      closeMenuLabel: "Close menu",
      contactLabel: "Contact",
      languageLabel: "Language",
      menuTitle: "Menu",
      openMenuLabel: "Open menu",
      servicesLabel: "Services",
      servicesOverviewLabel: "View all services",
      pageItems: [
        { label: "Home", routeKey: "home", activeHref: "#hero" },
        { label: "Industries", routeKey: "industries", activeHref: "#industrias" },
        { label: "Cases", routeKey: "cases", activeHref: "#trabajo" },
      ],
      serviceColumns: [
        {
          title: "Foundations",
          items: [
            {
              label: "Consulting",
              description:
                "Operational audit and diagnosis of processes, data and tools.",
              href: "#consultoria-auditoria-operativa",
            },
            {
              label: "Strategy",
              description: "Technical and operational roadmap before building.",
              href: "#estrategia-tecnica-operativa",
            },
            {
              label: "Knowledge bases",
              description:
                "Internal knowledge with sources, permissions and human review.",
              href: "#bases-conocimiento-empresarial",
            },
          ],
        },
        {
          title: "AI development",
          items: [
            {
              label: "Process optimization",
              description:
                "Fewer manual steps on top of existing tools.",
              href: "#optimizacion-procesos",
            },
            {
              label: "AI agents",
              description:
                "Bounded tasks with limits, supervision and traceability.",
              href: "#agentes-ia",
            },
            {
              label: "Document processing",
              description: "Extraction, validation and classification of documents.",
              href: "#procesamiento-documental",
            },
          ],
        },
        {
          title: "Other custom development",
          items: [
            {
              label: "Custom tools",
              description:
                "Software around a specific process, with the right level of complexity.",
              href: "#herramientas-medida",
            },
            {
              label: "Internal tools",
              description: "Back offices, panels and workflows for daily work.",
              href: "#herramientas-internas",
            },
            {
              label: "Integrations / platforms",
              description: "Drive, CRM, ERP, spreadsheets and APIs connected.",
              href: "#integraciones-plataformas-operativas",
            },
          ],
        },
      ],
    },
    home: {
      hero: {
        titleLines: ["From diagnosis to implementation."],
        description:
          "Tahona is the technology partner for improving how a company works from within.",
        primaryLabel: "Let's talk",
        primaryHref: "#contacto",
        secondaryLabel: "View services",
        secondaryHref: "#soluciones",
      },
      whatWeDo: {
        eyebrow: "What we do",
        title:
          "We improve internal operations where processes, data and tools meet.",
        description: [
          "The work does not start by choosing a technology. It starts by understanding how the operation works, what information moves through it, where manual work repeats and what the team needs to operate with more control.",
          "From that diagnosis we build internal tools, integrations, knowledge bases, document processing or AI automation when it fits the real workflow.",
        ],
        bullets: [
          "Processes with too many manual steps.",
          "Documents that need review, extraction or classification.",
          "Information spread across Drive, spreadsheets, CRM, ERP, email and internal tools.",
          "Reporting that arrives late or depends on manual preparation.",
          "Teams that need adoption without adding another layer of friction.",
        ],
      },
      services: {
        eyebrow: "Services",
        title: "Three families of work.",
        description:
          "First we understand the operation. Then we decide whether the work needs strategy, software, AI, integrations, adoption support or training.",
        ctaLabel: "View services",
      },
      industries: {
        eyebrow: "Industries",
        title: "Sectors we work with.",
        description:
          "We do not lock into one vertical. The common pattern is operations with scattered information, repeatable tasks, documentation and tool integrations.",
        ctaLabel: "View industries",
      },
      ourWork: {
        eyebrow: "Applied work",
        title: "Real projects we have worked on.",
        description:
          "Examples of applied work in real operations: internal platforms, planning, documentation, data and integrations built around how each team works.",
        ctaLabel: "View cases",
      },
      howWeWork: {
        eyebrow: "How we work",
        title: "Understand the operation before changing it.",
        description:
          "Every company works differently. The process starts by reading the real processes, data, tools, documents and constraints. Then improvements are prioritized with practical judgment and implemented in a way the team can adopt.",
        steps: [
          {
            number: "01",
            title: "Context",
            description:
              "First reading of the operation, priorities and main points of friction.",
          },
          {
            number: "02",
            title: "Diagnosis",
            description:
              "Review of processes, data, documents, tools and internal dependencies.",
          },
          {
            number: "03",
            title: "Prioritization",
            description:
              "Selection of opportunities by operational value, complexity, risk and adoption.",
          },
          {
            number: "04",
            title: "Build",
            description:
              "Design and implementation of software, AI, integrations or automation depending on the case.",
          },
          {
            number: "05",
            title: "Adoption",
            description:
              "Adjustments, documentation and handoff so the system enters daily work.",
          },
        ],
      },
    },
    aiApplied: {
      eyebrow: "Applied AI",
      title: "AI when it improves a process, not when it only adds noise.",
      description:
        "We work with models, assistants and agents when they help read documents, prepare information, execute repeatable steps, review results or connect internal tools. Each system needs limits, traceability and a clear point of supervision.",
      curve: {
        ariaLabel: "Applied AI value curve",
        valueLabel: "Value",
        automationLabel: "Automation",
        levels: [
          { label: "LEVEL 01", title: ["Judgment-led use"], body: "Human decision." },
          { label: "LEVEL 02", title: ["Specific assistants"], body: "Reading and review." },
          { label: "LEVEL 03", title: ["Supervised", "automation"], body: "Rules and traceability." },
          { label: "LEVEL 04", title: ["Context-aware agents"], body: "Permissions and limits." },
        ],
      },
    },
    servicesPage: {
      hero: {
        titleLines: ["Services to organize, build and integrate internal operations."],
        description:
          "We work from each company's real operation. The goal is to understand processes, data, documents and tools so we can decide what should be built, integrated or automated.",
        primaryLabel: "Request a first conversation",
        primaryHref: "#contacto",
        secondaryLabel: "See how we work",
        secondaryHref: "#familias-servicios",
      },
      pillarsSection: {
        eyebrow: "How services are organized",
        title: "Three families of work arranged in a sequence.",
        description:
          "Foundations understand and organize the operation. AI development and other custom development build on that base, not the other way around.",
      },
      detailSection: {
        eyebrow: "Services in detail",
        title: "What we do, grouped by family.",
      },
      examplesSection: {
        eyebrow: "What we build",
        title: "Examples of concrete systems for concrete operations.",
        description:
          "We do not work with generic deliverables. Implementations are adapted to context and built on real data and constraints.",
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Frequently asked questions about services.",
        description: "What teams most often ask before starting.",
      },
    },
    industriesPage: {
      hero: {
        titleLines: ["Software, AI and integrations for each sector."],
        description:
          "Every sector has processes, documents, data, reporting and tools that need to work better together. The way of operating is the same: understand, implement and improve.",
        primaryLabel: "Request a first conversation",
        primaryHref: "#contacto",
        secondaryLabel: "View services",
        secondaryHref: "/en/services/",
      },
      gridSection: {
        eyebrow: "Industries",
        title: "Sectors we work with.",
        description:
          "We do not lock into one vertical. The common pattern is operations with scattered information, repeatable tasks, documentation and integrations between tools.",
      },
      detailSection: {
        eyebrow: "In detail",
        title: "How the work looks in each sector.",
        relatedServicesLabel: "Related services",
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Frequently asked questions about industries.",
        description: "How we fit into each sector.",
      },
    },
    casesPage: {
      hero: {
        titleLines: ["Our applied work in real operations."],
        description:
          "Projects and patterns addressed by Tahona, presented anonymously and without invented metrics, testimonials or logos. The focus is the operational problem being organized and what gets built around it.",
        primaryLabel: "Request a first conversation",
        primaryHref: "#contacto",
        secondaryLabel: "View services",
        secondaryHref: "/en/services/",
      },
      section: {
        eyebrow: "Cases",
        title: "Applied work in real operations.",
        text:
          "Projects and patterns addressed from internal operations: documentation, planning, knowledge, reporting and integrations.",
        relatedAreasLabel: "Related areas",
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "A first conversation to understand the context.",
      description:
        "A first conversation helps review the operation, detect whether there is a real improvement opportunity and decide the next step clearly.",
      sidebarEyebrow: "Contact",
      sidebarBody:
        "We review the context with practical judgment. If there is a real opportunity, we indicate where to start and what should be validated first.",
      emailLabel: "Email",
      emailPlaceholder: "name@company.com",
      emailValueLabel: "hola@tahona.ai",
      emailHint: "One email is enough to begin assessing fit.",
      phoneLabel: "Phone",
      phoneHint: "For a direct first pass, a short call is enough.",
      trustBadges: [
        "Response within 24 business hours",
        "First opportunity made clear",
        "No commitment or sales pressure",
      ],
      formTitle: "Starting point",
      formIntro:
        "The basics are enough. We reply with an initial assessment and the most useful next step.",
      nameLabel: "Name",
      namePlaceholder: "Full name",
      detailsLabel: "Process or problem to review",
      detailsPlaceholder:
        "Current process, what is still manual, where it gets stuck and which team is involved.",
      privacyNote:
        "We reply within 24 business hours. No sales pressure: if the fit is not clear, we will say so clearly.",
      submitLabel: "Request a first conversation",
      submittingLabel: "Sending...",
      closeLabel: "Close",
      modalEyebrow: "Message received",
      modalTitle: "Message received",
      modalText:
        "We will review it and reply within 24 business hours with the most useful next step.",
      modalEmailText:
        "To add more context by email, write to hola@tahona.ai",
      mailCtaText: "hola@tahona.ai",
      errorMessages: {
        nameShort: "Name must be at least 2 characters",
        nameLong: "Name is too long",
        emailInvalid: "Please enter a valid email address",
        detailsShort: "Please share a little more about the project",
        detailsLong: "The message is too long",
        submit: "There was an error sending the form. Please try again.",
      },
    },
    footer: {
      contactLabel: "Contact us",
      copyright: "All rights reserved.",
      description:
        "A technical team improving processes, data and internal tools with practical judgment.",
    },
    structuredData: {
      organizationDescription:
        "Technical consulting and implementation studio for improving internal operations, processes, data, documents, tools and integrations.",
      knowsAbout: [
        "operational diagnosis",
        "technical implementation",
        "process automation",
        "internal tools",
        "document processing",
        "operational integrations",
      ],
      serviceSchemaName:
        "Technical implementation services for internal operations",
      serviceCatalogName: "Tahona service families",
      industryListName: "Sectors and operational patterns",
      casesListName: "Anonymized operational work cases",
    },
    serviceFamilies: [
      {
        id: "fundamentos",
        marker: "01",
        title: "Foundations",
        description:
          "Before building, the problem is organized. Diagnosis, strategy and internal knowledge give technical decisions the right context.",
        visualSrc: "/images/service1-illustration.png",
        visualScaleClass: "scale-[1.08]",
        services: [
          {
            id: "consultoria-auditoria-operativa",
            title: "Operational consulting and audit",
            menuLabel: "Consulting",
            summary:
              "Review of processes, tools, documents, data and internal dependencies to understand where clarity, control or operating capacity is being lost.",
            bullets: [
              "Map of the current process",
              "Inventory of manual work and blockers",
              "Risks, dependencies and priorities",
              "Recommended next steps",
            ],
          },
          {
            id: "estrategia-tecnica-operativa",
            title: "Technical and operational strategy",
            menuLabel: "Strategy",
            summary:
              "A roadmap to decide what to implement, in what order and under which constraints. Useful when the team needs clarity before investing in development.",
            bullets: [
              "Phased roadmap",
              "Functional and technical scope",
              "Decision criteria",
              "Adoption, data and integration risks",
            ],
          },
          {
            id: "bases-conocimiento-empresarial",
            title: "Enterprise knowledge bases",
            menuLabel: "Knowledge bases",
            summary:
              "Knowledge and internal context infrastructure for consulting documents, data and company context with sources, permissions, evaluation and human review.",
            bullets: [
              "Document ingestion and normalization",
              "Answers with citations and traceability",
              "Permission and scope design",
              "Integration with Drive, CRM, ERP and reporting",
            ],
          },
        ],
      },
      {
        id: "desarrollo-ia",
        marker: "02",
        title: "AI development",
        description:
          "Internal AI implementation. These systems are designed with limits, supervision, sources, traceability and adoption in mind.",
        visualSrc: "/images/service2-illustration.png",
        visualScaleClass: "scale-[1.1]",
        services: [
          {
            id: "optimizacion-procesos",
            title: "Process optimization",
            menuLabel: "Process optimization",
            summary:
              "Improvement of operational flows with rules, automation, models or software, reducing manual steps and integrating with existing tools.",
            bullets: [
              "Flow simplification before automation",
              "Automation with review where needed",
              "Integrations between tools",
              "Operational measurement and adjustments",
            ],
          },
          {
            id: "agentes-ia",
            title: "AI agents",
            menuLabel: "AI agents",
            summary:
              "Agents connected to internal tools for bounded tasks such as finding information, preparing drafts, executing repeatable steps or coordinating a supervised flow.",
            bullets: [
              "Definition of task, limits and permissions",
              "Available tools and sources",
              "Traceability of actions",
              "Human review and escalation",
            ],
          },
          {
            id: "procesamiento-documental",
            title: "Document processing",
            menuLabel: "Document processing",
            summary:
              "Extraction, classification, validation and assisted review of documents to turn scattered information into structured information and useful operational flows.",
            bullets: [
              "Ingestion of PDFs, sheets, emails or forms",
              "Field extraction and rule-based validation",
              "Classification, routing and draft generation",
              "Human review and insertion into CRM or ERP",
            ],
          },
        ],
      },
      {
        id: "otros-desarrollos",
        marker: "03",
        title: "Other custom development",
        description:
          "Many improvements do not only need AI. They need a clear tool, a reliable integration or an internal platform that fits the real way of working.",
        visualSrc: "/images/service3-illustration.png",
        visualScaleClass: "scale-[1.12]",
        services: [
          {
            id: "herramientas-medida",
            title: "Custom tools",
            menuLabel: "Custom tools",
            summary:
              "Software built around a specific process, on top of the real data and constraints of the operation.",
            bullets: [
              "Internal applications",
              "Operational panels",
              "Approval flows",
              "Document or administrative management",
            ],
          },
          {
            id: "herramientas-internas",
            title: "Internal tools",
            menuLabel: "Internal tools",
            summary:
              "Systems for centralizing tasks, information and decisions that now live in Excel, email, Drive, WhatsApp or disconnected tools.",
            bullets: [
              "Operational back office",
              "Tracking panels and dashboards",
              "Internal workflows",
              "Status control, alerts and reporting",
            ],
          },
          {
            id: "integraciones-plataformas-operativas",
            title: "Integrations and operational platforms",
            menuLabel: "Integrations / platforms",
            summary:
              "Connection between Drive, CRM, ERP, spreadsheets, APIs, reporting and internal systems to avoid duplication and manual work.",
            bullets: [
              "Data synchronization",
              "Connectors between tools",
              "Handoff automation",
              "Basic monitoring and error control",
            ],
          },
        ],
      },
    ],
    implementationExamples: [
      {
        marker: "01",
        title: "Knowledge bases",
        description:
          "With citable sources, permissions, evaluation and human review on real documents.",
        className: "lg:col-span-3",
      },
      {
        marker: "02",
        title: "Internal tools",
        description:
          "To coordinate processes, documents, tasks and day-to-day owners.",
        className: "lg:col-span-3",
      },
      {
        marker: "03",
        title: "Integrations",
        description:
          "Between Drive, CRM, ERP, spreadsheets, reporting and internal systems.",
        className: "lg:col-span-2",
      },
      {
        marker: "04",
        title: "Document processing",
        description:
          "Extraction, validation, classification and human handoff in real flows.",
        className: "lg:col-span-2",
      },
      {
        marker: "05",
        title: "AI agents",
        description:
          "For bounded tasks, with limits, controlled tools and traceability.",
        className: "lg:col-span-2",
      },
      {
        marker: "06",
        title: "Operational panels and reports",
        description:
          "Reporting built on real operational data, not on manually prepared reports.",
        className: "lg:col-span-3",
      },
      {
        marker: "07",
        title: "Approval workflows",
        description:
          "States, owners, alerts and records for processes that currently depend on manual follow-up.",
        className: "lg:col-span-3",
      },
    ],
    servicesFaq: [
      {
        question: "Does Tahona always use AI?",
        answer:
          "No. AI is used when it improves the process. In some cases the right solution is an integration, an internal tool, a business rule or a simpler flow.",
      },
      {
        question: "Can we work with existing tools?",
        answer:
          "Yes. Most projects start from tools already present in the company: Drive, CRM, ERP, spreadsheets, email, reporting, APIs or internal systems.",
      },
      {
        question: "What is the difference between automation and process optimization?",
        answer:
          "Automation executes steps. Process optimization requires reviewing whether those steps make sense, what data they need, where human review should remain and how the change enters daily work.",
      },
      {
        question: "What is an enterprise knowledge base?",
        answer:
          "It is an internal knowledge layer with document ingestion, normalization, citable sources, permissions, evaluation, human review and integration with real tools. It is not just a search box over documents.",
      },
      {
        question: "When does an AI agent make sense?",
        answer:
          "When there is a concrete operational task, reliable sources, clear limits, controlled tools, traceability and a supervision point. If those conditions are missing, the process should be solved first.",
      },
    ],
    industryItems: [
      {
        id: "logistica",
        marker: "01",
        title: "Logistics",
        summary:
          "Planning, route optimization, logistics documentation, operational events, reporting and integration with operations tools.",
        description:
          "In logistics we find routes, planning, events, transport documentation, operational data, reporting and coordination between tools. We work on data ingestion, operational optimization, route optimization, document processing, reporting and integration with existing systems.",
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "3D visual of logistics operations",
        tags: ["Routes", "Fleet", "Documentation", "Reporting"],
        bullets: [
          "Route optimization and planning",
          "Logistics documentation and file processing",
          "Service reporting",
          "Fleet management",
          "Operational events and tracking",
          "Integration with tools, APIs and spreadsheets",
        ],
        relatedServices: [
          "Process optimization",
          "Route optimization",
          "Custom tools",
          "Integrations / platforms",
          "Document processing",
        ],
      },
      {
        id: "industria",
        marker: "02",
        title: "Industry",
        summary:
          "Quality control, documentation, traceability, internal processes, reporting and tools to coordinate operational work.",
        description:
          "Industrial and operational environments bring recurring quality checks, documentation, traceability, team coordination and reporting. We work on internal tools, document flows, knowledge bases, integrations and automation.",
        visualSrc: "/images/visual-industry-manufacturing.png",
        visualAlt: "3D visual of industrial operations",
        tags: ["Quality", "Documentation", "Traceability", "Reporting"],
        bullets: [
          "Quality and documentation",
          "Stock management",
          "Internal tools and integrations",
          "Process traceability",
          "Operational reporting",
          "HACCP traceability as a pattern",
        ],
        relatedServices: [
          "Document processing",
          "Internal tools",
          "Process optimization",
          "Integrations / platforms",
        ],
      },
      {
        id: "legal",
        marker: "03",
        title: "Legal",
        summary:
          "Document flows, document generation and review, administrative automation and human validation.",
        description:
          "Many legal and administrative processes combine documents, data, templates, review, communication and follow-up. We can build flows to generate, review, classify and coordinate documents without removing human validation points.",
        visualSrc: "/images/visual-industry-legal.png",
        visualAlt: "3D visual of legal documentation",
        tags: ["Documents", "Validation", "Flows", "Tracking"],
        bullets: [
          "Document generation and review",
          "Document processing",
          "Accounting",
          "Internal tracking tools",
          "Administrative flows",
          "Human validation",
          "Flow traceability",
        ],
        relatedServices: [
          "Document processing",
          "Internal tools",
          "Process optimization",
          "Knowledge bases",
        ],
      },
      {
        id: "seguros",
        marker: "04",
        title: "Insurance",
        summary:
          "Acquisition, qualification, CRM, quoting, follow-up, documentation and commercial reporting.",
        description:
          "In insurance, commercial operations depend on acquisition, qualification, documentation, quoting, CRM, follow-up and reporting. We can connect those pieces with internal tools, supervised automation and clearer information flows.",
        visualSrc: "/images/visual-industry-insurance.png",
        visualAlt: "3D visual of insurance operations",
        tags: ["Acquisition", "CRM", "Quoting", "Reporting"],
        bullets: [
          "Acquisition and qualification",
          "CRM and quoting",
          "Reporting and operational control",
          "Commercial follow-up",
          "Documentation and handoffs",
          "Supervised automation",
        ],
        relatedServices: [
          "Process optimization",
          "Integrations / platforms",
          "Internal tools",
          "AI agents",
        ],
      },
      {
        id: "marketing-growth",
        marker: "05",
        title: "Marketing and growth",
        summary:
          "Lead ops, acquisition, qualification, reporting, CRM, internal tools and commercial coordination.",
        description:
          "We do not provide marketing agency services. The fit is operational: acquisition, lead ops, qualification, CRM, reporting, internal tools and coordination of campaigns or commercial processes.",
        visualSrc: "/images/visual-industry-marketing.png",
        visualAlt: "3D visual of marketing and growth operations",
        tags: ["Lead ops", "Qualification", "CRM", "Reporting"],
        bullets: [
          "Acquisition and forms",
          "Automations",
          "Commercial reporting",
          "Lead ops and qualification",
          "CRM integration and follow-up",
          "Internal tools",
        ],
        relatedServices: [
          "Process optimization",
          "Integrations and platforms",
          "Internal tools",
          "AI agents",
        ],
      },
      {
        id: "salud",
        marker: "06",
        title: "Healthcare",
        summary:
          "Operational support, documentation, internal knowledge and non-clinical systems.",
        description:
          "In healthcare we only work on non-clinical operational layers: documentation, internal knowledge, coordination, reporting and administrative support.",
        visualSrc: "/images/visual-industry-health.png",
        visualAlt: "3D visual of non-clinical healthcare operations",
        tags: ["Support", "Documentation", "Knowledge", "PoC"],
        bullets: [
          "Operational documentation",
          "Internal knowledge",
          "Administrative coordination",
          "Non-clinical systems",
          "Internal reporting",
          "Validation and human review",
        ],
        relatedServices: [
          "Knowledge bases",
          "Document processing",
          "Internal tools",
          "Integrations / platforms",
        ],
      },
    ],
    industriesFaq: [
      {
        question: "Does Tahona specialize in one sector?",
        answer:
          "No. We work on internal operations. Some sectors have especially clear patterns, but the decision depends on each company's process, data, documents and tools.",
      },
      {
        question: "What about regulated sectors?",
        answer:
          "They require more caution: clear limits, human review, traceability and separation between operational support and regulated decisions. We do not replace legal, clinical, regulatory or compliance review.",
      },
      {
        question: "Do processes need to be documented already?",
        answer:
          "No. Often the first job is to map how the real operation works: what is done, who is involved, what documents appear, what data is missing and where control is lost.",
      },
      {
        question: "Can we use existing sector tools?",
        answer:
          "Yes. Usually the starting point is what the team already uses: CRM, ERP, Drive, spreadsheets, email, reporting, APIs or internal systems. The solution needs to fit that context.",
      },
      {
        question: "What changes from one sector to another?",
        answer:
          "The documents, constraints, vocabulary, systems and review points change. The method remains the same: understand the operation, organize the flow and build only what improves the work.",
      },
      {
        question: "Can we start with a small area?",
        answer:
          "Yes. It makes sense to start with a concrete flow when there is enough information, defined owners and clear criteria for knowing whether the improvement works before extending it.",
      },
    ],
    caseStudies: [
      {
        id: "plataforma-documental-operativa",
        marker: "01",
        sector: "Legal",
        title: "Document and operations platform",
        summary:
          "Design and implementation of an internal platform to coordinate document processes, information extraction, draft generation, human validation, repeatable tasks and operational tracking.",
        visualSrc: "/images/visual-case-legal-document-platform.png",
        visualAlt: "3D visual of a document platform",
        bullets: [
          "Document flows with states",
          "Agentic system",
          "Draft generation",
          "Human validation first",
          "Repeatable tasks and tracking",
          "Change traceability",
          "Operational base for internal documentation",
        ],
        tags: [
          "Document processing",
          "Internal tools",
          "Knowledge bases",
          "Human validation",
        ],
      },
      {
        id: "planificacion-logistica-reporting",
        marker: "02",
        sector: "Logistics",
        title: "Logistics planning platform",
        summary:
          "Platform for planning routes, importing operational data, coordinating events, reviewing logistics documentation and generating useful operational reporting.",
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "3D visual of logistics planning",
        bullets: [
          "Route optimization",
          "Route planning",
          "Operational data import",
          "Event coordination",
          "Document review",
          "Operational reporting",
          "Integration with existing tools",
        ],
        tags: [
          "Process optimization",
          "Integrations / platforms",
          "Document processing",
          "Reporting",
        ],
      },
      {
        id: "base-conocimiento-empresarial",
        marker: "03",
        sector: "Cross-functional",
        title: "Enterprise knowledge base",
        summary:
          "Agentic internal knowledge layer with document ingestion, processing, citable sources, metadata, permissions, evaluation, human review and integration with internal tools.",
        visualSrc: "/images/visual-case-enterprise-knowledge.png",
        visualAlt: "3D visual of an enterprise knowledge base",
        bullets: [
          "Document ingestion",
          "Normalization and metadata",
          "Citable sources",
          "Permissions and scope",
          "Response evaluation",
          "Integration with internal tools",
        ],
        tags: [
          "Knowledge bases",
          "Document processing",
          "Permissions",
          "Traceability",
        ],
      },
      {
        id: "documentacion-calidad-trazabilidad",
        marker: "04",
        sector: "Industry",
        title: "Documentation, quality and traceability platform for food operations",
        summary:
          "Workflow platform to organize documentation, validate information, maintain traceability and generate reporting in quality processes for food operations.",
        visualSrc: "/images/visual-case-appcc-quality.png",
        visualAlt: "3D visual of industrial quality and traceability",
        bullets: [
          "Document processing",
          "HACCP",
          "Information validation",
          "Process traceability",
          "Quality reporting",
          "Operational controls",
          "Systems integration",
        ],
        tags: [
          "Internal tools",
          "Document processing",
          "Process optimization",
          "Traceability",
        ],
      },
    ],
    workItems: [
      {
        id: "document-platform",
        sector: "Legal",
        title: "Document and operations platform",
        description:
          "Design and implementation of an internal tool to coordinate document processes, extract data from complex documents, generate drafts, support human validation, RPA, repeatable tasks and operational tracking.",
        tags: [
          "Document processing",
          "Human validation",
          "Internal tasks",
          "Tracking",
        ],
        imageSrc: "/images/visual-case-legal-document-platform.png",
      },
      {
        id: "logistics-planning",
        sector: "Logistics",
        title: "Logistics optimization platform",
        description:
          "Platform for planning routes, importing orders, coordinating events, reviewing logistics documentation and generating useful operational reporting.",
        tags: ["Planning", "Route optimization", "Reporting"],
        imageSrc: "/images/visual-logistics.png",
      },
    ],
  },
  pl: {
    metadata: {
      home: {
        name: "Strona główna",
        title: "Tahona | Procesy, dane i narzędzia wewnętrzne",
        description:
          "Usprawniamy procesy wewnętrzne przez diagnozę operacyjną, wdrożenie techniczne i automatyzację tylko wtedy, gdy pasuje do rzeczywistego sposobu pracy.",
      },
      services: {
        name: "Usługi",
        title: "Usługi Tahona | Procesy, AI i integracje",
        description:
          "Usługi porządkujące procesy, dane, dokumenty, narzędzia wewnętrzne, wdrożenia AI i integracje wokół rzeczywistego sposobu pracy.",
      },
      industries: {
        name: "Branże",
        title: "Branże Tahona | Oprogramowanie i AI dla sektorów",
        description:
          "Stosujemy oprogramowanie, AI i integracje w logistyce, przemyśle, prawie, ubezpieczeniach, marketingu i zdrowiu, koncentrując się na procesach i narzędziach wewnętrznych.",
      },
      cases: {
        name: "Przykłady",
        title: "Przykłady Tahona | Zanonimizowane projekty operacyjne",
        description:
          "Zanonimizowane projekty dotyczące dokumentacji, planowania, wiedzy, raportowania i integracji, opisane od strony problemu operacyjnego i rozwiązania.",
      },
      keywords:
        "diagnoza operacyjna, wdrożenie techniczne, automatyzacja procesów, narzędzia wewnętrzne, dane, dokumenty, raportowanie, efektywność operacyjna",
    },
    skipLink: "Przejdź do głównej treści",
    navigation: {
      closeMenuLabel: "Zamknij menu",
      contactLabel: "Kontakt",
      languageLabel: "Język",
      menuTitle: "Menu",
      openMenuLabel: "Otwórz menu",
      servicesLabel: "Usługi",
      servicesOverviewLabel: "Zobacz wszystkie usługi",
      pageItems: [
        { label: "Start", routeKey: "home", activeHref: "#hero" },
        { label: "Branże", routeKey: "industries", activeHref: "#industrias" },
        { label: "Przykłady", routeKey: "cases", activeHref: "#trabajo" },
      ],
      serviceColumns: [
        {
          title: "Fundamenty",
          items: [
            {
              label: "Konsulting",
              description:
                "Audyt operacyjny i diagnoza procesów, danych oraz narzędzi.",
              href: "#consultoria-auditoria-operativa",
            },
            {
              label: "Strategia",
              description: "Mapa techniczno-operacyjna przed rozpoczęciem budowy.",
              href: "#estrategia-tecnica-operativa",
            },
            {
              label: "Bazy wiedzy",
              description:
                "Wiedza wewnętrzna ze źródłami, uprawnieniami i kontrolą człowieka.",
              href: "#bases-conocimiento-empresarial",
            },
          ],
        },
        {
          title: "Wdrożenia AI",
          items: [
            {
              label: "Optymalizacja procesów",
              description:
                "Mniej kroków ręcznych na bazie istniejących narzędzi.",
              href: "#optimizacion-procesos",
            },
            {
              label: "Agenci AI",
              description:
                "Zadania o jasno określonym zakresie, z granicami, nadzorem i śledzeniem działań.",
              href: "#agentes-ia",
            },
            {
              label: "Przetwarzanie dokumentów",
              description: "Ekstrakcja, walidacja i klasyfikacja dokumentów.",
              href: "#procesamiento-documental",
            },
          ],
        },
        {
          title: "Inne wdrożenia techniczne",
          items: [
            {
              label: "Narzędzia na miarę",
              description:
                "Oprogramowanie wokół konkretnego procesu, z właściwym poziomem złożoności.",
              href: "#herramientas-medida",
            },
            {
              label: "Narzędzia wewnętrzne",
              description: "Zaplecze operacyjne, panele i przepływy pracy do codziennych zadań.",
              href: "#herramientas-internas",
            },
            {
              label: "Integracje / platformy",
              description: "Połączone Drive, CRM, ERP, arkusze i API.",
              href: "#integraciones-plataformas-operativas",
            },
          ],
        },
      ],
    },
    home: {
      hero: {
        titleLines: ["Od diagnozy do wdrożenia."],
        description:
          "Tahona to partner technologiczny, który pomaga firmom lepiej działać od wewnątrz.",
        primaryLabel: "Porozmawiajmy",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz usługi",
        secondaryHref: "#soluciones",
      },
      whatWeDo: {
        eyebrow: "Czym się zajmujemy",
        title:
          "Usprawniamy procesy wewnętrzne tam, gdzie spotykają się dane, dokumenty i narzędzia.",
        description: [
          "Praca nie zaczyna się od wyboru technologii. Zaczyna się od zrozumienia, jak firma pracuje, jakie informacje przepływają między zespołami, gdzie powtarza się praca ręczna i czego zespół potrzebuje, aby działać z większą kontrolą.",
          "Na podstawie tej diagnozy budujemy narzędzia wewnętrzne, integracje, bazy wiedzy, przetwarzanie dokumentów albo automatyzację z AI, jeśli pasuje do rzeczywistego sposobu pracy.",
        ],
        bullets: [
          "Procesy z nadmiarem ręcznych kroków.",
          "Dokumenty wymagające przeglądu, ekstrakcji lub klasyfikacji.",
          "Informacje rozproszone między Drive, arkuszami, CRM, ERP, pocztą i narzędziami wewnętrznymi.",
          "Raportowanie, które pojawia się z opóźnieniem albo wymaga ręcznego przygotowania.",
          "Zespoły potrzebujące wdrożenia bez dokładania kolejnej warstwy tarcia.",
        ],
      },
      services: {
        eyebrow: "Usługi",
        title: "Trzy rodziny pracy.",
        description:
          "Najpierw rozumiemy sposób pracy. Dopiero potem decydujemy, czy potrzebna jest strategia, oprogramowanie, AI, integracje, wsparcie adopcji czy szkolenie.",
        ctaLabel: "Zobacz usługi",
      },
      industries: {
        eyebrow: "Branże",
        title: "Sektory, z którymi pracujemy.",
        description:
          "Nie zamykamy się w jednej branży. Wspólny wzorzec to rozproszone informacje, powtarzalne zadania, dokumentacja i integracje między narzędziami.",
        ctaLabel: "Zobacz branże",
      },
      ourWork: {
        eyebrow: "Projekty wdrożeniowe",
        title: "Realizacje oparte na rzeczywistych procesach.",
        description:
          "Przykłady projektów wdrożeniowych w realnych procesach: platformy wewnętrzne, planowanie, dokumentacja, dane i integracje budowane wokół sposobu pracy danego zespołu.",
        ctaLabel: "Zobacz przykłady",
      },
      howWeWork: {
        eyebrow: "Jak pracujemy",
        title: "Zrozumieć sposób pracy, zanim zacznie się go zmieniać.",
        description:
          "Każda firma pracuje inaczej. Proces zaczyna się od zrozumienia rzeczywistych procesów, danych, narzędzi, dokumentów i ograniczeń. Następnie priorytetyzujemy usprawnienia, które mają praktyczny sens, i wdrażamy je tak, aby zespół mógł je przyjąć.",
        steps: [
          {
            number: "01",
            title: "Kontekst",
            description:
              "Pierwsze rozpoznanie sposobu pracy, priorytetów i głównych tarć.",
          },
          {
            number: "02",
            title: "Diagnoza",
            description:
              "Przegląd procesów, danych, dokumentów, narzędzi i zależności wewnętrznych.",
          },
          {
            number: "03",
            title: "Priorytetyzacja",
            description:
              "Wybór obszarów usprawnienia według wartości operacyjnej, złożoności, ryzyka i łatwości adopcji.",
          },
          {
            number: "04",
            title: "Budowa",
            description:
              "Projektowanie i wdrożenie oprogramowania, AI, integracji lub automatyzacji zależnie od przypadku.",
          },
          {
            number: "05",
            title: "Adopcja",
            description:
              "Dostosowanie, dokumentacja i przekazanie, aby system wszedł do codziennej pracy.",
          },
        ],
      },
    },
    aiApplied: {
      eyebrow: "AI w praktyce",
      title: "AI wtedy, gdy poprawia proces, a nie tylko dodaje szum.",
      description:
        "Pracujemy z modelami, asystentami i agentami, gdy pomagają czytać dokumenty, przygotowywać informacje, wykonywać powtarzalne kroki, sprawdzać wyniki albo łączyć narzędzia wewnętrzne. Każdy system musi mieć granice, śledzenie działań i jasny punkt nadzoru.",
      curve: {
        ariaLabel: "Krzywa wartości AI w praktyce",
        valueLabel: "Wartość",
        automationLabel: "Automatyzacja",
        levels: [
          { label: "POZIOM 01", title: ["Użycie z kryterium"], body: "Decyzja człowieka." },
          { label: "POZIOM 02", title: ["Asystenci specjalistyczni"], body: "Czytanie i przegląd." },
          { label: "POZIOM 03", title: ["Automatyzacja", "nadzorowana"], body: "Reguły i śledzenie zmian." },
          { label: "POZIOM 04", title: ["Agenci z kontekstem"], body: "Uprawnienia i granice." },
        ],
      },
    },
    servicesPage: {
      hero: {
        titleLines: ["Usługi porządkujące, budujące i integrujące procesy wewnętrzne."],
        description:
          "Punktem wyjścia są rzeczywiste procesy firmy. Najpierw rozumiemy dane, dokumenty i narzędzia, a dopiero potem decydujemy, co warto zbudować, zintegrować lub zautomatyzować.",
        primaryLabel: "Umów pierwszą rozmowę",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz, jak pracujemy",
        secondaryHref: "#familias-servicios",
      },
      pillarsSection: {
        eyebrow: "Jak porządkujemy usługi",
        title: "Trzy rodziny pracy ułożone w sekwencję.",
        description:
          "Fundamenty pomagają zrozumieć i uporządkować sposób pracy. Wdrożenia AI oraz inne wdrożenia techniczne budujemy dopiero na tej podstawie, nie odwrotnie.",
      },
      detailSection: {
        eyebrow: "Usługi szczegółowo",
        title: "Co robimy, pogrupowane według obszaru.",
      },
      examplesSection: {
        eyebrow: "Co budujemy",
        title: "Przykłady konkretnych systemów dla konkretnych procesów.",
        description:
          "Nie tworzymy generycznych rozwiązań. Wdrożenia są dopasowane do kontekstu i budowane na rzeczywistych danych oraz ograniczeniach.",
      },
      faqSection: {
        eyebrow: "Pytania",
        title: "Najczęstsze pytania o usługi.",
        description: "To, o co najczęściej pytają zespoły przed startem.",
      },
    },
    industriesPage: {
      hero: {
        titleLines: ["Oprogramowanie, AI i integracje dla wybranych sektorów."],
        description:
          "W każdym sektorze są procesy, dokumenty, dane, raportowanie i narzędzia, które muszą lepiej działać razem. Metoda pozostaje ta sama: zrozumieć, wdrożyć i poprawić.",
        primaryLabel: "Umów pierwszą rozmowę",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz usługi",
        secondaryHref: "/pl/services/",
      },
      gridSection: {
        eyebrow: "Branże",
        title: "Sektory, z którymi pracujemy.",
        description:
          "Nie zamykamy się w jednej branży. Wspólny wzorzec to rozproszone informacje, powtarzalne zadania, dokumentacja i integracje między narzędziami.",
      },
      detailSection: {
        eyebrow: "Szczegóły",
        title: "Jak wygląda praca w każdym sektorze.",
        relatedServicesLabel: "Powiązane usługi",
      },
      faqSection: {
        eyebrow: "Pytania",
        title: "Najczęstsze pytania o branże.",
        description: "Jak dopasowujemy się do sektora.",
      },
    },
    casesPage: {
      hero: {
        titleLines: ["Projekty wdrożeniowe w realnych procesach."],
        description:
          "Projekty i wzorce realizowane przez Tahona, przedstawione anonimowo i bez wymyślonych metryk, opinii czy logo. Pokazujemy problem operacyjny, który porządkujemy, oraz rozwiązanie zbudowane wokół niego.",
        primaryLabel: "Umów pierwszą rozmowę",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz usługi",
        secondaryHref: "/pl/services/",
      },
      section: {
        eyebrow: "Przykłady",
        title: "Projekty wdrożeniowe w realnych procesach.",
        text:
          "Projekty i wzorce prowadzone od strony procesów wewnętrznych: dokumentacja, planowanie, wiedza, raportowanie i integracje.",
        relatedAreasLabel: "Powiązane obszary",
      },
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Pierwsza rozmowa, aby zrozumieć kontekst.",
      description:
        "Pierwsza rozmowa pozwala przejrzeć sposób pracy, sprawdzić, czy istnieje konkretny obszar do usprawnienia, i jasno ustalić kolejny krok.",
      sidebarEyebrow: "Kontakt",
      sidebarBody:
        "Przeglądamy kontekst według praktycznego kryterium. Jeśli widzimy konkretny obszar usprawnienia, wskazujemy, od czego zacząć i co warto najpierw zweryfikować.",
      emailLabel: "E-mail",
      emailPlaceholder: "imie@firma.pl",
      emailValueLabel: "hola@tahona.ai",
      emailHint: "Jeden e-mail wystarczy, aby zacząć oceniać dopasowanie.",
      phoneLabel: "Telefon",
      phoneHint: "Jeśli potrzebny jest konkretny start, wystarczy krótka rozmowa.",
      trustBadges: [
        "Odpowiedź w ciągu 24 godzin roboczych",
        "Pierwszy obszar usprawnienia nazwany wprost",
        "Bez zobowiązań i presji sprzedażowej",
      ],
      formTitle: "Punkt wyjścia",
      formIntro:
        "Wystarczą podstawy. Odpowiadamy z pierwszą oceną i najbardziej użytecznym następnym krokiem.",
      nameLabel: "Imię i nazwisko",
      namePlaceholder: "Imię i nazwisko",
      detailsLabel: "Proces lub problem do przejrzenia",
      detailsPlaceholder:
        "Obecny proces, co dziś dzieje się ręcznie, gdzie pojawia się zator i jaki zespół jest zaangażowany.",
      privacyNote:
        "Odpowiadamy w ciągu 24 godzin roboczych. Bez presji sprzedażowej: jeśli nie widzimy dobrego dopasowania, powiemy to wprost.",
      submitLabel: "Umów pierwszą rozmowę",
      submittingLabel: "Wysyłanie...",
      closeLabel: "Zamknij",
      modalEyebrow: "Wiadomość odebrana",
      modalTitle: "Wiadomość odebrana",
      modalText:
        "Przejrzymy ją i odpowiemy w ciągu 24 godzin roboczych z najbardziej użytecznym następnym krokiem.",
      modalEmailText:
        "Aby dodać więcej kontekstu e-mailem, napisz na hola@tahona.ai",
      mailCtaText: "hola@tahona.ai",
      errorMessages: {
        nameShort: "Imię i nazwisko musi mieć co najmniej 2 znaki",
        nameLong: "Imię i nazwisko jest zbyt długie",
        emailInvalid: "Podaj poprawny adres e-mail",
        detailsShort: "Opisz nieco szerzej projekt lub problem",
        detailsLong: "Wiadomość jest zbyt długa",
        submit: "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.",
      },
    },
    footer: {
      contactLabel: "Skontaktuj się z nami",
      copyright: "Wszelkie prawa zastrzeżone.",
      description:
        "Zespół techniczny usprawniający procesy, dane i narzędzia wewnętrzne z praktycznym kryterium działania.",
    },
    structuredData: {
      organizationDescription:
        "Studio konsultingu technicznego i wdrożeń usprawniających procesy wewnętrzne, dane, dokumenty, narzędzia i integracje.",
      knowsAbout: [
        "diagnoza operacyjna",
        "wdrożenie techniczne",
        "automatyzacja procesów",
        "narzędzia wewnętrzne",
        "przetwarzanie dokumentów",
        "integracje operacyjne",
      ],
      serviceSchemaName:
        "Usługi wdrożeń technicznych dla procesów wewnętrznych",
      serviceCatalogName: "Rodziny usług Tahona",
      industryListName: "Sektory i wzorce operacyjne",
      casesListName: "Zanonimizowane przykłady projektów operacyjnych",
    },
    serviceFamilies: [
      {
        id: "fundamentos",
        marker: "01",
        title: "Fundamenty",
        description:
          "Przed budową porządkujemy problem. Diagnoza, strategia i wiedza wewnętrzna pozwalają podejmować decyzje techniczne z właściwym kontekstem.",
        visualSrc: "/images/service1-illustration.png",
        visualScaleClass: "scale-[1.08]",
        services: [
          {
            id: "consultoria-auditoria-operativa",
            title: "Konsulting i audyt operacyjny",
            menuLabel: "Konsulting",
            summary:
              "Przegląd procesów, narzędzi, dokumentów, danych i zależności wewnętrznych, aby zrozumieć, gdzie traci się jasność, kontrolę lub zdolność operacyjną.",
            bullets: [
              "Mapa obecnego procesu",
              "Inwentaryzacja pracy ręcznej i blokad",
              "Ryzyka, zależności i priorytety",
              "Rekomendacja kolejnych kroków",
            ],
          },
          {
            id: "estrategia-tecnica-operativa",
            title: "Strategia techniczna i operacyjna",
            menuLabel: "Strategia",
            summary:
              "Mapa działań pomagająca zdecydować, co wdrożyć, w jakiej kolejności i przy jakich ograniczeniach. Przydatna, gdy zespół potrzebuje jasności przed inwestycją w rozwój.",
            bullets: [
              "Roadmapa etapami",
              "Zakres funkcjonalny i techniczny",
              "Kryteria decyzji",
              "Ryzyka adopcji, danych i integracji",
            ],
          },
          {
            id: "bases-conocimiento-empresarial",
            title: "Firmowe bazy wiedzy",
            menuLabel: "Bazy wiedzy",
            summary:
              "Warstwa wiedzy wewnętrznej do pracy z dokumentami, danymi i kontekstem firmy, ze źródłami, uprawnieniami, ewaluacją i kontrolą człowieka.",
            bullets: [
              "Wczytywanie i normalizacja dokumentów",
              "Odpowiedzi ze źródłami i śledzeniem pochodzenia informacji",
              "Projekt uprawnień i zakresu",
              "Integracja z Drive, CRM, ERP i raportowaniem",
            ],
          },
        ],
      },
      {
        id: "desarrollo-ia",
        marker: "02",
        title: "Wdrożenia AI",
        description:
          "Wewnętrzne wdrożenia AI. Projektujemy je z myślą o granicach, nadzorze, źródłach, śledzeniu działań i adopcji.",
        visualSrc: "/images/service2-illustration.png",
        visualScaleClass: "scale-[1.1]",
        services: [
          {
            id: "optimizacion-procesos",
            title: "Optymalizacja procesów",
            menuLabel: "Optymalizacja procesów",
            summary:
              "Usprawnianie przepływów operacyjnych przez reguły, automatyzację, modele lub oprogramowanie, z ograniczeniem ręcznych kroków i integracją z istniejącymi narzędziami.",
            bullets: [
              "Uproszczenie przepływu przed automatyzacją",
              "Automatyzacje z kontrolą tam, gdzie jest potrzebna",
              "Integracje między narzędziami",
              "Pomiar operacyjny i korekty",
            ],
          },
          {
            id: "agentes-ia",
            title: "Agenci AI",
            menuLabel: "Agenci AI",
            summary:
              "Agenci podłączeni do narzędzi wewnętrznych dla zadań o jasno określonym zakresie, takich jak wyszukiwanie informacji, przygotowanie szkiców, wykonywanie powtarzalnych kroków lub koordynacja nadzorowanego przepływu.",
            bullets: [
              "Definicja zadania, granic i uprawnień",
              "Dostępne narzędzia i źródła",
              "Śledzenie działań",
              "Kontrola człowieka i eskalacja",
            ],
          },
          {
            id: "procesamiento-documental",
            title: "Przetwarzanie dokumentów",
            menuLabel: "Przetwarzanie dokumentów",
            summary:
              "Ekstrakcja, klasyfikacja, walidacja i wspomagany przegląd dokumentów, aby zamienić rozproszone informacje w uporządkowane dane i użyteczne przepływy operacyjne.",
            bullets: [
              "Wczytywanie PDF-ów, arkuszy, e-maili lub formularzy",
              "Ekstrakcja pól i walidacja regułami",
              "Klasyfikacja, routing i generowanie szkiców",
              "Kontrola człowieka i zapis do CRM lub ERP",
            ],
          },
        ],
      },
      {
        id: "otros-desarrollos",
        marker: "03",
        title: "Inne wdrożenia techniczne",
        description:
          "Wiele usprawnień nie wymaga AI. Wymaga jasnego narzędzia, niezawodnej integracji albo platformy wewnętrznej pasującej do rzeczywistego sposobu pracy.",
        visualSrc: "/images/service3-illustration.png",
        visualScaleClass: "scale-[1.12]",
        services: [
          {
            id: "herramientas-medida",
            title: "Narzędzia na miarę",
            menuLabel: "Narzędzia na miarę",
            summary:
              "Oprogramowanie zbudowane wokół konkretnego procesu, na rzeczywistych danych i ograniczeniach operacyjnych.",
            bullets: [
              "Aplikacje wewnętrzne",
              "Panele operacyjne",
              "Przepływy akceptacji",
              "Zarządzanie dokumentacją lub administracją",
            ],
          },
          {
            id: "herramientas-internas",
            title: "Narzędzia wewnętrzne",
            menuLabel: "Narzędzia wewnętrzne",
            summary:
              "Systemy centralizujące zadania, informacje i decyzje, które dziś są w Excelu, e-mailach, Drive, WhatsApp lub niepołączonych narzędziach.",
            bullets: [
              "Zaplecze operacyjne",
              "Panele śledzenia i raporty",
              "Wewnętrzne przepływy pracy",
              "Kontrola statusu, alerty i raportowanie",
            ],
          },
          {
            id: "integraciones-plataformas-operativas",
            title: "Integracje i platformy operacyjne",
            menuLabel: "Integracje / platformy",
            summary:
              "Połączenie Drive, CRM, ERP, arkuszy, API, raportowania i systemów wewnętrznych, aby ograniczyć duplikację i pracę ręczną.",
            bullets: [
              "Synchronizacja danych",
              "Konektory między narzędziami",
              "Automatyzacja przekazywania danych lub zadań",
              "Podstawowy monitoring i kontrola błędów",
            ],
          },
        ],
      },
    ],
    implementationExamples: [
      {
        marker: "01",
        title: "Bazy wiedzy",
        description:
          "Ze źródłami, uprawnieniami, ewaluacją i kontrolą człowieka na realnych dokumentach.",
        className: "lg:col-span-3",
      },
      {
        marker: "02",
        title: "Narzędzia wewnętrzne",
        description:
          "Do koordynowania procesów, dokumentów, zadań i odpowiedzialnych osób.",
        className: "lg:col-span-3",
      },
      {
        marker: "03",
        title: "Integracje",
        description:
          "Między Drive, CRM, ERP, arkuszami, raportowaniem i systemami wewnętrznymi.",
        className: "lg:col-span-2",
      },
      {
        marker: "04",
        title: "Przetwarzanie dokumentów",
        description:
          "Ekstrakcja, walidacja, klasyfikacja i przekazanie do człowieka w realnych przepływach.",
        className: "lg:col-span-2",
      },
      {
        marker: "05",
        title: "Agenci AI",
        description:
          "Dla zadań o jasno określonym zakresie, z granicami, kontrolowanymi narzędziami i śledzeniem działań.",
        className: "lg:col-span-2",
      },
      {
        marker: "06",
        title: "Panele i raporty operacyjne",
        description:
          "Raportowanie zbudowane na realnych danych operacyjnych, nie na ręcznie składanych raportach.",
        className: "lg:col-span-3",
      },
      {
        marker: "07",
        title: "Przepływ akceptacji",
        description:
          "Statusy, właściciele, alerty i rejestr dla procesów, które dziś zależą od ręcznego pilnowania.",
        className: "lg:col-span-3",
      },
    ],
    servicesFaq: [
      {
        question: "Czy Tahona zawsze używa AI?",
        answer:
          "Nie. AI używamy wtedy, gdy poprawia proces. W niektórych przypadkach właściwym rozwiązaniem jest integracja, narzędzie wewnętrzne, reguła biznesowa albo uproszczenie przepływu.",
      },
      {
        question: "Czy możemy pracować z istniejącymi narzędziami?",
        answer:
          "Tak. Większość projektów startuje od narzędzi już obecnych w firmie: Drive, CRM, ERP, arkuszy, poczty, raportowania, API lub systemów wewnętrznych.",
      },
      {
        question: "Czym różni się automatyzacja od optymalizacji procesów?",
        answer:
          "Automatyzacja wykonuje kroki. Optymalizacja procesów wymaga sprawdzenia, czy te kroki mają sens, jakich danych potrzebują, gdzie powinna zostać kontrola człowieka i jak zmiana trafia do codziennej pracy.",
      },
      {
        question: "Czym jest firmowa baza wiedzy?",
        answer:
          "To warstwa wiedzy wewnętrznej z wczytywaniem i normalizacją dokumentów, cytowalnymi źródłami, uprawnieniami, ewaluacją, kontrolą człowieka i integracją z rzeczywistymi narzędziami. To nie jest tylko wyszukiwarka nad dokumentami.",
      },
      {
        question: "Kiedy agent AI ma sens?",
        answer:
          "Gdy istnieje konkretne zadanie operacyjne, wiarygodne źródła, jasne granice, kontrolowane narzędzia, śledzenie działań i punkt nadzoru. Jeśli tych warunków nie ma, najpierw warto rozwiązać proces.",
      },
    ],
    industryItems: [
      {
        id: "logistica",
        marker: "01",
        title: "Logistyka",
        summary:
          "Planowanie, optymalizacja tras, dokumentacja logistyczna, zdarzenia operacyjne, raportowanie i integracja z narzędziami operacyjnymi.",
        description:
          "W logistyce pojawiają się trasy, planowanie, zdarzenia, dokumentacja transportowa, dane operacyjne, raportowanie i koordynacja między narzędziami. Pracujemy nad wczytywaniem danych, optymalizacją operacyjną, optymalizacją tras, przetwarzaniem dokumentów, raportowaniem i integracją z istniejącymi systemami.",
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "Wizualizacja 3D operacji logistycznych",
        tags: ["Trasy", "Flota", "Dokumentacja", "Raportowanie"],
        bullets: [
          "Optymalizacja tras i planowanie",
          "Dokumentacja logistyczna i przetwarzanie plików",
          "Raportowanie operacyjne",
          "Zarządzanie flotą",
          "Zdarzenia operacyjne i śledzenie",
          "Integracja z narzędziami, API i arkuszami",
        ],
        relatedServices: [
          "Optymalizacja procesów",
          "Optymalizacja tras",
          "Narzędzia na miarę",
          "Integracje / platformy",
          "Przetwarzanie dokumentów",
        ],
      },
      {
        id: "industria",
        marker: "02",
        title: "Przemysł",
        summary:
          "Kontrola jakości, dokumentacja, identyfikowalność, procesy wewnętrzne, raportowanie i narzędzia do koordynacji pracy operacyjnej.",
        description:
          "W środowiskach przemysłowych i operacyjnych pojawiają się kontrole jakości, powtarzalna dokumentacja, identyfikowalność, koordynacja między zespołami i raportowanie. Pracujemy nad narzędziami wewnętrznymi, przepływami dokumentów, bazami wiedzy, integracjami i automatyzacją.",
        visualSrc: "/images/visual-industry-manufacturing.png",
        visualAlt: "Wizualizacja 3D operacji przemysłowej",
        tags: ["Jakość", "Dokumentacja", "Identyfikowalność", "Raportowanie"],
        bullets: [
          "Jakość i dokumentacja",
          "Zarządzanie stanami",
          "Narzędzia wewnętrzne i integracje",
          "Identyfikowalność procesów",
          "Raportowanie operacyjne",
          "HACCP jako wzorzec identyfikowalności",
        ],
        relatedServices: [
          "Przetwarzanie dokumentów",
          "Narzędzia wewnętrzne",
          "Optymalizacja procesów",
          "Integracje / platformy",
        ],
      },
      {
        id: "legal",
        marker: "03",
        title: "Prawo",
        summary:
          "Przepływy dokumentów, generowanie i przegląd dokumentów, automatyzacja administracyjna i walidacja przez człowieka.",
        description:
          "Wiele procesów prawnych i administracyjnych łączy dokumenty, dane, szablony, przegląd, komunikację i śledzenie. Możemy budować przepływy do generowania, przeglądu, klasyfikacji i koordynacji dokumentów bez usuwania punktów walidacji przez człowieka.",
        visualSrc: "/images/visual-industry-legal.png",
        visualAlt: "Wizualizacja 3D dokumentacji prawnej",
        tags: ["Dokumenty", "Walidacja", "Przepływy", "Śledzenie statusów"],
        bullets: [
          "Generowanie i przegląd dokumentów",
          "Przetwarzanie dokumentów",
          "Rozliczenia i administracja",
          "Narzędzia wewnętrzne do śledzenia",
          "Przepływy administracyjne",
          "Walidacja przez człowieka",
          "Identyfikowalność przepływu",
        ],
        relatedServices: [
          "Przetwarzanie dokumentów",
          "Narzędzia wewnętrzne",
          "Optymalizacja procesów",
          "Bazy wiedzy",
        ],
      },
      {
        id: "seguros",
        marker: "04",
        title: "Ubezpieczenia",
        summary:
          "Pozyskiwanie, kwalifikacja, CRM, wyceny, dalszy kontakt, dokumentacja i raportowanie sprzedażowe.",
        description:
          "W ubezpieczeniach proces sprzedażowy zależy od pozyskiwania, kwalifikacji, dokumentacji, wycen, CRM, dalszego kontaktu i raportowania. Możemy połączyć te elementy narzędziami wewnętrznymi, nadzorowaną automatyzacją i czytelniejszymi przepływami informacji.",
        visualSrc: "/images/visual-industry-insurance.png",
        visualAlt: "Wizualizacja 3D operacji ubezpieczeniowych",
        tags: ["Pozyskiwanie", "CRM", "Wyceny", "Raportowanie"],
        bullets: [
          "Pozyskiwanie i kwalifikacja",
          "CRM i wyceny",
          "Raportowanie i kontrola operacyjna",
          "Dalszy kontakt sprzedażowy",
          "Dokumentacja i przekazania",
          "Automatyzacja nadzorowana",
        ],
        relatedServices: [
          "Optymalizacja procesów",
          "Integracje / platformy",
          "Narzędzia wewnętrzne",
          "Agenci AI",
        ],
      },
      {
        id: "marketing-growth",
        marker: "05",
        title: "Marketing i sprzedaż",
        summary:
          "Obsługa leadów, pozyskiwanie, kwalifikacja, raportowanie, CRM, narzędzia wewnętrzne i koordynacja sprzedażowa.",
        description:
          "Nie świadczymy usług agencji marketingowej. Nasze dopasowanie jest operacyjne: pozyskiwanie, obsługa leadów, kwalifikacja, CRM, raportowanie, narzędzia wewnętrzne i koordynacja kampanii lub procesów sprzedażowych.",
        visualSrc: "/images/visual-industry-marketing.png",
        visualAlt: "Wizualizacja 3D operacji marketingu i sprzedaży",
        tags: ["Obsługa leadów", "Kwalifikacja", "CRM", "Raportowanie"],
        bullets: [
          "Pozyskiwanie i formularze",
          "Automatyzacje",
          "Raportowanie sprzedażowe",
          "Obsługa leadów i kwalifikacja",
          "Integracja z CRM i śledzenie",
          "Narzędzia wewnętrzne",
        ],
        relatedServices: [
          "Optymalizacja procesów",
          "Integracje i platformy",
          "Narzędzia wewnętrzne",
          "Agenci AI",
        ],
      },
      {
        id: "salud",
        marker: "06",
        title: "Zdrowie",
        summary:
          "Wsparcie operacyjne, dokumentacja, wiedza wewnętrzna i systemy niekliniczne.",
        description:
          "W sektorze zdrowia pracujemy wyłącznie nad nieklinicznymi warstwami operacyjnymi: dokumentacją, wiedzą wewnętrzną, koordynacją, raportowaniem i wsparciem administracyjnym.",
        visualSrc: "/images/visual-industry-health.png",
        visualAlt: "Wizualizacja 3D nieklinicznych operacji zdrowotnych",
        tags: ["Wsparcie", "Dokumentacja", "Wiedza", "PoC"],
        bullets: [
          "Dokumentacja operacyjna",
          "Wiedza wewnętrzna",
          "Koordynacja administracyjna",
          "Systemy niekliniczne",
          "Raportowanie wewnętrzne",
          "Walidacja i przegląd przez człowieka",
        ],
        relatedServices: [
          "Bazy wiedzy",
          "Przetwarzanie dokumentów",
          "Narzędzia wewnętrzne",
          "Integracje / platformy",
        ],
      },
    ],
    industriesFaq: [
      {
        question: "Czy Tahona specjalizuje się w jednym sektorze?",
        answer:
          "Nie. Pracujemy nad procesami wewnętrznymi. Niektóre sektory mają szczególnie czytelne wzorce, ale decyzja zależy od procesu, danych, dokumentów i narzędzi danej firmy.",
      },
      {
        question: "Co z sektorami regulowanymi?",
        answer:
          "Wymagają większej ostrożności: jasnych granic, kontroli człowieka, identyfikowalności i oddzielenia wsparcia operacyjnego od decyzji regulowanych. Nie zastępujemy przeglądu prawnego, klinicznego, regulacyjnego ani kontroli zgodności.",
      },
      {
        question: "Czy procesy muszą być już udokumentowane?",
        answer:
          "Nie. Często pierwszą pracą jest zmapowanie rzeczywistego sposobu pracy: co się robi, kto uczestniczy, jakie dokumenty się pojawiają, jakich danych brakuje i gdzie traci się kontrolę.",
      },
      {
        question: "Czy możemy używać istniejących narzędzi branżowych?",
        answer:
          "Tak. Zwykle punktem wyjścia jest to, czego zespół już używa: CRM, ERP, Drive, arkusze, poczta, raportowanie, API lub systemy wewnętrzne. Rozwiązanie musi pasować do tego kontekstu.",
      },
      {
        question: "Co zmienia się między sektorami?",
        answer:
          "Zmieniają się dokumenty, ograniczenia, słownictwo, systemy i punkty kontroli. Metoda pozostaje ta sama: zrozumieć operację, uporządkować przepływ i budować tylko to, co poprawia pracę.",
      },
      {
        question: "Czy można zacząć od małego obszaru?",
        answer:
          "Tak. Ma sens zacząć od konkretnego przepływu, gdy jest wystarczająco dużo informacji, określeni właściciele i jasne kryterium sprawdzenia, czy usprawnienie działa przed rozszerzeniem.",
      },
    ],
    caseStudies: [
      {
        id: "plataforma-documental-operativa",
        marker: "01",
        sector: "Prawo",
        title: "Platforma dokumentowa i operacyjna",
        summary:
          "Projekt i wdrożenie platformy wewnętrznej do koordynowania procesów dokumentowych, ekstrakcji informacji, generowania szkiców, walidacji przez człowieka, powtarzalnych zadań i śledzenia statusów.",
        visualSrc: "/images/visual-case-legal-document-platform.png",
        visualAlt: "Wizualizacja 3D platformy dokumentowej",
        bullets: [
          "Przepływy dokumentów ze statusami",
          "System agentowy z nadzorem",
          "Generowanie szkiców",
          "Walidacja przez człowieka przed dalszym krokiem",
          "Powtarzalne zadania i śledzenie statusów",
          "Identyfikowalność zmian",
          "Baza operacyjna dla dokumentacji wewnętrznej",
        ],
        tags: [
          "Przetwarzanie dokumentów",
          "Narzędzia wewnętrzne",
          "Bazy wiedzy",
          "Walidacja przez człowieka",
        ],
      },
      {
        id: "planificacion-logistica-reporting",
        marker: "02",
        sector: "Logistyka",
        title: "Platforma planowania logistycznego",
        summary:
          "Platforma do planowania tras, importu danych operacyjnych, koordynacji zdarzeń, przeglądu dokumentacji logistycznej i generowania użytecznego raportowania operacyjnego.",
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "Wizualizacja 3D planowania logistycznego",
        bullets: [
          "Optymalizacja tras",
          "Planowanie tras",
          "Import danych operacyjnych",
          "Koordynacja zdarzeń",
          "Przegląd dokumentów",
          "Raportowanie operacyjne",
          "Integracja z istniejącymi narzędziami",
        ],
        tags: [
          "Optymalizacja procesów",
          "Integracje / platformy",
          "Przetwarzanie dokumentów",
          "Raportowanie",
        ],
      },
      {
        id: "base-conocimiento-empresarial",
        marker: "03",
        sector: "Przekrojowo",
        title: "Firmowa baza wiedzy",
        summary:
          "Warstwa wiedzy wewnętrznej wspierana przez agentów, z wczytywaniem dokumentów, przetwarzaniem, cytowalnymi źródłami, metadanymi, uprawnieniami, ewaluacją, kontrolą człowieka i integracją z narzędziami wewnętrznymi.",
        visualSrc: "/images/visual-case-enterprise-knowledge.png",
        visualAlt: "Wizualizacja 3D firmowej bazy wiedzy",
        bullets: [
          "Wczytywanie dokumentów",
          "Normalizacja i metadane",
          "Cytowalne źródła",
          "Uprawnienia i zakres",
          "Ewaluacja odpowiedzi",
          "Integracja z narzędziami wewnętrznymi",
        ],
        tags: [
          "Bazy wiedzy",
          "Przetwarzanie dokumentów",
          "Uprawnienia",
          "Identyfikowalność",
        ],
      },
      {
        id: "documentacion-calidad-trazabilidad",
        marker: "04",
        sector: "Przemysł",
        title:
          "Platforma dokumentacji, jakości i identyfikowalności dla operacji spożywczych",
        summary:
          "Platforma przepływów porządkująca dokumentację, walidująca informacje, utrzymująca identyfikowalność i generująca raportowanie w procesach jakości w operacjach spożywczych.",
        visualSrc: "/images/visual-case-appcc-quality.png",
        visualAlt: "Wizualizacja 3D jakości i identyfikowalności w przemyśle",
        bullets: [
          "Przetwarzanie dokumentów",
          "HACCP",
          "Walidacja informacji",
          "Identyfikowalność procesów",
          "Raportowanie jakości",
          "Kontrole operacyjne",
          "Integracja systemów",
        ],
        tags: [
          "Narzędzia wewnętrzne",
          "Przetwarzanie dokumentów",
          "Optymalizacja procesów",
          "Identyfikowalność",
        ],
      },
    ],
    workItems: [
      {
        id: "document-platform",
        sector: "Prawo",
        title: "Platforma dokumentowa i operacyjna",
        description:
          "Projekt i wdrożenie narzędzia wewnętrznego do koordynowania procesów dokumentowych, ekstrakcji danych ze złożonych dokumentów, generowania szkiców, walidacji przez człowieka, RPA, powtarzalnych zadań i śledzenia statusów.",
        tags: [
          "Przetwarzanie dokumentów",
          "Walidacja przez człowieka",
          "Zadania wewnętrzne",
          "Śledzenie statusów",
        ],
        imageSrc: "/images/visual-case-legal-document-platform.png",
      },
      {
        id: "logistics-planning",
        sector: "Logistyka",
        title: "Platforma optymalizacji logistycznej",
        description:
          "Platforma do planowania tras, importu zamówień, koordynacji zdarzeń, przeglądu dokumentacji logistycznej i generowania użytecznego raportowania operacyjnego.",
        tags: ["Planowanie", "Optymalizacja tras", "Raportowanie"],
        imageSrc: "/images/visual-logistics.png",
      },
    ],
  },
} as const satisfies Record<Locale, SiteContent>;

export function getContent(locale: Locale): SiteContent {
  return SITE_CONTENT[locale];
}
