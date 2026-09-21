# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## ⚠️ Next.js version warning

This project runs **Next.js 16.2.4** with **React 19.2**, which is newer than what most training data
covers and includes several breaking changes vs. Next.js 14/15. Before writing App Router code (data
fetching, `params`/`searchParams`, images, caching, middleware, ESLint config), skim the relevant doc
in `node_modules/next/dist/docs/01-app/` — in particular
`node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`, which lists every breaking
change. Key ones that affect this repo:

- **Async Request APIs are mandatory** — `cookies()`, `headers()`, `draftMode()`, and `params`/
  `searchParams` in pages/layouts/routes must be `await`ed. Synchronous access was removed in v16 (no
  longer just deprecated).
- **`middleware.ts` → `proxy.ts`** — the file and exported function are renamed to `proxy`; the `edge`
  runtime is not supported there. This repo has neither file currently.
- **`revalidateTag(tag)` now requires a second `cacheLife` profile argument** (e.g.
  `revalidateTag('posts', 'max')`); use the new `updateTag`/`refresh` from `next/cache` for
  read-your-writes semantics.
- **`experimental.dynamicIO` → `cacheComponents`** (top-level config key, not experimental).
- **Turbopack is the default bundler** for both `next dev` and `next build` (no `--turbopack` flag
  needed); a custom Webpack config now fails the build unless you pass `--webpack`.
- **Parallel route slots require an explicit `default.js`** or the build fails (not applicable yet —
  no parallel routes in this repo).
- **`next/image` defaults changed**: `minimumCacheTTL` is now 4h (was 60s), `qualities` defaults to
  `[75]` only, `imageSizes` no longer includes `16`, and local images with query strings need
  `images.localPatterns[].search` configured.
- **`next lint` is removed** — linting runs via the ESLint CLI directly (`npm run lint` in this repo
  already calls `eslint`, not `next lint`).
- **Route-transition scroll behavior**: Next no longer force-resets `scroll-behavior` during
  navigation unless `<html data-scroll-behavior="smooth">` is set. `globals.css` sets
  `scroll-behavior: smooth` on `html`, but `src/app/layout.tsx` does **not** currently set
  `data-scroll-behavior="smooth"` — keep this in mind if scroll position on navigation looks off.

## Commands

- `npm run dev` — start the dev server (Turbopack, default port 3000)
- `npm run build` — production build (Turbopack by default)
- `npm run start` — run the production build
- `npm run lint` — ESLint via flat config (`eslint.config.mjs`); there is no separate test runner or
  test suite in this repo

## Architecture

This is a single-purpose **marketing site** (Spanish, `lang="es-MX"`) for TRANSNORTE, a freight/logistics
company in Monterrey, México. It is a static App Router site with **no backend, no API routes, no
database, and no auth** — every page is either a plain Server Component (metadata + content) or a
`"use client"` component for interactivity/animation.

### Routing (`src/app/`)

- `/` (`page.tsx`) — composes the homepage purely from section components (Hero, Stats, Services,
  Advantages, Industries, Testimonials, ClosingCta)
- `/servicios` — services detail page, content-driven from a local `services` array
- `/contacto` — contact page with a client-side form; **submission is simulated** (`setTimeout` in
  `handleSubmit`, no `fetch`/API call) — there is no wired-up backend to send this data anywhere yet
- `/privacidad` — static privacy notice page
- `layout.tsx` — root layout; wraps every page in a shared `Navbar` + `Footer`, loads `Geist` via
  `next/font/google`, and sets site-wide `metadata` (title/description/OG tags default here, pages
  override via their own exported `metadata`)

### Components (`src/components/`)

- `Navbar.tsx` / `Footer.tsx` — shared chrome, both client components (Navbar uses `usePathname` +
  scroll listener + framer-motion for the mobile menu)
- `sections/*` — one component per homepage section; each is self-contained with its own local content
  arrays (services, stats, testimonials, etc.) rather than pulling from a shared data/content layer —
  there is no CMS or content file; copy changes mean editing the section component directly
- `motion-primitives.tsx` — the shared animation layer built on `framer-motion`. Reuse its exports
  instead of hand-rolling new variants:
  - `fadeUp`, `fadeIn`, `slideLeft`, `slideRight`, `scaleIn` — `Variants` presets
  - `stagger(staggerChildren, delayChildren)` — builds a stagger container variant
  - `<InView>` — wraps children in a scroll-triggered `motion.div` (uses `useInView`)
  - `<StaggerInView>` — same, but staggers its children's animations
  Section components are built by composing these primitives, so new sections should follow the same
  pattern rather than importing `framer-motion` directly.

### Styling

- **Tailwind CSS v4**, CSS-first config — there is no `tailwind.config.*` file. Theme tokens (fonts,
  colors) are declared in `src/app/globals.css` via `@theme inline`, and `@import "tailwindcss"` pulls
  in the framework. When adding design tokens, edit `globals.css`, not a JS/TS config file.
- Brand color is red (`red-600`/`red-700`/`red-500` throughout); rounded pill-style radii use
  `rounded-4xl` as a repeated convention.
- Path alias `@/*` resolves to `src/*` (see `tsconfig.json`).

### Images

- `next.config.ts` allow-lists `images.unsplash.com` via `images.remotePatterns` — all photography in
  this repo is served from Unsplash via `next/image`. Adding another external image host requires
  adding its own `remotePatterns` entry (the `images.domains` option is deprecated in v16).
