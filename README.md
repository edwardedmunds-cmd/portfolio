# Ted Edmunds Portfolio

Professional portfolio website for `tededmunds.com`, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Positioning

This site is designed as an executive data product and analytics leadership portfolio for job searches in banking, insurance, healthcare, and enterprise data product roles. It highlights:

- Enterprise analytics platforms
- AI-ready data products
- Executive dashboards
- Secure multi-tenant data architecture
- Governance, lineage, and catalog experiences
- Regulated-industry data product leadership

All dashboard content uses fictional, portfolio-safe sample data.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

## Environment Variables

Copy `.env.example` if you want to override the public site URL locally:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_SITE_URL` is used for metadata, sitemap, robots, and social sharing URLs. Do not add secrets to `.env.example`.

`NEXT_PUBLIC_GUDID_API_URL` is optional. When set locally, the FDA Device Intelligence dashboard attempts to load the GUDID Express API first. If the API is unavailable, the dashboard falls back to the static JSON export served through `/api/gudid-dashboard`, which keeps Vercel deployments fast and reliable.

## GUDID Dashboard Data Modes

The FDA case study supports three data modes:

- **Live local API**: start the GUDID Express API from `GUDID_Project` at `http://127.0.0.1:8787`.
- **Static Vercel snapshot**: the deployed portfolio reads `/api/gudid-dashboard`, backed by `public/gudid-dashboard.json`.
- **Bundled fallback**: the React component includes a final safe fallback if neither source is reachable.

Refresh the static snapshot manually:

```bash
npm run export:gudid-snapshot -- ../GUDID_Project/docs/sample_data.json
```

The GitHub workflow in `.github/workflows/gudid-snapshot.yml` also refreshes the static snapshot weekly from the public `GUDID_Project` sample export and commits changes to `main`, which triggers Vercel after GitHub integration is enabled.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default framework preset: **Next.js**.
5. Use the default commands:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: leave blank for Next.js
6. Add `NEXT_PUBLIC_SITE_URL=https://tededmunds.com` in Vercel environment variables.
7. Deploy.

## Custom Domain: tededmunds.com

After the first Vercel deployment:

1. Open the Vercel project settings.
2. Go to **Domains**.
3. Add `tededmunds.com`.
4. Add `www.tededmunds.com` if you want the `www` version to redirect.
5. Update DNS records at the domain registrar using Vercel's provided instructions.

## SEO and Sharing

The site includes:

- Global metadata in `app/layout.tsx`
- Open Graph metadata for LinkedIn sharing
- Generated Open Graph image at `app/opengraph-image.tsx`
- Robots route at `app/robots.ts`
- Sitemap route at `app/sitemap.ts`

## Replaceable URLs

Public contact/profile URLs are centralized in `lib/site.ts`:

- Email
- LinkedIn
- GitHub
- Site URL fallback

Project repository URLs live in `data/projects.ts`.

## Customization Checklist

- Confirm the LinkedIn and GitHub URLs in `lib/site.ts`.
- Confirm project repository URLs in `data/projects.ts`.
- Add a resume PDF only if you want one publicly downloadable, then link it intentionally.
- Tune case-study copy for specific job searches or target industries.
