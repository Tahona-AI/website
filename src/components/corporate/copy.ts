export type Locale = "es" | "en" | "zh";

export interface CorporateCopy {
  metaTitle: string;
  metaDescription: string;
  utility: string;
  regions: string;
  languageLabel: string;
  nav: {
    capabilities: string;
    industries: string;
    cases: string;
    perspectives: string;
    about: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    home: string;
    skip: string;
    mainLabel: string;
    mobileLabel: string;
    footerLabel: string;
    menuEyebrow: string;
    menuTitle: string;
    menuExplore: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    accent: string;
    description: string;
    cta: string;
    footnote: string;
    about: string;
    carouselLabel: string;
    previous: string;
    next: string;
    pause: string;
    play: string;
    slideLabel: string;
  };
  slides: Array<{ name: string; caption: string; alt: string }>;
  valueStrip: string[];
  capabilitiesSection: {
    eyebrow: string;
    title: string;
    description: string;
    explore: string;
    talk: string;
  };
  capabilities: Array<{
    number: string;
    title: string;
    description: string;
    items: string[];
    icon: "intelligence" | "software" | "strategy";
  }>;
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    link: string;
    principles: Array<{ title: string; description: string }>;
  };
  industriesSection: {
    eyebrow: string;
    title: string;
    description: string;
    selector: string;
    cta: string;
    otherLabel: string;
    other: string;
  };
  industries: Array<{
    name: string;
    title: string;
    description: string;
    tags: string[];
    symbol: string;
  }>;
  casesSection: {
    eyebrow: string;
    title: string;
    description: string;
    open: string;
    read: string;
    anonymous: string;
    challenge: string;
    solution: string;
    cta: string;
    close: string;
    diagramLabels: string[];
  };
  cases: Array<{
    id: string;
    sector: string;
    title: string;
    description: string;
    challenge: string;
    solution: string;
    context: string;
  }>;
  methodSection: { eyebrow: string; title: string; description: string };
  approach: Array<{ title: string; description: string }>;
  international: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    america: string;
    europe: string;
    china: string;
  };
  perspectivesSection: {
    eyebrow: string;
    title: string;
    description: string;
    read: string;
    close: string;
    threePoints: string;
    cta: string;
    artLabel: string;
    dialogEyebrow: string;
  };
  perspectives: Array<{
    category: string;
    title: string;
    id: string;
    visual: "context" | "architecture" | "integration";
    text: string;
    points: string[];
  }>;
  contact: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    formTitle: string;
    name: string;
    namePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { tagline: string; top: string; copyright: string; location: string };
}

