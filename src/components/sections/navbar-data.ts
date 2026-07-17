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

const CONTACT_HREF = "#contacto";

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
