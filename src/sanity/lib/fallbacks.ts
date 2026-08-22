import {
  donationTiers,
  farms,
  images,
  impactMetrics,
  leafyGreens,
  pillars,
  site,
  storyPillars,
  vegetables,
} from "@/content/site";

export const fallbackSiteSettings = {
  name: site.name,
  legalName: site.legalName,
  tagline: site.tagline,
  subhead: site.subhead,
  email: site.email,
  partnerEmail: site.partnerEmail,
  locations: site.locations,
  navLinks: null as { label: string; href: string }[] | null,
  newsletterHeading: "Stay rooted",
  newsletterBody:
    "Harvest updates, volunteer days, and recipes that taste like home.",
  footerBlurb:
    "A nonprofit cultivating culturally relevant African vegetables for Black and African diaspora communities in Southwestern Ontario.",
};

export const fallbackHomePage = {
  heroBrand: site.name,
  heroHeadline: site.tagline,
  heroSubhead: site.subhead,
  heroImage: null,
  heroImageUrl: images.hero,
  heroCtaLabel: "Support Our Mission",
  heroSecondaryCtaLabel: "Our Story",
  problemEyebrow: "The gap we close",
  problemHeadline:
    "Fresh African vegetables, grown here—not shipped wilted from afar.",
  problemBody:
    "Traditional grocery stores in Canada often lack fresh, high-quality, affordable African vegetables like Ugu, Amaranth, Jute Mallow, and Garden Eggs. AfroBiome Foods bridges that gap from seed to plate as a nonprofit initiative—cultivating heritage crops in Ontario soil for diaspora communities who deserve food that tastes like home.",
  pillars,
  cropsEyebrow: "Heritage crops",
  cropsHeadline: "Greens that connect us",
  impactEyebrow: "Community impact",
  impactHeadline: "Grown for families. Shared with purpose.",
  involvedEyebrow: "Get involved",
  involvedHeadline: "There is a place for you in our circle.",
  involvedBody:
    "Volunteer in the soil, fund a family's food box, or partner with us to expand food justice across Southwestern Ontario.",
  involvedImage: null,
  involvedImageUrl: images.involved,
  sections: [] as import("@/components/SectionRenderer").CmsSection[],
};

export const fallbackStoryPage = {
  eyebrow: "Our Story",
  title: "Rooted in Heritage, Growing for the Future",
  subtitle:
    "Food is more than sustenance—it is memory, medicine, and a direct connection to where we come from.",
  heroImage: null,
  heroImageUrl: images.story,
  intro: [
    "For the vibrant African and Black diaspora communities in Southwestern Ontario, accessing fresh, high-quality, culturally relevant vegetables hasn't always been easy. Too often, traditional greens like Efo Shoko, Ewedu, and Gboma arrive thousands of miles away—wilted, heavily preserved, or priced out of reach.",
    "At AfroBiome Foods Incorporated, we decided it was time to change that story. We are a nonprofit reclaiming food sovereignty by cultivating African-based, culturally significant vegetables right here in Ontario soil—from seed to harvest, processing to distribution.",
  ],
  missionEyebrow: "Mission",
  missionHeadline: "Food justice, sovereignty, and wellness",
  missionBody:
    "To foster food justice, sovereignty, and wellness within African and Black diaspora communities by providing direct, affordable access to fresh, locally grown, and culturally relevant vegetables.",
  visionEyebrow: "Vision",
  visionHeadline: "Never compromise on heritage foods",
  visionBody:
    "A future where every member of our community has a reliable, affordable connection to the traditional foods that nourish both body and soul—grown sustainably, processed safely, and shared generously.",
  pillarsEyebrow: "The pillars that guide us",
  pillarsHeadline: "Culture, land, and care—held together.",
  pillars: storyPillars,
  cultureEyebrow: "Culturally relevant foods",
  cultureHeadline: "Food is medicine—and identity.",
  cultureBody:
    "Food banks and commercial groceries rarely stock the greens our communities cook with. By growing them locally, we close that gap with dignity: fresh, familiar, and affordable.",
  cultureImage: null,
  cultureImageUrl: images.crops,
  sections: [] as import("@/components/SectionRenderer").CmsSection[],
};

export const fallbackFarmsPage = {
  eyebrow: "Farms & Facilities",
  title: "From Our Fields to Your Table",
  subtitle:
    "A local food pipeline spanning rural fields and an urban processing hub—every leaf handled with care.",
  heroImage: null,
  heroImageUrl: farms[0].image,
  intro:
    "By managing every step of the journey, we ensure that every leaf, pod, and vegetable is handled with respect and hygiene—from rich rural soils to a dedicated London processing hub.",
  farms: farms.map((f) => ({
    ...f,
    image: null,
    imageUrl: f.image,
  })),
  processingHeadline: "Why local processing matters",
  processingBody:
    "Delicate specialty greens lose quality on long supply chains. By washing and packaging on Hamilton Road, we keep freshness high, reduce waste, and extend shelf life without synthetic preservatives.",
  processingImage: null,
  processingImageUrl: images.crops,
  sections: [] as import("@/components/SectionRenderer").CmsSection[],
};

