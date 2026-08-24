import { useEffect, useId, useRef, useState } from "react";
import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from "react";
import { CaretDownIcon, CheckIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { navigate } from "astro:transitions/client";
import { cn } from "@/lib/utils";
import {
  getLanguageAlternates,
  getLocaleFromPath,
  getRouteKeyFromPath,
  LOCALE_DETAILS,
} from "@/i18n/routing";

type LanguageSelectorVariant = "desktop" | "mobile";

const WRAPPER_CLASSES = {
  desktop: "relative",
  mobile: "relative w-full",
} as const satisfies Record<LanguageSelectorVariant, string>;

const TRIGGER_CLASSES = {
  desktop:
    "inline-flex h-10 min-w-[4.25rem] cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-700 shadow-sm transition-[border-color,background-color,color,box-shadow] duration-200 hover:border-brand-200 hover:bg-brand-50/70 hover:text-brand-800",
  mobile:
    "flex h-11 w-full cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white px-3.5 text-sm font-medium text-gray-700 shadow-sm transition-[border-color,background-color,color] duration-200 hover:border-brand-200 hover:bg-brand-50/60 hover:text-brand-800",
} as const satisfies Record<LanguageSelectorVariant, string>;

const MENU_CLASSES = {
  desktop:
    "absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 origin-top-right overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-1.5 shadow-[0_24px_60px_-38px_rgba(31,31,31,0.55)]",
  mobile:
    "absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 origin-top overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-1.5 shadow-[0_24px_60px_-38px_rgba(31,31,31,0.55)]",
} as const satisfies Record<LanguageSelectorVariant, string>;

export function LanguageSelector({
  currentPath,
  label,
  onNavigate,
  variant = "desktop",
}: {
  readonly currentPath: string;
  readonly label: string;
  readonly onNavigate?: (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
  readonly variant?: LanguageSelectorVariant;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pendingNavigationRef = useRef<string | null>(null);
  const currentLocale = getLocaleFromPath(currentPath);
  const routeKey = getRouteKeyFromPath(currentPath);
  const alternates = getLanguageAlternates(routeKey);
  const currentDetails = LOCALE_DETAILS[currentLocale];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeWhenOutside = (event: PointerEvent | FocusEvent) => {
      const target = event.target;

      if (target instanceof Node && !wrapperRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeWhenOutside);
    document.addEventListener("focusin", closeWhenOutside);

    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside);
      document.removeEventListener("focusin", closeWhenOutside);
    };
  }, [isOpen]);

  const focusOption = (index: number) => {
    window.requestAnimationFrame(() => optionRefs.current[index]?.focus());
  };

  const openAndFocus = (index: number) => {
    setIsOpen(true);
    focusOption(index);
  };

  const completeLanguageNavigation = () => {
    const destination = pendingNavigationRef.current;
    if (!destination) return;

    pendingNavigationRef.current = null;
    navigate(destination);
  };

  const handleLanguageClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
    isActive: boolean
  ) => {
    if (isActive) {
      event.preventDefault();
      setIsOpen(false);
      return;
    }

    setIsOpen(false);

    if (onNavigate) {
      onNavigate(event, href);
      return;
    }

    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    pendingNavigationRef.current = href;
  };

  const handleTriggerKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "ArrowDown" || event.key === "Home") {
      event.preventDefault();
      openAndFocus(0);
      return;
    }

    if (event.key === "ArrowUp" || event.key === "End") {
      event.preventDefault();
      openAndFocus(alternates.length - 1);
      return;
    }

    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      setIsOpen(false);
    }
  };

  const handleOptionKeyDown = (
    event: ReactKeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (event.key === "Tab") {
      setIsOpen(false);
      return;
    }

    let nextIndex: number | undefined;

    if (event.key === "ArrowDown") {
      nextIndex = (index + 1) % alternates.length;
    } else if (event.key === "ArrowUp") {
      nextIndex = (index - 1 + alternates.length) % alternates.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = alternates.length - 1;
    }

    if (nextIndex !== undefined) {
      event.preventDefault();
      focusOption(nextIndex);
    }
  };

  return (
    <div className={WRAPPER_CLASSES[variant]} ref={wrapperRef}>
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`${label}: ${currentDetails.name}`}
        className={cn(TRIGGER_CLASSES[variant], isOpen && "border-brand-300")}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleTriggerKeyDown}
        ref={triggerRef}
        type="button"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <span className="font-mono text-[0.7rem] font-medium tracking-[0.08em] text-brand-700">
            {currentDetails.label}
          </span>
          {variant === "mobile" && (
            <span className="truncate">{currentDetails.name}</span>
          )}
        </span>
        <CaretDownIcon
          aria-hidden="true"
          className={cn(
            "size-3.5 shrink-0 text-gray-500 transition-transform duration-200",
            isOpen && "rotate-180 text-brand-700"
          )}
          weight="bold"
        />
      </button>

      <AnimatePresence onExitComplete={completeLanguageNavigation}>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            aria-label={label}
            className={MENU_CLASSES[variant]}
            exit={{ opacity: 0, y: -4 }}
            id={menuId}
            initial={{ opacity: 0, y: -4 }}
            role="menu"
            transition={{ duration: 0.14, ease: "easeOut" }}
          >
            <p className="px-3 pb-1.5 pt-1 text-[0.65rem] font-semibold uppercase tracking-[0.13em] text-gray-500">
              {label}
            </p>

            <div className="divide-y divide-gray-100">
              {alternates.map((alternate, index) => {
                const isActive = alternate.locale === currentLocale;
                const details = LOCALE_DETAILS[alternate.locale];

                return (
                  <a
                    aria-checked={isActive}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`${label}: ${details.name}`}
                    className={cn(
                      "grid min-h-11 grid-cols-[2.25rem_1fr_1rem] items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors duration-150",
                      isActive
                        ? "bg-brand-50 text-brand-800"
                        : "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900"
                    )}
                    href={alternate.pathname}
                    key={alternate.locale}
                    onClick={(event) =>
                      handleLanguageClick(event, alternate.pathname, isActive)
                    }
                    onKeyDown={(event) => handleOptionKeyDown(event, index)}
                    ref={(element) => {
                      optionRefs.current[index] = element;
                    }}
                    role="menuitemradio"
                    tabIndex={isActive ? 0 : -1}
                  >
                    <span
                      className={cn(
                        "font-mono text-[0.7rem] font-medium tracking-[0.08em]",
                        isActive ? "text-brand-700" : "text-gray-400"
                      )}
                    >
                      {details.label}
                    </span>
                    <span className="font-medium">{details.name}</span>
                    <CheckIcon
                      aria-hidden="true"
                      className={cn(
                        "size-4 text-brand-700",
                        !isActive && "invisible"
                      )}
                      weight="bold"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
