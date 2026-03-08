# Landing Page v2 — Implementation Plan

> User approved demo.html on 2026-02-25. SVGs need improvement but overall direction approved.
> Demo file: `/Users/danik/CadlyLabs/website/demo.html` (reference for visual direction)
> Design specs: `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/brand/visual.md`
> Section blueprint: `/Users/danik/Zettelkasten/40 Projects/CadlyLabs/strategy/website-structure.md`

## Status Tracker

- [ ] Step 1: global.css rewrite
- [ ] Step 2: Layout.astro font swap
- [ ] Step 3: Navbar
- [ ] Step 4: Hero
- [ ] Step 5: Trust Marquee
- [ ] Step 6: Services Tabs
- [ ] Step 7: How We Work
- [ ] Step 8: Why Cadly
- [ ] Step 9: Case Study
- [ ] Step 10: CTA
- [ ] Step 11: Footer
- [ ] Step 12: index.astro wiring
- [ ] Step 13: bun build verification

---

## Step 1: Rewrite `src/styles/global.css`

**What**: Replace entire `@theme inline` block + `:root` + `.dark` with new design tokens.

**New tokens**:
```
@theme inline {
  /* Fonts */
  --font-heading: "Instrument Serif", Georgia, serif;
  --font-body: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Light base */
  --color-bg-primary: #FAFAF7;
  --color-bg-white: #FFFFFF;
  --color-bg-surface: #F3F1ED;
  --color-bg-subtle: #EBE8E3;

  /* Text on light */
  --color-text-primary: #0A0A0B;
  --color-text-secondary: #5C5955;
  --color-text-muted: #8E8A84;

  /* Accent (warm amber) */
  --color-accent-300: #E0C4A6;
  --color-accent-400: #D4B08C;
  --color-accent-500: #C49A6C;
  --color-accent-600: #A8804E;
  --color-accent-700: #8C6A3E;

  /* Dark sections */
  --color-dark-bg: #0A0A0B;
  --color-dark-elevated: #141416;
  --color-dark-surface: #1C1C20;
  --color-dark-text: #F5EDE4;
  --color-dark-text-secondary: #9B9690;
  --color-dark-text-muted: #6B6763;

  /* Borders */
  --color-border-default: #E8E5E0;
  --color-border-hover: #D4D0CA;

  /* Semantic */
  --color-success: #4A8C50;
  --color-error: #C75C5C;

  /* Border radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;
}
```

**Keep**: `@import "tailwindcss"`, scrollbar-custom (update colors), `@layer base` (update colors), fade-in-up keyframe, reduced-motion media query, focus-visible (change to amber)

**Remove**: Old `:root`/`.dark` oklch vars, old brand-* colors, sidebar vars, chart vars, `@custom-variant dark`

**Add utilities**: `.font-heading`, `.font-body`, `.font-mono`, `.section-label` (JetBrains Mono uppercase style)

**Add**: marquee keyframe animation

---

## Step 2: Update `src/layouts/Layout.astro`

**What**: Swap font imports from old (Libre Baskerville, Manrope) to new (Instrument Serif, Plus Jakarta Sans, JetBrains Mono).

```astro
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
```

Remove old Libre Baskerville and Manrope imports. Keep everything else.

---

## Step 3: Navbar — `src/components/sections/Navbar.tsx`

**Behavior**: Sticky top, transparent on dark hero → white bg + blur on scroll (IntersectionObserver on hero).
**Layout**: Logo left ("Cadly" in Instrument Serif), links center (Soluciones | Nosotros | Contacto in Plus Jakarta Sans 500 14px), CTA right (amber button "¿Hablamos?").
**Mobile**: Hamburger → full-screen overlay.
**Hydration**: `client:load`

---

## Step 4: Hero — `src/components/sections/Hero.tsx`