export const fallbackCropsPage = {
  eyebrow: "Our Crops",
  title: "Produce & Products",
  subtitle:
    "Heritage leafy greens and vegetables grown with care across our London and Aylmer farms.",
  heroImage: null,
  heroImageUrl: images.crops,
  leafyEyebrow: "Heritage leafy greens",
  leafyHeadline: "The heart of our cultivation",
  leafyIntro:
    "Nutrient-dense building blocks of traditional African cooking—grown for flavour and culture, not long-haul shelf life.",
  leafyGreens: leafyGreens.map((c) => ({ ...c, image: null, imageUrl: undefined as string | undefined })),
  vegEyebrow: "Vegetables & pods",
  vegHeadline: "Sun-loving crops from Pleasant Valley",
  vegetables: vegetables.map((c) => ({ ...c, image: null, imageUrl: undefined as string | undefined })),
  qualityEyebrow: "Quality standards",
  qualityHeadline: "Chemical-free growing. Careful packing.",
  qualityBody:
    "We farm with an organic-first mentality—no synthetic preservatives on the plate. At Hamilton Road, greens are triple-washed and packaged to lock in moisture and traditional flavour from field to family table.",
  sections: [] as import("@/components/SectionRenderer").CmsSection[],
};

export const fallbackImpactPage = {
  eyebrow: "Community Impact",
  title: "Impact You Can Taste",
  subtitle:
    "Social return for donors, partners, and grant-makers—measured in meals, families, and shared labour.",
  heroImage: null,
  heroImageUrl: images.impact,
  metrics: impactMetrics,
  foodBoxEyebrow: "Food Box Program",
  foodBoxHeadline: "Culturally Relevant Food Boxes",
  foodBoxBody: [
    "Low-income families in London and surrounding areas access subsidized or free baskets of heritage vegetables—fresh from our farms, packed at Hamilton Road, and delivered with dignity.",
    "We partner with local food banks, Black-led community groups, and cultural associations to widen access across Southwestern Ontario.",
  ],
  foodBoxImage: null,
  foodBoxImageUrl: images.involved,
  sroiEyebrow: "Social return",
  sroiHeadline:
    "Every $10 grows roughly 3 pounds of heritage vegetables",
  sroiBody:
    "Donations cultivate and distribute fresh African heritage vegetables directly to diaspora families—shortening food miles, boosting local agriculture, and preserving culinary legacy.",
  sroiCtaLabel: "Support our mission",
  sections: [] as import("@/components/SectionRenderer").CmsSection[],
};

export const fallbackGetInvolvedPage = {
  eyebrow: "Get Involved",
  title: "Grow with us",
  subtitle:
    "Whether you want to get your hands dirty, fund a family's food supply, or partner for food justice—there is a place for you.",
  heroImage: null,
  heroImageUrl: images.involved,
  volunteerTitle: "Volunteer",
  volunteerBody:
    "Get your hands dirty at Clarke Road (London) or Pleasant Valley (Aylmer)—planting, weeding, harvesting—or help sort and pack at Hamilton Road. No farming experience required.",
  volunteerBullets: [
    "On the farms: seasonal planting & harvest",
    "At the hub: wash, sort & pack food boxes",
    "In community: deliveries & learning circles",
  ],
  volunteerCtaLabel: "Apply to volunteer →",
  donateTitle: "Donate",
  donateBody:
    "Every dollar fuels food sovereignty—seeds, tools, greenhouse heat, and subsidized boxes for households who need them most.",
  donationTiers,
  donateCtaLabel: "Donate securely",
  partnerTitle: "Partner",
  partnerBody:
    "Collaborate with municipal programs, food banks, housing providers, corporate sponsors, and research partners to strengthen inclusive food systems in London and beyond.",
  partnerBullets: [
    "Supply culturally specific greens to pantries",
    "Sponsor a harvest field or delivery route",
    "Corporate volunteer days at Clarke Road",
  ],
  partnerCtaLabel: "Inquire about partnering →",
  newsletterHeadline: "Stay rooted in the community",
  newsletterBody:
    "Seasonal harvest updates, volunteer opportunities, and traditional recipes that taste like home.",
  newsletterCtaLabel: "Join our circle",
  sections: [] as import("@/components/SectionRenderer").CmsSection[],
};
