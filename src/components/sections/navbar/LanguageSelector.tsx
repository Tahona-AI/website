import { cn } from "@/lib/utils";
import {
  getLanguageAlternates,
  getLocaleFromPath,
  getRouteKeyFromPath,
  LOCALE_DETAILS,
} from "@/i18n/routing";

type LanguageSelectorVariant = "desktop" | "mobile";

const WRAPPER_CLASSES = {
  desktop:
    "inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white/72 p-1 shadow-sm",
  mobile:
    "grid grid-cols-3 gap-1 rounded-2xl border border-gray-200 bg-white/76 p-1",
} as const satisfies Record<LanguageSelectorVariant, string>;

const LINK_CLASSES = {
  desktop:
    "inline-flex h-8 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold transition-colors duration-200",
  mobile:
    "inline-flex h-10 items-center justify-center rounded-xl px-3 text-sm font-semibold transition-colors duration-200",
} as const satisfies Record<LanguageSelectorVariant, string>;

export function LanguageSelector({
  currentPath,
  label,
  variant = "desktop",
}: {
  readonly currentPath: string;
  readonly label: string;
  readonly variant?: LanguageSelectorVariant;
}) {
  const currentLocale = getLocaleFromPath(currentPath);
  const routeKey = getRouteKeyFromPath(currentPath);
  const alternates = getLanguageAlternates(routeKey);

  return (
    <div aria-label={label} className={WRAPPER_CLASSES[variant]} role="group">
      {alternates.map((alternate) => {
        const isActive = alternate.locale === currentLocale;
        const details = LOCALE_DETAILS[alternate.locale];

        return (
          <a
            aria-current={isActive ? "page" : undefined}
            aria-label={`${label}: ${details.name}`}
            className={cn(
              LINK_CLASSES[variant],
              isActive
                ? "bg-brand-700 text-white shadow-[0_10px_24px_-18px_rgba(27,69,48,0.9)]"
                : "text-gray-600 hover:bg-brand-50 hover:text-brand-800"
            )}
            href={alternate.pathname}
            key={alternate.locale}
          >
            {details.label}
          </a>
        );
      })}
    </div>
  );
}
