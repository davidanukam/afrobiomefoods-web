# AfroBiome Foods Website

Nonprofit marketing site for AfroBiome Foods Incorporated, cultivating culturally relevant African vegetables for Black and African diaspora communities in Southwestern Ontario.

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
| `/directors` | Directors |
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
2. Open a document: **Site Settings**, **Home Page**, **Our Story**, **Farms**, **Crops**, **Impact**, **Get Involved**, or **Directors**.
3. Change text fields and/or upload images.
4. Click **Publish**.
5. The public site refreshes via the revalidate webhook (see below), usually within seconds. Without the webhook, content still updates within ~60s (ISR) or on the next deploy.

### Add crop / produce cards

1. Studio → **Our Crops**
2. Under **Leafy greens** or **Vegetables & pods**, click **Add item**
3. Fill name, aka, description, and optional **Card image**
4. Publish → `/crops` updates

Same “Add item” pattern works for farms, impact metrics, donation tiers, pillars, and footer locations.

### Add new sections to an existing page

Every main page has **Extra / custom sections** at the bottom. Add:

- Hero
- Text block
- **Card grid** (add as many cards as you want, with images)
- Metrics
- Image + text
- Call to action

Reorder sections by dragging. Publish when done.

### Create a brand-new page

1. Studio → **Custom Pages** → Create
2. Set **Title** and generate a **Slug** (URL becomes `/your-slug`)
3. Optionally enable **Show in main navigation**
4. Add sections (start with a Hero, then Card grids, etc.)
5. Publish

Avoid reserved slugs: `story`, `farms`, `crops`, `impact`, `get-involved`, `studio`, `api`.

You can also control nav manually in **Site Settings → Main navigation**.

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

- `siteSettings`: brand, emails, locations, nav links, footer/newsletter
- `homePage`, `storyPage`, `farmsPage`, `cropsPage`, `impactPage`, `getInvolvedPage`, `directorsPage`: each supports **Extra / custom sections**

Plus document type:

- `page`: custom pages at `/[slug]` built entirely from sections

Fallback copy lives in `src/content/site.ts` and `src/sanity/lib/fallbacks.ts` if Sanity is offline or unset.
