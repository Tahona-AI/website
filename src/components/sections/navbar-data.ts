import { getContent } from "@/i18n/content";
import {
  DEFAULT_LOCALE,
  getLocalizedHashPath,
  getLocalizedPath,
} from "@/i18n/routing";
import type { Locale, RouteKey } from "@/i18n/routing";

export type PageNavItem = {
  readonly activeHref: string;
  readonly href: string;
  readonly label: string;
  readonly routeKey: RouteKey;
};

export type ServiceMenuItem = {
  readonly description: string;
  readonly href: string;
  readonly label: string;
};

export type ServiceMenuColumn = {
  readonly title: string;
  readonly items: readonly ServiceMenuItem[];
};

export const PAGE_NAV_ITEMS = [
  { label: "Inicio", href: "/", activeHref: "#hero", routeKey: "home" },
  {
    label: "Industrias",
    href: "/industries/",
    activeHref: "#industrias",
    routeKey: "industries",
  },
  { label: "Casos", href: "/cases/", activeHref: "#trabajo", routeKey: "cases" },
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

export function getPageNavItems(locale: Locale): readonly PageNavItem[] {
  return getContent(locale).navigation.pageItems.map((item) => ({
    activeHref: item.activeHref,
    href: getLocalizedPath(locale, item.routeKey),
    label: item.label,
    routeKey: item.routeKey,
  }));
}

export function getServiceMenuColumns(
  locale: Locale
): readonly ServiceMenuColumn[] {
  return getContent(locale).navigation.serviceColumns.map((column) => ({
    title: column.title,
    items: column.items.map((item) => ({
      description: item.description,
      href: getLocalizedHashPath(locale, "services", item.href),
      label: item.label,
    })),
  }));
}

export function getServicesOverviewHref(locale: Locale): string {
  return getLocalizedPath(locale, "services");
}

export function getContactHref(): string {
  return CONTACT_HREF;
}

export function getDefaultPageNavItems(): readonly PageNavItem[] {
  return getPageNavItems(DEFAULT_LOCALE);
}
