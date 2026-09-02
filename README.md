# Plankton Partners — Website

Boutique advisory firm marketing site. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Requirements

- Node.js 18.17+ (or 20+)
- npm 9+

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — Next.js lint

## Project layout

```
app/                 App Router pages
  layout.tsx         Root layout, fonts, header, footer
  page.tsx           Home
  services/          What we do
  method/            How we work
  sectors/           Focus areas
  work/              Case studies (index + [slug])
  about/             The partners
  insights/          Journal (index + [slug])
  careers/           Careers
  contact/           Contact
components/          Reusable UI (Header, Footer, Hero, cards, etc.)
content/             Case studies and insights as typed data
lib/                 Data loaders and site config
public/              Static assets
```

## Editing content

- Case studies: `content/cases.ts`
- Insights: `content/insights.ts`
- Site metadata: `lib/site.ts`
- Partner bios: `content/partners.ts`

## Deploy

Ready for Vercel. Push to a Git repo and import into Vercel — no additional config required.

## Notes

- Hero uses a lightweight canvas particle field with a `prefers-reduced-motion` fallback.
- No third-party trackers. Plausible/Fathom snippet can be added in `app/layout.tsx`.
- Contact form posts to `/api/contact` (server-side no-op stub — wire to your CRM/inbox).
