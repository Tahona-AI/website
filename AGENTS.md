# Tahona Website - Agent Instructions

## Quick Context

**What**: Marketing website for Tahona - technical consulting and implementation for internal operations, processes, data, documents, tools, and practical automation when useful.
**Stack**: Astro + React + Tailwind CSS v4.  
**Deploy**: GitHub Pages (static build).  
**URL**: https://tahona.ai

---

## Commands

```bash
bun install     # Install dependencies
bun dev         # Dev server at localhost:4321
bun build       # Build static site to ./dist/
bun preview     # Preview production build
```

---

## Architecture at a Glance

```
src/
├── pages/index.astro      # Single page (landing)
├── layouts/Layout.astro   # Base HTML, meta, fonts
├── components/
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   ├── ui/                # Reusable primitives (Input, Button)
│   ├── animations/        # FadeInView, StaggerContainer
│   └── kokonutui/         # Special effects (FloatingPaths)
├── lib/utils.ts           # cn() helper
└── styles/global.css      # Tailwind theme + CSS vars
```

### Hydration Strategy

| Pattern | When to Use |
|---------|-------------|
| `client:load` | Above-the-fold interactive (Navbar, Hero) |
| `client:visible` | Below-the-fold interactive (Services, Contact) |
| No directive | Static Astro components (Footer, HowWeWork) |

---

## Key Patterns

### Path Aliases
```typescript
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";
// "@/*" → "./src/*"
```

### Class Merging
```typescript
import { cn } from "@/lib/utils";
cn("base-class", condition && "conditional-class", className)
```

### Scroll Animations
```tsx
// Single element
<FadeInView delay={0.2}>
  <div>Fades in when visible</div>
</FadeInView>

// Staggered children
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

### Section Layout
```html
<section class="bg-white py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Content -->
  </div>
</section>
```

---

## Brand System

### Colors

| Token | Usage |
|-------|-------|
| `brand-500` - `brand-700` | Primary actions, CTAs |
| `brand-50` - `brand-100` | Light backgrounds, badges |
| `surface` | Section backgrounds (light gray) |
| `charcoal` | Footer, dark sections |

### Typography

| Class | Font | Usage |
|-------|------|-------|
| `font-heading` | Plus Jakarta Sans | Display headings (Bold/ExtraBold, -0.02em tracking) |
| `font-body` | Geist Sans | Body text, UI |
| `font-mono` | Geist Mono | Code, labels |

### Common Components

```html
<!-- Primary Button -->
<button class="rounded-lg bg-brand-600 px-6 py-3 text-white hover:bg-brand-700">

<!-- Badge -->
<span class="rounded-full bg-brand-100 px-4 py-1.5 text-sm text-brand-700">

<!-- Card -->
<div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm 
            hover:border-brand-200 hover:shadow-lg">
```

---

## Content Guidelines (Spanish)

### Voice
- **Direct**: no fluff, get to the point
- **Practical**: operational clarity before technology
- **Confident**: technical expertise without hype
- **Corporate/professional**: serious, clear, and human, but not casual

### DO
- Use neutral corporate Spanish. Avoid addressing the visitor directly as "tú" or "usted" unless explicitly approved for a specific CTA.
- Lead with operations: processes, data, documents, internal tools, adoption, and measurable control.
- Be specific when evidence exists, but do not invent timelines, savings, metrics, sectors, clients, or guarantees.

### DON'T
- Corporate buzzwords: "sinergia", "transformación digital"
- Tech jargon: "arquitectura transformer", "modelos de deep learning"
- Startup speak: "disruptivo", "escalable", "game-changer"
- Generic AI-agency/autobro positioning: do not use "agentes de IA" or "ingeniería de contexto" as generic hero language or hype. They are valid service terms when the page context justifies them, especially under AI development or technical implementation.
- Hype claims: "automatiza con IA en 30 días", "Sistemas de IA que operan en producción desde el primer día"
- Money-first claims without proof: "ahorra X horas", "reduce costes", "aumenta la facturación"

### Key Messages
- "Procesos, datos y herramientas internas"
- "La tecnología ya existe. Falta la implementación adecuada."
- "Mejoramos operaciones internas con diagnóstico operativo, implementación técnica y automatización solo cuando encaja con el trabajo real."
- "Para equipos con procesos reales que quieren mejorar su operación."

### Service Taxonomy

Use this service grouping unless Dani changes it:

1. **Fundaciones**: Consultoría / auditoría operativa, Estrategia, Bases de conocimiento.
2. **Desarrollo de IA**: Optimización de procesos, Agentes de IA, Procesamiento documental.
3. **Otros desarrollos**: Herramientas a medida, Herramientas internas, Integraciones / plataformas operativas.

### Industry Taxonomy

Initial public industries to explore: Logística, Legal, Seguros, Industria, Marketing / growth operations, and Salud if there is enough careful non-regulatory framing. APPCC or food-safety material can appear as a case/pattern inside Industria, not as the main Tahona positioning.

---

## Critical Constraints

### DO NOT
- Add server-side features (static-only for GitHub Pages)
- Use `as any`, `@ts-ignore`
- Add new dependencies without explicit request
- Remove or modify `.github/workflows/deploy.yml`
- Change `output: 'static'` in astro.config.mjs

### Contact Form
Currently client-side only. Form submission needs external service (Formspree, Netlify Forms, etc.) - not implemented yet.

### Build Verification
Always run after changes:
```bash
bun build  # Must succeed for deploy
```

---

## Quick Reference

| Need | File |
|------|------|
| Add new section | `src/pages/index.astro` (import + add) |
| Change colors | `src/styles/global.css` (@theme inline) |
| Edit meta/SEO | `src/layouts/Layout.astro` |
| Add animation | Use `FadeInView` from `@/components/animations/` |
| New UI component | `src/components/ui/` |

---

## Related Resources

- **Engineering Standards**: `../.claude/skills/cadly-swe/SKILL.md`
- **Cofounder mindset**: `../.claude/skills/cadly-cofounder/SKILL.md`
- **Brand Identity**: `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/`
- **Architecture Docs**: `./docs/ARCHITECTURE.md`
- **Component Catalog**: `./docs/COMPONENTS.md`
- **Styling Guide**: `./docs/STYLING.md`
