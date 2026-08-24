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

type IndustryLink = {
  readonly hash: `#${string}`;
  readonly label: string;
};

type IndustryItemBase = {
  readonly id: string;
  readonly legacyId?: string;
  readonly level: "primary" | "secondary";
  readonly marker: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly title: string;
};

export type PrimaryIndustryItem = IndustryItemBase & {
  readonly bullets: readonly string[];
  readonly cardTitle?: string;
  readonly caseLink: IndustryLink;
  readonly description: string;
  readonly level: "primary";
  readonly relatedServices: readonly IndustryLink[];
  readonly visualAlt: string;
  readonly visualSrc: string;
};

export type SecondaryIndustryItem = IndustryItemBase & {
  readonly level: "secondary";
};

export type IndustryItem = PrimaryIndustryItem | SecondaryIndustryItem;

type IndustryItems = readonly [
  PrimaryIndustryItem,
  PrimaryIndustryItem,
  PrimaryIndustryItem,
  SecondaryIndustryItem,
  SecondaryIndustryItem,
  SecondaryIndustryItem,
  SecondaryIndustryItem,
  SecondaryIndustryItem,
  SecondaryIndustryItem,
];

type CaseCapabilityHash =
  | "#consultoria-auditoria-operativa"
  | "#estrategia-arquitectura"
  | "#herramientas-internas"
  | "#integraciones-plataformas-operativas"
  | "#optimizacion-procesos"
  | "#procesamiento-documental";

export type RelatedCaseCapability = {
  readonly hash: CaseCapabilityHash;
  readonly label: string;
};

type RelatedCaseCapabilities =
  | readonly [RelatedCaseCapability, RelatedCaseCapability]
  | readonly [
      RelatedCaseCapability,
      RelatedCaseCapability,
      RelatedCaseCapability,
    ];

