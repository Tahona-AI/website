# Tahona Website

Marketing website for Tahona, built with Astro, React islands, and Tailwind CSS v4.

## Commands

```bash
bun install
bun dev
bun run build
bun preview
```

## Structure

```text
src/
├── pages/index.astro
├── layouts/Layout.astro
├── components/
│   ├── sections/
│   ├── ui/
│   └── animations/
├── lib/utils.ts
└── styles/global.css
```

The site is static and deployed to GitHub Pages. Keep `output: "static"` in `astro.config.mjs`.
