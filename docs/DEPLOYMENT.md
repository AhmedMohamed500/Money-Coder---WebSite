# Deployment

## GitHub

- Repository: <https://github.com/AhmedMohamed500/Money-Coder---WebSite>
- Production branch: `main`

## Vercel

This is a standard Next.js application with no database or runtime secrets.

- Framework preset: Next.js
- Production branch: `main`
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output: Next.js default
- Preferred project name: `money-coder-website`

Verified production release:

- URL: <https://money-coder-website.vercel.app>
- Vercel deployment: `dpl_uqZKm1F2nXp2bUe12REQSDfospk7`
- Source commit: `c801c9771b6db54dea45c268e63ddb502e6194c0`
- Status: `READY`; public smoke test returned HTTP 200 with the expected title, Arabic headline, logo, and Next.js assets.

The project is connected to the GitHub repository, with `main` as the production branch. Set `NEXT_PUBLIC_SITE_URL` only if the production hostname changes.

## Future custom domain

Later, add the purchased domain in Vercel Project Settings → Domains, apply Vercel's DNS records, and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS URL. Internal links need no changes because they are relative.
