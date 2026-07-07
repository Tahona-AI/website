# Tahona Claude Design System Context

This document is the source brief for syncing the Tahona website into Claude Design.
Use it together with the actual codebase, not as a replacement for the implementation.

## Purpose

Tahona is a technical consulting and implementation studio for internal operations:
processes, data, documents, reporting, internal tools, adoption, integrations, and
practical automation when it fits the real workflow.

The public website should not read as a generic AI agency. AI is valid as a service
area, but the lead message is operational improvement and technical implementation.

## Core Positioning

- Main idea: "La tecnología ya existe. Falta la implementación adecuada."
- Tahona improves internal operations by diagnosing the real process, deciding what
  should be built or integrated, and implementing the solution with adoption in mind.
- The visitor should feel that Tahona is senior, technical, pragmatic, close to the
  operation, and allergic to hype.
- The offer is horizontal across sectors: the pattern is not the industry itself,
  but scattered information, repeated work, documents, reporting, approvals, and
  integrations between tools.

## Deck Context

The deck frames the market as Spanish SMBs that feel overwhelmed by AI: too much hype,
few visible results, too many generic tools, and not enough trusted implementation
support outside major hubs. The useful strategic takeaways are:

- Companies do not need another generic tool pitch. They need someone to understand
  their business, map the process, and implement technology around the actual context.
- Custom implementation matters more than buying a tool in isolation.
- The team should feel small, senior, agile, technically strong, and close to the client.
- The working model is consultative and iterative: first conversation, diagnosis,
  proof of concept when useful, full implementation, handoff, and adoption.
- The message "technology is a means, not an end" should guide the design and copy.

Do not copy deck claims into public surfaces unless Dani explicitly approves them.
Avoid unverified claims about savings, revenue increases, number of clients, or
results. Avoid making "IA" the generic hero hook when the page is about operations.

## Voice

Use neutral corporate Spanish.

- Direct and specific.
- Practical before impressive.
- Technical without jargon.
- Calm, professional, and human.
- No "tú" or "usted" unless a CTA requires a conversational phrase.

Preferred language:

- procesos, datos, documentos, herramientas internas
- operación real
- diagnóstico operativo
- implementación técnica
- revisión humana
- trazabilidad
- permisos
- integración con herramientas existentes
- adopción

Avoid:

- "transformación digital"
- "disruptivo"
- "game-changer"
- generic "AI automation agency" framing
- hero claims centered on "agentes de IA"
- exact savings, timelines, client counts, or metrics without verified proof

## Visual Direction

The Tahona interface should feel quiet, precise, and operational. It is not a SaaS
dashboard demo, not a crypto/AI landing, and not a decorative agency portfolio.

Use:

- white and very light neutral surfaces
- restrained green accents
- large but controlled typography
- rounded cards around 24-28px for major visual cards
- subtle borders with soft shadows
- low-noise gradients only when they already match the current site
- asymmetric but balanced layouts
- dense enough content for a consulting site, not a sparse luxury landing page

Avoid:

- purple/blue AI gradients
- dark futuristic AI styling
- monospace labels as a dominant style
- oversized decorative blobs or orbs
- nested card-on-card structures
- stock-looking abstract tech imagery
- hidden or tiny product/brand signal in hero sections

## Typography

The live site uses:

- `font-heading`: Plus Jakarta Sans for display headings.
- `font-body`: Geist Sans for body copy and UI.
- `font-mono`: Geist Mono exists in the stack, but should not be used as a visual
  motif for marketing sections.

Headings are large, tight, and direct. Do not scale type purely with viewport width.
Keep letter spacing neutral unless the existing component already defines it.

## Color System

Use the current tokens from `src/styles/global.css` and `docs/STYLING.md`.

- Primary green: `brand-600` / `rgb(36, 88, 64)`
- Strong green: `brand-700` / `rgb(27, 69, 48)`
- Accent green: `brand-500` / `rgb(45, 106, 79)`
- Pale green surfaces: `brand-50` and `brand-100`
- Light section surface: `surface` / `rgb(245, 244, 246)`
- Dark footer surface: `charcoal` / `rgb(31, 31, 31)`

Green is an accent and action color, not a single-hue blanket over the whole page.

## Components To Preserve

Use the live code as the component truth:

- `src/components/sections/Navbar.tsx`
- `src/components/sections/navbar/*`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Services.tsx`
- `src/components/services/*`
- `src/components/sections/Industries.tsx`
- `src/components/industries/*`
- `src/components/cases/*`
- `src/components/sections/Contact.tsx`
- `src/components/sections/Footer.astro`
- `src/components/ui/cta-styles.ts`
- `src/styles/global.css`

Important patterns:

- Primary CTA: raised green pill with subtle inset highlight and strong shadow.
- Secondary CTA: white/transparent pill with green border and restrained shadow.
- Cards: white or translucent white, thin gray/green border, soft shadow, subtle
  hover lift.
- Service mega menu: three-column, extensible service taxonomy.
- FAQ: split layout with expandable rows and green circular open state.
- Detail sections: text and visual alternate, with image cards that feel integrated
  rather than placed as raw assets.

## Page Patterns

Current public pages:

- `/`: landing page.
- `/services`: hero, service pillars, detailed service families, implementation
  examples, FAQ, contact, footer.
- `/industries`: hero, industry grid, detailed industry sections, FAQ, contact, footer.
- `/cases`: hero, detailed case sections, contact, footer.

When Claude Design creates a new page, it should reuse these patterns instead of
inventing a new marketing system.

## Content Guardrails

- Do not invent clients, metrics, sectors, testimonials, awards, timelines, or exact
  savings.
- Do not imply the contact form has backend behavior beyond what exists.
- Do not change the static GitHub Pages deployment model.
- For regulated sectors, use careful framing: operational support, documentation,
  internal knowledge, reporting, non-clinical or non-legal-advice workflows.
- Service taxonomy should stay aligned with the current site:
  - Fundamentos
  - Desarrollo de IA
  - Otros desarrollos

## Design Sync Acceptance Criteria

Claude Design output is good enough to use when:

- It clearly looks like Tahona without needing a screenshot.
- The CTA buttons keep the raised, tactile treatment.
- Cards match the current soft border, shadow, and hover language.
- Typography uses Plus Jakarta Sans and Geist Sans correctly.
- New sections do not introduce hypey AI visual language.
- Copy stays grounded in operations and implementation.
- Responsive layouts fit on mobile without text overlap.
- Visual placeholders or generated visuals fit the current 3D green/white asset style.
