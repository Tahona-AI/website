/**
 * Shared presentational primitives for the landing.
 *
 * Written as React so they render statically from Astro sections (no client
 * directive, zero JS) and can also be reused inside hydrated islands such as
 * the industries tabs.
 */

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { IconSlot, Visual, VisualAspect } from "@/components/landing/visuals";
import { sectionHref } from "@/components/landing/content";
import type { SectionId } from "@/components/landing/content";
import {
  primaryCtaArrowClass,
  primaryCtaBaseClass,
  secondaryCtaArrowClass,
  secondaryCtaBaseClass,
} from "@/components/ui/cta-styles";

export const cardClass =
  "rounded-[1.75rem] border border-gray-200/80 bg-white shadow-[0_22px_60px_-46px_rgba(31,31,31,0.42)]";

export const cardHoverClass =
  "transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_72px_-44px_rgba(31,31,31,0.5)]";

const ASPECT_CLASS: Record<VisualAspect, string> = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/9]",
};

export function ArrowIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
}

export function CtaLink({
  section,
  children,
  variant = "primary",
  className,
}: {
  readonly section: SectionId;
  readonly children: ReactNode;
  readonly variant?: "primary" | "secondary";
  readonly className?: string;
}) {
  const isPrimary = variant === "primary";

  return (
    <a
      className={cn(
        isPrimary ? primaryCtaBaseClass : secondaryCtaBaseClass,
        "min-h-12 w-fit px-3 pl-6 text-sm font-semibold",
        className
      )}
      href={sectionHref(section)}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={cn(isPrimary ? primaryCtaArrowClass : secondaryCtaArrowClass, "h-8 w-8")}
      >
        <ArrowIcon />
      </span>
    </a>
  );
}

export function Eyebrow({
  children,
  tone = "light",
}: {
  readonly children: ReactNode;
  readonly tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-sm",
        tone === "light" ? "text-gray-600" : "text-white/80"
      )}
    >
      <span className={cn("h-px w-10", tone === "light" ? "bg-brand-300" : "bg-white/50")} />
      <span className="font-medium">{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly align?: "left" | "center";
  readonly className?: string;
}) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto text-center", className)} data-reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-4 max-w-4xl font-heading text-3xl font-semibold tracking-[-0.02em] text-gray-900 text-balance sm:text-4xl md:text-5xl",
          centered && "mx-auto"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 max-w-2xl text-lg leading-8 text-gray-500 text-pretty",
          centered && "mx-auto"
        )}
      >
        {description}
      </p>
    </div>
  );
}

/**
 * Renders a finished image or, for pending slots, a dither placeholder that
 * names the slot and its brief so the visual can be produced and dropped in.
 */
export function VisualFrame({
  visual,
  aspect,
  className,
  imageClassName,
  eager = false,
}: {
  readonly visual: Visual;
  /** Overrides the slot aspect, e.g. when the frame fills a stretched cell. */
  readonly aspect?: VisualAspect | "fill";
  readonly className?: string;
  readonly imageClassName?: string;
  readonly eager?: boolean;
}) {
  const resolvedAspect = aspect ?? (visual.kind === "pending" ? visual.aspect : "landscape");
  const aspectClass = resolvedAspect === "fill" ? "h-full w-full" : ASPECT_CLASS[resolvedAspect];

  if (visual.kind === "ready") {
    return (
      <div className={cn("relative overflow-hidden", aspectClass, className)}>
        <img
          alt={visual.alt}
          className={cn("h-full w-full object-cover", imageClassName)}
          decoding="async"
          loading={eager ? "eager" : "lazy"}
          src={visual.src}
        />
      </div>
    );
  }

  return (
    <div
      className={cn("dither-placeholder relative overflow-hidden bg-brand-50", aspectClass, className)}
      data-visual-slot={visual.slot}
      role="img"
      aria-label={`Visual pendiente: ${visual.brief}`}
    >
      <div aria-hidden="true" className="dither-field absolute inset-0" />
      <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 backdrop-blur-sm">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-brand-600">
          Visual dither: {visual.slot}
        </span>
        <span className="text-xs leading-5 text-gray-500">{visual.brief}</span>
      </div>
    </div>
  );
}

/** Square dither icon slot. Shows a dither swatch until the icon asset exists. */
export function DitherIcon({
  icon,
  size = "md",
  className,
}: {
  readonly icon: IconSlot;
  readonly size?: "sm" | "md" | "lg";
  readonly className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-2xl border border-brand-100 bg-brand-50",
        size === "sm" && "h-9 w-9 rounded-xl",
        size === "md" && "h-12 w-12",
        size === "lg" && "h-16 w-16",
        className
      )}
      data-icon-slot={icon.slot}
      title={icon.kind === "pending" ? icon.brief : undefined}
    >
      {icon.kind === "ready" ? (
        <img alt="" className="h-full w-full object-contain p-1" decoding="async" loading="lazy" src={icon.src} />
      ) : (
        <span className="dither-field-dense absolute inset-0" />
      )}
    </span>
  );
}
