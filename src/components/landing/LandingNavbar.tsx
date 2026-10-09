"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { primaryCtaBaseClass } from "@/components/ui/cta-styles";
import { LANDING_SECTIONS, navigation, sectionHref } from "@/components/landing/content";
import type { SectionId } from "@/components/landing/content";

/** Tracks which nav section is currently under the header (scroll-spy). */
function useActiveSection(ids: readonly SectionId[]): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const visible = new Map<SectionId, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = ids.find((candidate) => candidate === entry.target.id);
          if (id === undefined) continue;
          if (entry.isIntersecting) visible.set(id, entry.intersectionRatio);
          else visible.delete(id);
        }
        const next = ids.find((id) => visible.has(id)) ?? null;
        setActive(next);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.01] }
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const NAV_IDS: readonly SectionId[] = navigation.items.map((item) => item.section);

export function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow,border-color] duration-300",
        // Transparent over the full-bleed hero, solid once the page scrolls.
        isScrolled || isMenuOpen
          ? "border-gray-200 bg-white/92 shadow-[0_18px_40px_-30px_rgba(31,31,31,0.2)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <nav aria-label="Navegación principal" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between md:h-20">
          <a
            aria-label={navigation.homeLabel}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            href={sectionHref(LANDING_SECTIONS.hero)}
          >
            <img
              alt=""
              className="size-6 md:size-7"
              decoding="async"
              height={40}
              src="/images/logos/tahona-mark-green.svg"
              width={40}
            />
            <span className="font-heading text-xl font-bold text-gray-900">Tahona</span>
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {navigation.items.map((item) => (
              <li key={item.section}>
                <a
                  aria-current={active === item.section ? "location" : undefined}
                  className={cn(
                    "border-b-2 border-transparent py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-brand-700 hover:text-brand-800",
                    active === item.section && "border-brand-700 text-brand-800"
                  )}
                  href={sectionHref(item.section)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className={cn(
              primaryCtaBaseClass,
              "hidden min-h-10 min-w-32 justify-center rounded-full px-6 text-sm font-semibold lg:inline-flex"
            )}
            href={sectionHref(LANDING_SECTIONS.contact)}
          >
            {navigation.contactLabel}
          </a>

          <button
            aria-controls="landing-mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? navigation.closeMenuLabel : navigation.openMenuLabel}
            className="rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <XIcon className="size-6" /> : <ListIcon className="size-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 shadow-[0_24px_40px_-30px_rgba(31,31,31,0.3)] sm:px-6 lg:hidden"
            exit={{ opacity: 0, y: -8 }}
            id="landing-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col">
              {navigation.items.map((item) => (
                <li key={item.section}>
                  <a
                    className="block border-b border-gray-100 py-4 font-heading text-lg font-semibold text-gray-900"
                    href={sectionHref(item.section)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className={cn(primaryCtaBaseClass, "mt-6 min-h-12 w-full justify-center rounded-full text-sm font-semibold")}
              href={sectionHref(LANDING_SECTIONS.contact)}
              onClick={() => setIsMenuOpen(false)}
            >
              {navigation.contactLabel}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
