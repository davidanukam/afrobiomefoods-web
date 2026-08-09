import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_id == "siteSettings"][0]{
  name, legalName, tagline, subhead, email, partnerEmail,
  locations[]{name, city, role},
  newsletterHeading, newsletterBody, footerBlurb
}`;

export const homePageQuery = groq`*[_id == "homePage"][0]{
  heroBrand, heroHeadline, heroSubhead, heroImage, heroCtaLabel, heroSecondaryCtaLabel,
  problemEyebrow, problemHeadline, problemBody,
  pillars[]{title, body},
  cropsEyebrow, cropsHeadline,
  impactEyebrow, impactHeadline,
  involvedEyebrow, involvedHeadline, involvedBody, involvedImage
}`;

export const storyPageQuery = groq`*[_id == "storyPage"][0]{
  eyebrow, title, subtitle, heroImage, intro,
  missionEyebrow, missionHeadline, missionBody,
  visionEyebrow, visionHeadline, visionBody,
  pillarsEyebrow, pillarsHeadline, pillars[]{title, body},
  cultureEyebrow, cultureHeadline, cultureBody, cultureImage
}`;

export const farmsPageQuery = groq`*[_id == "farmsPage"][0]{
  eyebrow, title, subtitle, heroImage, intro,
  farms[]{slug, name, city, vibe, grows, note, image},
  processingHeadline, processingBody, processingImage
}`;

export const cropsPageQuery = groq`*[_id == "cropsPage"][0]{
  eyebrow, title, subtitle, heroImage,
  leafyEyebrow, leafyHeadline, leafyIntro,
  leafyGreens[]{name, aka, blurb},
  vegEyebrow, vegHeadline,
  vegetables[]{name, aka, blurb},
  qualityEyebrow, qualityHeadline, qualityBody
}`;

export const impactPageQuery = groq`*[_id == "impactPage"][0]{
  eyebrow, title, subtitle, heroImage,
  metrics[]{value, suffix, label, detail},
  foodBoxEyebrow, foodBoxHeadline, foodBoxBody, foodBoxImage,
  sroiEyebrow, sroiHeadline, sroiBody, sroiCtaLabel
}`;

export const getInvolvedPageQuery = groq`*[_id == "getInvolvedPage"][0]{
  eyebrow, title, subtitle, heroImage,
  volunteerTitle, volunteerBody, volunteerBullets, volunteerCtaLabel,
  donateTitle, donateBody, donationTiers[]{amount, result}, donateCtaLabel,
  partnerTitle, partnerBody, partnerBullets, partnerCtaLabel,
  newsletterHeadline, newsletterBody, newsletterCtaLabel
}`;