**Background**: dark-bg #0A0A0B
**Label**: `[ AI PARA INDUSTRIA ALIMENTARIA ]` in JetBrains Mono, accent-500
**Headline**: "Tu equipo de IA para la industria alimentaria" — Instrument Serif display (64-72px desktop, 36-40px mobile), cream #F5EDE4
**Sub**: "Procesamos tus documentos, digitalizamos tu APPCC, conectamos tus sistemas y automatizamos los procesos que te roban tiempo. Sin cambiar nada de lo que ya usas." — Plus Jakarta Sans 18px, dark-text-secondary
**CTAs**: Primary amber "Agenda una llamada →", Secondary outlined "Ver soluciones"
**Visual**: Abstract SVG network illustration, amber strokes. Radial gradient glow behind it.
**Hydration**: `client:load` (for ambient glow mouse-follow effect)

---

## Step 5: Trust Marquee — `src/components/sections/TrustMarquee.astro`

**Static Astro component** (no hydration needed — CSS-only animation).
**bg**: #F3F1ED, thin #E8E5E0 borders top/bottom
**Content**: Duplicate pill set for seamless loop: "Procesamiento de documentos" · "APPCC Digital" · "WhatsApp → ERP" · "Dashboards en tiempo real" · "Inteligencia de proveedores" · "Automatización de procesos"
**Speed**: ~30s full cycle, pauses on hover
**Style**: Plus Jakarta Sans 500 14px, text-secondary

---

## Step 6: Services Tabs — `src/components/sections/Services.tsx`

**Hydration**: `client:visible`
**Label**: `[ NUESTRAS SOLUCIONES ]`
**Headline**: "Todo lo que necesitas. Un solo equipo."
**6 tabs**: Documentos, APPCC Digital, WhatsApp ↔ ERP, Dashboard, Proveedores, Automatización
**Each panel**: SVG left/right alternating + title + 2-3 sentence description + 3 bullets + optional "Ver más →"
**Tab style**: Inactive text-muted, Active text-primary + bg-subtle + 2px accent-500 bottom border
**Transition**: 300ms cross-fade
**Mobile**: Tabs horizontally scrollable

### Tab Content:
1. **Documentos** — "Del papel a tu sistema, sin tocar un teclado"
   - Extraemos datos de albaranes, facturas, pedidos y certificados automáticamente
   - Bullets: Lectura de cualquier formato (PDF, foto, escaneado) · Integración directa con tu ERP/gestión · Sin intervención manual, 24/7

2. **APPCC Digital** — "Inspector pregunta → 2 clicks → respuesta"
   - Tu sistema APPCC digitalizado, siempre actualizado, siempre listo para auditoría
   - Bullets: Registros automáticos de temperatura y control · Trazabilidad completa lote a lote · Alertas antes de que haya un problema

3. **WhatsApp ↔ ERP** — "Tus clientes piden por WhatsApp. Que se procesen solos."
   - Los pedidos que llegan por WhatsApp se convierten en órdenes en tu sistema automáticamente
   - Bullets: Lectura inteligente de mensajes y audios · Confirmación automática al cliente · Sin copiar-pegar, sin errores

4. **Dashboard** — "Visibilidad en tiempo real de stock, márgenes y pedidos"
   - Un panel que conecta todas tus fuentes de datos para que tomes decisiones con información real
   - Bullets: Stock, ventas y márgenes en una pantalla · Alertas de rotura de stock o desviaciones · Accesible desde móvil o tablet

5. **Proveedores** — "¿Compras al mejor precio? Seguro?"
   - Analizamos tus compras y comparamos con alternativas para que nunca pagues de más
   - Bullets: Comparativa automática de precios · Detección de desviaciones en facturación · Sugerencias de proveedor alternativo

6. **Automatización** — "De pedido a entrega, automatizado de principio a fin"
   - Conectamos tus procesos para que la información fluya sola entre sistemas
   - Bullets: Flujos personalizados a tu operativa · Integración con ERP, email, WhatsApp, Excel · Menos errores, menos tiempo, más control

---

## Step 7: How We Work — `src/components/sections/HowWeWork.astro`

