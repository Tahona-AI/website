import { CaretDownIcon, XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  getContactHref,
  getPageNavItems,
  getServiceMenuColumns,
} from "@/components/sections/navbar-data";
import { getContent } from "@/i18n/content";
import { getRouteKeyFromPath } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { LanguageSelector } from "@/components/sections/navbar/LanguageSelector";
import { NavLink } from "@/components/sections/navbar/NavLink";
import { ServiceColumn } from "@/components/sections/navbar/ServiceColumn";
import type { ServiceMenuLinkHandler } from "@/components/sections/navbar/types";
import { primaryCtaBaseClass } from "@/components/ui/cta-styles";

export function MobileNavMenu({
  currentPath,
  isOpen,
  isServicesOpen,
  locale,
  onClose,
  onExitComplete,
  onNavSelect,
  onServiceLinkClick,
  onServicesToggle,
}: {
  readonly currentPath: string;
  readonly isOpen: boolean;
  readonly isServicesOpen: boolean;
  readonly locale: Locale;
  readonly onClose: () => void;
  readonly onExitComplete: () => void;
  readonly onNavSelect: (href: string) => void;
  readonly onServiceLinkClick: ServiceMenuLinkHandler;
  readonly onServicesToggle: () => void;
}) {
  const content = getContent(locale);
  const currentRouteKey = getRouteKeyFromPath(currentPath);
  const contactHref = getContactHref();
  const pageNavItems = getPageNavItems(locale);
  const serviceMenuColumns = getServiceMenuColumns(locale);

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isOpen && (
        <>
          <motion.button
            aria-label={content.navigation.closeMenuLabel}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-black/20 lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.18 }}
            type="button"
          />
          <motion.div
            animate={{ x: 0 }}
            className="fixed inset-y-0 right-0 z-50 w-80 max-w-[86vw] overflow-y-auto bg-white pt-[env(safe-area-inset-top)] shadow-xl lg:hidden"
            data-mobile-nav-panel
            exit={{ x: "100%" }}
            initial={{ x: "100%" }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 md:h-20">
              <span className="font-heading text-lg font-bold text-gray-900">
                {content.navigation.menuTitle}
              </span>
              <button
                aria-label={content.navigation.closeMenuLabel}
                className="rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
                onClick={onClose}
                type="button"
              >
                <XIcon className="size-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4">
              <NavLink
                isActive={currentRouteKey === "home"}
                item={pageNavItems[0]}
                onSelect={onNavSelect}
                variant="mobile"
              />

              <button
                aria-expanded={isServicesOpen}
                className={cn(
                  "flex items-center justify-between border-b-2 border-transparent py-3 text-left text-lg font-medium text-gray-700 transition-colors duration-200 hover:text-brand-700",
                  (currentRouteKey === "services" || isServicesOpen) &&
                    "border-brand-700 text-brand-800"
                )}
                onClick={onServicesToggle}
                type="button"
              >
                <span>{content.navigation.servicesLabel}</span>
                <CaretDownIcon
                  aria-hidden="true"
                  className={cn(
                    "size-4 transition-transform duration-200",
                    isServicesOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isServicesOpen && (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 border-b border-gray-200 px-1 py-5"
                    exit={{ opacity: 0, y: -4 }}
                    initial={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                  >
                    {serviceMenuColumns.map((column) => (
                      <ServiceColumn
                        column={column}
                        key={column.title}
                        onLinkClick={onServiceLinkClick}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {pageNavItems.slice(1).map((item) => (
                <NavLink
                  isActive={item.routeKey === currentRouteKey}
                  item={item}
                  key={item.href}
                  onSelect={onNavSelect}
                  variant="mobile"
                />
              ))}

              <div className="mt-4 border-t border-gray-200 pt-4">
                <LanguageSelector
                  currentPath={currentPath}
                  label={content.navigation.languageLabel}
                  onNavigate={onServiceLinkClick}
                  variant="mobile"
                />
              </div>

              <a
                className={cn(
                  primaryCtaBaseClass,
                  "mt-4 min-h-12 w-full justify-center rounded-full px-6 text-base font-semibold"
                )}
                href={contactHref}
                onClick={(event) => {
                  event.preventDefault();
                  onNavSelect(contactHref);
                }}
              >
                {content.navigation.contactLabel}
              </a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
