export const DEFAULT_LOCALE = "es";

export const LOCALES = ["es", "en", "pl"] as const;

export type Locale = (typeof LOCALES)[number];

export const ROUTE_PATHS = {
  home: "/",
  services: "/services/",
  industries: "/industries/",
  cases: "/cases/",
} as const;

export type RouteKey = keyof typeof ROUTE_PATHS;

type LocaleDetails = {
  readonly hreflang: string;
  readonly htmlLang: string;
  readonly label: string;
  readonly name: string;
  readonly ogLocale: string;
  readonly prefix: string;
  readonly schemaLanguage: string;
};

export const LOCALE_DETAILS = {
  es: {
    hreflang: "es",
    htmlLang: "es",
    label: "ES",
    name: "Español",
    ogLocale: "es_ES",
    prefix: "",
    schemaLanguage: "es-ES",
  },
  en: {
    hreflang: "en",
    htmlLang: "en",
    label: "EN",
    name: "English",
    ogLocale: "en_US",
    prefix: "/en",
    schemaLanguage: "en-US",
  },
  pl: {
    hreflang: "pl",
    htmlLang: "pl",
    label: "PL",
    name: "Polski",
    ogLocale: "pl_PL",
    prefix: "/pl",
    schemaLanguage: "pl-PL",
  },
} as const satisfies Record<Locale, LocaleDetails>;

export const NON_DEFAULT_LOCALES = ["en", "pl"] as const;

const ROUTE_ENTRIES = [
  ["home", ROUTE_PATHS.home],
  ["services", ROUTE_PATHS.services],
  ["industries", ROUTE_PATHS.industries],
  ["cases", ROUTE_PATHS.cases],
] as const satisfies readonly (readonly [
  RouteKey,
  (typeof ROUTE_PATHS)[RouteKey],
])[];

export function isLocale(value: string | undefined): value is Locale {
  return value === "es" || value === "en" || value === "pl";
}

export function normalizePath(pathname: string): string {
  const pathOnly = pathname.split("?")[0]?.split("#")[0] ?? "/";

  if (pathOnly === "/") {
    return "/";
  }

  return `${pathOnly.replace(/\/$/, "")}/`;
}

export function getLocaleFromPath(pathname: string): Locale {
  const normalized = normalizePath(pathname);
  const firstSegment = normalized.split("/").filter(Boolean)[0];

  if (firstSegment === "en" || firstSegment === "pl") {
    return firstSegment;
  }

  return DEFAULT_LOCALE;
}

export function removeLocalePrefix(pathname: string): string {
  const normalized = normalizePath(pathname);
  const locale = getLocaleFromPath(normalized);

  if (locale === DEFAULT_LOCALE) {
    return normalized;
  }

  const withoutPrefix = normalized.replace(`/${locale}`, "");
  return withoutPrefix === "" ? "/" : normalizePath(withoutPrefix);
}

export function getRouteKeyFromPath(pathname: string): RouteKey {
  const routePath = removeLocalePrefix(pathname);
  const entry = ROUTE_ENTRIES.find(([, path]) => path === routePath);

  return entry?.[0] ?? "home";
}

export function getLocalizedPath(locale: Locale, routeKey: RouteKey): string {
  const routePath = ROUTE_PATHS[routeKey];

  if (locale === DEFAULT_LOCALE) {
    return routePath;
  }

  return `${LOCALE_DETAILS[locale].prefix}${routePath}`;
}

export function getLocalizedHashPath(
  locale: Locale,
  routeKey: RouteKey,
  hash: string
): string {
  return `${getLocalizedPath(locale, routeKey)}${hash}`;
}

export function getAbsoluteUrl(locale: Locale, routeKey: RouteKey): string {
  return new URL(getLocalizedPath(locale, routeKey), "https://tahona.ai").href;
}

export function getLanguageAlternates(routeKey: RouteKey) {
  return LOCALES.map((locale) => ({
    href: getAbsoluteUrl(locale, routeKey),
    hreflang: LOCALE_DETAILS[locale].hreflang,
    locale,
    pathname: getLocalizedPath(locale, routeKey),
  }));
}
