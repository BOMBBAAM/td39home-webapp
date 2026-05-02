# Project Specs — TD39 Home

## What the app does and who uses it
A Thai-language marketing website for **TD39 Home**, a construction company in Bangkok.
Visitors (homeowners) can learn about services, see portfolio work, read reviews, check pricing, and contact the company via LINE or phone.

## Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS + custom CSS variables (matching the HTML design)
- **Font:** IBM Plex Sans Thai + IBM Plex Sans (Google Fonts)
- **Backend:** None needed — this is a static marketing site
- **Hosting:** Vercel (free tier)
- **Database / Auth:** Not required

## Pages
Single page (`/`) with these sections in order:
1. **Nav** — sticky top bar with logo, links, CTA button
2. **Hero** — headline, sub-text, two CTA buttons, stats bar (200+ projects, 10+ years, 98% satisfaction)
3. **Services** — 4 cards: สร้างบ้าน, รีโนเวท/ต่อเติม, ตรวจบ้าน/คอนโด, ออกแบบ
4. **Portfolio** — 5 image placeholder boxes in a grid
5. **Reviews** — 2 customer review cards
6. **Pricing** — 3 price cards (featured: สร้างบ้าน, รีโนเวท, ตรวจบ้าน)
7. **Why Us** — 4 promise items with checkmarks
8. **CTA** — dark section with LINE and phone buttons
9. **Footer** — logo, contact info, copyright

## Data / External Services
- Google Fonts (IBM Plex Sans Thai + IBM Plex Sans)
- LINE link: `https://line.me/ti/p/~@td39home`
- Phone: `080-000-0000` (placeholder)

## What "done" looks like
- `npm run build` passes with no TypeScript errors
- `npm run dev` starts cleanly at `http://localhost:3000`
- The page looks identical to `td39_home_light_ibm_2.html`
- Smooth scroll, hover effects, and fade-up animations all work
- Deploys to Vercel with `vercel --prod` or a connected GitHub repo
