# AgricultureSquare
Agriculture Square Company Profile

An interactive, single-page company profile website. Each section fills the
screen edge-to-edge; a normal scroll moves you through the page, with a fixed
nav bar, side dots, and a contents menu that track your position and jump you
to any section.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll-triggered reveal animations)
- Zustand (tracks which section is currently in view)
- All page content lives in [`src/data/content.json`](src/data/content.json) —
  edit that file to change copy, add/remove/reorder pages, or update stats,
  without touching any component code.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Navigate with normal
scrolling, the side dots, or the contents menu (top right).

## Project structure

```
src/
  app/                 Next.js app router entry (layout, page, globals.css)
  components/
    SiteSections.tsx   Renders the stacked sections and tracks scroll position
    nav/               TopBar, SideDots, ScrollHint
    sections/          One component per page type (Cover, Products, ...)
    ui/                Shared building blocks (PageFrame, Kicker, Reveal, ...)
  data/content.json    All site copy and page content (the "JSON store")
  lib/                 Icon map, section registry
  store/useActiveSection.ts  Zustand store for the section currently in view
  types/content.ts     TypeScript types matching content.json
```

To add a new page: append an entry to `pages` in `content.json` with a `type`
that has a matching entry in `src/lib/section-registry.tsx`, and it
automatically appears in navigation, the contents list, and the dot nav.
