import { defineField, defineType } from "sanity";

const pillarFields = [
  defineField({ name: "title", type: "string", title: "Title" }),
  defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
];

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "heroBrand", title: "Hero brand line", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroSubhead", title: "Hero subhead", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroCtaLabel", title: "Primary CTA label", type: "string" }),
    defineField({ name: "heroSecondaryCtaLabel", title: "Secondary CTA label", type: "string" }),
    defineField({ name: "problemEyebrow", title: "Problem eyebrow", type: "string" }),
    defineField({ name: "problemHeadline", title: "Problem headline", type: "string" }),
    defineField({ name: "problemBody", title: "Problem body", type: "text", rows: 5 }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [{ type: "object", fields: pillarFields, preview: { select: { title: "title" } } }],
    }),
    defineField({ name: "cropsEyebrow", title: "Crops section eyebrow", type: "string" }),
    defineField({ name: "cropsHeadline", title: "Crops section headline", type: "string" }),
    defineField({ name: "impactEyebrow", title: "Impact eyebrow", type: "string" }),
    defineField({ name: "impactHeadline", title: "Impact headline", type: "string" }),
    defineField({ name: "involvedEyebrow", title: "Get involved eyebrow", type: "string" }),
    defineField({ name: "involvedHeadline", title: "Get involved headline", type: "string" }),
    defineField({ name: "involvedBody", title: "Get involved body", type: "text", rows: 3 }),
    defineField({
      name: "involvedImage",
      title: "Get involved image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
