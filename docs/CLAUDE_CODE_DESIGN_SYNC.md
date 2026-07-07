# Claude Code Design Sync Runbook

Use this runbook when preparing or refreshing the Tahona design system in Claude
Design from the live website codebase.

## Preconditions

- Work from `main` or a branch created from current `origin/main`.
- Do not use stale screenshots as the only design source. The source of truth is the
  codebase plus the docs in this directory.
- Keep `.hermes/` and `.omo/` out of commits unless Dani explicitly asks otherwise.
- If the deck symlink under `docs/business` is unavailable, use the distilled deck
  context in `docs/CLAUDE_DESIGN_SYSTEM.md`.

## Recommended Source Files

Tell Claude Code to include these files in the sync context:

- `docs/CLAUDE_DESIGN_SYSTEM.md`
- `docs/STYLING.md`
- `docs/COMPONENTS.md`
- `docs/ARCHITECTURE.md`
- `AGENTS.md`
- `src/styles/global.css`
- `src/components/ui/cta-styles.ts`
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
- `src/pages/index.astro`
- `src/pages/services.astro`
- `src/pages/industries.astro`
- `src/pages/cases.astro`
- `public/images/logos/*`
- `public/images/visual-*.png`
- `public/images/service*-illustration.png`

## Setup

Install or update Claude Code following Anthropic's current instructions, then add
the Claude Design MCP server:

```bash
claude mcp add --scope user --transport http claude-design https://api.anthropic.com/v1/design/mcp
```

Open Claude Code from the repository root:

```bash
cd /Users/danik/tahona/website
claude
```

Log in to Claude Design:

```text
/design-login
```

## Sync Prompt For Claude Code

Paste this before running `/design-sync`:

```text
Prepare the Tahona website design system for Claude Design sync.

Use docs/CLAUDE_DESIGN_SYSTEM.md as the design-system brief. Use the live codebase
as the source of truth for components, layout, styling, tokens, images, and copy.

Include the current page system:
- homepage
- /services
- /industries
- /cases

Prioritize these files:
- docs/CLAUDE_DESIGN_SYSTEM.md
- docs/STYLING.md
- docs/COMPONENTS.md
- docs/ARCHITECTURE.md
- AGENTS.md
- src/styles/global.css
- src/components/ui/cta-styles.ts
- src/components/sections/Navbar.tsx
- src/components/sections/navbar/*
- src/components/sections/Hero.tsx
- src/components/sections/Services.tsx
- src/components/services/*
- src/components/sections/Industries.tsx
- src/components/industries/*
- src/components/cases/*
- src/components/sections/Contact.tsx
- src/components/sections/Footer.astro
- src/pages/index.astro
- src/pages/services.astro
- src/pages/industries.astro
- src/pages/cases.astro
- public/images/logos/*
- public/images/visual-*.png
- public/images/service*-illustration.png

Create or update a Claude Design design system named "Tahona Website".

The synced system must preserve:
- Plus Jakarta Sans headings and Geist Sans body/UI
- the current green and neutral color system
- the raised green CTA treatment from cta-styles.ts
- the soft white card language used in services, industries, cases, FAQ, and contact
- the 3D green/white visual asset style
- the Spanish, operational, anti-hype voice

Do not introduce:
- generic AI-agency positioning
- purple/blue AI gradients
- monospace-heavy labels
- invented metrics, clients, testimonials, or claims
- new component patterns when existing patterns are enough

After syncing, summarize:
1. what Claude Design received as tokens, components, and page patterns;
2. any files or assets that could not be represented;
3. what I should test in Claude Design with a first generated page.
```

Then run:

```text
/design-sync
```

## After Sync

Use `docs/CLAUDE_DESIGN_AFTER_SYNC_PROMPT.md` inside Claude Design or Claude Code
after the system appears in Claude Design.

First smoke test:

- Ask for one new industry detail page concept.
- Ask for one service landing variation.
- Compare both against `docs/CLAUDE_DESIGN_SYSTEM.md`.
- If the result drifts into generic AI visuals or hype copy, revise the design system
  before using it for real page work.
