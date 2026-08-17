"use client";

import { useEffect, useRef, useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import { CaretDownIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { navigate } from "astro:transitions/client";
import { cn } from "@/lib/utils";
import {
  getContactHref,
  getPageNavItems,
} from "@/components/sections/navbar-data";
import { getContent } from "@/i18n/content";
import {
  DEFAULT_LOCALE,
  getLocalizedPath,
  getRouteKeyFromPath,
} from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { LanguageSelector } from "@/components/sections/navbar/LanguageSelector";
import { MobileNavMenu } from "@/components/sections/navbar/MobileNavMenu";
import { NavLink } from "@/components/sections/navbar/NavLink";
import { ServicesMegaMenu } from "@/components/sections/navbar/ServicesMegaMenu";
import { primaryCtaBaseClass } from "@/components/ui/cta-styles";

const HOME_PATH = "/";

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

function isUnmodifiedPrimaryClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

export function Navbar({
  initialPath = HOME_PATH,
  locale = DEFAULT_LOCALE,
}: {
  readonly initialPath?: string;
  readonly locale?: Locale;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(initialPath || HOME_PATH);
  const pendingNavigationRef = useRef<string | null>(null);
  const content = getContent(locale);
  const contactHref = getContactHref();
  const homeHref = getLocalizedPath(locale, "home");
  const servicesHref = getLocalizedPath(locale, "services");
  const pageNavItems = getPageNavItems(locale);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handlePathChange = () => {
      setCurrentPath(window.location.pathname || HOME_PATH);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handlePathChange);
    handleScroll();
    handlePathChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  const handleNavSelect = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesMenuOpen(false);
    scrollToHash(href);
  };

  const handleServicesBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && event.currentTarget.contains(nextTarget)) {
      return;
    }

    setIsServicesMenuOpen(false);
  };

  const completePendingNavigation = () => {
    const destination = pendingNavigationRef.current;
    if (!destination) {
      return;
    }

    pendingNavigationRef.current = null;
    const nextUrl = new URL(destination, window.location.href);

    if (
      nextUrl.origin === window.location.origin &&
      nextUrl.pathname === window.location.pathname
    ) {
      const nextRelativeUrl = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
      const currentRelativeUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

      if (nextRelativeUrl !== currentRelativeUrl) {
        window.history.pushState({}, "", nextRelativeUrl);
      }

      scrollToHash(nextUrl.hash || "#hero");
      return;
    }

    navigate(destination);
  };

  const queueNavigation = (href: string) => {
    pendingNavigationRef.current = href;
  };

  const handleServicesClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isUnmodifiedPrimaryClick(event)) {
      return;
    }

    event.preventDefault();
    queueNavigation(servicesHref);
    setIsServicesMenuOpen(false);

    if (!isServicesMenuOpen) {
      window.requestAnimationFrame(completePendingNavigation);
    }
  };

  const handleDesktopServicesMenuLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (isPlaceholderHref(href)) {
      event.preventDefault();
      return;
    }

    if (!isUnmodifiedPrimaryClick(event)) {
      return;
    }

    event.preventDefault();
    queueNavigation(href);
    setIsServicesMenuOpen(false);
  };

  const handleMobileNavSelect = (href: string) => {
    if (isPlaceholderHref(href)) {
      return;
    }

    queueNavigation(href);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);

    if (!isMobileMenuOpen) {
      window.requestAnimationFrame(completePendingNavigation);
    }
  };

  const handleMobileLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (isPlaceholderHref(href)) {
      event.preventDefault();
      return;
    }

    if (!isUnmodifiedPrimaryClick(event)) {
      return;
    }

    event.preventDefault();
    handleMobileNavSelect(href);
  };

  const currentRouteKey = getRouteKeyFromPath(currentPath);
  const isHomePath = currentRouteKey === "home";
  const servicesIsActive = currentRouteKey === "services" || isServicesMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white pt-[env(safe-area-inset-top)] transition-shadow duration-300",
          isScrolled && "shadow-[0_18px_40px_-30px_rgba(31,31,31,0.2)]"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between md:h-20">
            <div className="flex items-center gap-3">
              <a
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
                href={homeHref}
                onClick={(event) => {
                  if (!isHomePath) {
                    return;
                  }

                  event.preventDefault();
                  handleNavSelect("#hero");
                }}
              >
                <img
                  alt="Tahona"
                  className="size-6 md:size-7"
                  decoding="async"
                  height={40}
                  src="/images/logos/tahona-mark-green.svg"
                  width={40}
                />
                <span className="font-heading text-xl font-bold text-gray-900">
                  Tahona
                </span>
              </a>

              <div className="hidden md:block">
                <LanguageSelector
                  currentPath={currentPath}
                  label={content.navigation.languageLabel}
                />
              </div>
            </div>

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
              <NavLink
                isActive={isHomePath}
                item={pageNavItems[0]}
                onSelect={handleNavSelect}
              />

              <div
                onBlur={handleServicesBlur}
                onMouseEnter={() => setIsServicesMenuOpen(true)}
                onMouseLeave={() => setIsServicesMenuOpen(false)}
              >
                <a
                  aria-controls="services-mega-menu"
                  aria-expanded={isServicesMenuOpen}
                  className={cn(
                    "inline-flex items-center gap-1.5 border-b-2 border-transparent py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-brand-700 hover:text-brand-800",
                    servicesIsActive && "border-brand-700 text-brand-800"
                  )}
                  href={servicesHref}
                  onClick={handleServicesClick}
                  onFocus={() => setIsServicesMenuOpen(true)}
                >
                  <span>{content.navigation.servicesLabel}</span>
                  <CaretDownIcon
                    aria-hidden="true"
                    className={cn(
                      "size-3 transition-transform duration-200",
                      isServicesMenuOpen && "rotate-180"
                    )}
                  />
                </a>

                <ServicesMegaMenu
                  isOpen={isServicesMenuOpen}
                  locale={locale}
                  onExitComplete={completePendingNavigation}
                  onLinkClick={handleDesktopServicesMenuLinkClick}
                />
              </div>

              {pageNavItems.slice(1).map((item) => (
                <NavLink
                  isActive={item.routeKey === currentRouteKey}
                  item={item}
                  key={item.href}
                  onSelect={handleNavSelect}
                />
              ))}
            </div>

            <a
              className={cn(
                primaryCtaBaseClass,
                "hidden min-h-10 min-w-36 justify-center rounded-full px-6 text-sm font-semibold md:inline-flex"
              )}
              href={contactHref}
              onClick={(event) => {
                event.preventDefault();
                handleNavSelect(contactHref);
              }}
            >
              {content.navigation.contactLabel}
            </a>

            <button
              aria-expanded={isMobileMenuOpen}
              aria-label={content.navigation.openMenuLabel}
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
        currentPath={currentPath}
        isOpen={isMobileMenuOpen}
        isServicesOpen={isMobileServicesOpen}
        locale={locale}
        onClose={() => setIsMobileMenuOpen(false)}
        onExitComplete={completePendingNavigation}
        onNavSelect={handleMobileNavSelect}
        onServiceLinkClick={handleMobileLinkClick}
        onServicesToggle={() => setIsMobileServicesOpen((isOpen) => !isOpen)}
      />
    </>
  );
}
