#!/usr/bin/env node
/**
 * Interactive helper: prints Sanity setup steps.
 * Project creation requires a Sanity login in the browser.
 */

console.log(`
AfroBiome Foods - Sanity setup
==============================

1) Create / log in to a Sanity project
   npx sanity login
   Then open https://www.sanity.io/manage and create "AfroBiome Foods"
   (or: npx sanity init -y --project-name "AfroBiome Foods" --dataset production --organization YOUR_ORG_ID --env .env.local)

2) Copy values into .env.local (from .env.example):
   NEXT_PUBLIC_SANITY_PROJECT_ID
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_WRITE_TOKEN   (API → Tokens → Editor)
   SANITY_REVALIDATE_SECRET (any long random string)

3) CORS: sanity.io/manage → API → CORS origins
   Add http://localhost:3000 (Allow credentials) + your production URL

4) Seed content + images from the current site copy:
   npm run seed

5) Edit content:
   npm run dev
   Open http://localhost:3000/studio

6) Live updates: add a Sanity webhook to
   https://YOUR_DOMAIN/api/revalidate?secret=YOUR_SANITY_REVALIDATE_SECRET

Until step 2 is done, the public site keeps using fallback content (no breakage).
`);
