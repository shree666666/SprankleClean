# sparkle-clean

A premium cleaning-services site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Stack

- **Next.js 14** with the App Router and Server Components
- **TypeScript** with strict mode
- **Tailwind CSS** + `tailwindcss-animate`
- **shadcn/ui** (configured via `components.json`) — `Button`, `Card`, `Input`, `Textarea`, `Label` shipped pre-installed
- **next/font** for self-hosted Google fonts: **Playfair Display** (headings) and **DM Sans** (body)

## Color palette

Defined as HSL CSS variables in `app/globals.css` and exposed via the Tailwind theme:

| Token         | Hex       | Use            |
| ------------- | --------- | -------------- |
| `--brand-teal` / `primary`   | `#0D6E6E` | Primary (deep teal) |
| `--brand-gold` / `accent`    | `#F5A623` | Accent (warm gold)  |
| `--brand-cream` / `background` | `#F9F9F6` | Background (off-white) |
| `--brand-ink` / `foreground` (dark mode) | `#1A1A2E` | Dark / ink        |

Use them in JSX as `text-primary`, `bg-accent`, `bg-background`, `text-foreground`, or with raw tokens like `bg-brand-teal`, `text-brand-gold`, etc.

## Routes

| Path        | File                       |
| ----------- | -------------------------- |
| `/`         | `app/page.tsx`             |
| `/services` | `app/services/page.tsx`    |
| `/about`    | `app/about/page.tsx`       |
| `/pricing`  | `app/pricing/page.tsx`     |
| `/gallery`  | `app/gallery/page.tsx`     |
| `/contact`  | `app/contact/page.tsx`     |
| `/booking`  | `app/booking/page.tsx`     |

## Folder structure

```
sparkle-clean/
├── app/
│   ├── about/page.tsx
│   ├── booking/page.tsx
│   ├── contact/page.tsx
│   ├── gallery/page.tsx
│   ├── pricing/page.tsx
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── navbar.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding more shadcn components

Because `components.json` is already configured, you can add any shadcn primitive with:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add sheet
npx shadcn@latest add form
```

They will land under `components/ui/` and pick up the brand palette automatically.

## Fonts

`app/layout.tsx` loads both fonts via `next/font/google` and exposes them as CSS variables (`--font-heading`, `--font-body`). The Tailwind config maps them to `font-heading` and `font-sans` utilities, and `globals.css` applies `font-heading` to all `h1`–`h6` by default.
