"use client";

import { useEffect, useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import { CaretDownIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { CONTACT_HREF, PAGE_NAV_ITEMS } from "@/components/sections/navbar-data";
import { MobileNavMenu } from "@/components/sections/navbar/MobileNavMenu";
import { NavLink } from "@/components/sections/navbar/NavLink";
import { ServicesMegaMenu } from "@/components/sections/navbar/ServicesMegaMenu";

const SERVICES_SECTION_HREF = "#soluciones";

function scrollToHash(href: string) {
  if (!href.startsWith("#") || href.length <= 1) {
    return;
  }

  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth" });
}

function isPlaceholderHref(href: string) {
  return href === "#";
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-50% 0px -50% 0px",
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavSelect = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesMenuOpen(false);
    scrollToHash(href);
  };

  const handlePlaceholderLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (isPlaceholderHref(href)) {
      event.preventDefault();
      return;
    }

    if (href.startsWith("#")) {
      event.preventDefault();
      handleNavSelect(href);
    }
  };

  const handleServicesBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && event.currentTarget.contains(nextTarget)) {
      return;
    }

    setIsServicesMenuOpen(false);
  };

  const servicesIsActive =
    activeSection === SERVICES_SECTION_HREF || isServicesMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/94 pt-[env(safe-area-inset-top)] backdrop-blur-xl transition-shadow duration-200",
          isScrolled && "shadow-[0_18px_40px_-30px_rgba(31,31,31,0.55)]"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <a
              className="font-heading text-xl font-bold text-gray-900"
              href="#hero"
              onClick={(event) => {
                event.preventDefault();
                handleNavSelect("#hero");
              }}
            >
              Tahona
            </a>

            <div className="hidden items-center gap-7 md:flex">
              <NavLink
                isActive={activeSection === PAGE_NAV_ITEMS[0].activeHref}
                item={PAGE_NAV_ITEMS[0]}
                onSelect={handleNavSelect}
              />

              <div
                onBlur={handleServicesBlur}
                onMouseEnter={() => setIsServicesMenuOpen(true)}
                onMouseLeave={() => setIsServicesMenuOpen(false)}
              >
                <button
                  aria-controls="services-mega-menu"
                  aria-expanded={isServicesMenuOpen}
                  className={cn(
                    "inline-flex items-center gap-1.5 border-b-2 border-transparent py-1 text-sm font-medium text-gray-600 transition-colors duration-200 hover:border-brand-700 hover:text-brand-800",
                    servicesIsActive && "border-brand-700 text-brand-800"
                  )}
                  onClick={() => setIsServicesMenuOpen((isOpen) => !isOpen)}
                  onFocus={() => setIsServicesMenuOpen(true)}
                  type="button"
                >
                  <span>Servicios</span>
                  <CaretDownIcon
                    aria-hidden="true"
                    className={cn(
                      "size-3 transition-transform duration-200",
                      isServicesMenuOpen && "rotate-180"
                    )}
                  />
                </button>

                <ServicesMegaMenu
                  isOpen={isServicesMenuOpen}
                  onLinkClick={handlePlaceholderLinkClick}
                />
              </div>

              {PAGE_NAV_ITEMS.slice(1).map((item) => (
                <NavLink
                  isActive={activeSection === item.activeHref}
                  item={item}
                  key={item.href}
                  onSelect={handleNavSelect}
                />
              ))}

              <a
                className="inline-flex min-h-10 min-w-36 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700"
                href={CONTACT_HREF}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavSelect(CONTACT_HREF);
                }}
              >
                Contacto
              </a>
            </div>

            <button
              aria-expanded={isMobileMenuOpen}
              aria-label="Abrir menú"
              className="rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 md:hidden"
              onClick={() => {
                setIsMobileMenuOpen((isOpen) => !isOpen);
                setIsServicesMenuOpen(false);
              }}
              type="button"
            >
              {isMobileMenuOpen ? (
                <XIcon className="size-6" />
              ) : (
                <ListIcon className="size-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <MobileNavMenu
        activeSection={activeSection}
        isOpen={isMobileMenuOpen}
        isServicesOpen={isMobileServicesOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavSelect={handleNavSelect}
        onServiceLinkClick={handlePlaceholderLinkClick}
        onServicesToggle={() => setIsMobileServicesOpen((isOpen) => !isOpen)}
      />
    </>
  );
}
