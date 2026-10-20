# Money Coder — Official Corporate Website

Arabic-first RTL corporate website for Money Coder, built from the approved homepage reference supplied with the project.

## Stack

- Next.js App Router, React, and TypeScript
- Tailwind CSS 4 plus project-specific CSS
- Lucide React icons
- Next.js image optimization
- Static, serverless-friendly deployment with no database or paid integration

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality scripts

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Configuration

Website content, navigation, product demos, inquiry destination, plans, and public URL are centralized in `data/site.ts`.

- Set `NEXT_PUBLIC_SITE_URL` to override the canonical production URL.
- Internal navigation uses relative anchors.
- The temporary inquiry flow opens a GitHub issue in the official project repository because no verified business email, phone number, WhatsApp number, or booking URL was supplied.
- No booking is claimed as confirmed.

## Verified product demos

- RestaurantFlow: <https://restaurant-or-cafe-cashier.vercel.app>
- Industrial ERP: <https://industrial-contracting-project.vercel.app>

Hawally and Debit & Credit remain inquiry-only until verified URLs are supplied.

## Documentation

- [Design reference](docs/DESIGN_REFERENCE.md)
- [Implementation report](docs/IMPLEMENTATION_REPORT.md)
- [Deployment guide](docs/DEPLOYMENT.md)

Repository: <https://github.com/AhmedMohamed500/Money-Coder---WebSite>

Production: <https://money-coder-website.vercel.app>
