# Architecture

Tahona is a static Astro marketing site deployed to GitHub Pages.

## Runtime Model

- Astro builds the site to static files in `dist/`.
- React is used only for hydrated islands where interaction is needed.
- There are no server routes in this repo.
- The contact form posts from the browser to the configured external webhook.

## Build Configuration

`astro.config.mjs` keeps the site static:

```javascript
export default defineConfig({
  site: "https://tahona.ai",
  integrations: [react(), sitemap(), compress()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Do not change `output: "static"` unless the deployment target changes.

## Rendered Page Structure

`src/pages/index.astro` renders the landing page in this order:

1. `SkipLink`
2. `Navbar` with `client:load`
3. `Hero` with `client:load`
4. `WhatWeDo` with `client:visible`
5. `Services` with `client:visible`
6. `AiApplied` with `client:visible`
7. `Industries` with `client:visible`
8. `HowWeWork` with `client:visible`
9. `Contact` with `client:load`
10. `Footer`

## Hydration Strategy

| Pattern | Current use |
| --- | --- |
| `client:load` | Above-the-fold or immediately interactive components: `Navbar`, `Hero`, `Contact` |
| `client:visible` | Below-the-fold interactive sections: `WhatWeDo`, `Services`, `AiApplied`, `Industries`, `HowWeWork` |
| No directive | Static Astro sections: `Footer`, `SkipLink` |

## Assets

Public assets live under `public/` and are referenced directly by path.
Keep only assets referenced by the rendered site, metadata, manifest, or active documentation.

Important public assets:

- `/images/logos/tahona-favicon.svg`
- `/images/logos/tahona-mark-green.svg`
- `/images/why-tahona-flow.svg`
- `/og-image.png`
- `/site.webmanifest`
- `/favicon/*.png`

## Path Aliases

The project uses `@/*` for imports from `src/*`.

```typescript
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";
```
