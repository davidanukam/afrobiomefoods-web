import type { CmsSection } from "@/components/SectionRenderer";
import { resolveImageUrl } from "./image";
import { client } from "./client";
import { isSanityConfigured } from "../env";
import { nav as defaultNav } from "@/content/site";
import {
  fallbackCropsPage,
  fallbackDirectorsPage,
  fallbackFarmsPage,
  fallbackGetInvolvedPage,
  fallbackHomePage,
  fallbackImpactPage,
  fallbackSiteSettings,
  fallbackStoryPage,
} from "./fallbacks";
import {
  cropsPageQuery,
  customPageBySlugQuery,
  customPageSlugsQuery,
  directorsPageQuery,
  farmsPageQuery,
  getInvolvedPageQuery,
  homePageQuery,
  impactPageQuery,
  navPagesQuery,
  siteSettingsQuery,
  storyPageQuery,
} from "./queries";

const RESERVED_SLUGS = new Set([
  "story",
  "farms",
  "crops",
  "impact",
  "get-involved",
  "directors",
  "studio",
  "api",
]);

async function fetchOrFallback<T>(
  query: string,
  fallback: T,
  params: Record<string, unknown> = {},
): Promise<T> {
  if (!isSanityConfigured()) return fallback;

  try {
    const data = await client.fetch<T | null>(query, params, {
      next: { tags: ["sanity"], revalidate: 60 },
    });
    if (!data) return fallback;
    return { ...fallback, ...data };
  } catch (error) {
    console.error("Sanity fetch failed; using fallback content.", error);
    return fallback;
  }
}

function mapCrops(
  items:
    | Array<{
        name: string;
        aka: string;
        blurb: string;
        image?: unknown;
        imageUrl?: string;
      }>
    | undefined,
  fallback: typeof fallbackCropsPage.leafyGreens,
) {
  const source = items?.length ? items : fallback;
  return source.map((crop, i) => ({
    ...fallback[i],
    ...crop,
    imageUrl: resolveImageUrl(crop.image as never, crop.imageUrl),
  }));
}

export async function getSiteSettings() {
  return fetchOrFallback(siteSettingsQuery, fallbackSiteSettings);
}

export async function getNavLinks() {
  const settings = await getSiteSettings();
  const manual = settings.navLinks?.filter((l) => l?.label && l?.href) || [];

  let autoNav: { label: string; href: string }[] = [];
  if (isSanityConfigured()) {
    try {
      autoNav =
        (await client.fetch(navPagesQuery, {}, {
          next: { tags: ["sanity"], revalidate: 60 },
        })) || [];
    } catch {
      autoNav = [];
    }
  }

  if (manual.length) {
    const hrefs = new Set(manual.map((l) => l.href));
    return [
      ...manual,
      ...autoNav.filter((l) => !hrefs.has(l.href)),
    ];
  }

  const hrefs = new Set(defaultNav.map((l) => l.href));
  return [
    ...defaultNav,
    ...autoNav.filter((l) => !hrefs.has(l.href)),
  ];
}

export async function getHomePage() {
  const data = await fetchOrFallback(homePageQuery, fallbackHomePage);
  return {
    ...data,
    heroImageUrl: resolveImageUrl(
      data.heroImage,
      data.heroImageUrl || fallbackHomePage.heroImageUrl,
      2000,
    ),
    involvedImageUrl: resolveImageUrl(
      data.involvedImage,
      data.involvedImageUrl || fallbackHomePage.involvedImageUrl,
    ),
    sections: (data.sections || []) as CmsSection[],
  };
}

export async function getStoryPage() {
  const data = await fetchOrFallback(storyPageQuery, fallbackStoryPage);
  return {
    ...data,
    heroImageUrl: resolveImageUrl(
      data.heroImage,
      data.heroImageUrl || fallbackStoryPage.heroImageUrl,
    ),
    cultureImageUrl: resolveImageUrl(
      data.cultureImage,
      data.cultureImageUrl || fallbackStoryPage.cultureImageUrl,
    ),
    sections: (data.sections || []) as CmsSection[],
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
    sections: (data.sections || []) as CmsSection[],
  };
}

export async function getCropsPage() {
  const data = await fetchOrFallback(cropsPageQuery, fallbackCropsPage);
  return {
    ...data,
    heroImageUrl: resolveImageUrl(
      data.heroImage,
      data.heroImageUrl || fallbackCropsPage.heroImageUrl,
    ),
    leafyGreens: mapCrops(data.leafyGreens, fallbackCropsPage.leafyGreens),
    vegetables: mapCrops(data.vegetables, fallbackCropsPage.vegetables),
    sections: (data.sections || []) as CmsSection[],
  };
}

export async function getImpactPage() {
  const data = await fetchOrFallback(impactPageQuery, fallbackImpactPage);
  return {
    ...data,
    heroImageUrl: resolveImageUrl(
      data.heroImage,
      data.heroImageUrl || fallbackImpactPage.heroImageUrl,
    ),
    foodBoxImageUrl: resolveImageUrl(
      data.foodBoxImage,
      data.foodBoxImageUrl || fallbackImpactPage.foodBoxImageUrl,
    ),
    metrics: data.metrics?.length ? data.metrics : fallbackImpactPage.metrics,
    sections: (data.sections || []) as CmsSection[],
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
    sections: (data.sections || []) as CmsSection[],
  };
}

export async function getDirectorsPage() {
  const data = await fetchOrFallback(directorsPageQuery, fallbackDirectorsPage);
  const fallbackPeople = fallbackDirectorsPage.people;
  const people = (data.people?.length ? data.people : fallbackPeople).map(
    (person, i) => {
      const fallback = fallbackPeople[i];
      return {
        ...fallback,
        ...person,
        emails: person.emails?.length ? person.emails : fallback?.emails || [],
        photoUrl: resolveImageUrl(
          person.photo,
          person.photoUrl || fallback?.photoUrl,
          1200,
        ),
      };
    },
  );

  return {
    ...data,
    people,
    heroImageUrl: resolveImageUrl(
      data.heroImage,
      data.heroImageUrl || fallbackDirectorsPage.heroImageUrl,
    ),
    sections: (data.sections || []) as CmsSection[],
  };
}

export async function getCustomPage(slug: string) {
  if (!slug || RESERVED_SLUGS.has(slug) || !isSanityConfigured()) {
    return null;
  }

  try {
    const data = await client.fetch(customPageBySlugQuery, { slug }, {
      next: { tags: ["sanity"], revalidate: 60 },
    });
    if (!data) return null;
    return {
      ...data,
      sections: (data.sections || []) as CmsSection[],
    };
  } catch (error) {
    console.error("Custom page fetch failed", error);
    return null;
  }
}

export async function getCustomPageSlugs() {
  if (!isSanityConfigured()) return [];
  try {
    const rows =
      (await client.fetch(customPageSlugsQuery, {}, {
        next: { tags: ["sanity"], revalidate: 60 },
      })) || [];
    return rows
      .map((r: { slug?: string }) => r.slug)
      .filter((slug: string | undefined): slug is string =>
        Boolean(slug && !RESERVED_SLUGS.has(slug)),
      );
  } catch {
    return [];
  }
}
