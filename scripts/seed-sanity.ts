/**
 * Seed Sanity with current site copy and Unsplash images.
 *
 * Prerequisites:
 * 1. Create a project at https://www.sanity.io/manage
 * 2. Add CORS origin http://localhost:3000 (Allow credentials)
 * 3. Create an API token with Editor permissions
 * 4. Fill .env.local (see .env.example)
 * 5. Run: npm run seed
 */

import { createClient } from "@sanity/client";
import {
  fallbackCropsPage,
  fallbackFarmsPage,
  fallbackGetInvolvedPage,
  fallbackHomePage,
  fallbackImpactPage,
  fallbackSiteSettings,
  fallbackStoryPage,
} from "../src/sanity/lib/fallbacks";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in env.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function uploadFromUrl(url: string, filename: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  return client.assets.upload("image", buffer, { filename });
}

async function imageField(url: string | undefined, filename: string) {
  if (!url) return undefined;
  const asset = await uploadFromUrl(url, filename);
  console.log(`  uploaded ${filename}`);
  return { _type: "image" as const, asset: { _type: "reference" as const, _ref: asset._id } };
}

async function seed() {
  console.log(`Seeding Sanity project ${projectId} / ${dataset}...`);

  const homeHero = await imageField(fallbackHomePage.heroImageUrl, "home-hero.jpg");
  const homeInvolved = await imageField(
    fallbackHomePage.involvedImageUrl,
    "home-involved.jpg",
  );
  const storyHero = await imageField(fallbackStoryPage.heroImageUrl, "story-hero.jpg");
  const storyCulture = await imageField(
    fallbackStoryPage.cultureImageUrl,
    "story-culture.jpg",
  );
  const farmImages: Array<
    | { _type: "image"; asset: { _type: "reference"; _ref: string } }
    | undefined
  > = [];
  for (const farm of fallbackFarmsPage.farms) {
    farmImages.push(await imageField(farm.imageUrl, `farm-${farm.slug}.jpg`));
  }
  const farmsHero = farmImages[0];
  const processingImage = await imageField(
    fallbackFarmsPage.processingImageUrl,
    "farms-processing.jpg",
  );
  const cropsHero = await imageField(fallbackCropsPage.heroImageUrl, "crops-hero.jpg");
  const impactHero = await imageField(
    fallbackImpactPage.heroImageUrl,
    "impact-hero.jpg",
  );
  const foodBoxImage = await imageField(
    fallbackImpactPage.foodBoxImageUrl,
    "impact-foodbox.jpg",
  );
  const involvedHero = await imageField(
    fallbackGetInvolvedPage.heroImageUrl,
    "involved-hero.jpg",
  );

  const docs = [
    {
      _id: "siteSettings",
      _type: "siteSettings",
      ...fallbackSiteSettings,
    },
    {
      _id: "homePage",
      _type: "homePage",
      ...omitUrls(fallbackHomePage),
      heroImage: homeHero,
      involvedImage: homeInvolved,
    },
    {
      _id: "storyPage",
      _type: "storyPage",
      ...omitUrls(fallbackStoryPage),
      heroImage: storyHero,
      cultureImage: storyCulture,
    },
    {
      _id: "farmsPage",
      _type: "farmsPage",
      ...omitUrls(fallbackFarmsPage),
      heroImage: farmsHero,
      processingImage,
      farms: fallbackFarmsPage.farms.map((farm, i) => ({
        _key: farm.slug,
        slug: farm.slug,
        name: farm.name,
        city: farm.city,
        vibe: farm.vibe,
        grows: farm.grows,
        note: farm.note,
        image: farmImages[i],
      })),
    },
    {
      _id: "cropsPage",
      _type: "cropsPage",
      ...omitUrls(fallbackCropsPage),
      heroImage: cropsHero,
      leafyGreens: withKeys(fallbackCropsPage.leafyGreens, "name"),
      vegetables: withKeys(fallbackCropsPage.vegetables, "name"),
    },
    {
      _id: "impactPage",
      _type: "impactPage",
      ...omitUrls(fallbackImpactPage),
      heroImage: impactHero,
      foodBoxImage,
      metrics: withKeys(fallbackImpactPage.metrics, "label"),
    },
    {
      _id: "getInvolvedPage",
      _type: "getInvolvedPage",
      ...omitUrls(fallbackGetInvolvedPage),
      heroImage: involvedHero,
      donationTiers: withKeys(fallbackGetInvolvedPage.donationTiers, "amount"),
    },
  ];

  const tx = client.transaction();
  for (const doc of docs) {
    tx.createOrReplace(doc as { _id: string; _type: string });
  }
  await tx.commit();
  console.log("Seed complete. Open /studio to edit content.");
}

function omitUrls<T extends Record<string, unknown>>(obj: T) {
  const next = { ...obj };
  for (const key of Object.keys(next)) {
    if (key.endsWith("ImageUrl") || key === "imageUrl") {
      delete next[key];
    }
  }
  // Remove nested imageUrl on farms if present via shallow — handled separately
  if ("farms" in next) delete next.farms;
  if ("image" in next && next.image === null) delete next.image;
  for (const key of Object.keys(next)) {
    if (next[key] === null) delete next[key];
  }
  return next;
}

function withKeys<T extends Record<string, unknown>>(
  items: T[],
  keyField: keyof T,
) {
  return items.map((item) => ({
    ...item,
    _key: String(item[keyField])
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .slice(0, 40),
  }));
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
