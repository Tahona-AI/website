# Tahona Documentation

Welcome to the official documentation for the Tahona website.

## Project Overview

Tahona is a technical consulting and implementation studio focused on internal operations: processes, data, documents, reporting, internal tools, adoption, and practical automation when it is useful. The website is the public marketing surface for that horizontal operations offer.

The public positioning is deliberately not a generic AI-agency pitch. AI is treated as a tool when it helps the operation, not as the headline.

## Tech Stack

The website is built using a modern, high-performance stack:

- **Framework**: [Astro 5](https://astro.build/) (static site generation)
- **UI Library**: [React 19](https://react.dev/) (used via Astro Islands)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Runtime**: [Bun](https://bun.sh/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) via `@phosphor-icons/react`

## Quick Start

To get started with development, follow these commands:

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

```bash
bun install
```

### Development

Start the development server:

```bash
bun run dev
```

The site will be available at `http://localhost:4321`.

### Build

Create a production build:

```bash
bun run build
```

### Preview

Preview the production build locally:

```bash
bun run preview
```

## Project Structure

```text
website/
├── src/
│   ├── components/
│   │   ├── animations/     # Animation-wrapper components (React/Motion)
│   │   ├── sections/       # Major landing page sections (Astro & React)
│   │   └── ui/             # Reusable UI primitives (Button, Input, etc.)
│   ├── layouts/            # Base Astro layouts
│   ├── lib/                # Utility functions (cn, etc.)
│   ├── pages/              # Routing (Astro pages and API endpoints)
│   └── styles/             # Global CSS and Tailwind configuration
├── public/                 # Static assets (images, logos, robots.txt)
└── docs/                   # Documentation files
```

## Documentation Index

- [Architecture](./ARCHITECTURE.md) - Astro Islands, hydration, static output, and deployment.
- [Components](./COMPONENTS.md) - Documentation for sections, UI primitives, and animations.
- [Styling](./STYLING.md) - Brand colors, typography, and Tailwind v4 configuration.
