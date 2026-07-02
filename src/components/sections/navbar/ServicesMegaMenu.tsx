import { ArrowRightIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import {
  SERVICE_MENU_COLUMNS,
  SERVICES_OVERVIEW_HREF,
} from "@/components/sections/navbar-data";
import { ServiceColumn } from "@/components/sections/navbar/ServiceColumn";
import type { ServiceMenuLinkHandler } from "@/components/sections/navbar/types";

export function ServicesMegaMenu({
  isOpen,
  onLinkClick,
}: {
  readonly isOpen: boolean;
  readonly onLinkClick: ServiceMenuLinkHandler;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="fixed left-1/2 top-[calc(3.75rem+env(safe-area-inset-top))] z-40 hidden w-[min(calc(100vw-2rem),64rem)] -translate-x-1/2 md:block"
          exit={{ opacity: 0, y: -8 }}
          id="services-mega-menu"
          initial={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
        >
          <div className="rounded-[1.5rem] border border-gray-200 bg-white px-8 py-8 shadow-[0_28px_72px_-52px_rgba(31,31,31,0.58)]">
            <div className="grid grid-cols-3 gap-8">
              {SERVICE_MENU_COLUMNS.map((column) => (
                <ServiceColumn
                  column={column}
                  key={column.title}
                  onLinkClick={onLinkClick}
                />
              ))}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-5 text-center">
              <a
                className="inline-flex items-center gap-3 text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-900"
                href={SERVICES_OVERVIEW_HREF}
                onClick={(event) => onLinkClick(event, SERVICES_OVERVIEW_HREF)}
              >
                <span>Ver todos los servicios</span>
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
