export type PageNavItem = {
  readonly label: string;
  readonly href: string;
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
  { label: "Inicio", href: "#hero" },
  { label: "Industrias", href: "#industrias" },
  { label: "Casos", href: "#trabajo" },
] as const satisfies readonly PageNavItem[];

export const SERVICE_MENU_COLUMNS = [
  {
    title: "Fundaciones",
    items: [
      {
        label: "Consultoría",
        description:
          "Auditoría operativa y diagnóstico de procesos, datos y herramientas.",
        href: "#",
      },
      {
        label: "Estrategia",
        description: "Hoja de ruta técnica y operativa antes de construir.",
        href: "#",
      },
      {
        label: "Bases de conocimiento",
        description:
          "Conocimiento interno con fuentes, permisos y revisión humana.",
        href: "#",
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
        href: "#",
      },
      {
        label: "Agentes de IA",
        description:
          "Tareas acotadas con límites, supervisión y trazabilidad.",
        href: "#",
      },
      {
        label: "Procesamiento documental",
        description: "Extracción, validación y clasificación de documentos.",
        href: "#",
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
        href: "#",
      },
      {
        label: "Herramientas internas",
        description: "Backoffice, paneles y workflows para el día a día.",
        href: "#",
      },
      {
        label: "Integraciones / plataformas",
        description: "Drive, CRM, ERP, hojas de cálculo y APIs conectados.",
        href: "#",
      },
    ],
  },
] as const satisfies readonly ServiceMenuColumn[];

export const SERVICES_OVERVIEW_HREF = "#";
export const CONTACT_HREF = "#contacto";
