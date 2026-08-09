# AfroBiome Foods Website

Nonprofit marketing site for AfroBiome Foods Incorporated — cultivating culturally relevant African vegetables for Black and African diaspora communities in Southwestern Ontario.

## Design

See [DESIGN-BRIEF.md](./DESIGN-BRIEF.md) for colors, typography, motion, and section wireframes.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Fraunces + Figtree
- **Sanity CMS** for editable text and images (`/studio`)

## Develop

```bash
npm install
cp .env.example .env.local   # then fill Sanity values (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Until Sanity env vars are set, the site uses fallback content from `src/content/site.ts`.

## Pages

| Path | Content |
|---|---|
| `/` | Home |
| `/story` | Our Story |
| `/farms` | Farms & Facilities |
| `/crops` | Our Crops |
| `/impact` | Community Impact |
| `/get-involved` | Volunteer / Donate / Partner |
| `/studio` | Sanity Studio (editors only) |
| `/api/revalidate` | Publish webhook |

---

## Content editing (Sanity)

### One-time setup

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage).
2. Copy the **Project ID** into `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_WRITE_TOKEN=           # API → Tokens → Editor (for seeding)
SANITY_REVALIDATE_SECRET=         # any long random string
```

3. In Sanity → **API → CORS origins**, add:
   - `http://localhost:3000` (Allow credentials)
   - your production domain (Allow credentials)
4. Seed current website copy + images:

```bash
npm run seed
```

5. Open Studio: [http://localhost:3000/studio](http://localhost:3000/studio) and sign in with your Sanity account.

### How staff edit the live site

1. Go to `/studio` (or your deployed `https://yoursite.com/studio`).
2. Open a document: **Site Settings**, **Home Page**, **Our Story**, **Farms**, **Crops**, **Impact**, or **Get Involved**.
3. Change text fields and/or upload images.
4. Click **Publish**.
5. The public site refreshes via the revalidate webhook (see below)—usually within seconds. Without the webhook, content still updates within ~60s (ISR) or on the next deploy.

### Live updates (webhook)

In Sanity → **API → Webhooks**, create a webhook:

| Setting | Value |
|---|---|
| URL | `https://YOUR_DOMAIN/api/revalidate?secret=YOUR_SANITY_REVALIDATE_SECRET` |
| Dataset | `production` |
| Trigger on | Create, Update, Delete |
| Projection | (optional) leave default |

Use the same secret as `SANITY_REVALIDATE_SECRET` in `.env.local` / hosting env.

### Content model

Singletons (one document each), editable in Studio:

- `siteSettings` — brand name, emails, locations, footer/newsletter
- `homePage` — hero, problem, pillars, involved CTA + images
- `storyPage`, `farmsPage`, `cropsPage`, `impactPage`, `getInvolvedPage`

Fallback copy lives in `src/content/site.ts` and `src/sanity/lib/fallbacks.ts` if Sanity is offline or unset.
