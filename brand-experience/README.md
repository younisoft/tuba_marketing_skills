# Tuba Brand Experience

An internal executive presentation — not a marketing page, not a website homepage. It exists to walk the Board through the complete Tuba brand philosophy, narrative universe, and advertising identity in one continuous, cinematic scroll.

Built from, and cross-referencing, the platform's own source documents: [`NARRATIVE_SYSTEM.md`](../NARRATIVE_SYSTEM.md), [`BIG_IDEA_PLATFORM.md`](../BIG_IDEA_PLATFORM.md), [`ADVERTISING_IDENTITY_GUIDE.md`](../ADVERTISING_IDENTITY_GUIDE.md), and the full `narrative-system/` and `advertising-system/` folders. This app does not duplicate that documentation — it is a curated, visual surface of it, for an audience that will never open a markdown file.

## Stack

Vite + React + TypeScript + Tailwind CSS + Framer Motion. No backend, no analytics, no SEO — this is a self-contained, offline-capable static build.

## Run it

```bash
npm install
npm run dev
```

## Build it

```bash
npm run build
npm run preview   # serve the static dist/ output locally
```

Prefer `npm run build` + `preview` (or any static file host) over leaving `npm run dev` exposed — the dev server is meant for local editing only.

## Structure

```
src/
├── data/content.ts       curated English copy, sourced from the knowledge platform
├── data/content.ar.ts    the same content, natively written in Arabic — not a translation pass
├── data/sections.ts      the 15-section registry driving nav + scroll-spy (bilingual labels)
├── i18n/LanguageContext.tsx  language + RTL state, persisted to localStorage
├── components/           shared primitives (Reveal, Section, NavDots, LanguageToggle, SocialMockups...)
├── sections/              Section00Opening.tsx → Section14Final.tsx, one file per section
└── App.tsx                assembles all 15 sections in order
public/brand/              logo, icon, and photography assets sourced from the brand's own asset library
```

## Language

The toggle top-left (top-right in Arabic) switches the entire experience — copy, direction, and the logo lockup itself (the official Arabic-color wordmark, `ar-color-TubaLogo2.svg`, not a mirrored English logo). Arabic is written natively per section, not machine-translated, per [`copywriting.md §7.1`](../advertising-system/copywriting.md)'s discipline — and every numeral stays Western (`0-9`), per [`visual-system.md §2.4`](../advertising-system/visual-system.md), even inside Arabic copy. `dir="rtl"` is set on `<html>` when Arabic is active, so Tailwind's `rtl:`/`ltr:` variants drive layout mirroring (nav position, arrows, grid flow); CSS Grid's own implicit placement flips direction automatically, so most section layouts needed no extra RTL-specific code at all.

## Editing content

Nearly everything text-related lives in `src/data/content.ts` (English) and its mirror `src/data/content.ar.ts` (Arabic) — same keys, same order, so a section component just switches which module it imports based on `useLanguage()`. Section-local hardcoded strings (headings, eyebrows, UI labels) live in a small `COPY = { en: {...}, ar: {...} }` object at the top of each `src/sections/SectionNN*.tsx` file. Design tokens (color, type, radius, shadow) mirror [`advertising-system/visual-system.md`](../advertising-system/visual-system.md) exactly in `tailwind.config.js` — if that source document's values ever change, update them here too.
