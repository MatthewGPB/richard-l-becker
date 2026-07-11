# richardlbecker.com — Astro rebuild

Static Astro site replacing the Shopify Dawn theme. Deploys anywhere, built for Vercel.

## Quick start

```bash
npm install
npm run dev      # local dev at localhost:4321
npm run build    # static output to /dist
```

## Before launch — fill these placeholders

Everything lives in **`src/config.ts`** (one file):

### Analytics (all placeholders included, disabled until an ID is pasted)
| Tracker | Config key | Where to get the ID |
|---|---|---|
| Google Tag Manager | `GTM_ID` | tagmanager.google.com |
| Google Analytics 4 | `GA4_ID` | analytics.google.com (skip if GA4 runs through GTM) |
| Meta Pixel | `META_PIXEL_ID` | Meta Events Manager |
| X Pixel | `X_PIXEL_ID` | X Ads Manager |
| TikTok Pixel | `TIKTOK_PIXEL_ID` | TikTok Ads Manager |
| Microsoft Clarity | `CLARITY_ID` | clarity.microsoft.com (free) |
| Pinterest Tag | `PINTEREST_TAG_ID` | Pinterest Ads Manager |

An empty string `""` disables a tracker entirely — nothing loads.

### Forms (Formspree)
Create two forms at formspree.io and paste the 8-char IDs:
- `NEWSLETTER_FORMSPREE_ID` — newsletter capture (home, books, about pages)
- `CONTACT_FORMSPREE_ID` — contact/inquiry form (/contact)

Both redirect to `/thanks` on success via the `_next` hidden field.

### Images (currently branded placeholders)
- `/public/covers/*.jpg` — swap in the six real cover JPGs (2:3 ratio, ~600×900+)
- `/public/author.jpg` — Rich's approved portrait
- `/public/og-default.jpg` — social share image (1200×630)

### Other
- Amazon links for The Heart Lands, The Neighborhood, and Ice Cream Man currently
  point to the author page — replace with direct ASIN links in `src/config.ts`
- Privacy policy `[DATE]` and legal review
- Amazon Attribution tags: append per-link in `src/config.ts` once created in the
  Amazon Ads console (Attribution is link-level, not a site script)

## Deploy to Vercel

```bash
# Option A — via git
git remote add origin <your-repo-url>
git push -u origin main
# then import the repo at vercel.com/new (framework auto-detected: Astro)

# Option B — Vercel CLI
npx vercel
```

Then point the `richardlbecker.com` DNS at Vercel (A record `76.76.21.21` or the
CNAME Vercel provides) and remove the domain from Shopify.

## Pages
- `/` — home (hero, featured books, pillars, confession teaser, newsletter)
- `/books` — full six-novel catalog
- `/about` — author bio
- `/contact` — Formspree inquiry form + agent link
- `/privacy-policy`
- `/thanks` — form success redirect target
