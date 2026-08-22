import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

const pillarFields = [
  defineField({ name: "title", type: "string", title: "Title" }),
  defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
];

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "problem", title: "The gap we close" },
    { name: "pillars", title: "Pillars" },
    { name: "crops", title: "Heritage crops" },
    { name: "impact", title: "Community impact" },
    { name: "involved", title: "Get involved" },
    { name: "extra", title: "Extra sections" },
  ],
  fields: [
    defineField({ name: "heroBrand", title: "Hero brand line", type: "string", group: "hero" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string", group: "hero" }),
    defineField({ name: "heroSubhead", title: "Hero subhead", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true }, group: "hero" }),
    defineField({ name: "heroCtaLabel", title: "Primary CTA label", type: "string", group: "hero" }),
    defineField({ name: "heroSecondaryCtaLabel", title: "Secondary CTA label", type: "string", group: "hero" }),
    defineField({ name: "problemEyebrow", title: "Problem eyebrow", type: "string", group: "problem" }),
    defineField({ name: "problemHeadline", title: "Problem headline", type: "string", group: "problem" }),
    defineField({ name: "problemBody", title: "Problem body", type: "text", rows: 5, group: "problem" }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      group: "pillars",
      of: [{ type: "object", fields: pillarFields, preview: { select: { title: "title" } } }],
    }),
    defineField({ name: "cropsEyebrow", title: "Crops section eyebrow", type: "string", group: "crops" }),
    defineField({ name: "cropsHeadline", title: "Crops section headline", type: "string", group: "crops" }),
    defineField({ name: "impactEyebrow", title: "Impact eyebrow", type: "string", group: "impact" }),
    defineField({ name: "impactHeadline", title: "Impact headline", type: "string", group: "impact" }),
    defineField({ name: "involvedEyebrow", title: "Get involved eyebrow", type: "string", group: "involved" }),
    defineField({ name: "involvedHeadline", title: "Get involved headline", type: "string", group: "involved" }),
    defineField({ name: "involvedBody", title: "Get involved body", type: "text", rows: 3, group: "involved" }),
    defineField({
      name: "involvedImage",
      title: "Get involved image",
      type: "image",
      options: { hotspot: true },
      group: "involved",
    }),
    pageSectionsField,
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
