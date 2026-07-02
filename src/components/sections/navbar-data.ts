export type PageNavItem = {
  readonly label: string;
  readonly href: string;
  readonly activeHref: string;
};

export type ServiceMenuItem = {
  readonly label: string;
  readonly description: string;
  readonly href: string;
};

export type ServiceMenuColumn = {
  readonly title: string;
  readonly items: readonly ServiceMenuItem[];
};

export const PAGE_NAV_ITEMS = [
  { label: "Inicio", href: "/", activeHref: "#hero" },
  { label: "Industrias", href: "/industries", activeHref: "#industrias" },
  { label: "Casos", href: "/#trabajo", activeHref: "#trabajo" },
] as const satisfies readonly PageNavItem[];

export const SERVICE_MENU_COLUMNS = [
  {
    title: "Fundamentos",
    items: [
      {
        label: "Consultoría",
        description:
          "Auditoría operativa y diagnóstico de procesos, datos y herramientas.",
        href: "/services#consultoria-auditoria-operativa",
      },
      {
        label: "Estrategia",
        description: "Hoja de ruta técnica y operativa antes de construir.",
        href: "/services#estrategia-tecnica-operativa",
      },
      {
        label: "Bases de conocimiento",
        description:
          "Conocimiento interno con fuentes, permisos y revisión humana.",
        href: "/services#bases-conocimiento-enterprise",
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
        href: "/services#optimizacion-procesos",
      },
      {
        label: "Agentes de IA",
        description:
          "Tareas acotadas con límites, supervisión y trazabilidad.",
        href: "/services#agentes-ia",
      },
      {
        label: "Procesamiento documental",
        description: "Extracción, validación y clasificación de documentos.",
        href: "/services#procesamiento-documental",
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
        href: "/services#herramientas-medida",
      },
      {
        label: "Herramientas internas",
        description: "Backoffice, paneles y workflows para el día a día.",
        href: "/services#herramientas-internas",
      },
      {
        label: "Integraciones / plataformas",
        description: "Drive, CRM, ERP, hojas de cálculo y APIs conectados.",
        href: "/services#integraciones-plataformas-operativas",
      },
    ],
  },
] as const satisfies readonly ServiceMenuColumn[];

export const SERVICES_OVERVIEW_HREF = "/services";
export const CONTACT_HREF = "#contacto";
