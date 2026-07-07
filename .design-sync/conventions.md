# Tahona — conventions for building with this design system

Tahona is a Spanish technical consulting studio for internal operations. Voice: neutral corporate Spanish — direct, practical, anti-hype. Never invent clients, metrics, or testimonials; avoid "transformación digital", "disruptivo", purple/blue AI gradients, and monospace-heavy labels.

## Styling idiom — Tailwind utility classes + CSS variables

`styles.css` ships a **precompiled** Tailwind stylesheet: only the utility classes the site already uses exist. Before styling, read `styles.css` — it is the single source of truth. Two safe ways to style your own layout glue:

1. Reuse the utility classes that exist in `styles.css` (all classes used by the components below are guaranteed present).
2. For anything else, use inline styles with the design tokens, e.g. `style={{ background: "var(--color-brand-50)", borderRadius: 24 }}`. Do NOT write new Tailwind classes that don't appear in `styles.css` — they will silently not resolve.

Key tokens (defined as CSS variables in `styles.css`):
- Greens: `--color-brand-50` … `--color-brand-900`. Primary action `--color-brand-600` (rgb(36,88,64)); strong `--color-brand-700`; accent `--color-brand-500`; pale surfaces `--color-brand-50/100`.
- Neutrals: `--color-surface` (rgb(245,244,246)) light section background; `--color-charcoal` (rgb(31,31,31)) dark footer surface; gray scale `--color-gray-100…900`.
- Fonts: `--font-heading` (Plus Jakarta Sans — display headings, weights 600/700/800), `--font-body` (Geist Sans — body/UI, 400–700). Utility classes `font-heading` and `font-body` exist. Geist Mono ships but must not be a visual motif.

Green is an accent and action color, not a page-wide blanket. Cards: white or translucent white, thin gray/green border (`border-brand-200` / gray-200), soft shadow, rounded 24–28px, subtle hover lift.

## CTA treatment (copy these class strings verbatim)

Primary CTA — raised green pill:
```
group/cta inline-flex items-center justify-between gap-3 rounded-[1.15rem] border border-brand-700/10 bg-brand-600 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.18)_inset,0_-1px_0_0_rgba(10,31,20,0.16)_inset,0_22px_45px_-24px_rgba(36,88,64,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700
```
Secondary CTA — white pill, green border:
```
group/cta inline-flex items-center justify-between gap-3 rounded-[1.15rem] border border-brand-200/80 bg-white/92 text-brand-700 shadow-[0_16px_35px_-28px_rgba(31,31,31,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white hover:text-brand-800
```
Both pair with a circular arrow chip: `inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-700` (primary) / `bg-brand-50 text-brand-700` (secondary).

## Components

Full-page sections (render as-is, no props needed): `Hero` (title/description/CTA labels are optional props), `WhatWeDo`, `Services`, `Industries`, `HowWeWork`, `OurWork`, `AiApplied`, `Contact`. Navigation: `Navbar` (self-contained; optional `initialPath`), `ServicesMegaMenu` (`isOpen`, `onLinkClick`), `MobileNavMenu` (mobile-only, `md:hidden`), `NavLink`, `ServiceColumn`. Form controls: `Input`, `Label`, `Textarea`. Motion utilities: `FadeInView`, `FadeIn`, `StaggerContainer` + `StaggerItem` (wrap lists for staggered entrance), `WavyBackground` (pass brand greens via `colors`, e.g. `["#2D6A4F","#4A8B6A","#7FB89E"]` — its defaults are off-brand blues).

Service taxonomy (keep aligned): Fundamentos, Desarrollo de IA, Otros desarrollos.

## Icons — Phosphor (curated set)

The brand icon family is **Phosphor** (regular weight), exported alongside the components (e.g. `ArrowRightIcon`, `CaretDownIcon`, `EnvelopeIcon`, `TruckIcon`, `GavelIcon`, `FirstAidIcon`, `FactoryIcon`, `ShieldCheckIcon`, `FileTextIcon`, `RobotIcon`, `ChartLineUpIcon`, `CheckCircleIcon`, `MagnifyingGlassIcon`, `GearIcon`, `UsersIcon`, `DatabaseIcon`, `CalendarIcon`, `MapPinIcon`, plus ~50 total — every export ending in `Icon`). Props: `size` (px) and `weight` (`"regular"` default; the site also uses no other weight). Use ONLY these icons — no emoji, no other icon sets. Typical use: `<EnvelopeIcon size={20} />` inside a `bg-brand-50` circular chip.

## Images

Brand visuals ship under `images/`: 3D green/white illustrations (`images/service1-illustration.png`, `images/visual-industry-*.png`, `images/visual-case-*.png`, `images/whatwedo-illustration.png`, …) and logos (`images/logos/tahona-mark-green.svg` + `.png`, `images/logos/tahona-favicon.svg` + `.png`). Reference them with absolute paths (`/images/...`) like the components do. Prefer the `.png` logo variants if an svg fails to render. New imagery must match this soft 3D green/white style — never stock tech imagery.

## Known gaps

- No footer component ships (the site's footer is an Astro template). Build footers from tokens: `--color-charcoal` background, white text, `font-heading` headings.

## Example composition

```tsx
import { StaggerContainer, StaggerItem, Input, Label } from "window.Tahona (globals)";

<section style={{ background: "var(--color-surface)", padding: "64px 24px" }}>
  <h2 className="font-heading text-3xl font-extrabold text-gray-900">
    Entender la operación antes de cambiarla.
  </h2>
  <StaggerContainer className="grid gap-3">
    <StaggerItem>
      <div className="rounded-3xl border border-brand-200 bg-white p-6">…</div>
    </StaggerItem>
  </StaggerContainer>
</section>
```