export type CaseStudy = {
  readonly challenge: string;
  readonly enables: readonly [string, string, string];
  readonly id: string;
  readonly intervention: string;
  readonly legacyId?: string;
  readonly marker: string;
  readonly relatedCapabilities: RelatedCaseCapabilities;
  readonly sector: string;
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
    readonly chart: {
      readonly ariaLabel: string;
      readonly axisDateLabel: string;
      readonly axisDurationLabel: string;
      readonly caption: string;
      readonly description: string;
      readonly scrollLabel: string;
      readonly sourceLabel: string;
      readonly title: string;
      readonly unreliableLabel: string;
    };
    readonly description: string;
    readonly eyebrow: string;
    readonly principles: readonly {
        readonly body: string;
        readonly title: string;
      }[];
    readonly title: string;
  };
  readonly caseStudies: readonly CaseStudy[];
  readonly casesPage: {
    readonly hero: HeroCopy;
    readonly section: {
      readonly challengeLabel: string;
      readonly enablesLabel: string;
      readonly eyebrow: string;
      readonly interventionLabel: string;
      readonly relatedCapabilitiesLabel: string;
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
      readonly primaryLabel: string;
      readonly secondaryLabel: string;
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
      readonly description: string;
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
  readonly industryItems: IndustryItems;
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
    readonly knowsAbout: readonly string[];
    readonly organizationDescription: string;
    readonly primaryIndustryListName: string;
    readonly secondaryIndustryListName: string;
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
        title: "Industrias Tahona | Tecnología adaptada a cada contexto",
        description:
          "Patrones sectoriales en legal, logística e industria, y contextos aplicables a seguros, operaciones comerciales y salud no clínica.",
      },
      cases: {
        name: "Casos",
        title: "Casos Tahona | Productos y sistemas sobre retos reales",
        description:
          "Cuatro casos que muestran el reto, la intervención de Tahona, las capacidades conectadas y lo que cada producto o sistema permite.",
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
              label: "Conocimiento y productividad del equipo",
              description: "El conocimiento de la empresa conectado, con permisos y agentes de trabajo.",
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

      ],
    },
    home: {
      hero: {
        titleLines: ["De la estrategia", "a la implementación."],
        description:
          "Tahona es el partner tecnológico para diseñar, construir e integrar software a medida y soluciones de IA.",
        primaryLabel: "Hablemos",
        primaryHref: "#contacto",
        secondaryLabel: "Ver servicios",
        secondaryHref: "#soluciones",
      },
      whatWeDo: {
        eyebrow: "Qué hacemos",
        title: "Construimos sistemas que el equipo usa cada día.",
        description: [
          "Productos digitales, software a medida y soluciones de IA para operaciones reales. Lo que hacemos se nota en el trabajo diario de la empresa.",
          "Definimos el resultado antes de empezar. Conectamos los datos y las herramientas que ya existen en la empresa. Añadimos revisión humana y trazabilidad donde el proceso lo exige.",
        ],
        bullets: [
          "Productos y plataformas integrados en el negocio.",
          "IA aplicada a procesos reales.",
          "Documentos y conocimiento ordenados y consultables.",
          "Cada decisión y cada cambio, trazable.",
        ],
      },
      services: {
        eyebrow: "Servicios",
        title: "Tres capacidades. Un único partner tecnológico.",
        description:
          "Inteligencia artificial, producto y software, estrategia y arquitectura. Se combinan según el reto y el resultado esperado, desde la definición hasta producción y evolución.",
        ctaLabel: "Ver servicios",
      },
      industries: {
        eyebrow: "Industrias",
        title: "Capacidad tecnológica adaptada a cada sector.",
        description:
          "Cambian los procesos, los usuarios, los datos y las restricciones. Mantenemos el mismo recorrido de principio a fin y orientamos cada solución al resultado que importa en ese contexto.",
        primaryLabel: "Sectores principales",
        secondaryLabel: "Otros sectores",
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
      title: "Hace seis meses era caro o imposible. Hoy es viable.",
      description:
        "La capacidad de los modelos crece y su precio cae. Lo que hace seis meses era caro o impensable hoy es viable para una empresa pequeña. El valor deja de estar en el modelo y pasa a estar en el contexto y en el oficio que lo sostienen.",
      chart: {
        ariaLabel:
          "Evolución del horizonte de tareas de software completadas por modelos de IA con un cincuenta por ciento de éxito",
        axisDateLabel: "Fecha de lanzamiento del modelo",
        axisDurationLabel: "Duración de la tarea para una persona",
        caption:
          "Estimaciones p50 e intervalos de METR Time Horizon 1.1 para una selección de modelos. La gráfica no mide la automatización de un proceso de negocio.",
        description:
          "Estimaciones públicas p50 e intervalos de confianza de una selección de modelos estado del arte, ordenados por fecha de lanzamiento.",
        scrollLabel: "Desliza para explorar la gráfica",
        sourceLabel: "Fuente y metodología",
        title: "Duración de tareas de software completadas con un 50 % de éxito",
        unreliableLabel:
          "Las estimaciones por encima de 16 h no son fiables con la suite actual",
      },
      principles: [
        {
          title: "Conectar el contexto",
          body: "La información de la empresa, ordenada y con permisos. Es lo que cambia de una empresa a otra y lo que hace útil un modelo.",
        },
        {
          title: "Trabajar con oficio",
          body: "Sistemas acotados, revisados y trazables. La pieza bien construida alrededor del modelo es lo que se entrega.",
        },
        {
          title: "Medir y mejorar",
          body: "Resultados evaluados con datos y evolución en producción. El sistema no termina el día del lanzamiento.",
        },
      ],
    },
    servicesPage: {
      hero: {
        titleLines: ["IA, producto, software y estrategia de principio a fin."],
        description:
          "Tahona combina IA, producto, software y estrategia para definir, construir e integrar soluciones vinculadas a un resultado concreto.",
        primaryLabel: "Hablemos",
        primaryHref: "#contacto",
        secondaryLabel: "Ver capacidades",
        secondaryHref: "#familias-servicios",
      },
      pillarsSection: {
        eyebrow: "Capacidades",
        title: "Tres capacidades. Un único partner tecnológico.",
        description:
          "Inteligencia artificial, producto y software, estrategia y arquitectura. Se combinan según el reto, sin silos ni soluciones predeterminadas.",
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
        titleLines: ["Tecnología adaptada al contexto de cada sector."],
        description:
          "Las reglas, los datos y los puntos de validación cambian de un sector a otro. Tahona combina estrategia, producto, software e IA alrededor de la operación real.",
        primaryLabel: "Solicitar una primera conversación",
        primaryHref: "#contacto",
        secondaryLabel: "Ver servicios",
        secondaryHref: "/services/",
      },
      gridSection: {
        eyebrow: "Otros sectores",
        title: "Otros sectores donde aplican estos patrones.",
        description:
          "Aplicamos estos patrones de forma selectiva en seguros, operaciones comerciales, salud no clínica, servicios profesionales, viajes y turismo, y educación y formación.",
      },
      detailSection: {
        eyebrow: "Experiencia sectorial",
        title: "Experiencia sectorial y líneas de trabajo activas.",
        description:
          "Tres contextos donde el conocimiento del proceso, las restricciones y los puntos de control forma parte central del trabajo.",
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
          "Cada caso parte de una necesidad concreta y muestra la intervención de Tahona, las capacidades conectadas y lo que el sistema permite.",
        primaryLabel: "Solicitar una primera conversación",
        primaryHref: "#contacto",
        secondaryLabel: "Ver servicios",
        secondaryHref: "/services/",
      },
      section: {
        eyebrow: "Casos",
        title: "Del reto al sistema.",
        text:
          "Cuatro casos que conectan definición, arquitectura, producto, software e IA cuando aporta al conjunto.",
        challengeLabel: "El reto",
        interventionLabel: "La intervención",
        enablesLabel: "Lo que permite",
        relatedCapabilitiesLabel: "Capacidades relacionadas",
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
      primaryIndustryListName: "Experiencia sectorial y líneas de trabajo activas",
      secondaryIndustryListName: "Otros sectores donde aplican estos patrones",
      casesListName: "Casos de productos y sistemas sobre retos reales",
    },
    serviceFamilies: [
      {
        id: "inteligencia-artificial",
        legacyId: "desarrollo-ia",
        marker: "01",
        title: "Inteligencia artificial",
        description:
          "Diseñamos e implementamos soluciones de IA sobre el contexto real de la empresa, con evaluación y supervisión.",
        visualSrc: "/images/service2-illustration.png",
        visualScaleClass: "scale-[1.1]",
        services: [
          {
            id: "optimizacion-procesos",
            title: "Soluciones y productos con IA",
            menuLabel: "Soluciones de IA",
            summary:
              "Capacidades de IA integradas en productos y procesos con un resultado definido y medible.",
            bullets: [
              "IA integrada en productos y procesos",
              "Resultado definido y medible desde el inicio",
              "Calidad evaluada antes de producción",
              "Supervisión durante la operación",
            ],
          },
          {
            id: "agentes-ia",
            title: "Agentes y automatización",
            menuLabel: "Agentes y automatización",
            summary:
              "Automatizamos procesos completos que hoy se hacen a mano, con documentos, datos y herramientas. Cada acción queda registrada y la revisión humana está integrada.",
            bullets: [
              "Procesos completos con documentos y datos",
              "Lectura, extracción y clasificación automáticas",
              "Trazabilidad de cada acción",
              "Revisión humana integrada",
            ],
          },
          {
            id: "procesamiento-documental",
            title: "Conocimiento y productividad del equipo",
            menuLabel: "Documentos y conocimiento",
            summary:
              "Conectamos las fuentes de información de la empresa y las organizamos con permisos. Sobre esa base montamos los agentes de trabajo del día a día. Es una metodología y un know-how que se adapta a cada empresa.",
            bullets: [
              "El conocimiento de la empresa conectado y con permisos",
              "Respuestas con su fuente en segundos",
              "Agentes que ejecutan tareas con supervisión",
            ],
          },
        ],
      },
      {
        id: "producto-software",
        legacyId: "otros-desarrollos",
        marker: "02",
        title: "Producto y software",
        description:
          "Diseñamos y desarrollamos productos digitales y software a medida, desde la definición hasta producción.",
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
              "Producto completo, de la definición al lanzamiento",
              "Experiencia y flujos de usuario",
              "Desarrollo frontend y backend",
              "Evolución guiada por datos",
            ],
          },
          {
            id: "herramientas-internas",
            title: "Software a medida",
            menuLabel: "Software a medida",
            summary:
              "Aplicaciones y plataformas construidas alrededor del negocio, sus reglas, sus datos y sus necesidades reales.",
            bullets: [
              "Aplicaciones web y plataformas para la operación",
              "Herramientas internas y backoffice",
              "Paneles y reporting del día a día",
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
              "CRM, ERP y Drive conectados",
              "Datos sincronizados sin trabajo manual",
              "APIs y conectores para cada sistema",
              "Monitorización y control de errores",
            ],
          },
        ],
      },
      {
        id: "estrategia-arquitectura",
        legacyId: "fundamentos",
        marker: "03",
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
              "Lectura estructurada del negocio y su tecnología para convertir un reto abierto en una oportunidad concreta.",
            bullets: [
              "Lectura clara de la situación real",
              "Oportunidades prioritizadas",
              "Riesgos y restricciones sobre la mesa",
              "Un plan concreto para empezar",
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
              "Diseño de la arquitectura y el modelo de evolución que la solución necesita para funcionar a largo plazo.",
            bullets: [
              "Arquitectura de aplicación y datos",
              "Integraciones y dependencias",
              "Seguridad y trazabilidad desde el inicio",
              "Plan de entrega y evolución",
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
          "El reto concreto, los datos y el contexto, la arquitectura, el producto, los modelos, la evaluación, los permisos, la supervisión, la integración y la evolución en producción.",
      },
      {
        question: "¿Cómo se decide por dónde empezar?",
        answer:
          "Se parte del objetivo y del contexto. Definimos el alcance mínimo que permite validar valor, riesgo y viabilidad antes de ampliar la solución.",
      },
    ],
    industryItems: [
      {
        id: "legal",
        level: "primary",
        marker: "01",
        title: "Legal",
        summary:
          "Documentos y expedientes con reglas de acceso, validación humana y trazabilidad entre versiones, decisiones y tareas.",
        description:
          "El trabajo legal combina documentos, expedientes, reglas de acceso y puntos de validación que no pueden desaparecer. Diseñamos sistemas para ordenar archivos, preparar información, coordinar la revisión humana y mantener trazabilidad entre versiones, decisiones y tareas.",
        visualSrc: "/images/visual-industry-legal.png",
        visualAlt: "Visual 3D de documentación legal",
        tags: ["Expedientes", "Documentos", "Validación", "Trazabilidad"],
        bullets: [
          "Expedientes, documentos y plantillas",
          "Extracción y preparación de información",
          "Revisión y validación humana",
          "Permisos y reglas de acceso",
          "Seguimiento de tareas y asuntos",
          "Trazabilidad de cambios y decisiones",
        ],
        caseLink: {
          hash: "#plataforma-documental-operativa",
          label: "Ver caso: Plataforma documental y operativa",
        },
        relatedServices: [
          {
            hash: "#procesamiento-documental",
            label: "Conocimiento y productividad del equipo",
          },
          {
            hash: "#herramientas-internas",
            label: "Software a medida",
          },
          {
            hash: "#estrategia-arquitectura",
            label: "Estrategia y arquitectura",
          },
        ],
      },
      {
        id: "logistica",
        level: "primary",
        marker: "02",
        title: "Logística",
        summary:
          "Planificación sujeta a restricciones, rutas, datos operativos e integraciones entre las herramientas que coordinan el servicio.",
        description:
          "La planificación logística depende de restricciones reales: capacidad, ventanas horarias, rutas, incidencias y disponibilidad de datos. El trabajo conecta esas reglas con información operativa, sistemas existentes e interfaces que permiten revisar y ajustar la planificación.",
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "Visual 3D de operación logística",
        tags: ["Planificación", "Restricciones", "Rutas", "Integraciones"],
        bullets: [
          "Planificación de rutas y cargas",
          "Capacidad, ventanas e incidencias",
          "Importación y validación de datos operativos",
          "Revisión de rutas y excepciones",
          "Reporting para coordinación del servicio",
          "Integración con APIs, hojas y sistemas existentes",
        ],
        caseLink: {
          hash: "#planificacion-logistica",
          label: "Ver caso: Plataforma de planificación logística",
        },
        relatedServices: [
          {
            hash: "#consultoria-auditoria-operativa",
            label: "Diagnóstico y definición",
          },
          {
            hash: "#herramientas-internas",
            label: "Software a medida",
          },
          {
            hash: "#integraciones-plataformas-operativas",
            label: "Integraciones y plataformas",
          },
        ],
      },
      {
        id: "industria-trazabilidad",
        legacyId: "industria",
        level: "primary",
        marker: "03",
        cardTitle: "Industria",
        title: "Industria y trazabilidad",
        summary:
          "Controles de calidad, lotes y registros, documentación y trazabilidad dentro de flujos operativos acotados.",
        description:
          "En industria, la calidad depende de controles concretos, lotes o registros, documentación recurrente y una trazabilidad que conecte cada revisión con su origen. Construimos herramientas para flujos acotados, con validaciones y responsables claros. APPCC y seguridad alimentaria aparecen como un patrón específico dentro de este contexto.",
        visualSrc: "/images/visual-industry-manufacturing.png",
        visualAlt: "Visual 3D de calidad y trazabilidad industrial",
        tags: ["Calidad", "Lotes y registros", "Documentación", "Trazabilidad"],
        bullets: [
          "Controles de calidad y puntos de revisión",
          "Lotes, registros y evidencias",
          "Documentación recurrente",
          "Trazabilidad entre origen, cambio y validación",
          "Flujos acotados con responsables claros",
          "APPCC como patrón dentro de calidad alimentaria",
        ],
        caseLink: {
          hash: "#calidad-trazabilidad-appcc",
          label: "Ver caso: Calidad y trazabilidad APPCC",
        },
        relatedServices: [
          {
            hash: "#procesamiento-documental",
            label: "Conocimiento y productividad del equipo",
          },
          {
            hash: "#herramientas-internas",
            label: "Software a medida",
          },
          {
            hash: "#integraciones-plataformas-operativas",
            label: "Integraciones y plataformas",
          },
        ],
      },
      {
        id: "seguros",
        level: "secondary",
        marker: "04",
        title: "Seguros",
        summary:
          "Cotización, documentación, CRM, seguimiento y traspasos que requieren reglas claras y revisión humana.",
        tags: ["Cotización", "Documentación", "CRM", "Revisión"],
      },
      {
        id: "operaciones-comerciales",
        legacyId: "marketing-growth",
        level: "secondary",
        marker: "05",
        title: "Operaciones comerciales",
        summary:
          "Coordinación entre captación, cualificación, CRM, reporting y herramientas internas. No prestamos servicios de agencia de marketing.",
        tags: ["Cualificación", "CRM", "Reporting", "Coordinación"],
      },
      {
        id: "salud-no-clinica",
        legacyId: "salud",
        level: "secondary",
        marker: "06",
        title: "Salud no clínica",
        summary:
          "Coordinación administrativa, documentación, conocimiento interno, comunicación y soporte operativo no clínico.",
        tags: ["Administración", "Documentación", "Conocimiento", "Comunicación"],
      },
      {
        id: "servicios-profesionales",
        level: "secondary",
        marker: "07",
        title: "Servicios profesionales",
        summary:
          "Trabajo con clientes, conocimiento experto, documentación y herramientas internas que deben compartir contexto sin perder puntos de revisión.",
        tags: ["Clientes", "Conocimiento", "Documentación", "Herramientas"],
      },
      {
        id: "viajes-turismo",
        level: "secondary",
        marker: "08",
        title: "Viajes y turismo",
        summary:
          "Venta, reservas, proveedores y operación coordinadas entre CRM, documentación y sistemas internos.",
        tags: ["Reservas", "CRM", "Proveedores", "Operación"],
      },
      {
        id: "educacion-formacion",
        level: "secondary",
        marker: "09",
        title: "Educación y formación",
        summary:
          "Admisión, documentación, seguimiento y comunicación a lo largo del recorrido del alumno.",
        tags: ["Admisión", "Documentación", "Seguimiento", "Comunicación"],
      },
    ],
    industriesFaq: [
      {
        question: "¿Tahona se especializa en un solo sector?",
        answer:
          "No. Concentramos experiencia y líneas de trabajo en legal, logística e industria y trazabilidad, y aplicamos esos patrones de forma selectiva en otros contextos. El enfoque se adapta a los usuarios, las reglas, los datos, las restricciones y los puntos de validación de cada sector.",
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
        title: "Documentación legal conectada con el expediente",
        challenge:
          "Los documentos, el contexto del expediente, la preparación repetida, las reglas de acceso, la revisión humana y la trazabilidad estaban repartidos entre herramientas y pasos desconectados.",
        intervention:
          "Tahona definió el proceso y la arquitectura, y diseñó y construyó una plataforma interna que conecta los datos del expediente, la entrada y extracción documental, la preparación de borradores, los puntos de control humano y el seguimiento de tareas.",
        enables: [
          "Documentos y datos vinculados al expediente",
          "Validación humana antes de cada avance",
          "Versiones, decisiones y tareas trazables",
        ],
        relatedCapabilities: [
          {
            label: "Estrategia y arquitectura",
            hash: "#estrategia-arquitectura",
          },
          {
            label: "Conocimiento y productividad del equipo",
            hash: "#procesamiento-documental",
          },
          {
            label: "Software a medida",
            hash: "#herramientas-internas",
          },
        ],
        visualSrc: "/images/visual-case-legal-document-platform.png",
        visualAlt: "Visual 3D de plataforma documental",
      },
      {
        id: "planificacion-logistica",
        legacyId: "planificacion-logistica-reporting",
        marker: "02",
        sector: "Logística",
        title: "Planificación logística bajo restricciones operativas",
        challenge:
          "La planificación debe responder a la capacidad disponible, las franjas horarias, las rutas, las incidencias y la calidad desigual de los datos operativos.",
        intervention:
          "Tahona definió las reglas operativas y la arquitectura, y diseñó y construyó una interfaz de planificación con importación y validación de datos, revisión de rutas e integración con herramientas y reporting existentes.",
        enables: [
          "Un plan revisable antes de su ejecución",
          "Restricciones, incidencias y excepciones explícitas",
          "Datos y decisiones de planificación conectados con las herramientas operativas existentes",
        ],
        relatedCapabilities: [
          {
            label: "Diagnóstico y definición",
            hash: "#consultoria-auditoria-operativa",
          },
          {
            label: "Software a medida",
            hash: "#herramientas-internas",
          },
          {
            label: "Integraciones y plataformas",
            hash: "#integraciones-plataformas-operativas",
          },
        ],
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "Visual 3D de planificación logística",
      },
      {
        id: "base-conocimiento-empresarial",
        marker: "03",
        sector: "Transversal",
        title: "Conocimiento interno con fuentes, permisos y evaluación",
        challenge:
          "Las fuentes internas estaban fragmentadas, los permisos variaban según el contexto y las respuestas debían seguir siendo atribuibles y evaluables.",
        intervention:
          "Tahona definió la arquitectura de conocimiento y diseñó y construyó un sistema con ingesta y normalización, recuperación asistida por IA con citas, permisos, evaluación e integración con herramientas internas.",
        enables: [
          "Respuestas acompañadas por sus fuentes",
          "Acceso limitado por permisos y alcance",
          "Evaluación y revisión conectadas con las herramientas internas",
        ],
        relatedCapabilities: [
          {
            label: "Soluciones y productos con IA",
            hash: "#optimizacion-procesos",
          },
          {
            label: "Conocimiento y productividad del equipo",
            hash: "#procesamiento-documental",
          },
          {
            label: "Estrategia y arquitectura",
            hash: "#estrategia-arquitectura",
          },
        ],
        visualSrc: "/images/visual-case-enterprise-knowledge.png",
        visualAlt: "Visual 3D de base de conocimiento enterprise",
      },
      {
        id: "calidad-trazabilidad-appcc",
        legacyId: "documentacion-calidad-trazabilidad",
        marker: "04",
        sector: "Industria",
        title: "Trazabilidad alimentaria desde la recepción hasta la salida",
        challenge:
          "La recepción, los controles, los lotes, los registros y la evidencia debían mantener continuidad y trazabilidad a lo largo de flujos acotados de calidad alimentaria.",
        intervention:
          "Tahona definió el proceso, diseñó los flujos del producto y construyó un sistema de documentación, validación y trazabilidad con integraciones cuando el proceso las requiere.",
        enables: [
          "Registros conectados desde la recepción hasta la salida",
          "Puntos de revisión claros en cada control",
          "Evidencia y reporting recuperables por lote y flujo",
        ],
        relatedCapabilities: [
          {
            label: "Diagnóstico y definición",
            hash: "#consultoria-auditoria-operativa",
          },
          {
            label: "Software a medida",
            hash: "#herramientas-internas",
          },
          {
            label: "Integraciones y plataformas",
            hash: "#integraciones-plataformas-operativas",
          },
        ],
        visualSrc: "/images/visual-case-appcc-quality.png",
        visualAlt: "Visual 3D de calidad y trazabilidad industrial",
      },
    ],
    workItems: [
      {
        id: "document-platform",
        sector: "Legal",
        title: "Documentación legal conectada con el expediente",
        description:
          "Plataforma interna que conecta expedientes, documentos, borradores, validación humana y seguimiento sobre una arquitectura común.",
        tags: [
          "Estrategia y arquitectura",
          "Conocimiento y productividad",
          "Software a medida",
        ],
        imageSrc: "/images/visual-case-legal-document-platform.png",
      },
      {
        id: "logistics-planning",
        sector: "Logística",
        title: "Planificación logística bajo restricciones operativas",
        description:
          "Interfaz de planificación que conecta restricciones, datos operativos, revisión de rutas y herramientas existentes.",
        tags: [
          "Diagnóstico y definición",
          "Software a medida",
          "Integraciones",
        ],
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
        title: "Tahona Industries | Technology shaped to each context",
        description:
          "Sector patterns in legal, logistics and industry, with related contexts in insurance, commercial operations and non-clinical healthcare.",
      },
      cases: {
        name: "Cases",
        title: "Tahona Cases | Products and systems for real challenges",
        description:
          "Four cases showing the challenge, Tahona's intervention, the connected capabilities and what each product or system enables.",
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
              label: "Knowledge and team productivity",
              description: "Company knowledge connected, with permissions and work agents.",
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

      ],
    },
    home: {
      hero: {
        titleLines: ["From strategy", "to implementation."],
        description:
          "Tahona is the technology partner for designing, building and integrating custom software and AI solutions.",
        primaryLabel: "Let's talk",
        primaryHref: "#contacto",
        secondaryLabel: "View services",
        secondaryHref: "#soluciones",
      },
      whatWeDo: {
        eyebrow: "What we do",
        title: "We build systems the team uses every day.",
        description: [
          "Digital products, custom software and AI solutions for real operations. What we build shows up in the team's daily work.",
          "We define the outcome before starting. We connect the data and tools already in the company. We add human review and traceability where the process requires it.",
        ],
        bullets: [
          "Products and platforms integrated into the business.",
          "AI applied to real processes.",
          "Documents and knowledge organized and searchable.",
          "Every decision and change traceable.",
        ],
      },
      services: {
        eyebrow: "Services",
        title: "Three capabilities. One technology partner.",
        description:
          "Artificial intelligence, product and software, strategy and architecture. They combine around the challenge and expected outcome, from definition through production and evolution.",
        ctaLabel: "View services",
      },
      industries: {
        eyebrow: "Industries",
        title: "Technology capabilities adapted to each sector.",
        description:
          "Processes, users, data and constraints change. We keep the same end-to-end journey and focus each solution on the outcome that matters in its context.",
        primaryLabel: "Primary sectors",
        secondaryLabel: "Other sectors",
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
      title: "Six months ago this was expensive or impossible. Today it is viable.",
      description:
        "Model capability keeps growing and prices keep falling. What was expensive or unthinkable six months ago is now viable for a small company. The value moves from the model to the context and the craft around it.",
      chart: {
        ariaLabel:
          "Growth in the length of software tasks completed by AI models with a fifty percent success rate",
        axisDateLabel: "Model release date",
        axisDurationLabel: "Human task duration",
        caption:
          "METR Time Horizon 1.1 p50 estimates and confidence intervals for a selection of models. This chart does not measure the automation of a business process.",
        description:
          "Public p50 estimates and confidence intervals for a selection of state-of-the-art models, ordered by release date.",
        scrollLabel: "Swipe to explore the chart",
        sourceLabel: "Source and methodology",
        title: "Length of software tasks completed with a 50% success rate",
        unreliableLabel:
          "Measurements above 16 hours are unreliable with the current task suite",
      },
      principles: [
        {
          title: "Connect the context",
          body: "Company information, organized and with permissions. It differs from company to company, and it is what makes a model useful.",
        },
        {
          title: "Work with craft",
          body: "Bounded systems, human review and traceability. The well-built piece around the model is what gets delivered.",
        },
        {
          title: "Measure and improve",
          body: "Outcomes evaluated with data and evolution in production. The system does not end on launch day.",
        },
      ],
    },
    servicesPage: {
      hero: {
        titleLines: ["AI, product, software and strategy, end to end."],
        description:
          "Tahona brings AI, product, software and strategy together to define, build and integrate solutions around a concrete outcome.",
        primaryLabel: "Let's talk",
        primaryHref: "#contacto",
        secondaryLabel: "View capabilities",
        secondaryHref: "#familias-servicios",
      },
      pillarsSection: {
        eyebrow: "Capabilities",
        title: "Three capabilities. One technology partner.",
        description:
          "Artificial intelligence, product and software, strategy and architecture. Combined around the challenge, without silos or predetermined solutions.",
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
        titleLines: ["Technology shaped to each sector context."],
        description:
          "Rules, data and validation points differ by sector. Tahona brings strategy, product, software and AI together around how the operation actually works.",
        primaryLabel: "Request a first conversation",
        primaryHref: "#contacto",
        secondaryLabel: "View services",
        secondaryHref: "/en/services/",
      },
      gridSection: {
        eyebrow: "Other sectors",
        title: "Other sectors where these patterns apply.",
        description:
          "We apply these patterns selectively across insurance, commercial operations, non-clinical healthcare, professional services, travel and tourism, and education and training.",
      },
      detailSection: {
        eyebrow: "Sector experience",
        title: "Sector experience and active workstreams.",
        description:
          "Three contexts where process knowledge, constraints and control points are central to the work.",
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
          "Each case starts with a concrete need and shows Tahona's intervention, the connected capabilities and what the system enables.",
        primaryLabel: "Request a first conversation",
        primaryHref: "#contacto",
        secondaryLabel: "View services",
        secondaryHref: "/en/services/",
      },
      section: {
        eyebrow: "Cases",
        title: "From challenge to system.",
        text:
          "Four cases connecting definition, architecture, product, software and AI where it contributes to the wider system.",
        challengeLabel: "Challenge",
        interventionLabel: "The intervention",
        enablesLabel: "What it enables",
        relatedCapabilitiesLabel: "Related capabilities",
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
      primaryIndustryListName: "Sector experience and active workstreams",
      secondaryIndustryListName: "Other sectors where these patterns apply",
      casesListName: "Product and system cases for real challenges",
    },
    serviceFamilies: [
      {
        id: "inteligencia-artificial",
        legacyId: "desarrollo-ia",
        marker: "01",
        title: "Artificial intelligence",
        description:
          "We design and implement AI solutions on the real context of the business, with evaluation and supervision.",
        visualSrc: "/images/service2-illustration.png",
        visualScaleClass: "scale-[1.1]",
        services: [
          {
            id: "optimizacion-procesos",
            title: "AI solutions and products",
            menuLabel: "AI solutions",
            summary:
              "AI capabilities embedded in products and processes with a defined and measurable outcome.",
            bullets: [
              "AI embedded in products and processes",
              "Outcome defined and measurable from the start",
              "Quality evaluated before production",
              "Supervision during operation",
            ],
          },
          {
            id: "agentes-ia",
            title: "Agents and automation",
            menuLabel: "Agents and automation",
            summary:
              "We automate complete processes that are still done by hand, with documents, data and tools. Every action is logged and human review is part of the flow.",
            bullets: [
              "Complete processes with documents and data",
              "Automatic reading, extraction and classification",
              "Traceability of every action",
              "Human review integrated",
            ],
          },
          {
            id: "procesamiento-documental",
            title: "Knowledge and team productivity",
            menuLabel: "Documents and knowledge",
            summary:
              "We connect the company's information sources and organize them with permissions. On top of that we build the work agents of the day to day. It is a methodology and know-how that adapts to each company.",
            bullets: [
              "Company knowledge connected and permissioned",
              "Answers with their source in seconds",
              "Agents that execute tasks with supervision",
            ],
          },
        ],
      },
      {
        id: "producto-software",
        legacyId: "otros-desarrollos",
        marker: "02",
        title: "Product and software",
        description:
          "We design and develop digital products and custom software, from definition through production.",
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
              "Complete product, from definition to launch",
              "User experience and flows",
              "Frontend and backend development",
              "Data-driven evolution",
            ],
          },
          {
            id: "herramientas-internas",
            title: "Custom software",
            menuLabel: "Custom software",
            summary:
              "Applications and platforms built around the business, its rules, its data and its real needs.",
            bullets: [
              "Web applications and platforms for operations",
              "Internal tools and back offices",
              "Dashboards and reporting for the day to day",
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
              "CRM, ERP and Drive connected",
              "Data synced without manual work",
              "APIs and connectors for every system",
              "Monitoring and error control",
            ],
          },
        ],
      },
      {
        id: "estrategia-arquitectura",
        legacyId: "fundamentos",
        marker: "03",
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
              "A structured read of the business and its technology that turns an open challenge into a concrete opportunity.",
            bullets: [
              "A clear read of the real situation",
              "Prioritized opportunities",
              "Risks and constraints on the table",
              "A concrete plan to start",
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
              "Design of the architecture and the evolution model the solution needs to work over time.",
            bullets: [
              "Application and data architecture",
              "Integrations and dependencies",
              "Security and traceability from the start",
              "Delivery and evolution plan",
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
          "The concrete challenge, data and context, architecture, product, models, evaluation, permissions, supervision, integration and evolution in production.",
      },
      {
        question: "How do we decide where to start?",
        answer:
          "We start from the goal and the context. We define the smallest scope that can validate value, risk and feasibility before expanding the solution.",
      },
    ],
    industryItems: [
      {
        id: "legal",
        level: "primary",
        marker: "01",
        title: "Legal",
        summary:
          "Documents and matters governed by access rules, human validation and traceability across versions, decisions and tasks.",
        description:
          "Legal work combines documents, matters, access rules and validation points that cannot simply disappear. We design systems to organize files, prepare information, coordinate human review and preserve traceability across versions, decisions and tasks.",
        visualSrc: "/images/visual-industry-legal.png",
        visualAlt: "3D visual of legal documentation",
        tags: ["Matters", "Documents", "Validation", "Traceability"],
        bullets: [
          "Matters, documents and templates",
          "Information extraction and preparation",
          "Human review and validation",
          "Permissions and access rules",
          "Task and matter tracking",
          "Traceability across changes and decisions",
        ],
        caseLink: {
          hash: "#plataforma-documental-operativa",
          label: "View case: Document and operations platform",
        },
        relatedServices: [
          {
            hash: "#procesamiento-documental",
            label: "Knowledge and team productivity",
          },
          {
            hash: "#herramientas-internas",
            label: "Custom software",
          },
          {
            hash: "#estrategia-arquitectura",
            label: "Strategy and architecture",
          },
        ],
      },
      {
        id: "logistica",
        level: "primary",
        marker: "02",
        title: "Logistics",
        summary:
          "Constraint-based planning, routes, operational data and integrations between the tools that coordinate service delivery.",
        description:
          "Logistics planning depends on real constraints such as capacity, time windows, routes, incidents and data availability. The work connects those rules with operational information, existing systems and interfaces that let teams review and adjust the plan.",
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "3D visual of logistics operations",
        tags: ["Planning", "Constraints", "Routes", "Integrations"],
        bullets: [
          "Route and load planning",
          "Capacity, time windows and incidents",
          "Operational data import and validation",
          "Route and exception review",
          "Reporting for service coordination",
          "Integration with APIs, spreadsheets and existing systems",
        ],
        caseLink: {
          hash: "#planificacion-logistica",
          label: "View case: Logistics planning platform",
        },
        relatedServices: [
          {
            hash: "#consultoria-auditoria-operativa",
            label: "Discovery and definition",
          },
          {
            hash: "#herramientas-internas",
            label: "Custom software",
          },
          {
            hash: "#integraciones-plataformas-operativas",
            label: "Integrations and platforms",
          },
        ],
      },
      {
        id: "industria-trazabilidad",
        legacyId: "industria",
        level: "primary",
        marker: "03",
        cardTitle: "Industry",
        title: "Industry and traceability",
        summary:
          "Quality controls, lots and records, documentation and traceability within bounded operational workflows.",
        description:
          "In industry, quality depends on concrete controls, lots or records, recurring documentation and traceability that connects each review to its source. We build tools for bounded workflows with clear validation points and owners. HACCP and food safety appear as one specific pattern within this context.",
        visualSrc: "/images/visual-industry-manufacturing.png",
        visualAlt: "3D visual of industrial quality and traceability",
        tags: ["Quality", "Lots and records", "Documentation", "Traceability"],
        bullets: [
          "Quality controls and review points",
          "Lots, records and evidence",
          "Recurring documentation",
          "Traceability from source through change and validation",
          "Bounded workflows with clear owners",
          "HACCP as a food-quality pattern",
        ],
        caseLink: {
          hash: "#calidad-trazabilidad-appcc",
          label: "View case: HACCP quality and traceability",
        },
        relatedServices: [
          {
            hash: "#procesamiento-documental",
            label: "Knowledge and team productivity",
          },
          {
            hash: "#herramientas-internas",
            label: "Custom software",
          },
          {
            hash: "#integraciones-plataformas-operativas",
            label: "Integrations and platforms",
          },
        ],
      },
      {
        id: "seguros",
        level: "secondary",
        marker: "04",
        title: "Insurance",
        summary:
          "Quoting, documentation, CRM, follow-up and handoffs that depend on clear rules and human review.",
        tags: ["Quoting", "Documentation", "CRM", "Review"],
      },
      {
        id: "operaciones-comerciales",
        legacyId: "marketing-growth",
        level: "secondary",
        marker: "05",
        title: "Commercial operations",
        summary:
          "Coordination across acquisition, qualification, CRM, reporting and internal tools. Tahona does not provide marketing agency services.",
        tags: ["Qualification", "CRM", "Reporting", "Coordination"],
      },
      {
        id: "salud-no-clinica",
        legacyId: "salud",
        level: "secondary",
        marker: "06",
        title: "Non-clinical healthcare",
        summary:
          "Administrative coordination, documentation, internal knowledge, communication and non-clinical operational support.",
        tags: ["Administration", "Documentation", "Knowledge", "Communication"],
      },
      {
        id: "servicios-profesionales",
        level: "secondary",
        marker: "07",
        title: "Professional services",
        summary:
          "Client work, expert knowledge, documentation and internal tools that need to share context without losing review points.",
        tags: ["Client work", "Knowledge", "Documentation", "Internal tools"],
      },
      {
        id: "viajes-turismo",
        level: "secondary",
        marker: "08",
        title: "Travel and tourism",
        summary:
          "Sales, bookings, suppliers and operations coordinated across CRM, documents and internal systems.",
        tags: ["Bookings", "CRM", "Suppliers", "Operations"],
      },
      {
        id: "educacion-formacion",
        level: "secondary",
        marker: "09",
        title: "Education and training",
        summary:
          "Admissions, documentation, follow-up and communication across the learner journey.",
        tags: ["Admissions", "Documentation", "Follow-up", "Communication"],
      },
    ],
    industriesFaq: [
      {
        question: "Does Tahona specialize in one sector?",
        answer:
          "No. We concentrate sector experience and current work in legal, logistics, and industry and traceability, then apply those patterns selectively in other contexts. The approach adapts to each sector's users, rules, data, constraints and validation points.",
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
        title: "Legal documents connected to the matter",
        challenge:
          "Documents, matter context, repeat preparation, access rules, human review and traceability were fragmented across disconnected tools and steps.",
        intervention:
          "Tahona defined the process and architecture, then designed and built an internal platform connecting matter data, document intake and extraction, draft preparation, human checkpoints and task follow-up.",
        enables: [
          "Documents and data connected to the matter",
          "Human validation before each step advances",
          "Traceable versions, decisions and tasks",
        ],
        relatedCapabilities: [
          {
            label: "Strategy and architecture",
            hash: "#estrategia-arquitectura",
          },
          {
            label: "Knowledge and team productivity",
            hash: "#procesamiento-documental",
          },
          {
            label: "Custom software",
            hash: "#herramientas-internas",
          },
        ],
        visualSrc: "/images/visual-case-legal-document-platform.png",
        visualAlt: "3D visual of a document platform",
      },
      {
        id: "planificacion-logistica",
        legacyId: "planificacion-logistica-reporting",
        marker: "02",
        sector: "Logistics",
        title: "Logistics planning under operational constraints",
        challenge:
          "Planning has to account for available capacity, time windows, routes, incidents and uneven operational data.",
        intervention:
          "Tahona defined the operating rules and architecture, then designed and built a planning interface with data import and validation, route review, reporting and integrations with existing tools.",
        enables: [
          "A plan that can be reviewed before execution",
          "Explicit constraints, incidents and exceptions",
          "Planning data and decisions connected to existing operational tools",
        ],
        relatedCapabilities: [
          {
            label: "Discovery and definition",
            hash: "#consultoria-auditoria-operativa",
          },
          {
            label: "Custom software",
            hash: "#herramientas-internas",
          },
          {
            label: "Integrations and platforms",
            hash: "#integraciones-plataformas-operativas",
          },
        ],
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "3D visual of logistics planning",
      },
      {
        id: "base-conocimiento-empresarial",
        marker: "03",
        sector: "Cross-functional",
        title: "Internal knowledge with sources, permissions and evaluation",
        challenge:
          "Internal sources were fragmented, permissions varied by context, and answers still had to remain attributable and open to evaluation.",
        intervention:
          "Tahona defined the knowledge architecture, then designed and built a system for ingestion and normalization, AI-assisted retrieval with citations, permissions, evaluation and integration with internal tools.",
        enables: [
          "Answers accompanied by their sources",
          "Access bounded by permissions and scope",
          "Evaluation and review connected to internal tools",
        ],
        relatedCapabilities: [
          {
            label: "AI solutions and products",
            hash: "#optimizacion-procesos",
          },
          {
            label: "Knowledge and team productivity",
            hash: "#procesamiento-documental",
          },
          {
            label: "Strategy and architecture",
            hash: "#estrategia-arquitectura",
          },
        ],
        visualSrc: "/images/visual-case-enterprise-knowledge.png",
        visualAlt: "3D visual of an enterprise knowledge base",
      },
      {
        id: "calidad-trazabilidad-appcc",
        legacyId: "documentacion-calidad-trazabilidad",
        marker: "04",
        sector: "Industry",
        title: "Food traceability from receipt to dispatch",
        challenge:
          "Reception, controls, lots, records and supporting evidence had to remain connected and traceable across bounded food-quality workflows.",
        intervention:
          "Tahona defined the process, designed the product workflows and built a documentation, validation and traceability system with integrations where the process requires them.",
        enables: [
          "Records connected from receipt through dispatch",
          "Clear review points for each control",
          "Evidence and reporting retrievable by lot and workflow",
        ],
        relatedCapabilities: [
          {
            label: "Discovery and definition",
            hash: "#consultoria-auditoria-operativa",
          },
          {
            label: "Custom software",
            hash: "#herramientas-internas",
          },
          {
            label: "Integrations and platforms",
            hash: "#integraciones-plataformas-operativas",
          },
        ],
        visualSrc: "/images/visual-case-appcc-quality.png",
        visualAlt: "3D visual of industrial quality and traceability",
      },
    ],
    workItems: [
      {
        id: "document-platform",
        sector: "Legal",
        title: "Legal documents connected to the matter",
        description:
          "An internal platform connecting matters, documents, drafts, human validation and task follow-up through one architecture.",
        tags: [
          "Strategy and architecture",
          "Knowledge and productivity",
          "Custom software",
        ],
        imageSrc: "/images/visual-case-legal-document-platform.png",
      },
      {
        id: "logistics-planning",
        sector: "Logistics",
        title: "Logistics planning under operational constraints",
        description:
          "A planning interface connecting constraints, operational data, route review and existing tools.",
        tags: [
          "Discovery and definition",
          "Custom software",
          "Integrations",
        ],
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
        title: "Branże Tahona | Technologia dopasowana do kontekstu",
        description:
          "Wzorce branżowe w prawie, logistyce i przemyśle oraz ich zastosowanie w ubezpieczeniach, operacjach sprzedażowych i nieklinicznej ochronie zdrowia.",
      },
      cases: {
        name: "Przykłady",
        title: "Przykłady Tahona | Produkty i systemy dla realnych wyzwań",
        description:
          "Cztery przykłady pokazujące wyzwanie, działania Tahona, połączone kompetencje i możliwości każdego produktu lub systemu.",
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
              label: "Wiedza i produktywność zespołu",
              description: "Wiedza firmy połączona, z uprawnieniami i agentami roboczymi.",
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

      ],
    },
    home: {
      hero: {
        titleLines: ["Od strategii", "do wdrożenia."],
        description:
          "Tahona to partner technologiczny, który projektuje, tworzy i integruje oprogramowanie na miarę oraz rozwiązania AI.",
        primaryLabel: "Porozmawiajmy",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz usługi",
        secondaryHref: "#soluciones",
      },
      whatWeDo: {
        eyebrow: "Czym się zajmujemy",
        title: "Budujemy systemy, z których zespół korzysta codziennie.",
        description: [
          "Produkty cyfrowe, oprogramowanie na miarę i rozwiązania AI dla realnych operacji. To, co budujemy, widać w codziennej pracy zespołu.",
          "Określamy wynik przed rozpoczęciem. Łączymy dane i narzędzia, które już istnieją w firmie. Dodajemy kontrolę człowieka i śledzenie zmian tam, gdzie proces tego wymaga.",
        ],
        bullets: [
          "Produkty i platformy zintegrowane z biznesem.",
          "AI zastosowana w realnych procesach.",
          "Dokumenty i wiedza uporządkowane i łatwe do przeszukania.",
          "Każda decyzja i każda zmiana możliwa do prześledzenia.",
        ],
      },
      services: {
        eyebrow: "Usługi",
        title: "Trzy kompetencje. Jeden partner technologiczny.",
        description:
          "Sztuczna inteligencja, produkt i oprogramowanie, strategia i architektura. Łączymy je według wyzwania i oczekiwanego rezultatu, od definicji po wdrożenie i dalszy rozwój.",
        ctaLabel: "Zobacz usługi",
      },
      industries: {
        eyebrow: "Branże",
        title: "Kompetencje technologiczne dopasowane do branży.",
        description:
          "Procesy, użytkownicy, dane i ograniczenia są różne. Zachowujemy ten sam zakres od strategii po wdrożenie, a każde rozwiązanie kierujemy na rezultat ważny w danym kontekście.",
        primaryLabel: "Główne sektory",
        secondaryLabel: "Inne sektory",
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
      title: "Sześć miesięcy temu to było drogie lub niemożliwe. Dziś jest wykonalne.",
      description:
        "Możliwości modeli rosną, a ich ceny spadają. To, co sześć miesięcy temu było drogie lub nie do pomyślenia, dziś jest wykonalne dla małej firmy. Wartość przenosi się z modelu na kontekst i na rzemiosło, które go otacza.",
      chart: {
        ariaLabel:
          "Wzrost długości zadań programistycznych wykonywanych przez modele AI z pięćdziesięcioprocentową skutecznością",
        axisDateLabel: "Data premiery modelu",
        axisDurationLabel: "Czas wykonania zadania przez człowieka",
        caption:
          "Estymacje p50 i przedziały ufności METR Time Horizon 1.1 dla wybranych modeli. Wykres nie mierzy automatyzacji procesu biznesowego.",
        description:
          "Publiczne estymacje p50 i przedziały ufności dla wybranych modeli state of the art, uporządkowane według daty premiery.",
        scrollLabel: "Przesuń, aby zobaczyć cały wykres",
        sourceLabel: "Źródło i metodologia",
        title: "Długość zadań programistycznych wykonywanych z 50% skutecznością",
        unreliableLabel:
          "Pomiary powyżej 16 godzin są niewiarygodne przy obecnym zestawie zadań",
      },
      principles: [
        {
          title: "Połącz kontekst",
          body: "Informacje firmy uporządkowane i z uprawnieniami. To one odróżniają firmy od siebie i sprawiają, że model jest użyteczny.",
        },
        {
          title: "Pracuj z rzemiosłem",
          body: "Systemy o jasnym zakresie, z kontrolą człowieka i śledzeniem działań. Dostarczamy dobrze zbudowany element wokół modelu.",
        },
        {
          title: "Mierz i ulepszaj",
          body: "Wyniki oceniane na danych i rozwój w produkcji. System nie kończy się w dniu wdrożenia.",
        },
      ],
    },
    servicesPage: {
      hero: {
        titleLines: ["AI, produkt, oprogramowanie i strategia od początku do końca."],
        description:
          "Tahona łączy AI, produkt, oprogramowanie i strategię, aby definiować, tworzyć i integrować rozwiązania dla konkretnego rezultatu biznesowego.",
        primaryLabel: "Porozmawiajmy",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz kompetencje",
        secondaryHref: "#familias-servicios",
      },
      pillarsSection: {
        eyebrow: "Kompetencje",
        title: "Trzy kompetencje. Jeden partner technologiczny.",
        description:
          "Sztuczna inteligencja, produkt i oprogramowanie, strategia i architektura. Łączymy je wokół wyzwania, bez silosów i z góry narzuconych rozwiązań.",
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
        titleLines: ["Technologia dopasowana do kontekstu każdej branży."],
        description:
          "Reguły, dane i punkty kontroli różnią się zależnie od branży. Tahona łączy strategię, produkt, oprogramowanie i AI wokół rzeczywistego sposobu działania organizacji.",
        primaryLabel: "Umów pierwszą rozmowę",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz usługi",
        secondaryHref: "/pl/services/",
      },
      gridSection: {
        eyebrow: "Inne sektory",
        title: "Inne sektory, w których te wzorce mają zastosowanie.",
        description:
          "Stosujemy te wzorce selektywnie w ubezpieczeniach, operacjach sprzedażowych, nieklinicznej ochronie zdrowia, usługach profesjonalnych, turystyce oraz edukacji i szkoleniach.",
      },
      detailSection: {
        eyebrow: "Doświadczenie branżowe",
        title: "Doświadczenie branżowe i aktywne kierunki prac.",
        description:
          "Trzy konteksty, w których znajomość procesu, ograniczeń i punktów kontroli stanowi centralną część pracy.",
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
          "Każdy przykład zaczyna się od konkretnej potrzeby i pokazuje działania Tahona, połączone kompetencje oraz możliwości systemu.",
        primaryLabel: "Umów pierwszą rozmowę",
        primaryHref: "#contacto",
        secondaryLabel: "Zobacz usługi",
        secondaryHref: "/pl/services/",
      },
      section: {
        eyebrow: "Przykłady",
        title: "Od wyzwania do systemu.",
        text:
          "Cztery przykłady łączące definicję, architekturę, produkt, oprogramowanie i AI tam, gdzie wspiera cały system.",
        challengeLabel: "Wyzwanie",
        interventionLabel: "Działania Tahona",
        enablesLabel: "Co umożliwia system",
        relatedCapabilitiesLabel: "Powiązane kompetencje",
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
      primaryIndustryListName: "Doświadczenie branżowe i aktywne kierunki prac",
      secondaryIndustryListName: "Inne sektory, w których te wzorce mają zastosowanie",
      casesListName: "Przykłady produktów i systemów dla realnych wyzwań",
    },
    serviceFamilies: [
      {
        id: "inteligencia-artificial",
        legacyId: "desarrollo-ia",
        marker: "01",
        title: "Sztuczna inteligencja",
        description:
          "Projektujemy i wdrażamy rozwiązania AI w oparciu o realny kontekst firmy, z ewaluacją i nadzorem.",
        visualSrc: "/images/service2-illustration.png",
        visualScaleClass: "scale-[1.1]",
        services: [
          {
            id: "optimizacion-procesos",
            title: "Rozwiązania i produkty z AI",
            menuLabel: "Rozwiązania AI",
            summary:
              "Możliwości AI zintegrowane z produktami i procesami, z określonym i mierzalnym wynikiem.",
            bullets: [
              "AI zintegrowana z produktami i procesami",
              "Wynik określony i mierzalny od początku",
              "Jakość oceniana przed wdrożeniem",
              "Nadzór podczas działania",
            ],
          },
          {
            id: "agentes-ia",
            title: "Agenci i automatyzacja",
            menuLabel: "Agenci i automatyzacja",
            summary:
              "Automatyzujemy całe procesy, które dziś wykonuje się ręcznie, z dokumentami, danymi i narzędziami. Każda akcja jest rejestrowana, a kontrola człowieka jest częścią procesu.",
            bullets: [
              "Całe procesy z dokumentami i danymi",
              "Automatyczne czytanie, ekstrakcja i klasyfikacja",
              "Śledzenie każdej akcji",
              "Zintegrowana kontrola człowieka",
            ],
          },
          {
            id: "procesamiento-documental",
            title: "Wiedza i produktywność zespołu",
            menuLabel: "Dokumenty i wiedza",
            summary:
              "Łączymy źródła informacji firmy i porządkujemy je z uprawnieniami. Na tej podstawie budujemy agentów codziennej pracy. To metodologia i know-how, które dopasowują się do każdej firmy.",
            bullets: [
              "Wiedza firmy połączona i z uprawnieniami",
              "Odpowiedzi ze źródłem w kilka sekund",
              "Agenci wykonujący zadania pod nadzorem",
            ],
          },
        ],
      },
      {
        id: "producto-software",
        legacyId: "otros-desarrollos",
        marker: "02",
        title: "Produkt i oprogramowanie",
        description:
          "Projektujemy i tworzymy produkty cyfrowe oraz oprogramowanie na miarę, od definicji po produkcję.",
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
              "Kompletny produkt, od definicji do wdrożenia",
              "Doświadczenie i przepływy użytkownika",
              "Rozwój frontend i backend",
              "Ewolucja oparta na danych",
            ],
          },
          {
            id: "herramientas-internas",
            title: "Oprogramowanie na miarę",
            menuLabel: "Oprogramowanie na miarę",
            summary:
              "Aplikacje i platformy zbudowane wokół biznesu, jego reguł, danych i realnych potrzeb.",
            bullets: [
              "Aplikacje internetowe i platformy dla operacji",
              "Narzędzia wewnętrzne i zaplecze operacyjne",
              "Panele i raportowanie na co dzień",
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
              "CRM, ERP i Drive połączone",
              "Dane zsynchronizowane bez ręcznej pracy",
              "API i łączniki dla każdego systemu",
              "Monitorowanie i obsługa błędów",
            ],
          },
        ],
      },
      {
        id: "estrategia-arquitectura",
        legacyId: "fundamentos",
        marker: "03",
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
              "Uporządkowane spojrzenie na firmę i jej technologię, które zmienia otwarte wyzwanie w konkretną możliwość.",
            bullets: [
              "Jasny obraz realnej sytuacji",
              "Uszeregowane możliwości",
              "Ryzyka i ograniczenia na stole",
              "Konkretny plan na start",
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
              "Projekt architektury i modelu rozwoju, którego rozwiązanie potrzebuje, aby działać w długim okresie.",
            bullets: [
              "Architektura aplikacji i danych",
              "Integracje i zależności",
              "Bezpieczeństwo i śledzenie od początku",
              "Plan dostarczania i rozwoju",
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
          "Konkretne wyzwanie, dane i kontekst, architekturę, produkt, modele, ewaluację, uprawnienia, nadzór, integrację i rozwój na produkcji.",
      },
      {
        question: "Jak ustalamy, od czego zacząć?",
        answer:
          "Zaczynamy od celu i kontekstu. Definiujemy najmniejszy zakres pozwalający zweryfikować wartość, ryzyko i wykonalność przed rozszerzeniem rozwiązania.",
      },
    ],
    industryItems: [
      {
        id: "legal",
        level: "primary",
        marker: "01",
        title: "Prawo",
        summary:
          "Dokumenty i sprawy objęte regułami dostępu, kontrolą człowieka oraz śledzeniem wersji, decyzji i zadań.",
        description:
          "Praca prawna łączy dokumenty, sprawy, reguły dostępu i punkty kontroli, których nie można po prostu usunąć. Projektujemy systemy porządkujące pliki, przygotowujące informacje, koordynujące kontrolę człowieka oraz śledzące wersje, decyzje i zadania.",
        visualSrc: "/images/visual-industry-legal.png",
        visualAlt: "Wizualizacja 3D dokumentacji prawnej",
        tags: ["Sprawy", "Dokumenty", "Walidacja", "Śledzenie zmian"],
        bullets: [
          "Sprawy, dokumenty i szablony",
          "Ekstrakcja i przygotowanie informacji",
          "Kontrola i walidacja przez człowieka",
          "Uprawnienia i reguły dostępu",
          "Śledzenie zadań i spraw",
          "Śledzenie zmian i decyzji",
        ],
        caseLink: {
          hash: "#plataforma-documental-operativa",
          label: "Zobacz przykład: Platforma dokumentowa i operacyjna",
        },
        relatedServices: [
          {
            hash: "#procesamiento-documental",
            label: "Wiedza i produktywność zespołu",
          },
          {
            hash: "#herramientas-internas",
            label: "Oprogramowanie na miarę",
          },
          {
            hash: "#estrategia-arquitectura",
            label: "Strategia i architektura",
          },
        ],
      },
      {
        id: "logistica",
        level: "primary",
        marker: "02",
        title: "Logistyka",
        summary:
          "Planowanie z uwzględnieniem ograniczeń, trasy, dane operacyjne oraz integracje narzędzi koordynujących realizację usług.",
        description:
          "Planowanie logistyczne zależy od rzeczywistych ograniczeń: pojemności, okien czasowych, tras, zdarzeń i dostępności danych. Praca łączy te reguły z informacjami operacyjnymi, obecnymi systemami i interfejsami, które pozwalają przeglądać i korygować plan.",
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "Wizualizacja 3D operacji logistycznych",
        tags: ["Planowanie", "Ograniczenia", "Trasy", "Integracje"],
        bullets: [
          "Planowanie tras i ładunków",
          "Pojemność, okna czasowe i zdarzenia",
          "Import i walidacja danych operacyjnych",
          "Przegląd tras i wyjątków",
          "Raportowanie wspierające koordynację usług",
          "Integracja z API, arkuszami i obecnymi systemami",
        ],
        caseLink: {
          hash: "#planificacion-logistica",
          label: "Zobacz przykład: Platforma planowania logistycznego",
        },
        relatedServices: [
          {
            hash: "#consultoria-auditoria-operativa",
            label: "Diagnoza i definicja",
          },
          {
            hash: "#herramientas-internas",
            label: "Oprogramowanie na miarę",
          },
          {
            hash: "#integraciones-plataformas-operativas",
            label: "Integracje i platformy",
          },
        ],
      },
      {
        id: "industria-trazabilidad",
        legacyId: "industria",
        level: "primary",
        marker: "03",
        cardTitle: "Przemysł",
        title: "Przemysł i identyfikowalność",
        summary:
          "Kontrole jakości, partie i rejestry, dokumentacja oraz identyfikowalność w procesach operacyjnych o określonym zakresie.",
        description:
          "W przemyśle jakość opiera się na konkretnych kontrolach, partiach lub rejestrach, powtarzalnej dokumentacji i identyfikowalności łączącej każdą kontrolę ze źródłem. Budujemy narzędzia dla procesów o określonym zakresie, z jasnymi punktami walidacji i odpowiedzialnością. HACCP i bezpieczeństwo żywności są jednym ze szczególnych wzorców w tym kontekście.",
        visualSrc: "/images/visual-industry-manufacturing.png",
        visualAlt: "Wizualizacja 3D jakości i identyfikowalności przemysłowej",
        tags: ["Jakość", "Partie i rejestry", "Dokumentacja", "Identyfikowalność"],
        bullets: [
          "Kontrole jakości i punkty przeglądu",
          "Partie, rejestry i dowody",
          "Powtarzalna dokumentacja",
          "Identyfikowalność od źródła po zmianę i walidację",
          "Procesy o określonym zakresie i jasnej odpowiedzialności",
          "HACCP jako wzorzec jakości żywności",
        ],
        caseLink: {
          hash: "#calidad-trazabilidad-appcc",
          label: "Zobacz przykład: Jakość i identyfikowalność HACCP",
        },
        relatedServices: [
          {
            hash: "#procesamiento-documental",
            label: "Wiedza i produktywność zespołu",
          },
          {
            hash: "#herramientas-internas",
            label: "Oprogramowanie na miarę",
          },
          {
            hash: "#integraciones-plataformas-operativas",
            label: "Integracje i platformy",
          },
        ],
      },
      {
        id: "seguros",
        level: "secondary",
        marker: "04",
        title: "Ubezpieczenia",
        summary:
          "Wyceny, dokumentacja, CRM, dalszy kontakt i przekazania wymagające jasnych reguł oraz kontroli człowieka.",
        tags: ["Wyceny", "Dokumentacja", "CRM", "Kontrola"],
      },
      {
        id: "operaciones-comerciales",
        legacyId: "marketing-growth",
        level: "secondary",
        marker: "05",
        title: "Operacje sprzedażowe",
        summary:
          "Koordynacja pozyskiwania, kwalifikacji, CRM, raportowania i narzędzi wewnętrznych. Tahona nie świadczy usług agencji marketingowej.",
        tags: ["Kwalifikacja", "CRM", "Raportowanie", "Koordynacja"],
      },
      {
        id: "salud-no-clinica",
        legacyId: "salud",
        level: "secondary",
        marker: "06",
        title: "Niekliniczne obszary ochrony zdrowia",
        summary:
          "Koordynacja administracyjna, dokumentacja, wiedza wewnętrzna, komunikacja i niekliniczne wsparcie operacyjne.",
        tags: ["Administracja", "Dokumentacja", "Wiedza", "Komunikacja"],
      },
      {
        id: "servicios-profesionales",
        level: "secondary",
        marker: "07",
        title: "Usługi profesjonalne",
        summary:
          "Praca z klientami, wiedza ekspercka, dokumentacja i narzędzia wewnętrzne, które muszą dzielić kontekst bez utraty punktów kontroli.",
        tags: ["Klienci", "Wiedza", "Dokumentacja", "Narzędzia"],
      },
      {
        id: "viajes-turismo",
        level: "secondary",
        marker: "08",
        title: "Podróże i turystyka",
        summary:
          "Sprzedaż, rezerwacje, dostawcy i operacje koordynowane między CRM, dokumentacją i systemami wewnętrznymi.",
        tags: ["Rezerwacje", "CRM", "Dostawcy", "Operacje"],
      },
      {
        id: "educacion-formacion",
        level: "secondary",
        marker: "09",
        title: "Edukacja i szkolenia",
        summary:
          "Rekrutacja, dokumentacja, monitorowanie i komunikacja na całej ścieżce uczestnika.",
        tags: ["Rekrutacja", "Dokumentacja", "Monitorowanie", "Komunikacja"],
      },
    ],
    industriesFaq: [
      {
        question: "Czy Tahona specjalizuje się w jednym sektorze?",
        answer:
          "Nie. Nasze doświadczenie sektorowe i kierunki prac koncentrują się na prawie, logistyce oraz przemyśle i identyfikowalności, a podobne wzorce stosujemy selektywnie w innych kontekstach. Podejście dostosowujemy do użytkowników, reguł, danych, ograniczeń i punktów kontroli właściwych dla danej branży.",
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
        title: "Dokumentacja prawna powiązana ze sprawą",
        challenge:
          "Dokumenty, kontekst sprawy, powtarzalne przygotowywanie materiałów, reguły dostępu, kontrola człowieka i śledzenie zmian były rozproszone między niepołączonymi narzędziami i etapami pracy.",
        intervention:
          "Tahona zdefiniowała proces i architekturę, a następnie zaprojektowała i zbudowała wewnętrzną platformę łączącą dane sprawy, przyjmowanie i ekstrakcję dokumentów, przygotowanie projektów, punkty kontroli człowieka oraz śledzenie zadań.",
        enables: [
          "Dokumenty i dane powiązane ze sprawą",
          "Walidacja przez człowieka przed każdym kolejnym krokiem",
          "Możliwe do prześledzenia wersje, decyzje i zadania",
        ],
        relatedCapabilities: [
          {
            label: "Strategia i architektura",
            hash: "#estrategia-arquitectura",
          },
          {
            label: "Wiedza i produktywność zespołu",
            hash: "#procesamiento-documental",
          },
          {
            label: "Oprogramowanie na miarę",
            hash: "#herramientas-internas",
          },
        ],
        visualSrc: "/images/visual-case-legal-document-platform.png",
        visualAlt: "Wizualizacja 3D platformy dokumentowej",
      },
      {
        id: "planificacion-logistica",
        legacyId: "planificacion-logistica-reporting",
        marker: "02",
        sector: "Logistyka",
        title: "Planowanie logistyczne z uwzględnieniem ograniczeń operacyjnych",
        challenge:
          "Planowanie musi uwzględniać dostępne zasoby, okna czasowe, trasy, zdarzenia i nierówną jakość danych operacyjnych.",
        intervention:
          "Tahona zdefiniowała reguły operacyjne i architekturę, a następnie zaprojektowała i zbudowała interfejs planowania z importem i walidacją danych, przeglądem tras, raportowaniem oraz integracjami z istniejącymi narzędziami.",
        enables: [
          "Plan możliwy do sprawdzenia przed realizacją",
          "Jawne ograniczenia, zdarzenia i wyjątki",
          "Dane i decyzje planistyczne połączone z istniejącymi narzędziami operacyjnymi",
        ],
        relatedCapabilities: [
          {
            label: "Diagnoza i definicja",
            hash: "#consultoria-auditoria-operativa",
          },
          {
            label: "Oprogramowanie na miarę",
            hash: "#herramientas-internas",
          },
          {
            label: "Integracje i platformy",
            hash: "#integraciones-plataformas-operativas",
          },
        ],
        visualSrc: "/images/visual-logistics.png",
        visualAlt: "Wizualizacja 3D planowania logistycznego",
      },
      {
        id: "base-conocimiento-empresarial",
        marker: "03",
        sector: "Przekrojowo",
        title: "Wiedza wewnętrzna ze źródłami, uprawnieniami i ewaluacją",
        challenge:
          "Źródła wewnętrzne były rozproszone, uprawnienia zależały od kontekstu, a odpowiedzi musiały pozostać przypisane do źródeł i możliwe do oceny.",
        intervention:
          "Tahona zdefiniowała architekturę wiedzy, a następnie zaprojektowała i zbudowała system obejmujący wczytywanie i normalizację, wyszukiwanie wspierane przez AI z cytowaniami, uprawnienia, ewaluację oraz integrację z narzędziami wewnętrznymi.",
        enables: [
          "Odpowiedzi wraz ze źródłami",
          "Dostęp ograniczony przez uprawnienia i zakres",
          "Ewaluacja i przegląd połączone z narzędziami wewnętrznymi",
        ],
        relatedCapabilities: [
          {
            label: "Rozwiązania i produkty z AI",
            hash: "#optimizacion-procesos",
          },
          {
            label: "Wiedza i produktywność zespołu",
            hash: "#procesamiento-documental",
          },
          {
            label: "Strategia i architektura",
            hash: "#estrategia-arquitectura",
          },
        ],
        visualSrc: "/images/visual-case-enterprise-knowledge.png",
        visualAlt: "Wizualizacja 3D firmowej bazy wiedzy",
      },
      {
        id: "calidad-trazabilidad-appcc",
        legacyId: "documentacion-calidad-trazabilidad",
        marker: "04",
        sector: "Przemysł",
        title: "Identyfikowalność żywności od przyjęcia do wysyłki",
        challenge:
          "Przyjęcie, kontrole, partie, rejestry i materiały potwierdzające musiały zachować ciągłość i identyfikowalność w jasno określonych procesach jakości żywności.",
        intervention:
          "Tahona zdefiniowała proces, zaprojektowała przepływy produktu i zbudowała system dokumentacji, walidacji oraz identyfikowalności z integracjami tam, gdzie wymaga ich proces.",
        enables: [
          "Rejestry połączone od przyjęcia po wysyłkę",
          "Jasne punkty przeglądu dla każdej kontroli",
          "Dokumentacja i raportowanie dostępne według partii i przepływu",
        ],
        relatedCapabilities: [
          {
            label: "Diagnoza i definicja",
            hash: "#consultoria-auditoria-operativa",
          },
          {
            label: "Oprogramowanie na miarę",
            hash: "#herramientas-internas",
          },
          {
            label: "Integracje i platformy",
            hash: "#integraciones-plataformas-operativas",
          },
        ],
        visualSrc: "/images/visual-case-appcc-quality.png",
        visualAlt: "Wizualizacja 3D jakości i identyfikowalności w przemyśle",
      },
    ],
    workItems: [
      {
        id: "document-platform",
        sector: "Prawo",
        title: "Dokumentacja prawna powiązana ze sprawą",
        description:
          "Wewnętrzna platforma łącząca sprawy, dokumenty, projekty, kontrolę człowieka i śledzenie zadań we wspólnej architekturze.",
        tags: [
          "Strategia i architektura",
          "Wiedza i produktywność",
          "Oprogramowanie na miarę",
        ],
        imageSrc: "/images/visual-case-legal-document-platform.png",
      },
      {
        id: "logistics-planning",
        sector: "Logistyka",
        title: "Planowanie logistyczne z uwzględnieniem ograniczeń operacyjnych",
        description:
          "Interfejs planowania łączący ograniczenia, dane operacyjne, przegląd tras i istniejące narzędzia.",
        tags: [
          "Diagnoza i definicja",
          "Oprogramowanie na miarę",
          "Integracje",
        ],
        imageSrc: "/images/visual-logistics.png",
      },
    ],
  },
} as const satisfies Record<Locale, SiteContent>;

export function getContent(locale: Locale): SiteContent {
  return SITE_CONTENT[locale];
}