**Static Astro** (wrap in FadeInView via React island if animation needed).
**bg**: #FFFFFF
**Label**: `[ CÓMO TRABAJAMOS ]`
**Headline**: "De problema a solución. Sin drama."
**4 steps horizontal on desktop, vertical mobile**:
- /01 Escuchamos — "Una charla de 20 minutos para entender qué te roba tiempo."
- /02 Proponemos — "Un diagnóstico claro con alcance, precio y calendario."
- /03 Construimos — "Montamos la solución en 2-4 semanas. Integrado con lo que ya usas."
- /04 Arrancamos — "Tú y tu equipo empezáis a usarlo. Nosotros seguimos aquí."

Connecting line/dots between steps. Numbers in JetBrains Mono accent-500.

---

## Step 8: Why Cadly — `src/components/sections/WhyCadly.astro`

**Static Astro**.
**bg**: #F3F1ED
**Label**: `[ POR QUÉ CADLY ]`
**Two columns**:
Left "Otras agencias" (muted card, bg-surface, red-ish ✗ #C75C5C):
- IA genérica, sin conocer tu sector
- Te piden cambiar de sistemas
- Implementaciones de meses
- Un solo producto para todos
- Soporte remoto impersonal

Right "Con Cadly" (elevated card, white bg, accent-border, glow, amber ✓ #C49A6C):
- Especializados en industria alimentaria
- Integramos con lo que ya usas
- Resultados en 2-4 semanas
- Solución a medida para tu caso
- Equipo local, presencia real

---

## Step 9: Case Study — `src/components/sections/CaseStudy.astro`

**Static Astro** (or .tsx if film grain needs JS).
**bg**: #0A0A0B (DARK)
**Label**: `[ CASO REAL ]`
**Headline**: "No es teoría. Ya funciona."
**Card**: Large, rounded, with CSS film grain overlay
- "Montes del Acebo — Sala de despiece"
- Quote: "El inspector preguntó por la trazabilidad de un lote. En 2 clicks teníamos la respuesta completa."
- 3 metrics: 10h/semana ahorradas | 100% auditorías pasadas | 3 semanas implementación
- CTA: "Ver caso completo →"

---

## Step 10: CTA — `src/components/sections/CTASection.astro`

**Static Astro**.
**bg**: #0A0A0B (DARK)
**Headline**: "¿Listo para dejar de hacer trabajo que una máquina debería hacer?" — Instrument Serif
**Sub**: "20 minutos. Sin compromiso. Solo para entender si podemos ayudarte."
**Button**: Large amber "Agenda tu llamada →"
**Below**: hola@cadlylabs.com · WhatsApp
**Visual**: Subtle ambient glow behind button (CSS radial gradient)

---

## Step 11: Footer — `src/components/sections/Footer.astro`

**Static Astro**.
**bg**: #0A0A0B (DARK)
**4-column grid**:
1. Cadly wordmark (Instrument Serif) + brief tagline + © 2026 Cadly Labs
2. Soluciones: Documentos, APPCC, WhatsApp-ERP, Dashboard, Proveedores
3. Empresa: Nosotros, Blog, Casos
4. Contacto: hola@cadlylabs.com, +34 XXX XXX XXX, WhatsApp, LinkedIn
**Bottom bar**: border-top #rgba(255,255,255,0.08), legal/privacy links

---

## Step 12: Wire up `src/pages/index.astro`

Import all new section components. Order:
```astro
<Layout>
  <SkipLink />
  <main id="main-content">
    <Navbar client:load />
    <Hero client:load />
    <TrustMarquee />
    <Services client:visible />
    <HowWeWork />
    <WhyCadly />
    <CaseStudy />
    <CTASection />
    <Footer />
  </main>
</Layout>
```

Remove old imports (FoodServices, SuccessStory, Contact, old Hero, old Navbar, old HowWeWork, old WhyCadly, old Footer).

---

## Step 13: Verify

```bash
bun build
```
Must exit 0 with no errors. Fix any type/import issues.

---

## Constraints (from CLAUDE.md)
- No `as any`, `@ts-ignore`
- No new dependencies without explicit request (fonts already installed)
- Static output only
- Don't touch `.github/workflows/deploy.yml`
- Don't change `output: 'static'` in astro.config.mjs
