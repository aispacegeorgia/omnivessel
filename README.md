# OmniVessel — Portfolio (Next.js 14, TS, Tailwind)

An enterprise-grade scaffold for the OmniVessel business portfolio site using Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack
- Next.js 14 (App Router, RSC)
- TypeScript (strict mode)
- Tailwind CSS (maritime theme)
- ESLint (Next core-web-vitals)

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Scripts
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm start` — start built app
- `npm run lint` — lint code
- `npm run type-check` — TypeScript check

## Deployment
- Static export (out/): `npm run build` then deploy the `out/` folder to any static host (S3/CloudFront, GitHub Pages, Netlify, etc.).
- Docker (nginx static): `docker build -t omnivessel . && docker run -p 8080:80 omnivessel` then open http://localhost:8080
- CI: GitHub Actions workflow at `.github/workflows/ci.yml` builds and checks lint/types.

## Structure
- `app/` — layout, pages, metadata, icons, and SEO routes (robots, sitemap, manifest)
- `components/` — Header, Hero, Section, Footer
- `lib/` — shared utilities (`nav` items)
- `tailwind.config.ts` — maritime color palette and typography

## Notes
- All headings and nav items are uppercase and bold.
- Background uses muted maritime mist (`#f2f6fa`); primary text is navy.
- SEO metadata, robots, sitemap, and manifest are configured.
- Set `NEXT_PUBLIC_SITE_URL` at build time for correct canonical, sitemap, and robots URLs (defaults to `https://www.example.com`).
