# Styling Guide

The Tahona website uses Astro, React islands, Tailwind CSS v4, and project tokens defined in `src/styles/global.css`.

## Tailwind CSS

Tailwind is configured through the Vite plugin and CSS theme tokens.

```javascript
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

## Brand Colors

The current brand green ramp is intentional.

| Token | Value | Usage |
| --- | --- | --- |
| `brand-50` | `rgb(240, 247, 243)` | Light backgrounds |
| `brand-100` | `rgb(212, 232, 220)` | Badges, subtle accents |
| `brand-500` | `rgb(45, 106, 79)` | Icons, focus, accents |
| `brand-600` | `rgb(36, 88, 64)` | Primary CTAs |
| `brand-700` | `rgb(27, 69, 48)` | CTA hover states |
| `surface` | `rgb(245, 244, 246)` | Light section backgrounds |
| `charcoal` | `rgb(31, 31, 31)` | Footer and dark surfaces |

## Typography

Fonts are loaded in `src/layouts/Layout.astro` with `@fontsource`.

| Class | Font | Usage |
| --- | --- | --- |
| `font-heading` | Plus Jakarta Sans | Display headings |
| `font-body` | Geist Sans | Body copy and UI |
| `font-mono` | Geist Mono | Monospace labels when needed |

## Common Patterns

Sections generally use a constrained inner container:

```html
<section class="bg-white py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

Primary CTAs share the constants in `src/components/ui/cta-styles.ts` so button shape, color, and motion stay consistent.

## Motion

Scroll and entrance animations use the `motion` package through components such as `FadeInView`. Global CSS respects `prefers-reduced-motion`.
