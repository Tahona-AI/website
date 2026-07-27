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
  readonly legacyId: string;
  readonly marker: string;
  readonly services: readonly ServiceItem[];
  readonly title: string;
  readonly visualScaleClass: string;
  readonly visualSrc: string;
};

type EngagementMarker = "01" | "02" | "03";

type EngagementMode = {
  readonly description: string;
  readonly marker: EngagementMarker;
  readonly title: string;
};

type EngagementModes = readonly [
  EngagementMode,
  EngagementMode,
  EngagementMode,
];

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
    readonly description: string;
    readonly eyebrow: string;
    readonly lifecycle: {
      readonly ariaLabel: string;
      readonly centerLabel: string;
      readonly centerTitle: string;
      readonly stages: readonly {
        readonly body: string;
        readonly label: string;
        readonly title: string;
      }[];
    };
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
  readonly engagementModes: EngagementModes;
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
    readonly engagementSection: {
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
      readonly linkLabel: string;
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
        title: "Tahona | Partner tecnológico de principio a fin",
        description:
          "Partner tecnológico de principio a fin para estrategia, productos digitales, software a medida, integraciones y soluciones de IA.",
      },
      services: {
        name: "Servicios",
        title: "Servicios Tahona | Estrategia, IA, producto y software",
        description:
          "Estrategia tecnológica, inteligencia artificial, productos digitales, software a medida e integraciones de principio a fin.",
      },
      industries: {
        name: "Industrias",
        title: "Industrias Tahona | Productos digitales, software e IA",
        description:
          "Capacidad de producto, software e IA adaptada a logística, industria, legal, seguros, marketing y salud.",
      },
      cases: {
        name: "Casos",
        title: "Casos Tahona | Productos y sistemas sobre retos reales",
        description:
          "Casos anonimizados centrados en el resultado: operaciones más claras, mejores decisiones y servicios digitales preparados para evolucionar.",
      },
      keywords:
        "partner tecnológico, productos digitales, software a medida, desarrollo de IA, estrategia tecnológica, integraciones, arquitectura de software",
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
          title: "Estrategia y arquitectura",
          items: [
            {
              label: "Diagnóstico y definición",
              description: "Contexto, objetivos, usuarios, procesos y oportunidades.",
              href: "#consultoria-auditoria-operativa",
            },
            {
              label: "Estrategia de producto y tecnología",
              description: "Decisiones de producto, alcance y hoja de ruta.",
              href: "#estrategia-tecnica-operativa",
            },
            {
              label: "Arquitectura y hoja de ruta",
              description: "Sistema, datos, integraciones, riesgos y evolución.",
              href: "#bases-conocimiento-empresarial",
            },
          ],
        },
        {
          title: "Inteligencia artificial",
          items: [
            {
              label: "Soluciones de IA",
              description: "Capacidades de IA integradas en productos y procesos.",
              href: "#optimizacion-procesos",
            },
            {
              label: "Agentes y automatización",
              description: "Tareas acotadas con límites, supervisión y trazabilidad.",
              href: "#agentes-ia",
            },
            {
              label: "Documentos y conocimiento",
              description: "Procesamiento documental y conocimiento con fuentes.",
              href: "#procesamiento-documental",
            },
          ],
        },
        {
          title: "Producto y software",
          items: [
            {
              label: "Productos digitales",
              description: "Productos y experiencias digitales desde la definición.",
              href: "#herramientas-medida",
            },
            {
              label: "Software a medida",
              description: "Aplicaciones y plataformas alrededor del negocio.",
              href: "#herramientas-internas",
            },
            {
              label: "Integraciones y plataformas",
              description: "Datos, herramientas y sistemas conectados.",
              href: "#integraciones-plataformas-operativas",
            },
          ],
        },

      ],
    },
    home: {
      hero: {
        titleLines: ["De la estrategia a productos y sistemas que funcionan."],
        description:
          "Tahona es el partner tecnológico de principio a fin para definir, diseñar, construir e integrar productos digitales, software a medida y soluciones de IA orientadas a resultados reales.",
        primaryLabel: "Hablemos",
        primaryHref: "#contacto",
        secondaryLabel: "Ver servicios",
        secondaryHref: "#soluciones",
      },
      whatWeDo: {
        eyebrow: "Qué hacemos",
        title: "Estrategia, producto y tecnología en un mismo equipo.",
        description: [
          "Unimos consultoría, producto e ingeniería para convertir retos abiertos en soluciones que funcionan. Podemos entrar desde la definición, construir el producto o sistema, integrarlo en el negocio y seguir evolucionándolo en producción.",
          "El resultado puede ser un producto digital, software a medida o una solución de IA. En procesos acotados y medibles, también podemos asumir la ejecución de una parte del trabajo.",
        ],
        bullets: [
          "Diagnóstico, definición de producto y estrategia tecnológica.",
          "Diseño y desarrollo de productos digitales.",
          "Software a medida y plataformas internas.",
          "Soluciones de IA integradas en productos y procesos.",
          "Arquitectura, datos, integraciones y evolución técnica.",
        ],
      },
      services: {
        eyebrow: "Servicios",
        title: "Tres capacidades. Un único partner tecnológico.",
        description:
          "Estrategia y arquitectura, inteligencia artificial, producto y software. Se combinan según el reto y el resultado esperado, desde la definición hasta producción y evolución.",
        ctaLabel: "Ver servicios",
      },
      industries: {
        eyebrow: "Industrias",
        title: "Capacidad tecnológica adaptada a cada sector.",
        description:
          "Cambian los procesos, los usuarios, los datos y las restricciones. Mantenemos el mismo recorrido de principio a fin y orientamos cada solución al resultado que importa en ese contexto.",
        ctaLabel: "Ver industrias",
      },
      ourWork: {
        eyebrow: "Casos",
        title: "Productos y sistemas construidos sobre retos reales.",
        description:
          "Los casos anonimizados muestran qué problema se abordó, qué se construyó y cómo la solución se integra y evoluciona en su contexto.",
        ctaLabel: "Ver casos",
      },
      howWeWork: {
        eyebrow: "Cómo trabajamos",
        title: "Un partner desde la definición hasta la evolución.",
        description:
          "Trabajamos de principio a fin: estrategia, producto, arquitectura, desarrollo, integración y mejora continua. El diagnóstico permite entender el punto de partida; el objetivo es construir y hacer avanzar la solución.",
        steps: [
          {
            number: "01",
            title: "Contexto y objetivo",
            description:
              "Entendemos el negocio, los usuarios, los procesos, los datos y el resultado esperado.",
          },
          {
            number: "02",
            title: "Estrategia y definición",
            description:
              "Definimos la oportunidad, el alcance, las prioridades y la hoja de ruta.",
          },
          {
            number: "03",
            title: "Producto y arquitectura",
            description:
              "Diseñamos la experiencia, el sistema, los datos y las integraciones.",
          },
          {
            number: "04",
            title: "Construcción e integración",
            description:
              "Desarrollamos software y capacidades de IA en ciclos cortos con validación continua.",
          },
          {
            number: "05",
            title: "Lanzamiento, operación y evolución",
            description:
              "Integramos, medimos y seguimos mejorando el sistema. Cuando el alcance y el modelo de colaboración lo requieren, también asumimos la operación acordada y la gestión de excepciones.",
          },
        ],
      },
    },
    aiApplied: {
      eyebrow: "IA aplicada",
      title: "De procesos complejos a sistemas que ejecutan el trabajo.",
      description:
        "Cuando el proceso es acotado y medible, vamos más allá de construir la herramienta: integramos, operamos y mejoramos el sistema para que una parte del trabajo ocurra con trazabilidad y supervisión.",
      lifecycle: {
        ariaLabel: "Ciclo de un sistema que ejecuta trabajo con trazabilidad y supervisión",
        centerLabel: "Proceso acotado",
        centerTitle: "Ejecución trazable",
        stages: [
          {
            label: "Resultado",
            title: "Objetivo y límites",
            body: "Unidad de trabajo, alcance, excepciones y criterios de calidad.",
          },
          {
            label: "Fundamentos",
            title: "Datos y contexto",
            body: "Fuentes, permisos, reglas y conocimiento del negocio.",
          },
          {
            label: "Construcción",
            title: "Sistema e integración",
            body: "Producto, IA, herramientas y sistemas conectados.",
          },
          {
            label: "Operación",
            title: "Supervisión y evolución",
            body: "Evaluación, trazabilidad, gestión de excepciones y mejora continua.",
          },
        ],
      },
    },
    servicesPage: {
      hero: {
        titleLines: ["Estrategia, IA, producto y software de principio a fin."],
        description:
          "Tahona combina estrategia y arquitectura, IA, producto y software para definir, construir e integrar soluciones vinculadas a un resultado concreto.",
        primaryLabel: "Hablemos",
        primaryHref: "#contacto",
        secondaryLabel: "Ver capacidades",
        secondaryHref: "#familias-servicios",
      },
      pillarsSection: {
        eyebrow: "Capacidades",
        title: "Tres capacidades. Un único partner tecnológico.",
        description:
          "Estrategia y arquitectura, inteligencia artificial, producto y software. Se combinan según el reto, sin silos ni soluciones predeterminadas.",
        linkLabel: "Ver servicios",
      },
      detailSection: {
        eyebrow: "Servicios en detalle",
        title: "Capacidad para decidir, construir e integrar.",
      },
      engagementSection: {
        eyebrow: "Formas de colaboración",
        title: "Cómo podemos trabajar juntos.",
        description:
          "El alcance puede centrarse en una fase concreta o cubrir el recorrido completo, según el reto.",
      },
      faqSection: {
        eyebrow: "Preguntas frecuentes",
        title: "Preguntas frecuentes sobre los servicios.",
        description: "Lo que más nos preguntan antes de empezar.",
      },
    },
    industriesPage: {
      hero: {
        titleLines: ["Productos digitales, software e IA para cada sector."],
        description:
          "Cada sector tiene usuarios, procesos, datos y restricciones distintas. Adaptamos la estrategia, el producto, el software y la IA al contexto real del negocio.",
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
        titleLines: ["Productos y sistemas sobre retos reales."],
        description:
          "Casos anonimizados centrados en el resultado: más claridad, mejores decisiones y una base tecnológica capaz de evolucionar con el negocio.",
        primaryLabel: "Solicitar una primera conversación",
        primaryHref: "#contacto",
        secondaryLabel: "Ver servicios",
        secondaryHref: "/services/",
      },
      section: {
        eyebrow: "Casos",
        title: "Resultados sobre retos reales.",
        text:
          "Productos y sistemas orientados a mejorar cómo se trabaja, se decide y se presta servicio.",
        relatedAreasLabel: "Áreas relacionadas",
      },
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos del reto, el proceso o el producto.",
      description:
        "No hace falta llegar con una solución técnica definida. Una primera conversación permite entender el objetivo, el punto de partida y el siguiente paso más útil.",
      sidebarEyebrow: "Contacto",
      sidebarBody:
        "Revisamos el contexto, el objetivo y las restricciones. Si hay una línea clara de trabajo, proponemos el mejor punto de partida.",
      emailLabel: "Correo",
      emailPlaceholder: "nombre@empresa.com",
      emailValueLabel: "hola@tahona.ai",
      emailHint: "Un correo basta para empezar a valorar el encaje.",
      phoneLabel: "Teléfono",
      phoneHint:
        "Si se prefiere ir al grano, se puede ver en una llamada breve.",
      trustBadges: [
        "Respuesta clara y directa",
        "Primera oportunidad clara",
        "Sin compromiso ni presión comercial",
      ],
      formTitle: "Punto de partida",
      formIntro:
        "Con lo básico basta. Respondemos con una valoración inicial y el siguiente paso más útil.",
      nameLabel: "Nombre",
      namePlaceholder: "Nombre y apellidos",
      detailsLabel: "Reto, proceso o producto",
      detailsPlaceholder:
        "Qué se quiere construir o mejorar, qué existe hoy y qué resultado se busca.",
      privacyNote:
        "Sin presión comercial: si el encaje no es claro, se dirá con la misma claridad.",
      submitLabel: "Solicitar una primera conversación",
      submittingLabel: "Enviando...",
      closeLabel: "Cerrar",
      modalEyebrow: "Mensaje recibido",
      modalTitle: "Mensaje recibido",
      modalText:
        "Lo revisaremos y responderemos con el siguiente paso más útil.",
      modalEmailText:
        "Para ampliar el contexto por correo: hola@tahona.ai",
      mailCtaText: "hola@tahona.ai",
      errorMessages: {
        nameShort: "El nombre debe tener al menos 2 caracteres",
        nameLong: "El nombre es demasiado largo",
        emailInvalid: "El correo no es válido",
        detailsShort: "Hace falta algo más de contexto sobre el reto, proceso o producto",
        detailsLong: "El mensaje es demasiado largo",
        submit: "No se pudo enviar el formulario. Se puede intentar de nuevo.",
      },
    },
    footer: {
      contactLabel: "Contacta con nosotros",
      copyright: "Todos los derechos reservados.",
      description:
        "Partner tecnológico de principio a fin para estrategia, producto, software e IA.",
    },
    structuredData: {
      organizationDescription:
        "Partner tecnológico de principio a fin para estrategia, productos digitales, software a medida, inteligencia artificial e integraciones.",
      knowsAbout: [
        "estrategia tecnológica",
        "desarrollo de producto digital",
        "desarrollo de inteligencia artificial",
        "software a medida",
        "procesamiento documental",
        "integraciones operativas",
      ],
      serviceSchemaName:
        "Servicios de estrategia, inteligencia artificial, producto y software",
      serviceCatalogName: "Familias de servicios Tahona",
      industryListName: "Sectores y patrones operativos",
      casesListName: "Casos anonimizados de trabajo operativo",
    },
    serviceFamilies: [
      {
        id: "estrategia-arquitectura",
        legacyId: "fundamentos",
        marker: "01",
        title: "Estrategia y arquitectura",
        description:
          "Definimos qué construir, por qué y cómo llevarlo a una solución viable, integrada y preparada para evolucionar.",
        visualSrc: "/images/service1-illustration.png",
        visualScaleClass: "scale-[1.08]",
        services: [
          {
            id: "consultoria-auditoria-operativa",
            title: "Diagnóstico y definición",
            menuLabel: "Diagnóstico y definición",
            summary:
              "Lectura estructurada del negocio, los usuarios, los procesos, los datos y la tecnología existente para convertir un reto abierto en una oportunidad concreta.",
            bullets: [
              "Objetivos, usuarios y contexto",
              "Procesos, datos y sistemas actuales",
              "Oportunidades y restricciones",
              "Criterios de éxito y siguientes pasos",
            ],
          },
          {
            id: "estrategia-tecnica-operativa",
            title: "Estrategia de producto y tecnología",
            menuLabel: "Estrategia de producto",
            summary:
              "Definición de la propuesta, el alcance y la hoja de ruta para avanzar con prioridades claras antes de invertir en construcción.",
            bullets: [
              "Visión y alcance de producto",
              "Roadmap por fases",
              "Decisiones funcionales y técnicas",
              "Riesgos, dependencias y adopción",
            ],
          },
          {
            id: "bases-conocimiento-empresarial",
            title: "Arquitectura y hoja de ruta",
            menuLabel: "Arquitectura",
            summary:
              "Diseño de la arquitectura, los datos, las integraciones y el modelo de evolución que necesita la solución para funcionar a largo plazo.",
            bullets: [
              "Arquitectura de aplicación y datos",
              "Integraciones y dependencias",
              "Seguridad, permisos y trazabilidad",
              "Plan de entrega y evolución",
            ],
          },
        ],
      },
      {
        id: "inteligencia-artificial",
        legacyId: "desarrollo-ia",
        marker: "02",
        title: "Inteligencia artificial",
        description:
          "Diseñamos e implementamos soluciones de IA con datos, contexto, evaluación, supervisión e integración real.",
        visualSrc: "/images/service2-illustration.png",
        visualScaleClass: "scale-[1.1]",
        services: [
          {
            id: "optimizacion-procesos",
            title: "Soluciones y productos con IA",
            menuLabel: "Soluciones de IA",
            summary:
              "Capacidades de IA integradas en productos, servicios y procesos para resolver un caso de uso definido y medible.",
            bullets: [
              "Definición del caso de uso",
              "Diseño de experiencia y comportamiento",
              "Modelos, datos y contexto",
              "Evaluación y puesta en producción",
            ],
          },
          {
            id: "agentes-ia",
            title: "Agentes y automatización",
            menuLabel: "Agentes y automatización",
            summary:
              "Sistemas capaces de consultar información, usar herramientas y ejecutar tareas acotadas con permisos, límites y supervisión.",
            bullets: [
              "Tareas, herramientas y permisos",
              "Contexto y fuentes disponibles",
              "Trazabilidad de acciones",
              "Supervisión humana y escalado",
            ],
          },
          {
            id: "procesamiento-documental",
            title: "Procesamiento documental y conocimiento",
            menuLabel: "Documentos y conocimiento",
            summary:
              "Sistemas que transforman documentos y conocimiento disperso en información estructurada, consultable y útil para personas, productos y agentes.",
            bullets: [
              "Ingesta, extracción y normalización",
              "Clasificación y validación",
              "Fuentes, permisos y citas",
              "Integración con productos y sistemas",
            ],
          },
        ],
      },
      {
        id: "producto-software",
        legacyId: "otros-desarrollos",
        marker: "03",
        title: "Producto y software",
        description:
          "Diseñamos y desarrollamos productos digitales, aplicaciones y plataformas a medida desde la definición hasta producción.",
        visualSrc: "/images/service3-illustration.png",
        visualScaleClass: "scale-[1.12]",
        services: [
          {
            id: "herramientas-medida",
            title: "Productos digitales",
            menuLabel: "Productos digitales",
            summary:
              "Diseño y desarrollo de productos digitales completos, desde la propuesta y la experiencia hasta la tecnología que los hace funcionar.",
            bullets: [
              "Definición y estrategia de producto",
              "Experiencia y flujos de usuario",
              "Desarrollo frontend y backend",
              "Lanzamiento y evolución",
            ],
          },
          {
            id: "herramientas-internas",
            title: "Software a medida",
            menuLabel: "Software a medida",
            summary:
              "Aplicaciones y plataformas construidas alrededor del negocio, sus reglas, sus datos y sus necesidades reales.",
            bullets: [
              "Aplicaciones web y plataformas",
              "Herramientas internas y backoffice",
              "Paneles, workflows y reporting",
              "Mantenimiento y evolución técnica",
            ],
          },
          {
            id: "integraciones-plataformas-operativas",
            title: "Integraciones y plataformas",
            menuLabel: "Integraciones y plataformas",
            summary:
              "Conexión entre productos, APIs, datos y herramientas para que la tecnología funcione como un sistema y no como piezas aisladas.",
            bullets: [
              "APIs y conectores",
              "Sincronización y flujos de datos",
              "Integración con CRM, ERP y Drive",
              "Monitorización y control de errores",
            ],
          },
        ],
      },
    ],
    engagementModes: [
      {
        marker: "01",
        title: "Consultoría y definición",
        description:
          "Diagnóstico, decisiones, arquitectura y hoja de ruta. Puede ser un encargo completo e independiente.",
      },
      {
        marker: "02",
        title: "Construcción de producto o sistema",
        description:
          "Diseño, producto, ingeniería, integraciones y lanzamiento a producción, coordinados en un mismo alcance.",
      },
      {
        marker: "03",
        title: "Evolución y operación acordada",
        description:
          "Mantenimiento, medición y mejora. En procesos acotados y medibles, y cuando el alcance y el modelo de colaboración lo justifican, puede incluir tareas operativas y gestión de excepciones acordadas.",
      },
    ],
    servicesFaq: [
      {
        question: "¿Tahona siempre usa IA?",
        answer:
          "No. La IA es una capacidad central, pero se usa cuando mejora la solución. En otros casos la respuesta correcta es producto, software, integraciones o una combinación de varias capacidades.",
      },
      {
        question: "¿Tahona solo trabaja en proyectos completos de principio a fin?",
        answer:
          "No. Un trabajo enfocado de consultoría, arquitectura, integración o desarrollo puede ser un encargo completo por sí mismo. También podemos conectar varias fases cuando el reto requiere un recorrido de principio a fin.",
      },
      {
        question: "¿Tahona puede operar una parte de un proceso?",
        answer:
          "Solo de forma selectiva. El proceso debe ser acotado y medible, con criterios claros de calidad, supervisión, excepciones y modelo de colaboración. En ese contexto, el alcance puede incluir tareas operativas y gestión de excepciones acordadas.",
      },
      {
        question: "¿Se puede trabajar con la tecnología que ya existe en la empresa?",
        answer:
          "Sí. La mayoría de proyectos deben convivir con sistemas ya presentes: CRM, ERP, Drive, hojas de cálculo, APIs, datos internos o plataformas de terceros.",
      },
      {
        question: "¿Qué incluye una solución de IA completa?",
        answer:
          "Caso de uso, datos y contexto, arquitectura, producto, modelos, evaluación, permisos, supervisión, integración y evolución en producción.",
      },
      {
        question: "¿Cómo se decide por dónde empezar?",
        answer:
          "Se parte del objetivo y del contexto. Definimos el alcance mínimo que permite validar valor, riesgo y viabilidad antes de ampliar la solución.",
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
        title: "Tahona | End-to-end technology partner",
        description:
          "End-to-end technology partner for strategy, digital products, custom software, integrations and AI solutions.",
      },
      services: {
        name: "Services",
        title: "Tahona Services | Strategy, AI, product and software",
        description:
          "Technology strategy, artificial intelligence, digital products, custom software and end-to-end integrations.",
      },
      industries: {
        name: "Industries",
        title: "Tahona Industries | Digital products, software and AI",
        description:
          "Product, software and AI capabilities adapted to logistics, industry, legal, insurance, marketing and healthcare.",
      },
      cases: {
        name: "Cases",
        title: "Tahona Cases | Products and systems for real challenges",
        description:
          "Anonymized cases focused on outcomes: clearer operations, better decisions and digital services built to evolve.",
      },
      keywords:
        "technology partner, digital products, custom software, AI development, technology strategy, integrations, software architecture",
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
          title: "Strategy and architecture",
          items: [
            {
              label: "Discovery and definition",
              description: "Context, goals, users, processes and opportunities.",
              href: "#consultoria-auditoria-operativa",
            },
            {
              label: "Product and technology strategy",
              description: "Product decisions, scope and roadmap.",
              href: "#estrategia-tecnica-operativa",
            },
            {
              label: "Architecture and roadmap",
              description: "Systems, data, integrations, risks and evolution.",
              href: "#bases-conocimiento-empresarial",
            },
          ],
        },
        {
          title: "Artificial intelligence",
          items: [
            {
              label: "AI solutions",
              description: "AI capabilities embedded in products and processes.",
              href: "#optimizacion-procesos",
            },
            {
              label: "Agents and automation",
              description: "Bounded tasks with limits, supervision and traceability.",
              href: "#agentes-ia",
            },
            {
              label: "Documents and knowledge",
              description: "Document processing and source-backed knowledge.",
              href: "#procesamiento-documental",
            },
          ],
        },
        {
          title: "Product and software",
          items: [
            {
              label: "Digital products",
              description: "Digital products and experiences from definition onward.",
              href: "#herramientas-medida",
            },
            {
              label: "Custom software",
              description: "Applications and platforms built around the business.",
              href: "#herramientas-internas",
            },
            {
              label: "Integrations and platforms",
              description: "Connected data, tools and systems.",
              href: "#integraciones-plataformas-operativas",
            },
          ],
        },

      ],
    },
    home: {
      hero: {
        titleLines: ["From strategy to products and systems that work."],
        description:
          "Tahona is the end-to-end technology partner for defining, designing, building and integrating digital products, custom software and AI solutions focused on real outcomes.",
        primaryLabel: "Let's talk",
        primaryHref: "#contacto",
        secondaryLabel: "View services",
        secondaryHref: "#soluciones",
      },
      whatWeDo: {
        eyebrow: "What we do",
        title: "Strategy, product and technology in one team.",
        description: [
          "We bring consulting, product and engineering together to turn open-ended challenges into working solutions. We can join at definition, build the product or system, integrate it into the business and continue evolving it in production.",
          "The outcome may be a digital product, custom software or an AI solution. When the process is bounded and measurable, we can also take on execution of part of the work.",
        ],
        bullets: [
          "Discovery, product definition and technology strategy.",
          "Digital product design and development.",
          "Custom software and internal platforms.",
          "AI solutions embedded in products and processes.",
          "Architecture, data, integrations and technical evolution.",
        ],
      },
      services: {
        eyebrow: "Services",
        title: "Three capabilities. One technology partner.",
        description:
          "Strategy and architecture, artificial intelligence, product and software. They combine around the challenge and expected outcome, from definition through production and evolution.",
        ctaLabel: "View services",
      },
      industries: {
        eyebrow: "Industries",
        title: "Technology capabilities adapted to each sector.",
        description:
          "Processes, users, data and constraints change. We keep the same end-to-end journey and focus each solution on the outcome that matters in its context.",
        ctaLabel: "View industries",
      },
      ourWork: {
        eyebrow: "Cases",
        title: "Products and systems built around real challenges.",
        description:
          "These anonymized cases show the problem addressed, what was built and how the solution integrates and evolves in its context.",
        ctaLabel: "View cases",
      },
      howWeWork: {
        eyebrow: "How we work",
        title: "A partner from definition through evolution.",
        description:
          "We work end to end across strategy, product, architecture, development, integration and continuous improvement. Discovery establishes the starting point; the goal is to build and move the solution forward.",
        steps: [
          {
            number: "01",
            title: "Context and goal",
            description:
              "We understand the business, users, processes, data and expected outcome.",
          },
          {
            number: "02",
            title: "Strategy and definition",
            description:
              "We define the opportunity, scope, priorities and roadmap.",
          },
          {
            number: "03",
            title: "Product and architecture",
            description:
              "We design the experience, system, data and integrations.",
          },
          {
            number: "04",
            title: "Build and integration",
            description:
              "We develop software and AI capabilities in short cycles with continuous validation.",
          },
          {
            number: "05",
            title: "Launch, operations and evolution",
            description:
              "We integrate, measure and keep improving the system. When the scope and collaboration model require it, we also take on the agreed operation and exception handling.",
          },
        ],
      },
    },
    aiApplied: {
      eyebrow: "Applied AI",
      title: "From complex processes to systems that do the work.",
      description:
        "When the process is bounded and measurable, we go beyond building the tool: we integrate, operate and improve the system so that part of the work happens with traceability and oversight.",
      lifecycle: {
        ariaLabel: "Lifecycle of a system that performs work with traceability and oversight",
        centerLabel: "Bounded process",
        centerTitle: "Traceable execution",
        stages: [
          {
            label: "Outcome",
            title: "Goal and boundaries",
            body: "Unit of work, scope, exceptions and quality criteria.",
          },
          {
            label: "Foundations",
            title: "Data and context",
            body: "Sources, permissions, rules and business knowledge.",
          },
          {
            label: "Build",
            title: "System and integration",
            body: "Product, AI, tools and connected systems.",
          },
          {
            label: "Operations",
            title: "Oversight and evolution",
            body: "Evaluation, traceability, exception handling and continuous improvement.",
          },
        ],
      },
    },
    servicesPage: {
      hero: {
        titleLines: ["End-to-end strategy, AI, product and software."],
        description:
          "Tahona brings strategy and architecture, AI, product and software together to define, build and integrate solutions around a concrete outcome.",
        primaryLabel: "Let's talk",
        primaryHref: "#contacto",
        secondaryLabel: "View capabilities",
        secondaryHref: "#familias-servicios",
      },
      pillarsSection: {
        eyebrow: "Capabilities",
        title: "Three capabilities. One technology partner.",
        description:
          "Strategy and architecture, artificial intelligence, product and software. Combined around the challenge, without silos or predetermined solutions.",
        linkLabel: "View services",
      },
      detailSection: {
        eyebrow: "Services in detail",
        title: "The capability to decide, build and integrate.",
      },
      engagementSection: {
        eyebrow: "Ways to work together",
        title: "How we can work together.",
        description:
          "An engagement can focus on one stage or cover the full journey, depending on the challenge.",
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Frequently asked questions about services.",
        description: "What teams most often ask before starting.",
      },
    },
    industriesPage: {
      hero: {
        titleLines: ["Digital products, software and AI for each sector."],
        description:
          "Every sector has different users, processes, data and constraints. We adapt strategy, product, software and AI to the real business context.",
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
        titleLines: ["Products and systems for real challenges."],
        description:
          "Anonymized cases focused on outcomes: greater clarity, better decisions and a technology foundation able to evolve with the business.",
        primaryLabel: "Request a first conversation",
        primaryHref: "#contacto",
        secondaryLabel: "View services",
        secondaryHref: "/en/services/",
      },
      section: {
        eyebrow: "Cases",
        title: "Outcomes for real challenges.",
        text:
          "Products and systems focused on improving how work, decisions and services happen.",
        relatedAreasLabel: "Related areas",
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's discuss the challenge, process or product.",
      description:
        "There is no need to arrive with a defined technical solution. A first conversation helps clarify the goal, the starting point and the most useful next step.",
      sidebarEyebrow: "Contact",
      sidebarBody:
        "We review the context, goal and constraints. If there is a clear path forward, we propose the best starting point.",
      emailLabel: "Email",
      emailPlaceholder: "name@company.com",
      emailValueLabel: "hola@tahona.ai",
      emailHint: "One email is enough to begin assessing fit.",
      phoneLabel: "Phone",
      phoneHint: "For a direct first pass, a short call is enough.",
      trustBadges: [
        "Clear, direct response",
        "First opportunity made clear",
        "No commitment or sales pressure",
      ],
      formTitle: "Starting point",
      formIntro:
        "The basics are enough. We reply with an initial assessment and the most useful next step.",
      nameLabel: "Name",
      namePlaceholder: "Full name",
      detailsLabel: "Challenge, process or product",
      detailsPlaceholder:
        "What should be built or improved, what exists today and what outcome is expected.",
      privacyNote:
        "No sales pressure: if the fit is not clear, we will say so clearly.",
      submitLabel: "Request a first conversation",
      submittingLabel: "Sending...",
      closeLabel: "Close",
      modalEyebrow: "Message received",
      modalTitle: "Message received",
      modalText:
        "We will review it and reply with the most useful next step.",
      modalEmailText:
        "To add more context by email, write to hola@tahona.ai",
      mailCtaText: "hola@tahona.ai",
      errorMessages: {
        nameShort: "Name must be at least 2 characters",
        nameLong: "Name is too long",
        emailInvalid: "Please enter a valid email address",
        detailsShort: "Please share a little more about the challenge, process or product",
        detailsLong: "The message is too long",
        submit: "There was an error sending the form. Please try again.",
      },
    },
    footer: {
      contactLabel: "Contact us",
      copyright: "All rights reserved.",
      description:
        "End-to-end technology partner for strategy, product, software and AI.",
    },
    structuredData: {
      organizationDescription:
        "End-to-end technology partner for strategy, digital products, custom software, artificial intelligence and integrations.",
      knowsAbout: [
        "technology strategy",
        "digital product development",
        "artificial intelligence development",
        "custom software",
        "document processing",
        "operational integrations",
      ],
      serviceSchemaName:
        "Strategy, artificial intelligence, product and software services",
      serviceCatalogName: "Tahona service families",
      industryListName: "Sectors and operational patterns",
      casesListName: "Anonymized operational work cases",
    },
    serviceFamilies: [
      {
        id: "estrategia-arquitectura",
        legacyId: "fundamentos",
        marker: "01",
        title: "Strategy and architecture",
        description:
          "We define what to build, why it matters and how to turn it into a viable, integrated solution prepared to evolve.",
        visualSrc: "/images/service1-illustration.png",
        visualScaleClass: "scale-[1.08]",
        services: [
          {
            id: "consultoria-auditoria-operativa",
            title: "Discovery and definition",
            menuLabel: "Discovery and definition",
            summary:
              "A structured view of the business, users, processes, data and existing technology that turns an open challenge into a concrete opportunity.",
            bullets: [
              "Goals, users and context",
              "Current processes, data and systems",
              "Opportunities and constraints",
              "Success criteria and next steps",
            ],
          },
          {
            id: "estrategia-tecnica-operativa",
            title: "Product and technology strategy",
            menuLabel: "Product strategy",
            summary:
              "Definition of the proposition, scope and roadmap needed to move forward with clear priorities before investing in delivery.",
            bullets: [
              "Product vision and scope",
              "Phased roadmap",
              "Functional and technical decisions",
              "Risks, dependencies and adoption",
            ],
          },
          {
            id: "bases-conocimiento-empresarial",
            title: "Architecture and roadmap",
            menuLabel: "Architecture",
            summary:
              "Design of the architecture, data, integrations and evolution model the solution needs to work over time.",
            bullets: [
              "Application and data architecture",
              "Integrations and dependencies",
              "Security, permissions and traceability",
              "Delivery and evolution plan",
            ],
          },
        ],
      },
      {
        id: "inteligencia-artificial",
        legacyId: "desarrollo-ia",
        marker: "02",
        title: "Artificial intelligence",
        description:
          "We design and implement AI solutions with data, context, evaluation, supervision and real integration.",
        visualSrc: "/images/service2-illustration.png",
        visualScaleClass: "scale-[1.1]",
        services: [
          {
            id: "optimizacion-procesos",
            title: "AI solutions and products",
            menuLabel: "AI solutions",
            summary:
              "AI capabilities embedded in products, services and processes to solve a defined and measurable use case.",
            bullets: [
              "Use-case definition",
              "Experience and behavior design",
              "Models, data and context",
              "Evaluation and production launch",
            ],
          },
          {
            id: "agentes-ia",
            title: "Agents and automation",
            menuLabel: "Agents and automation",
            summary:
              "Systems that retrieve information, use tools and execute bounded tasks with permissions, limits and supervision.",
            bullets: [
              "Tasks, tools and permissions",
              "Available context and sources",
              "Action traceability",
              "Human supervision and escalation",
            ],
          },
          {
            id: "procesamiento-documental",
            title: "Document processing and knowledge",
            menuLabel: "Documents and knowledge",
            summary:
              "Systems that turn documents and scattered knowledge into structured, searchable information for people, products and agents.",
            bullets: [
              "Ingestion, extraction and normalization",
              "Classification and validation",
              "Sources, permissions and citations",
              "Integration with products and systems",
            ],
          },
        ],
      },
      {
        id: "producto-software",
        legacyId: "otros-desarrollos",
        marker: "03",
        title: "Product and software",
        description:
          "We design and develop digital products, applications and custom platforms from definition through production.",
        visualSrc: "/images/service3-illustration.png",
        visualScaleClass: "scale-[1.12]",
        services: [
          {
            id: "herramientas-medida",
            title: "Digital products",
            menuLabel: "Digital products",
            summary:
              "Design and development of complete digital products, from proposition and experience through the technology that makes them work.",
            bullets: [
              "Product definition and strategy",
              "User experience and flows",
              "Frontend and backend development",
              "Launch and evolution",
            ],
          },
          {
            id: "herramientas-internas",
            title: "Custom software",
            menuLabel: "Custom software",
            summary:
              "Applications and platforms built around the business, its rules, its data and its real needs.",
            bullets: [
              "Web applications and platforms",
              "Internal tools and back offices",
              "Dashboards, workflows and reporting",
              "Maintenance and technical evolution",
            ],
          },
          {
            id: "integraciones-plataformas-operativas",
            title: "Integrations and platforms",
            menuLabel: "Integrations and platforms",
            summary:
              "Connections between products, APIs, data and tools so technology works as a system rather than isolated pieces.",
            bullets: [
              "APIs and connectors",
              "Data synchronization and flows",
              "CRM, ERP and Drive integration",
              "Monitoring and error control",
            ],
          },
        ],
      },
    ],
    engagementModes: [
      {
        marker: "01",
        title: "Consulting and definition",
        description:
          "Diagnosis, decisions, architecture and roadmap. This can be a complete standalone engagement.",
      },
      {
        marker: "02",
        title: "Product or system delivery",
        description:
          "Design, product, engineering, integrations and production launch, coordinated within one delivery scope.",
      },
      {
        marker: "03",
        title: "Agreed evolution and operations",
        description:
          "Maintenance, measurement and improvement. For bounded, measurable processes, and when the scope and collaboration model warrant it, this may include agreed operational tasks and exception handling.",
      },
    ],
    servicesFaq: [
      {
        question: "Does Tahona always use AI?",
        answer:
          "No. AI is a core capability, but it is used when it improves the solution. In other cases the right answer is product, software, integrations or a combination of several capabilities.",
      },
      {
        question: "Does Tahona only work on complete end-to-end projects?",
        answer:
          "No. A focused consulting, architecture, integration or development engagement can be complete in itself. We can also connect several stages when the challenge calls for an end-to-end journey.",
      },
      {
        question: "Can Tahona operate part of a process?",
        answer:
          "Only selectively. The process must be bounded and measurable, with clear quality criteria, supervision, exceptions and a defined collaboration model. In that context, the scope may include agreed operational tasks and exception handling.",
      },
      {
        question: "Can the solution work with the technology already in place?",
        answer:
          "Yes. Most projects need to coexist with existing systems such as CRM, ERP, Drive, spreadsheets, APIs, internal data or third-party platforms.",
      },
      {
        question: "What does a complete AI solution include?",
        answer:
          "Use case, data and context, architecture, product, models, evaluation, permissions, supervision, integration and evolution in production.",
      },
      {
        question: "How do we decide where to start?",
        answer:
          "We start from the goal and the context. We define the smallest scope that can validate value, risk and feasibility before expanding the solution.",
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
        title: "Tahona | Partner technologiczny od strategii po wdrożenie",
        description:
          "Partner technologiczny od strategii po wdrożenie: strategia, produkty cyfrowe, oprogramowanie na miarę, integracje i rozwiązania AI.",
      },
      services: {
        name: "Usługi",
        title: "Usługi Tahona | Strategia, AI, produkt i oprogramowanie",
        description:
          "Strategia technologiczna, sztuczna inteligencja, produkty cyfrowe, oprogramowanie na miarę i kompleksowe integracje.",
      },
      industries: {
        name: "Branże",
        title: "Branże Tahona | Produkty cyfrowe, oprogramowanie i AI",
        description:
          "Kompetencje produktowe, programistyczne i AI dopasowane do logistyki, przemysłu, prawa, ubezpieczeń, marketingu i zdrowia.",
      },
      cases: {
        name: "Przykłady",
        title: "Przykłady Tahona | Produkty i systemy dla realnych wyzwań",
        description:
          "Zanonimizowane przykłady skoncentrowane na efektach: większej przejrzystości, lepszych decyzjach i usługach cyfrowych gotowych do rozwoju.",
      },
      keywords:
        "partner technologiczny, produkty cyfrowe, oprogramowanie na miarę, rozwój AI, strategia technologiczna, integracje, architektura oprogramowania",
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
          title: "Strategia i architektura",
          items: [
            {
              label: "Diagnoza i definicja",
              description: "Kontekst, cele, użytkownicy, procesy i możliwości.",
              href: "#consultoria-auditoria-operativa",
            },
            {
              label: "Strategia produktu i technologii",
              description: "Decyzje produktowe, zakres i plan działania.",
              href: "#estrategia-tecnica-operativa",
            },
            {
              label: "Architektura i plan działania",
              description: "Systemy, dane, integracje, ryzyka i rozwój.",
              href: "#bases-conocimiento-empresarial",
            },
          ],
        },
        {
          title: "Sztuczna inteligencja",
          items: [
            {
              label: "Rozwiązania AI",
              description: "Funkcje AI wbudowane w produkty i procesy.",
              href: "#optimizacion-procesos",
            },
            {
              label: "Agenci i automatyzacja",
              description: "Zadania z jasno określonym zakresem, nadzorem i śledzeniem działań.",
              href: "#agentes-ia",
            },
            {
              label: "Dokumenty i wiedza",
              description: "Przetwarzanie dokumentów i wiedza oparta na źródłach.",
              href: "#procesamiento-documental",
            },
          ],
        },
        {
          title: "Produkt i oprogramowanie",
          items: [
            {
              label: "Produkty cyfrowe",
              description: "Produkty i doświadczenia cyfrowe od etapu definicji.",
              href: "#herramientas-medida",
            },
            {
              label: "Oprogramowanie na miarę",
              description: "Aplikacje i platformy zbudowane wokół biznesu.",
              href: "#herramientas-internas",
            },
            {
              label: "Integracje i platformy",
              description: "Połączone dane, narzędzia i systemy.",
              href: "#integraciones-plataformas-operativas",
            },
          ],
        },

      ],
    },
    home: {
      hero: {
        titleLines: ["Od strategii do produktów i systemów, które działają."],
        description:
          "Tahona to partner technologiczny od strategii po wdrożenie. Definiujemy, projektujemy, tworzymy i integrujemy produkty cyfrowe, oprogramowanie na miarę oraz rozwiązania AI nastawione na realne rezultaty.",
        primaryLabel: "Porozmawiajmy",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz usługi",
        secondaryHref: "#soluciones",
      },
      whatWeDo: {
        eyebrow: "Czym się zajmujemy",
        title: "Strategia, produkt i technologia w jednym zespole.",
        description: [
          "Łączymy doradztwo, produkt i inżynierię, aby przekładać otwarte wyzwania na działające rozwiązania. Możemy zacząć od definicji, zbudować produkt lub system, zintegrować go z firmą i dalej rozwijać w środowisku produkcyjnym.",
          "Efektem może być produkt cyfrowy, oprogramowanie na miarę lub rozwiązanie AI. Gdy proces ma jasno określony zakres i mierzalny rezultat, możemy także przejąć realizację części pracy.",
        ],
        bullets: [
          "Diagnoza, definicja produktu i strategia technologiczna.",
          "Projektowanie i rozwój produktów cyfrowych.",
          "Oprogramowanie na miarę i platformy wewnętrzne.",
          "Rozwiązania AI wbudowane w produkty i procesy.",
          "Architektura, dane, integracje i rozwój techniczny.",
        ],
      },
      services: {
        eyebrow: "Usługi",
        title: "Trzy kompetencje. Jeden partner technologiczny.",
        description:
          "Strategia i architektura, sztuczna inteligencja, produkt i oprogramowanie. Łączymy je według wyzwania i oczekiwanego rezultatu, od definicji po wdrożenie i dalszy rozwój.",
        ctaLabel: "Zobacz usługi",
      },
      industries: {
        eyebrow: "Branże",
        title: "Kompetencje technologiczne dopasowane do branży.",
        description:
          "Procesy, użytkownicy, dane i ograniczenia są różne. Zachowujemy ten sam zakres od strategii po wdrożenie, a każde rozwiązanie kierujemy na rezultat ważny w danym kontekście.",
        ctaLabel: "Zobacz branże",
      },
      ourWork: {
        eyebrow: "Przykłady",
        title: "Produkty i systemy zbudowane wokół realnych wyzwań.",
        description:
          "Zanonimizowane przykłady pokazują rozwiązany problem, zbudowany produkt lub system oraz sposób jego integracji i dalszego rozwoju.",
        ctaLabel: "Zobacz przykłady",
      },
      howWeWork: {
        eyebrow: "Jak pracujemy",
        title: "Partner od definicji po dalszy rozwój.",
        description:
          "Pracujemy od strategii po wdrożenie: łączymy produkt, architekturę, rozwój, integrację i ciągłe doskonalenie. Diagnoza wyznacza punkt startu; celem jest zbudowanie i rozwijanie rozwiązania.",
        steps: [
          {
            number: "01",
            title: "Kontekst i cel",
            description:
              "Poznajemy biznes, użytkowników, procesy, dane i oczekiwany rezultat.",
          },
          {
            number: "02",
            title: "Strategia i definicja",
            description:
              "Określamy możliwość, zakres, priorytety i plan działania.",
          },
          {
            number: "03",
            title: "Produkt i architektura",
            description:
              "Projektujemy doświadczenie, system, dane i integracje.",
          },
          {
            number: "04",
            title: "Budowa i integracja",
            description:
              "Tworzymy oprogramowanie i funkcje AI w krótkich cyklach z ciągłą weryfikacją.",
          },
          {
            number: "05",
            title: "Uruchomienie, obsługa i rozwój",
            description:
              "Integrujemy, mierzymy i dalej rozwijamy system. Gdy wymagają tego zakres i model współpracy, przejmujemy również uzgodnioną obsługę i zarządzanie wyjątkami.",
          },
        ],
      },
    },
    aiApplied: {
      eyebrow: "AI w praktyce",
      title: "Od złożonych procesów do systemów, które wykonują pracę.",
      description:
        "Gdy proces ma jasno określony zakres i mierzalny rezultat, wykraczamy poza samo zbudowanie narzędzia: integrujemy, obsługujemy i rozwijamy system, aby część pracy odbywała się pod nadzorem i w sposób możliwy do prześledzenia.",
      lifecycle: {
        ariaLabel: "Cykl systemu wykonującego pracę pod nadzorem i w sposób możliwy do prześledzenia",
        centerLabel: "Określony proces",
        centerTitle: "Praca pod nadzorem",
        stages: [
          {
            label: "Rezultat",
            title: "Cel i granice",
            body: "Jednostka pracy, zakres, wyjątki i kryteria jakości.",
          },
          {
            label: "Podstawy",
            title: "Dane i kontekst",
            body: "Źródła, uprawnienia, zasady i wiedza biznesowa.",
          },
          {
            label: "Budowa",
            title: "System i integracja",
            body: "Produkt, AI, narzędzia i połączone systemy.",
          },
          {
            label: "Obsługa",
            title: "Nadzór i rozwój",
            body: "Ewaluacja, śledzenie działań, obsługa wyjątków i ciągłe doskonalenie.",
          },
        ],
      },
    },
    servicesPage: {
      hero: {
        titleLines: ["Strategia, AI, produkt i oprogramowanie od początku do końca."],
        description:
          "Tahona łączy strategię i architekturę, AI, produkt i oprogramowanie, aby definiować, tworzyć i integrować rozwiązania dla konkretnego rezultatu biznesowego.",
        primaryLabel: "Porozmawiajmy",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz kompetencje",
        secondaryHref: "#familias-servicios",
      },
      pillarsSection: {
        eyebrow: "Kompetencje",
        title: "Trzy kompetencje. Jeden partner technologiczny.",
        description:
          "Strategia i architektura, sztuczna inteligencja, produkt i oprogramowanie. Łączymy je wokół wyzwania, bez silosów i z góry narzuconych rozwiązań.",
        linkLabel: "Zobacz usługi",
      },
      detailSection: {
        eyebrow: "Usługi szczegółowo",
        title: "Kompetencje do podejmowania decyzji, budowy i integracji.",
      },
      engagementSection: {
        eyebrow: "Formy współpracy",
        title: "Jak możemy współpracować.",
        description:
          "Współpraca może obejmować konkretny etap lub całą drogę, zależnie od wyzwania.",
      },
      faqSection: {
        eyebrow: "Pytania",
        title: "Najczęstsze pytania o usługi.",
        description: "To, o co najczęściej pytają zespoły przed startem.",
      },
    },
    industriesPage: {
      hero: {
        titleLines: ["Produkty cyfrowe, oprogramowanie i AI dla różnych sektorów."],
        description:
          "Każda branża ma innych użytkowników, procesy, dane i ograniczenia. Dostosowujemy strategię, produkt, oprogramowanie i AI do realnego kontekstu biznesowego.",
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
        titleLines: ["Produkty i systemy dla realnych wyzwań."],
        description:
          "Zanonimizowane przykłady skoncentrowane na efektach: większej przejrzystości, lepszych decyzjach i bazie technologicznej gotowej do rozwoju wraz z biznesem.",
        primaryLabel: "Umów pierwszą rozmowę",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz usługi",
        secondaryHref: "/pl/services/",
      },
      section: {
        eyebrow: "Przykłady",
        title: "Efekty dla realnych wyzwań.",
        text:
          "Produkty i systemy usprawniające pracę, decyzje i świadczenie usług.",
        relatedAreasLabel: "Powiązane obszary",
      },
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Porozmawiajmy o wyzwaniu, procesie lub produkcie.",
      description:
        "Nie trzeba przychodzić z gotowym rozwiązaniem technicznym. Pierwsza rozmowa pozwala zrozumieć cel, punkt wyjścia i najbardziej użyteczny kolejny krok.",
      sidebarEyebrow: "Kontakt",
      sidebarBody:
        "Analizujemy kontekst, cel i ograniczenia. Jeśli istnieje jasny kierunek działania, proponujemy najlepszy punkt startu.",
      emailLabel: "E-mail",
      emailPlaceholder: "imie@firma.pl",
      emailValueLabel: "hola@tahona.ai",
      emailHint: "Jeden e-mail wystarczy, aby zacząć oceniać dopasowanie.",
      phoneLabel: "Telefon",
      phoneHint: "Jeśli potrzebny jest konkretny start, wystarczy krótka rozmowa.",
      trustBadges: [
        "Jasna i konkretna odpowiedź",
        "Pierwszy obszar usprawnienia nazwany wprost",
        "Bez zobowiązań i presji sprzedażowej",
      ],
      formTitle: "Punkt wyjścia",
      formIntro:
        "Wystarczą podstawy. Odpowiadamy z pierwszą oceną i najbardziej użytecznym następnym krokiem.",
      nameLabel: "Imię i nazwisko",
      namePlaceholder: "Imię i nazwisko",
      detailsLabel: "Wyzwanie, proces lub produkt",
      detailsPlaceholder:
        "Co należy zbudować lub usprawnić, co istnieje dziś i jaki rezultat jest potrzebny.",
      privacyNote:
        "Bez presji sprzedażowej: jeśli nie widzimy dobrego dopasowania, powiemy to wprost.",
      submitLabel: "Umów pierwszą rozmowę",
      submittingLabel: "Wysyłanie...",
      closeLabel: "Zamknij",
      modalEyebrow: "Wiadomość odebrana",
      modalTitle: "Wiadomość odebrana",
      modalText:
        "Przejrzymy ją i odpowiemy z najbardziej użytecznym następnym krokiem.",
      modalEmailText:
        "Aby dodać więcej kontekstu e-mailem, napisz na hola@tahona.ai",
      mailCtaText: "hola@tahona.ai",
      errorMessages: {
        nameShort: "Imię i nazwisko musi mieć co najmniej 2 znaki",
        nameLong: "Imię i nazwisko jest zbyt długie",
        emailInvalid: "Podaj poprawny adres e-mail",
        detailsShort: "Opisz nieco szerzej wyzwanie, proces lub produkt",
        detailsLong: "Wiadomość jest zbyt długa",
        submit: "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.",
      },
    },
    footer: {
      contactLabel: "Skontaktuj się z nami",
      copyright: "Wszelkie prawa zastrzeżone.",
      description:
        "Partner technologiczny od strategii po wdrożenie dla produktu, oprogramowania i AI.",
    },
    structuredData: {
      organizationDescription:
        "Partner technologiczny od strategii po wdrożenie w zakresie produktów cyfrowych, oprogramowania na miarę, sztucznej inteligencji i integracji.",
      knowsAbout: [
        "strategia technologiczna",
        "rozwój produktów cyfrowych",
        "rozwój sztucznej inteligencji",
        "oprogramowanie na miarę",
        "przetwarzanie dokumentów",
        "integracje operacyjne",
      ],
      serviceSchemaName:
        "Usługi strategii, sztucznej inteligencji, produktu i oprogramowania",
      serviceCatalogName: "Rodziny usług Tahona",
      industryListName: "Sektory i wzorce operacyjne",
      casesListName: "Zanonimizowane przykłady projektów operacyjnych",
    },
    serviceFamilies: [
      {
        id: "estrategia-arquitectura",
        legacyId: "fundamentos",
        marker: "01",
        title: "Strategia i architektura",
        description:
          "Określamy, co zbudować, dlaczego i jak przełożyć to na wykonalne, zintegrowane rozwiązanie gotowe do rozwoju.",
        visualSrc: "/images/service1-illustration.png",
        visualScaleClass: "scale-[1.08]",
        services: [
          {
            id: "consultoria-auditoria-operativa",
            title: "Diagnoza i definicja",
            menuLabel: "Diagnoza i definicja",
            summary:
              "Uporządkowane spojrzenie na biznes, użytkowników, procesy, dane i obecną technologię, które zmienia otwarte wyzwanie w konkretną możliwość.",
            bullets: [
              "Cele, użytkownicy i kontekst",
              "Obecne procesy, dane i systemy",
              "Możliwości i ograniczenia",
              "Kryteria sukcesu i kolejne kroki",
            ],
          },
          {
            id: "estrategia-tecnica-operativa",
            title: "Strategia produktu i technologii",
            menuLabel: "Strategia produktu",
            summary:
              "Definicja propozycji, zakresu i planu działania, która pozwala inwestować w budowę zgodnie z jasnymi priorytetami.",
            bullets: [
              "Wizja i zakres produktu",
              "Etapowy plan działania",
              "Decyzje funkcjonalne i techniczne",
              "Ryzyka, zależności i adopcja",
            ],
          },
          {
            id: "bases-conocimiento-empresarial",
            title: "Architektura i plan działania",
            menuLabel: "Architektura",
            summary:
              "Projekt architektury, danych, integracji i modelu rozwoju potrzebnego, aby rozwiązanie działało w długim okresie.",
            bullets: [
              "Architektura aplikacji i danych",
              "Integracje i zależności",
              "Bezpieczeństwo, uprawnienia i śledzenie działań",
              "Plan dostarczania i rozwoju",
            ],
          },
        ],
      },
      {
        id: "inteligencia-artificial",
        legacyId: "desarrollo-ia",
        marker: "02",
        title: "Sztuczna inteligencja",
        description:
          "Projektujemy i wdrażamy rozwiązania AI z danymi, kontekstem, ewaluacją, nadzorem i realną integracją.",
        visualSrc: "/images/service2-illustration.png",
        visualScaleClass: "scale-[1.1]",
        services: [
          {
            id: "optimizacion-procesos",
            title: "Rozwiązania i produkty z AI",
            menuLabel: "Rozwiązania AI",
            summary:
              "Funkcje AI wbudowane w produkty, usługi i procesy, aby rozwiązać zdefiniowany i mierzalny przypadek użycia.",
            bullets: [
              "Definicja przypadku użycia",
              "Projektowanie doświadczenia i zachowania",
              "Modele, dane i kontekst",
              "Ewaluacja i uruchomienie produkcyjne",
            ],
          },
          {
            id: "agentes-ia",
            title: "Agenci i automatyzacja",
            menuLabel: "Agenci i automatyzacja",
            summary:
              "Systemy, które wyszukują informacje, korzystają z narzędzi i wykonują zadania o określonym zakresie z uprawnieniami, ograniczeniami i nadzorem.",
            bullets: [
              "Zadania, narzędzia i uprawnienia",
              "Dostępny kontekst i źródła",
              "Śledzenie działań",
              "Nadzór człowieka i eskalacja",
            ],
          },
          {
            id: "procesamiento-documental",
            title: "Przetwarzanie dokumentów i wiedza",
            menuLabel: "Dokumenty i wiedza",
            summary:
              "Systemy zmieniające dokumenty i rozproszoną wiedzę w uporządkowane, przeszukiwalne informacje dla ludzi, produktów i agentów.",
            bullets: [
              "Wczytywanie, ekstrakcja i normalizacja",
              "Klasyfikacja i walidacja",
              "Źródła, uprawnienia i cytowania",
              "Integracja z produktami i systemami",
            ],
          },
        ],
      },
      {
        id: "producto-software",
        legacyId: "otros-desarrollos",
        marker: "03",
        title: "Produkt i oprogramowanie",
        description:
          "Projektujemy i tworzymy produkty cyfrowe, aplikacje oraz platformy na miarę od definicji po produkcję.",
        visualSrc: "/images/service3-illustration.png",
        visualScaleClass: "scale-[1.12]",
        services: [
          {
            id: "herramientas-medida",
            title: "Produkty cyfrowe",
            menuLabel: "Produkty cyfrowe",
            summary:
              "Projektowanie i rozwój kompletnych produktów cyfrowych, od propozycji i doświadczenia po technologię, która je obsługuje.",
            bullets: [
              "Definicja i strategia produktu",
              "Doświadczenie i przepływy użytkownika",
              "Rozwój frontend i backend",
              "Uruchomienie i dalszy rozwój",
            ],
          },
          {
            id: "herramientas-internas",
            title: "Oprogramowanie na miarę",
            menuLabel: "Oprogramowanie na miarę",
            summary:
              "Aplikacje i platformy zbudowane wokół biznesu, jego reguł, danych i realnych potrzeb.",
            bullets: [
              "Aplikacje internetowe i platformy",
              "Narzędzia wewnętrzne i zaplecze operacyjne",
              "Panele, przepływy pracy i raportowanie",
              "Utrzymanie i rozwój techniczny",
            ],
          },
          {
            id: "integraciones-plataformas-operativas",
            title: "Integracje i platformy",
            menuLabel: "Integracje i platformy",
            summary:
              "Połączenia między produktami, API, danymi i narzędziami, dzięki którym technologia działa jako jeden system, a nie zbiór osobnych elementów.",
            bullets: [
              "API i konektory",
              "Synchronizacja i przepływy danych",
              "Integracja z CRM, ERP i Drive",
              "Monitorowanie i obsługa błędów",
            ],
          },
        ],
      },
    ],
    engagementModes: [
      {
        marker: "01",
        title: "Doradztwo i definicja",
        description:
          "Diagnoza, decyzje, architektura i plan działania. Taki zakres może stanowić kompletne, samodzielne zlecenie.",
      },
      {
        marker: "02",
        title: "Budowa produktu lub systemu",
        description:
          "Projektowanie, produkt, inżynieria, integracje i uruchomienie produkcyjne w ramach jednego zakresu.",
      },
      {
        marker: "03",
        title: "Uzgodniony rozwój i obsługa",
        description:
          "Utrzymanie, pomiar i doskonalenie. W przypadku procesów o jasno określonym zakresie i mierzalnym rezultacie, gdy uzasadniają to zakres i model współpracy, może obejmować uzgodnione zadania operacyjne i zarządzanie wyjątkami.",
      },
    ],
    servicesFaq: [
      {
        question: "Czy Tahona zawsze wykorzystuje AI?",
        answer:
          "Nie. AI jest jedną z kluczowych kompetencji, ale wykorzystujemy je wtedy, gdy poprawia rozwiązanie. W innych przypadkach właściwą odpowiedzią jest produkt, oprogramowanie, integracja lub połączenie kilku kompetencji.",
      },
      {
        question: "Czy Tahona realizuje wyłącznie kompletne projekty od początku do końca?",
        answer:
          "Nie. Skoncentrowane doradztwo, architektura, integracja lub prace programistyczne mogą stanowić kompletne zlecenie. Możemy też połączyć kilka etapów, gdy wyzwanie wymaga pełnej drogi od definicji po wdrożenie.",
      },
      {
        question: "Czy Tahona może obsługiwać część procesu?",
        answer:
          "Tylko w wybranych przypadkach. Proces musi mieć jasno określony zakres i mierzalny rezultat, a także jasne kryteria jakości, zasady nadzoru, obsługi wyjątków i model współpracy. W takim kontekście zakres może obejmować uzgodnione zadania operacyjne i zarządzanie wyjątkami.",
      },
      {
        question: "Czy rozwiązanie może działać z technologią już obecną w firmie?",
        answer:
          "Tak. Większość projektów musi współpracować z istniejącymi systemami, takimi jak CRM, ERP, Drive, arkusze, API, dane wewnętrzne czy platformy zewnętrzne.",
      },
      {
        question: "Co obejmuje kompletne rozwiązanie AI?",
        answer:
          "Przypadek użycia, dane i kontekst, architekturę, produkt, modele, ewaluację, uprawnienia, nadzór, integrację i rozwój na produkcji.",
      },
      {
        question: "Jak ustalamy, od czego zacząć?",
        answer:
          "Zaczynamy od celu i kontekstu. Definiujemy najmniejszy zakres pozwalający zweryfikować wartość, ryzyko i wykonalność przed rozszerzeniem rozwiązania.",
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
