export const sectionsProjection = `sections[]{
  ...,
  cards[]{...},
  metrics[]{...}
}`;

export const siteSettingsQuery = `*[_id == "siteSettings"][0]{
  name, legalName, tagline, subhead, email, partnerEmail,
  locations[]{name, city, role},
  navLinks[]{label, href},
  newsletterHeading, newsletterBody, footerBlurb
}`;

export const navPagesQuery = `*[_type == "page" && includeInNav == true && defined(slug.current)]|order(title asc){
  title,
  "label": coalesce(navLabel, title),
  "href": "/" + slug.current
}`;

export const homePageQuery = `*[_id == "homePage"][0]{
  heroBrand, heroHeadline, heroSubhead, heroImage, heroCtaLabel, heroSecondaryCtaLabel,
  problemEyebrow, problemHeadline, problemBody,
  pillars[]{title, body},
  cropsEyebrow, cropsHeadline,
  impactEyebrow, impactHeadline,
  involvedEyebrow, involvedHeadline, involvedBody, involvedImage,
  ${sectionsProjection}
}`;

export const storyPageQuery = `*[_id == "storyPage"][0]{
  eyebrow, title, subtitle, heroImage, intro,
  missionEyebrow, missionHeadline, missionBody,
  visionEyebrow, visionHeadline, visionBody,
  pillarsEyebrow, pillarsHeadline, pillars[]{title, body},
  cultureEyebrow, cultureHeadline, cultureBody, cultureImage,
  ${sectionsProjection}
}`;

export const farmsPageQuery = `*[_id == "farmsPage"][0]{
  eyebrow, title, subtitle, heroImage, intro,
  farms[]{slug, name, city, vibe, grows, note, image},
  processingHeadline, processingBody, processingImage,
  ${sectionsProjection}
}`;

export const cropsPageQuery = `*[_id == "cropsPage"][0]{
  eyebrow, title, subtitle, heroImage,
  leafyEyebrow, leafyHeadline, leafyIntro,
  leafyGreens[]{name, aka, blurb, image},
  vegEyebrow, vegHeadline,
  vegetables[]{name, aka, blurb, image},
  qualityEyebrow, qualityHeadline, qualityBody,
  ${sectionsProjection}
}`;

export const impactPageQuery = `*[_id == "impactPage"][0]{
  eyebrow, title, subtitle, heroImage,
  metrics[]{value, suffix, label, detail},
  foodBoxEyebrow, foodBoxHeadline, foodBoxBody, foodBoxImage,
  sroiEyebrow, sroiHeadline, sroiBody, sroiCtaLabel,
  ${sectionsProjection}
}`;

export const getInvolvedPageQuery = `*[_id == "getInvolvedPage"][0]{
  eyebrow, title, subtitle, heroImage,
  volunteerTitle, volunteerBody, volunteerBullets, volunteerCtaLabel,
  donateTitle, donateBody, donationTiers[]{amount, result}, donateCtaLabel,
  partnerTitle, partnerBody, partnerBullets, partnerCtaLabel,
  newsletterHeadline, newsletterBody, newsletterCtaLabel,
  ${sectionsProjection}
}`;

export const directorsPageQuery = `*[_id == "directorsPage"][0]{
  eyebrow, title, subtitle, heroImage,
  people[]{name, role, bio, photo, emails, phone},
  ${sectionsProjection}
}`;

export const customPageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  description,
  "slug": slug.current,
  includeInNav,
  navLabel,
  ${sectionsProjection}
}`;

export const customPageSlugsQuery = `*[_type == "page" && defined(slug.current)]{"slug": slug.current}`;
