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

Set `NEXT_PUBLIC_SITE_URL` to the actual production URL if Vercel assigns a different hostname. The verified production URL and deployment commit are added here after deployment.

## Future custom domain

Later, add the purchased domain in Vercel Project Settings → Domains, apply Vercel's DNS records, and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS URL. Internal links need no changes because they are relative.
