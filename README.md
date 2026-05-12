# Portfolio Starter

A clean, opinionated Next.js portfolio starter. Built with the App Router, TypeScript, and Tailwind CSS.

## Stack

- **Next.js 15** (App Router) — React framework with SSR, SSG, and great DX
- **React 19** — UI library
- **TypeScript** — type safety
- **Tailwind CSS** — utility-first styling
- **Google Fonts** — `Fraunces` (display) + `Inter` (sans) + `JetBrains Mono`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx       # Root layout, fonts, metadata
  page.tsx         # Home page (composes all sections)
  globals.css      # Tailwind + base styles
components/
  Nav.tsx
  Hero.tsx
  ProjectList.tsx
  About.tsx
  Footer.tsx
lib/
  projects.ts      # Your project data lives here
```

## Customize

1. **Your content** — edit `lib/projects.ts` and the copy in `components/Hero.tsx`, `components/About.tsx`.
2. **Metadata & SEO** — update `app/layout.tsx` (title, description, OG).
3. **Colors & fonts** — `tailwind.config.ts` defines the palette (`ink`, `paper`, `accent`); fonts are loaded in `app/layout.tsx`.
4. **Add pages** — drop a new folder under `app/`, e.g. `app/projects/[slug]/page.tsx` for case studies.
5. **Add a contact form** — create `app/api/contact/route.ts` (a Next.js route handler).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**.
4. Add a custom domain in the project settings.

Every push to `main` redeploys; every PR gets a preview URL automatically.

## Alternatives

- **Cloudflare Pages** — `npx @cloudflare/next-on-pages` for the build step.
- **Netlify** — works out of the box with the Next.js runtime.
- **Self-host** — `npm run build && npm start` behind any Node host or Docker.

## Next steps to consider

- Add MDX for blog posts / writing (`@next/mdx`)
- Add view transitions and small motion (`motion` library)
- Add analytics (Vercel Analytics, Plausible, or Umami)
- Add a contact form backed by Resend or a Google Form
- Add per-project case study pages under `app/work/[slug]`
