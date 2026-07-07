# design-sync notes — Tahona website

- This is an Astro site, not a packaged library: no dist entry. The converter needs the self-link `ln -sfn .. node_modules/website` to discover the package (recreate after a fresh install/clone), then synthesizes the entry from the 18 `src/components/**/*.tsx` files.
- Install with `bun install --frozen-lockfile` (bun.lock). Node 24 works.
- `cssEntry` is a **precompiled** Tailwind 4 stylesheet: regenerate before every build with `./.ds-sync/node_modules/.bin/tailwindcss -i src/styles/global.css -o .design-sync/tahona-compiled.css` (run from repo root; `@tailwindcss/cli` is installed in `.ds-sync/`). Tailwind 4 auto-detects content — classes used only in `.design-sync/previews/*.tsx` but nowhere in `src/` may be missing from the compiled CSS.
- Fonts come from `@fontsource/*` packages via `extraFonts` (Plus Jakarta Sans 600/700/800, Geist Sans 400–700, Geist Mono 400/500) — matches `src/layouts/Layout.astro`.
- `DsPreviewProvider` (`.design-sync/ds-preview-provider.tsx`, wired via `extraEntries` + `provider`): motion/react entry animations start at opacity 0 and never settle under package-capture's frozen clock; the provider forces `opacity: 1 !important` inside cards. Without it, Hero/ServicesMegaMenu/all Fade*/Stagger* capture blank. Transforms are deliberately NOT forced (mega menu needs `-translate-x-1/2`).
- Playwright: cache had chromium-1228 → playwright 1.61.0 (installed in `.ds-sync/`).

## Known render warns

- `[RENDER_BLANK] MobileNavMenu` in package-validate: benign — validate screenshots at 1200px where the component is `md:hidden`; the single-mode 420x760 card renders fully (see review sheet).
- Navbar "variants render identically": benign — active-state underline is subtle at card scale; both variants verified by eye.

## Known limitations

- `public/images/` is copied into `ds-bundle/images/` AFTER each build (`cp -r public/images ds-bundle/images`) — package-build wipes the out dir, so re-copy on every rebuild before upload. PNG versions of the 4 svgs are generated with playwright (script in session notes; svgs also uploaded with explicit `image/svg+xml` mimeType because a generic server serves them as octet-stream and `<img>` refuses them — that's why the Navbar logo looks broken in local harness screenshots).
- `images/**` is uploaded but NOT part of the converter output or `_ds_sync.json` anchor — future re-syncs must re-copy and re-upload manually; reconciliation deletes must not remove `images/**` blindly.
- Icons: `@phosphor-icons/react` full dist is 57MB — bundled via curated re-export `.design-sync/tahona-icons.ts` (~72 icons) in `extraEntries`. Add icons there when the site adopts new ones.
- Astro-only components (Footer, FAQ sections, detail sections) can't ship as runtime components; their patterns live in guidelines/docs.
- cta-styles.ts exports (class-string constants, not components) are not in the bundle; the class strings are documented verbatim in conventions.md — keep in sync if cta-styles.ts changes.

## Re-sync risks

- `tahona-compiled.css` is a build artifact committed under `.design-sync/` — it goes stale whenever `src/styles/global.css` or component class usage changes; always regenerate before the converter runs.
- conventions.md embeds the CTA class strings and the service taxonomy verbatim — re-validate against `src/components/ui/cta-styles.ts` and navbar data on each sync.
- Preview data (navbar columns, service items) is inlined in `.design-sync/previews/*.tsx` — will drift if `navbar-data.ts` copy changes.
- `node_modules/website` self-symlink and `.ds-sync/` staged scripts are gitignored — recreate on fresh clones.
