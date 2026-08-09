import { resolveImageUrl } from "./image";
import { client } from "./client";
import { isSanityConfigured } from "../env";
import {
  fallbackCropsPage,
  fallbackFarmsPage,
  fallbackGetInvolvedPage,
  fallbackHomePage,
  fallbackImpactPage,
  fallbackSiteSettings,
  fallbackStoryPage,
} from "./fallbacks";
import {
  cropsPageQuery,
  farmsPageQuery,
  getInvolvedPageQuery,
  homePageQuery,
  impactPageQuery,
  siteSettingsQuery,
  storyPageQuery,
} from "./queries";

async function fetchOrFallback<T>(
  query: string,
  fallback: T,
): Promise<T> {
  if (!isSanityConfigured()) return fallback;

  try {
    const data = await client.fetch<T | null>(query, {}, {
      next: { tags: ["sanity"], revalidate: 60 },
    });
    if (!data) return fallback;
    return { ...fallback, ...data };
  } catch (error) {
    console.error("Sanity fetch failed; using fallback content.", error);
    return fallback;
  }
}

export async function getSiteSettings() {
  return fetchOrFallback(siteSettingsQuery, fallbackSiteSettings);
}

export async function getHomePage() {
  const data = await fetchOrFallback(homePageQuery, fallbackHomePage);
  return {
    ...data,
    heroImageUrl: resolveImageUrl(data.heroImage, data.heroImageUrl || fallbackHomePage.heroImageUrl, 2000),
    involvedImageUrl: resolveImageUrl(
      data.involvedImage,
      data.involvedImageUrl || fallbackHomePage.involvedImageUrl,
    ),
  };
}

export async function getStoryPage() {
  const data = await fetchOrFallback(storyPageQuery, fallbackStoryPage);
  return {
    ...data,
    heroImageUrl: resolveImageUrl(data.heroImage, data.heroImageUrl || fallbackStoryPage.heroImageUrl),
    cultureImageUrl: resolveImageUrl(
      data.cultureImage,
      data.cultureImageUrl || fallbackStoryPage.cultureImageUrl,
    ),
  };
}

export async function getFarmsPage() {
  const data = await fetchOrFallback(farmsPageQuery, fallbackFarmsPage);
  const farms = (data.farms || fallbackFarmsPage.farms).map((farm, i) => {
    const fallback = fallbackFarmsPage.farms[i];
    return {
      ...fallback,
      ...farm,
      imageUrl: resolveImageUrl(
        farm.image,
        farm.imageUrl || fallback?.imageUrl,
      ),
    };
  });

  return {
    ...data,
    farms,
    heroImageUrl: resolveImageUrl(
      data.heroImage,
      data.heroImageUrl || farms[0]?.imageUrl || fallbackFarmsPage.heroImageUrl,
    ),
    processingImageUrl: resolveImageUrl(
      data.processingImage,
      data.processingImageUrl || fallbackFarmsPage.processingImageUrl,
    ),
  };
}

export async function getCropsPage() {
  const data = await fetchOrFallback(cropsPageQuery, fallbackCropsPage);
  return {
    ...data,
    heroImageUrl: resolveImageUrl(data.heroImage, data.heroImageUrl || fallbackCropsPage.heroImageUrl),
    leafyGreens: data.leafyGreens?.length ? data.leafyGreens : fallbackCropsPage.leafyGreens,
    vegetables: data.vegetables?.length ? data.vegetables : fallbackCropsPage.vegetables,
  };
}

export async function getImpactPage() {
  const data = await fetchOrFallback(impactPageQuery, fallbackImpactPage);
  return {
    ...data,
    heroImageUrl: resolveImageUrl(data.heroImage, data.heroImageUrl || fallbackImpactPage.heroImageUrl),
    foodBoxImageUrl: resolveImageUrl(
      data.foodBoxImage,
      data.foodBoxImageUrl || fallbackImpactPage.foodBoxImageUrl,
    ),
    metrics: data.metrics?.length ? data.metrics : fallbackImpactPage.metrics,
  };
}

export async function getGetInvolvedPage() {
  const data = await fetchOrFallback(
    getInvolvedPageQuery,
    fallbackGetInvolvedPage,
  );
  return {
    ...data,
    heroImageUrl: resolveImageUrl(
      data.heroImage,
      data.heroImageUrl || fallbackGetInvolvedPage.heroImageUrl,
    ),
    donationTiers: data.donationTiers?.length
      ? data.donationTiers
      : fallbackGetInvolvedPage.donationTiers,
  };
}
