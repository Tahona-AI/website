/**
 * Visual slots for the landing.
 *
 * Every visual on the landing is either a finished asset or a pending slot that
 * will be produced later in the Tahona dither style (see docs/LANDING_VISUALS.md).
 * Modelling both as one union keeps pending slots explicit: a placeholder can
 * never be shipped by accident without its brief, and a finished image can never
 * lack alt text.
 */

export type VisualAspect = "square" | "landscape" | "portrait" | "wide";

export type ReadyVisual = {
  readonly kind: "ready";
  readonly src: string;
  readonly alt: string;
};

export type PendingVisual = {
  readonly kind: "pending";
  /** Stable slot id; also the target filename under /images/landing/. */
  readonly slot: string;
  /** One-line art direction for the dither visual that will fill the slot. */
  readonly brief: string;
  readonly aspect: VisualAspect;
};

export type Visual = ReadyVisual | PendingVisual;

/**
 * Dither icon slots: small square marks. Pending until the dither icon asset
 * exists; then switch to `ready` with its `src` (decorative, so no alt text).
 */
export type IconSlot =
  | { readonly kind: "pending"; readonly slot: string; readonly brief: string }
  | { readonly kind: "ready"; readonly slot: string; readonly src: string };
