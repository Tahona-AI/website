# Components

This catalog lists the components currently used by the Tahona landing page.

## Page Sections

Rendered in `src/pages/index.astro`:

| Section | File | Type | Hydration |
| --- | --- | --- | --- |
| `SkipLink` | `src/components/SkipLink.astro` | Astro | None |
| `Navbar` | `src/components/sections/Navbar.tsx` | React | `client:load` |
| `Hero` | `src/components/sections/Hero.tsx` | React | `client:load` |
| `WhatWeDo` | `src/components/sections/WhatWeDo.tsx` | React | `client:visible` |
| `Services` | `src/components/sections/Services.tsx` | React | `client:visible` |
| `AiApplied` | `src/components/sections/AiApplied.tsx` | React | `client:visible` |
| `Industries` | `src/components/sections/Industries.tsx` | React | `client:visible` |
| `HowWeWork` | `src/components/sections/HowWeWork.tsx` | React | `client:visible` |
| `Contact` | `src/components/sections/Contact.tsx` | React | `client:load` |
| `Footer` | `src/components/sections/Footer.astro` | Astro | None |

## Shared Components

| Component | File | Used by |
| --- | --- | --- |
| `FadeInView` | `src/components/animations/FadeInView.tsx` | `WhatWeDo`, `Services`, `AiApplied`, `Industries`, `HowWeWork` |
| `WavyBackground` | `src/components/ui/wavy-background.tsx` | `Hero` |
| `Input` | `src/components/ui/input.tsx` | `Contact` |
| `Textarea` | `src/components/ui/textarea.tsx` | `Contact` |
| `Label` | `src/components/ui/label.tsx` | `Contact` |
| CTA class constants | `src/components/ui/cta-styles.ts` | `Navbar`, `Hero`, `Services`, `Industries`, `Contact`, `Footer` |

## Metadata Components

| Component | File | Purpose |
| --- | --- | --- |
| `SEO` | `src/components/SEO.astro` | Title, description, canonical, Open Graph, Twitter, robots |
| `StructuredData` | `src/components/StructuredData.astro` | Organization, WebSite, and breadcrumb JSON-LD |

## Utilities

| Utility | File | Purpose |
| --- | --- | --- |
| `cn` | `src/lib/utils.ts` | Combines `clsx` and `tailwind-merge` for class names |