export const copy = {
  es: {
    metaTitle: "Tahona AI | Tecnología que impulsa el negocio",
    metaDescription:
      "Estrategia, producto, software e inteligencia artificial. Tahona AI: una visión internacional para América, Europa y China.",
    utility: "ESTRATEGIA · TECNOLOGÍA · INTELIGENCIA ARTIFICIAL",
    regions: "América · Europa · China",
    languageLabel: "Seleccionar idioma",
    nav: {
      capabilities: "Capacidades",
      industries: "Industrias",
      cases: "Casos",
      perspectives: "Perspectivas",
      about: "Nosotros",
      contact: "Conversemos",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      home: "Tahona AI, inicio",
      skip: "Ir al contenido",
      mainLabel: "Navegación principal",
      mobileLabel: "Navegación móvil",
      footerLabel: "Navegación del pie",
      menuEyebrow: "NUESTRAS CAPACIDADES",
      menuTitle: "Del reto de negocio\na la solución.",
      menuExplore: "Explorar capacidades",
    },
    hero: {
      eyebrow: "UN PARTNER TECNOLÓGICO. DE PRINCIPIO A FIN.",
      line1: "Tecnología que",
      line2: "impulsa",
      accent: "el negocio.",
      description:
        "Conectamos estrategia, software e inteligencia artificial para resolver los retos de tu organización y abrir nuevas posibilidades de negocio.",
      cta: "Descubrir nuestras capacidades",
      footnote: "CERCANÍA · AGILIDAD · CONFIANZA",
      about: "Conoce Tahona",
      carouselLabel: "Paisajes de Tahona",
      previous: "Imagen anterior",
      next: "Imagen siguiente",
      pause: "Pausar carrusel",
      play: "Reanudar carrusel",
      slideLabel: "Ver imagen",
    },
    slides: [
      {
        name: "Ondas",
        caption: "Luz que viaja.",
        alt: "Ondas y refracciones de luz en una imagen abstracta de fibra óptica.",
      },
      {
        name: "Logística",
        caption: "Puertos, rutas y conexiones.",
        alt: "Grúas y contenedores en un puerto comercial.",
      },
      {
        name: "Internacional",
        caption: "Shanghái, China.",
        alt: "Vista de los edificios y rascacielos de Shanghái, China.",
      },
      {
        name: "Naturaleza",
        caption: "Agua, bosque y silencio.",
        alt: "Paisaje alpino con agua, bosque y montañas.",
      },
      {
        name: "Tecnología",
        caption: "Entre servidores y conexiones.",
        alt: "Filas de servidores en un centro de datos.",
      },
      {
        name: "Arquitectura",
        caption: "Vidrio, luz y ciudad.",
        alt: "Edificios contemporáneos con fachadas de vidrio.",
      },
      {
        name: "Espacio",
        caption: "La Tierra, vista desde el espacio.",
        alt: "Imagen de la Tierra desde el espacio, procedente de la NASA.",
      },
      {
        name: "Raíces",
        caption: "Olivo mediterráneo. Nuestro origen.",
        alt: "Un olivo en un paisaje mediterráneo, con textura dither.",
      },
    ],
    valueStrip: [
      "Estrategia alineada con el negocio",
      "Tecnología integrada en la operación",
      "Avances que puedes comprobar",
    ],
    capabilitiesSection: {
      eyebrow: "NUESTRAS CAPACIDADES",
      title: "Una visión integral.\nUn impacto concreto.",
      description:
        "Entendemos los procesos, definimos lo que hace falta y lo construimos. Desde la primera revisión hasta el uso diario.",
      explore: "Explorar capacidad",
      talk: "Hablemos de esta capacidad",
    },
    capabilities: [
      {
        number: "01",
        title: "Inteligencia artificial",
        description:
          "Llevamos la IA al trabajo diario con el contexto de tu empresa, criterios de evaluación y supervisión humana.",
        items: [
          "Agentes y automatización de procesos",
          "Conocimiento y productividad",
          "Soluciones y productos con IA",
        ],
        icon: "intelligence",
      },
      {
        number: "02",
        title: "Producto y software",
        description:
          "Diseñamos y construimos herramientas que conectan a las personas, la información y los procesos de tu organización.",
        items: [
          "Desarrollo de software a medida",
          "Plataformas y herramientas internas",
          "Integración de sistemas",
        ],
        icon: "software",
      },
      {
        number: "03",
        title: "Estrategia y arquitectura",
        description:
          "Auditamos los procesos, identificamos cuellos de botella y priorizamos mejoras con IA. Definimos una hoja de ruta sobre los sistemas que ya utilizas.",
        items: [
          "Auditoría de procesos y cuellos de botella",
          "Priorización de mejoras con IA",
          "Estrategia, arquitectura y hoja de ruta",
        ],
        icon: "strategy",
      },
    ],
    about: {
      eyebrow: "SOBRE TAHONA",
      title: "La tecnología se construye\ncon las personas.",
      lead: "Somos un partner tecnológico que une estrategia, producto, software e IA para construir soluciones que se utilizan cada día.",
      body: "Escuchamos antes de proponer. Trabajamos junto a tu equipo, compartimos los avances y explicamos cada decisión. Nos importa tanto lo que construimos como la confianza con la que lo ponemos en marcha.",
      link: "Nuestra forma de trabajar",
      principles: [
        {
          title: "Cercanía",
          description: "Hablas con el equipo que construye tu solución.",
        },
        {
          title: "Agilidad",
          description: "Avances frecuentes para probar, decidir y ajustar.",
        },
        {
          title: "Confianza",
          description:
            "Alcance claro, decisiones compartidas y revisión humana.",
        },
      ],
    },
    industriesSection: {
      eyebrow: "INDUSTRIAS",
      title: "Entender el sector.\nResolver el reto.",
      description:
        "Los procesos, los datos y las responsabilidades cambian en cada sector. Nuestra primera tarea es entenderlos.",
      selector: "Seleccionar industria",
      cta: "Explorar el reto de tu organización",
      otherLabel: "También trabajamos con retos de",
      other:
        "Seguros · Operaciones comerciales · Salud no clínica · Viajes y turismo · Educación",
    },
    industries: [
      {
        name: "Legal",
        title: "Conocimiento conectado. Decisiones trazables.",
        description:
          "Reunimos expedientes, documentos y conocimiento experto en herramientas para el trabajo jurídico. Con permisos definidos y validación humana.",
        tags: ["Expedientes", "Gestión documental", "Validación humana"],
        symbol: "§",
      },
      {
        name: "Logística",
        title: "Planificación que sigue el ritmo de la operación.",
        description:
          "Conectamos pedidos, disponibilidad y restricciones para que el equipo pueda revisar y ajustar la planificación con los sistemas que ya utiliza.",
        tags: [
          "Planificación de rutas",
          "Restricciones operativas",
          "Integraciones",
        ],
        symbol: "↗",
      },
      {
        name: "Industria",
        title: "Información fiable en cada etapa del proceso.",
        description:
          "Conectamos controles de calidad, registros, lotes y documentación para coordinar la operación y seguir la información de principio a fin.",
        tags: ["Calidad", "Lotes y registros", "Trazabilidad"],
        symbol: "⊞",
      },
      {
        name: "Servicios profesionales",
        title: "Más tiempo para el trabajo experto.",
        description:
          "Organizamos el conocimiento y conectamos las herramientas del equipo. Proyectos, documentos y relaciones con clientes, con los puntos de revisión que cada trabajo necesita.",
        tags: ["Conocimiento", "Coordinación", "Herramientas internas"],
        symbol: "◎",
      },
    ],
    casesSection: {
      eyebrow: "EXPERIENCIA APLICADA",
      title: "Retos reales.\nSoluciones que conectan.",
      description:
        "Casos anonimizados que muestran cómo se conectan el conocimiento del negocio, el diseño y la tecnología.",
      open: "Ver caso",
      read: "Conocer el caso",
      anonymous: "CASO ANONIMIZADO",
      challenge: "El reto",
      solution: "La solución",
      cta: "Hablemos de un reto similar",
      close: "Cerrar caso",
      diagramLabels: ["CONOCIMIENTO CONECTADO", "OPERACIONES COORDINADAS"],
    },
    cases: [
      {
        id: "caso-legal",
        sector: "LEGAL",
        title: "Un entorno común para el trabajo jurídico.",
        description:
          "Expedientes, documentos y validación humana en una plataforma interna.",
        challenge:
          "Organizar la documentación y el seguimiento de cada expediente sin perder el contexto ni los puntos de revisión.",
        solution:
          "Una plataforma interna que reúne expedientes, documentos, borradores y seguimiento, con validación humana dentro del mismo flujo de trabajo.",
        context:
          "Conocimiento y productividad · Software a medida · Estrategia y arquitectura",
      },
      {
        id: "caso-logistica",
        sector: "LOGÍSTICA",
        title: "Planificación conectada con la realidad operativa.",
        description:
          "Datos, restricciones y revisión de rutas en un mismo flujo de trabajo.",
        challenge:
          "Planificar con datos distribuidos y restricciones operativas, manteniendo la capacidad del equipo para revisar y ajustar las rutas.",
        solution:
          "Una interfaz de planificación que conecta los datos operativos, las restricciones y la revisión de rutas con las herramientas existentes.",
        context: "Diagnóstico y definición · Software a medida · Integraciones",
      },
    ],
    methodSection: {
      eyebrow: "CÓMO TRABAJAMOS",
      title: "De la primera decisión\nal siguiente avance.",
      description:
        "Una auditoría inicial, prioridades claras y avances visibles. Un equipo con el que puedes hablar en cada etapa.",
    },
    approach: [
      {
        title: "Auditoría de procesos",
        description:
          "Revisamos cómo trabaja tu empresa: datos, esperas, tareas repetidas y puntos de bloqueo. Localizamos cuellos de botella y priorizamos dónde la IA puede aportar una mejora concreta.",
      },
      {
        title: "Estrategia y definición",
        description:
          "Elegimos por dónde empezar y definimos el alcance, las prioridades y cómo vamos a evaluar el resultado.",
      },
      {
        title: "Producto y arquitectura",
        description:
          "Diseñamos la experiencia, las integraciones y el sistema que necesita tu equipo.",
      },
      {
        title: "Construcción e integración",
        description:
          "Construimos en ciclos cortos. Cada avance se prueba con tu equipo y con el trabajo real.",
      },
      {
        title: "Operación y evolución",
        description:
          "Acompañamos la puesta en marcha, observamos el uso y ajustamos lo que haga falta.",
      },
    ],
    international: {
      eyebrow: "UNA VISIÓN INTERNACIONAL",
      title: "América, Europa y China.\nUn horizonte común.",
      description:
        "Nuestra mirada conecta América, Europa y China. Idiomas, formas de trabajar y contextos distintos; una misma disposición a escuchar, colaborar y construir tecnología útil para cada organización.",
      cta: "Conversemos sobre tu próximo proyecto",
      america: "AMÉRICA",
      europe: "EUROPA",
      china: "CHINA",
    },
    perspectivesSection: {
      eyebrow: "PERSPECTIVAS",
      title: "Ideas para decidir\ncon más criterio.",
      description:
        "Nuestra mirada sobre IA, tecnología y operaciones. Preguntas que conviene resolver antes de construir.",
      read: "Leer perspectiva",
      close: "Cerrar perspectiva",
      threePoints: "Tres puntos de partida",
      cta: "Conversar con Tahona",
      artLabel: "TAHONA / PERSPECTIVAS",
      dialogEyebrow: "PERSPECTIVA TAHONA",
    },
    perspectives: [
      {
        category: "INTELIGENCIA ARTIFICIAL",
        title: "El valor de la IA empieza en el contexto de la empresa.",
        id: "contexto",
        visual: "context",
        text: "Para ser útil, la IA necesita información actualizada, permisos adecuados y reglas que reflejen cómo trabaja tu organización. Antes de automatizar, hay que identificar las fuentes de conocimiento, quién las mantiene y qué decisiones necesitan revisión. Después, probar la solución con tareas reales y comprobar si el resultado sirve al equipo.",
        points: [
          "Identificar las fuentes y los responsables de la información.",
          "Definir permisos y puntos de revisión humana.",
          "Evaluar la calidad con tareas concretas del negocio.",
        ],
      },
      {
        category: "ESTRATEGIA TECNOLÓGICA",
        title: "De la primera prueba al uso diario.",
        id: "estrategia",
        visual: "architecture",
        text: "Una primera prueba debe resolver un problema concreto. Para que llegue al uso diario, también hay que decidir quién la utilizará, cómo encajará en el proceso y qué resultado esperamos. Una hoja de ruta útil contempla desde el principio los datos, la integración y las personas que se harán cargo de la solución.",
        points: [
          "Priorizar según el impacto, la viabilidad y las necesidades del equipo.",
          "Acordar criterios de éxito antes de construir.",
          "Planificar la integración y la operación desde el inicio.",
        ],
      },
      {
        category: "PRODUCTO Y OPERACIONES",
        title: "Integrar la tecnología. Mantener la continuidad.",
        id: "integracion",
        visual: "integration",
        text: "Los sistemas que ya utilizas guardan información y formas de trabajar que tienen valor. Construir sobre ellos permite introducir mejoras de manera progresiva. Empezamos por conocer los flujos de información y sus dependencias, definir las conexiones y revisar las excepciones. La integración funciona cuando facilita el trabajo diario y el equipo sabe cómo operarla.",
        points: [
          "Mapear las herramientas y los flujos de información actuales.",
          "Introducir cambios acotados y probarlos con el equipo.",
          "Documentar los procesos y preparar la gestión de excepciones.",
        ],
      },
    ],
    contact: {
      eyebrow: "CONSTRUYAMOS EL SIGUIENTE PASO",
      title: "Las grandes decisiones\nempiezan con",
      accent: "una conversación.",
      description:
        "Cuéntanos qué quieres mejorar, conectar o construir. Empezamos por entender tu organización y lo que necesita conseguir.",
      formTitle: "Hablemos de tu proyecto.",
      name: "Nombre",
      namePlaceholder: "Nombre y apellidos",
      company: "Organización",
      companyPlaceholder: "Nombre de la empresa",
      email: "Correo profesional",
      emailPlaceholder: "nombre@empresa.com",
      message: "¿Cuál es el próximo reto?",
      messagePlaceholder: "Qué necesitas resolver y en qué contexto",
      send: "Enviar mensaje",
      sending: "Enviando…",
      success: "Gracias por escribirnos. Nos pondremos en contacto contigo.",
      error: "No hemos podido enviar el mensaje. Inténtalo de nuevo o escríbenos a hola@tahona.ai.",
    },
    footer: {
      tagline: "Estrategia. Tecnología.\nCercanía para avanzar.",
      top: "Volver al inicio",
      copyright: "Tahona AI. Todos los derechos reservados.",
      location: "Madrid, España",
    },
  },
  en: {
    metaTitle: "Tahona AI | Technology that moves business forward",
    metaDescription:
      "Strategy, product, software and artificial intelligence. Tahona AI: an international outlook across the Americas, Europe and China.",
    utility: "STRATEGY · TECHNOLOGY · ARTIFICIAL INTELLIGENCE",
    regions: "Americas · Europe · China",
    languageLabel: "Select language",
    nav: {
      capabilities: "Capabilities",
      industries: "Industries",
      cases: "Case studies",
      perspectives: "Perspectives",
      about: "About us",
      contact: "Let's talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      home: "Tahona AI, home",
      skip: "Skip to content",
      mainLabel: "Main navigation",
      mobileLabel: "Mobile navigation",
      footerLabel: "Footer navigation",
      menuEyebrow: "OUR CAPABILITIES",
      menuTitle: "From business challenge\nto solution.",
      menuExplore: "Explore capabilities",
    },
    hero: {
      eyebrow: "YOUR TECHNOLOGY PARTNER. FROM START TO FINISH.",
      line1: "Technology that",
      line2: "moves",
      accent: "business forward.",
      description:
        "We bring strategy, software and artificial intelligence together to solve your organisation's challenges and open up new business opportunities.",
      cta: "Discover our capabilities",
      footnote: "CLOSENESS · AGILITY · TRUST",
      about: "Meet Tahona",
      carouselLabel: "Tahona landscapes",
      previous: "Previous image",
      next: "Next image",
      pause: "Pause slideshow",
      play: "Resume slideshow",
      slideLabel: "View image",
    },
    slides: [
      {
        name: "Waves",
        caption: "Light in motion.",
        alt: "Waves and refractions of light in an abstract fibre-optic image.",
      },
      {
        name: "Logistics",
        caption: "Ports, routes and connections.",
        alt: "Cranes and shipping containers in a commercial port.",
      },
      {
        name: "International",
        caption: "Shanghai, China.",
        alt: "A view of the buildings and skyscrapers of Shanghai, China.",
      },
      {
        name: "Nature",
        caption: "Water, forest and quiet.",
        alt: "An alpine landscape with water, forest and mountains.",
      },
      {
        name: "Technology",
        caption: "Among servers and connections.",
        alt: "Rows of servers in a data centre.",
      },
      {
        name: "Architecture",
        caption: "Glass, light and city.",
        alt: "Contemporary buildings with glass façades.",
      },
      {
        name: "Space",
        caption: "Earth, seen from space.",
        alt: "An image of Earth from space, sourced from NASA.",
      },
      {
        name: "Roots",
        caption: "A Mediterranean olive tree. Our roots.",
        alt: "An olive tree in a Mediterranean landscape with a dither texture.",
      },
    ],
    valueStrip: [
      "Strategy aligned with your business",
      "Technology connected to your operations",
      "Progress you can see and assess",
    ],
    capabilitiesSection: {
      eyebrow: "OUR CAPABILITIES",
      title: "A complete perspective.\nA concrete impact.",
      description:
        "We understand your processes, define what is needed and build it. From the initial review to everyday use.",
      explore: "Explore this capability",
      talk: "Let's discuss this capability",
    },
    capabilities: [
      {
        number: "01",
        title: "Artificial intelligence",
        description:
          "We bring AI into everyday work with your company's context, clear evaluation criteria and human oversight.",
        items: [
          "Agents and process automation",
          "Knowledge and productivity",
          "AI solutions and products",
        ],
        icon: "intelligence",
      },
      {
        number: "02",
        title: "Product and software",
        description:
          "We design and build tools that connect your organisation's people, information and processes.",
        items: [
          "Custom software development",
          "Platforms and internal tools",
          "Systems integration",
        ],
        icon: "software",
      },
      {
        number: "03",
        title: "Strategy and architecture",
        description:
          "We audit processes, identify bottlenecks and prioritise improvements with AI. We define a roadmap around the systems you already use.",
        items: [
          "Process and bottleneck audits",
          "Prioritising improvements with AI",
          "Strategy, architecture and roadmap",
        ],
        icon: "strategy",
      },
    ],
    about: {
      eyebrow: "ABOUT TAHONA",
      title: "Technology is built\nwith people.",
      lead: "We are a technology partner bringing strategy, product, software and AI together to build solutions people use every day.",
      body: "We listen before we propose. We work alongside your team, share progress and explain each decision. How we build trust matters as much as what we deliver.",
      link: "How we work",
      principles: [
        {
          title: "Close collaboration",
          description:
            "You speak directly with the team building your solution.",
        },
        {
          title: "Agility",
          description: "Regular releases to test, decide and refine.",
        },
        {
          title: "Trust",
          description: "Clear scope, shared decisions and human review.",
        },
      ],
    },
    industriesSection: {
      eyebrow: "INDUSTRIES",
      title: "Understand the sector.\nSolve the challenge.",
      description:
        "Processes, data and responsibilities differ across sectors. Understanding them is our first task.",
      selector: "Select an industry",
      cta: "Explore your organisation's challenge",
      otherLabel: "We also address challenges in",
      other:
        "Insurance · Commercial operations · Non-clinical healthcare · Travel and tourism · Education",
    },
    industries: [
      {
        name: "Legal",
        title: "Connected knowledge. Traceable decisions.",
        description:
          "We bring case files, documents and expert knowledge together in tools for legal work. With defined access permissions and human validation.",
        tags: ["Case files", "Document management", "Human validation"],
        symbol: "§",
      },
      {
        name: "Logistics",
        title: "Planning that keeps pace with operations.",
        description:
          "We connect orders, availability and constraints so your team can review and adjust plans within the systems it already uses.",
        tags: ["Route planning", "Operational constraints", "Integrations"],
        symbol: "↗",
      },
      {
        name: "Manufacturing",
        title: "Reliable information at every stage.",
        description:
          "We connect quality checks, records, batches and documentation to coordinate operations and keep information traceable from start to finish.",
        tags: ["Quality", "Batches and records", "Traceability"],
        symbol: "⊞",
      },
      {
        name: "Professional services",
        title: "More time for expert work.",
        description:
          "We organise knowledge and connect your team's tools. Projects, documents and client relationships, with the review steps each task needs.",
        tags: ["Knowledge", "Coordination", "Internal tools"],
        symbol: "◎",
      },
    ],
    casesSection: {
      eyebrow: "EXPERIENCE IN PRACTICE",
      title: "Real challenges.\nConnected solutions.",
      description:
        "Anonymised case studies showing how business knowledge, design and technology come together.",
      open: "View case study",
      read: "Read the case study",
      anonymous: "ANONYMISED CASE STUDY",
      challenge: "The challenge",
      solution: "The solution",
      cta: "Let's discuss a similar challenge",
      close: "Close case study",
      diagramLabels: ["CONNECTED KNOWLEDGE", "COORDINATED OPERATIONS"],
    },
    cases: [
      {
        id: "caso-legal",
        sector: "LEGAL",
        title: "A shared workspace for legal teams.",
        description:
          "Case files, documents and human validation in one internal platform.",
        challenge:
          "Organise documentation and case tracking without losing context or essential review steps.",
        solution:
          "An internal platform bringing case files, documents, drafts and tracking together, with human validation within the same workflow.",
        context:
          "Knowledge and productivity · Custom software · Strategy and architecture",
      },
      {
        id: "caso-logistica",
        sector: "LOGISTICS",
        title: "Planning grounded in operational reality.",
        description: "Data, constraints and route review in a single workflow.",
        challenge:
          "Plan around distributed data and operational constraints while keeping the team able to review and adjust routes.",
        solution:
          "A planning interface connecting operational data, constraints and route review with existing tools.",
        context: "Assessment and definition · Custom software · Integrations",
      },
    ],
    methodSection: {
      eyebrow: "HOW WE WORK",
      title: "From the first decision\nto the next step forward.",
      description:
        "An initial audit, clear priorities and visible progress. A team you can speak with at every stage.",
    },
    approach: [
      {
        title: "Process audit",
        description:
          "We review how your business works: data, waiting times, repetitive tasks and points where work stalls. We identify bottlenecks and prioritise where AI can make a practical improvement.",
      },
      {
        title: "Strategy and definition",
        description:
          "We choose where to start and define the scope, priorities and how to assess the outcome.",
      },
      {
        title: "Product and architecture",
        description:
          "We design the experience, integrations and system your team needs.",
      },
      {
        title: "Development and integration",
        description:
          "We build in short cycles. Your team tests each step against real work.",
      },
      {
        title: "Operation and improvement",
        description:
          "We support the launch, observe how the solution is used and make the adjustments it needs.",
      },
    ],
    international: {
      eyebrow: "AN INTERNATIONAL OUTLOOK",
      title: "The Americas, Europe and China.\nA shared horizon.",
      description:
        "Our outlook connects the Americas, Europe and China. Different languages, ways of working and local contexts; the same willingness to listen, collaborate and build technology that serves each organisation.",
      cta: "Let's talk about your next project",
      america: "AMERICAS",
      europe: "EUROPE",
      china: "CHINA",
    },
    perspectivesSection: {
      eyebrow: "PERSPECTIVES",
      title: "Ideas for making\nbetter decisions.",
      description:
        "Our perspective on AI, technology and operations. Questions worth answering before you build.",
      read: "Read perspective",
      close: "Close perspective",
      threePoints: "Three starting points",
      cta: "Talk to Tahona",
      artLabel: "TAHONA / PERSPECTIVES",
      dialogEyebrow: "TAHONA PERSPECTIVE",
    },
    perspectives: [
      {
        category: "ARTIFICIAL INTELLIGENCE",
        title: "The value of AI starts with your business context.",
        id: "contexto",
        visual: "context",
        text: "To be useful, AI needs current information, appropriate permissions and rules that reflect how your organisation works. Before automating, identify the knowledge sources, who maintains them and which decisions need review. Then test the solution against real tasks and check whether the results are useful to the team.",
        points: [
          "Identify information sources and the people responsible for them.",
          "Define permissions and human review steps.",
          "Evaluate quality against specific business tasks.",
        ],
      },
      {
        category: "TECHNOLOGY STRATEGY",
        title: "From the first test to everyday use.",
        id: "estrategia",
        visual: "architecture",
        text: "An initial test should solve a specific problem. For it to become part of everyday work, you also need to decide who will use it, how it will fit into the process and what outcome you expect. A useful roadmap accounts for data, integration and the people responsible for the solution from the outset.",
        points: [
          "Prioritise by impact, feasibility and the team's needs.",
          "Agree on success criteria before building.",
          "Plan for integration and operation from the start.",
        ],
      },
      {
        category: "PRODUCT AND OPERATIONS",
        title: "Integrate technology. Keep the business running.",
        id: "integracion",
        visual: "integration",
        text: "The systems you already use hold valuable information and established ways of working. Building on them allows improvements to be introduced gradually. We start by understanding information flows and dependencies, defining connections and reviewing exceptions. Integration works when it makes everyday work easier and the team knows how to operate it.",
        points: [
          "Map current tools and information flows.",
          "Introduce focused changes and test them with the team.",
          "Document processes and prepare for exceptions.",
        ],
      },
    ],
    contact: {
      eyebrow: "LET'S BUILD THE NEXT STEP",
      title: "Big decisions\nstart with",
      accent: "a conversation.",
      description:
        "Tell us what you want to improve, connect or build. We start by understanding your organisation and what it needs to achieve.",
      formTitle: "Let's talk about your project.",
      name: "Name",
      namePlaceholder: "Full name",
      company: "Organisation",
      companyPlaceholder: "Company name",
      email: "Work email",
      emailPlaceholder: "name@company.com",
      message: "What's the next challenge?",
      messagePlaceholder: "What you need to solve and the context behind it",
      send: "Send message",
      sending: "Sending…",
      success: "Thank you for getting in touch. We will contact you soon.",
      error: "We could not send your message. Please try again or email hola@tahona.ai.",
    },
    footer: {
      tagline: "Strategy. Technology.\nWorking closely to move forward.",
      top: "Back to top",
      copyright: "Tahona AI. All rights reserved.",
      location: "Madrid, Spain",
    },
  },
  zh: {
    metaTitle: "Tahona AI | 以技术推动业务发展",
    metaDescription:
      "战略、产品、软件与人工智能。Tahona AI 以国际视野连接美洲、欧洲和中国。",
    utility: "战略 · 技术 · 人工智能",
    regions: "美洲 · 欧洲 · 中国",
    languageLabel: "选择语言",
    nav: {
      capabilities: "专业能力",
      industries: "行业",
      cases: "案例",
      perspectives: "观点",
      about: "关于我们",
      contact: "与我们交流",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      home: "Tahona AI 首页",
      skip: "跳转至正文",
      mainLabel: "主导航",
      mobileLabel: "移动端导航",
      footerLabel: "页脚导航",
      menuEyebrow: "我们的专业能力",
      menuTitle: "从业务挑战\n到解决方案。",
      menuExplore: "了解专业能力",
    },
    hero: {
      eyebrow: "从规划到落地，始终与你并肩的技术伙伴。",
      line1: "让技术",
      line2: "推动",
      accent: "业务发展。",
      description:
        "结合战略、软件与人工智能，解决企业面临的挑战，发掘新的业务机会。",
      cta: "了解我们的专业能力",
      footnote: "亲近 · 敏捷 · 信任",
      about: "认识 Tahona",
      carouselLabel: "Tahona 风景轮播",
      previous: "上一张图片",
      next: "下一张图片",
      pause: "暂停轮播",
      play: "继续轮播",
      slideLabel: "查看图片",
    },
    slides: [
      {
        name: "光波",
        caption: "光的流动。",
        alt: "抽象光纤影像中的光波与折射。",
      },
      {
        name: "物流",
        caption: "港口、航线与连接。",
        alt: "商业港口中的起重机与集装箱。",
      },
      {
        name: "国际视野",
        caption: "中国上海。",
        alt: "中国上海的城市建筑与摩天大楼。",
      },
      {
        name: "自然",
        caption: "水、森林与宁静。",
        alt: "高山风景中的水面、森林与群山。",
      },
      {
        name: "科技",
        caption: "服务器之间，连接无处不在。",
        alt: "数据中心内排列整齐的服务器。",
      },
      {
        name: "建筑",
        caption: "玻璃、光线与城市。",
        alt: "采用玻璃幕墙的当代建筑。",
      },
      {
        name: "太空",
        caption: "从太空看地球。",
        alt: "来自美国国家航空航天局的地球太空影像。",
      },
      {
        name: "根源",
        caption: "地中海的橄榄树，我们的根源。",
        alt: "地中海风景中的一棵橄榄树，带有抖色纹理。",
      },
    ],
    valueStrip: [
      "与业务目标一致的战略",
      "融入日常运营的技术",
      "看得见、可评估的进展",
    ],
    capabilitiesSection: {
      eyebrow: "我们的专业能力",
      title: "全局视角。\n实际成效。",
      description:
        "梳理业务流程，明确需求，再构建方案。从初步评估到日常使用，陪伴每一步。",
      explore: "了解这项能力",
      talk: "探讨相关需求",
    },
    capabilities: [
      {
        number: "01",
        title: "人工智能",
        description:
          "将 AI 融入日常工作，以企业实际情况为基础，配合明确的评估标准与人工监督。",
        items: [
          "智能体与流程自动化",
          "知识管理与工作效率",
          "AI 解决方案与产品",
        ],
        icon: "intelligence",
      },
      {
        number: "02",
        title: "产品与软件",
        description: "设计并构建工具，连接企业中的人员、信息与流程。",
        items: ["定制软件开发", "业务平台与内部工具", "系统集成"],
        icon: "software",
      },
      {
        number: "03",
        title: "战略与架构",
        description:
          "审查业务流程，识别瓶颈，确定 AI 优化的优先事项。在现有系统基础上，制定清晰的实施路线图。",
        items: [
          "业务流程审查与瓶颈识别",
          "AI 优化机会与优先级",
          "战略、架构与实施路线图",
        ],
        icon: "strategy",
      },
    ],
    about: {
      eyebrow: "关于 TAHONA",
      title: "技术落地，\n从人的协作开始。",
      lead: "我们是你的技术伙伴，结合战略、产品、软件与 AI，构建每天都用得上的解决方案。",
      body: "先倾听，再提出方案。我们与你的团队共同工作，分享进展，解释每项决策。我们既重视交付的成果，也重视合作中建立的信任。",
      link: "了解我们的工作方式",
      principles: [
        { title: "紧密合作", description: "直接与构建解决方案的团队沟通。" },
        {
          title: "敏捷推进",
          description: "持续交付阶段性成果，及时测试、决策与调整。",
        },
        {
          title: "值得信赖",
          description: "明确项目范围，共同决策，保留人工审核。",
        },
      ],
    },
    industriesSection: {
      eyebrow: "行业",
      title: "理解行业。\n解决挑战。",
      description:
        "每个行业的流程、数据和职责都不同。理解这些差异，是我们的第一步。",
      selector: "选择行业",
      cta: "探讨你的业务挑战",
      otherLabel: "我们的能力也适用于以下领域",
      other: "保险 · 商业运营 · 医疗非临床业务 · 旅游 · 教育",
    },
    industries: [
      {
        name: "法律服务",
        title: "知识互通，决策可追溯。",
        description:
          "将案件资料、文档与专业知识整合到法律工作工具中，明确访问权限，并保留人工核验。",
        tags: ["案件资料", "文档管理", "人工核验"],
        symbol: "§",
      },
      {
        name: "物流",
        title: "让计划跟上运营节奏。",
        description:
          "连接订单、可用资源和业务约束，让团队在现有系统中审核与调整运营计划。",
        tags: ["路线规划", "运营约束", "系统集成"],
        symbol: "↗",
      },
      {
        name: "工业",
        title: "每个环节，都有可靠的信息。",
        description:
          "连接质量检查、记录、批次与文档，协同运营，让信息从头到尾都可追溯。",
        tags: ["质量管理", "批次与记录", "可追溯性"],
        symbol: "⊞",
      },
      {
        name: "专业服务",
        title: "把更多时间留给专业工作。",
        description:
          "梳理知识，连接团队工具。协调项目、文档与客户关系，保留各项工作所需的审核环节。",
        tags: ["知识管理", "工作协同", "内部工具"],
        symbol: "◎",
      },
    ],
    casesSection: {
      eyebrow: "实践经验",
      title: "真实挑战。\n系统化解决方案。",
      description: "通过匿名案例，了解业务知识、设计与技术如何协同解决问题。",
      open: "查看案例",
      read: "了解案例",
      anonymous: "匿名案例",
      challenge: "面临的挑战",
      solution: "解决方案",
      cta: "探讨类似的业务挑战",
      close: "关闭案例",
      diagramLabels: ["知识互通", "运营协同"],
    },
    cases: [
      {
        id: "caso-legal",
        sector: "法律服务",
        title: "法律团队的统一工作平台。",
        description: "在同一内部平台中整合案件资料、文档与人工核验。",
        challenge: "整理文档、跟进案件，同时保留案件背景和必要的审核环节。",
        solution:
          "通过内部平台整合案件资料、文档、草稿与进度跟踪，将人工核验纳入同一工作流程。",
        context: "知识管理与工作效率 · 定制软件 · 战略与架构",
      },
      {
        id: "caso-logistica",
        sector: "物流",
        title: "立足实际运营的规划。",
        description: "在同一工作流程中整合数据、约束条件与路线审核。",
        challenge:
          "利用分散的数据，在运营约束下制定计划，同时让团队能够审核和调整路线。",
        solution:
          "构建规划界面，将运营数据、约束条件和路线审核与现有工具连接起来。",
        context: "现状评估与需求定义 · 定制软件 · 系统集成",
      },
    ],
    methodSection: {
      eyebrow: "我们的工作方式",
      title: "从首次决策，\n到持续推进。",
      description:
        "从流程审查开始，明确优先事项，让进展清晰可见。每个阶段都有可以直接沟通的团队。",
    },
    approach: [
      {
        title: "业务流程审查",
        description:
          "了解企业的工作流程，梳理数据、等待环节、重复任务和卡点。识别瓶颈，优先确定 AI 能带来实际改进的环节。",
      },
      {
        title: "战略与规划",
        description: "选择起点，明确范围、优先事项，以及评估成果的方法。",
      },
      {
        title: "产品与架构",
        description: "设计团队所需的使用体验、集成方式与系统。",
      },
      {
        title: "开发与集成",
        description: "以短周期推进开发，让团队在实际工作中测试每个阶段的成果。",
      },
      {
        title: "运营与改进",
        description: "支持上线，观察实际使用情况，及时完成必要的调整。",
      },
    ],
    international: {
      eyebrow: "国际视野",
      title: "美洲、欧洲与中国。\n共同的愿景。",
      description:
        "面向美洲、欧洲与中国，尊重不同的语言、工作方式和本地环境。我们以倾听和协作为起点，为每一家企业构建适合自身需求的技术。",
      cta: "聊聊你的下一个项目",
      america: "美洲",
      europe: "欧洲",
      china: "中国",
    },
    perspectivesSection: {
      eyebrow: "观点",
      title: "厘清问题，\n做出更好的决策。",
      description:
        "我们对 AI、技术与运营的观察，以及开始构建之前值得厘清的问题。",
      read: "阅读观点",
      close: "关闭观点",
      threePoints: "三个起点",
      cta: "与 Tahona 交流",
      artLabel: "TAHONA / 观点",
      dialogEyebrow: "TAHONA 观点",
    },
    perspectives: [
      {
        category: "人工智能",
        title: "AI 的价值，始于对企业背景的理解。",
        id: "contexto",
        visual: "context",
        text: "要真正发挥作用，AI 需要最新的信息、适当的权限，以及符合企业工作方式的规则。在自动化之前，应先确认知识来源、维护人员，以及哪些决策需要审核。随后，用实际任务测试解决方案，判断结果是否对团队有用。",
        points: [
          "明确资料来源及其负责人。",
          "设定访问权限与人工审核环节。",
          "通过具体业务任务评估质量。",
        ],
      },
      {
        category: "技术战略",
        title: "从初次测试，到日常使用。",
        id: "estrategia",
        visual: "architecture",
        text: "初次测试应该解决一个具体问题。要将其融入日常工作，还需要明确谁会使用、如何接入现有流程，以及期望获得什么结果。实用的路线图，应从一开始就考虑数据、系统集成，以及负责运营解决方案的人员。",
        points: [
          "根据影响、可行性和团队需求确定优先级。",
          "在开始构建前，明确成功标准。",
          "从一开始就规划集成与运营。",
        ],
      },
      {
        category: "产品与运营",
        title: "融入新技术，保持业务连续性。",
        id: "integracion",
        visual: "integration",
        text: "现有系统中积累的信息与工作方式具有价值。在此基础上构建，可以逐步引入改进。我们先了解信息流与依赖关系，再定义连接方式，检查异常情况。当系统集成让日常工作更轻松，团队也能自主使用和维护时，它才真正发挥作用。",
        points: [
          "梳理现有工具与信息流。",
          "引入范围明确的改进，并与团队共同测试。",
          "记录流程，准备处理异常情况。",
        ],
      },
    ],
    contact: {
      eyebrow: "一起迈出下一步",
      title: "重要的决策，\n始于",
      accent: "一次交流。",
      description:
        "告诉我们，你希望改进、连接或构建什么。我们先了解你的企业，以及你希望实现的目标。",
      formTitle: "聊聊你的项目。",
      name: "姓名",
      namePlaceholder: "你的姓名",
      company: "企业",
      companyPlaceholder: "企业名称",
      email: "工作邮箱",
      emailPlaceholder: "name@company.com",
      message: "下一步需要解决什么？",
      messagePlaceholder: "请描述需要解决的问题及相关背景",
      send: "发送消息",
      sending: "正在发送…",
      success: "感谢你的留言，我们会与你联系。",
      error: "消息发送失败，请重试或发送邮件至 hola@tahona.ai。",
    },
    footer: {
      tagline: "战略。技术。\n并肩合作，共同前行。",
      top: "返回顶部",
      copyright: "Tahona AI. 保留所有权利。",
      location: "西班牙，马德里",
    },
  },
} satisfies Record<Locale, CorporateCopy>;
