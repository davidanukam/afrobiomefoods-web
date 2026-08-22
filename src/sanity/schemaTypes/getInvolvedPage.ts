import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

export const getInvolvedPage = defineType({
  name: "getInvolvedPage",
  title: "Get Involved",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "volunteer", title: "Volunteer" },
    { name: "donate", title: "Donate" },
    { name: "partner", title: "Partner" },
    { name: "newsletter", title: "Newsletter band" },
    { name: "extra", title: "Extra sections" },
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "title", title: "Title", type: "string", group: "hero" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true }, group: "hero" }),
    defineField({ name: "volunteerTitle", title: "Volunteer title", type: "string", group: "volunteer" }),
    defineField({ name: "volunteerBody", title: "Volunteer body", type: "text", rows: 4, group: "volunteer" }),
    defineField({
      name: "volunteerBullets",
      title: "Volunteer bullets",
      type: "array",
      of: [{ type: "string" }],
      group: "volunteer",
    }),
    defineField({ name: "volunteerCtaLabel", title: "Volunteer CTA label", type: "string", group: "volunteer" }),
    defineField({ name: "donateTitle", title: "Donate title", type: "string", group: "donate" }),
    defineField({ name: "donateBody", title: "Donate body", type: "text", rows: 3, group: "donate" }),
    defineField({
      name: "donationTiers",
      title: "Donation tiers",
      type: "array",
      group: "donate",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "amount", type: "string", title: "Amount" }),
            defineField({ name: "result", type: "text", title: "Result", rows: 2 }),
          ],
          preview: { select: { title: "amount", subtitle: "result" } },
        },
      ],
    }),
    defineField({ name: "donateCtaLabel", title: "Donate CTA label", type: "string", group: "donate" }),
    defineField({ name: "partnerTitle", title: "Partner title", type: "string", group: "partner" }),
    defineField({ name: "partnerBody", title: "Partner body", type: "text", rows: 4, group: "partner" }),
    defineField({
      name: "partnerBullets",
      title: "Partner bullets",
      type: "array",
      of: [{ type: "string" }],
      group: "partner",
    }),
    defineField({ name: "partnerCtaLabel", title: "Partner CTA label", type: "string", group: "partner" }),
    defineField({ name: "newsletterHeadline", title: "Bottom newsletter headline", type: "string", group: "newsletter" }),
    defineField({ name: "newsletterBody", title: "Bottom newsletter body", type: "text", rows: 2, group: "newsletter" }),
    defineField({ name: "newsletterCtaLabel", title: "Bottom newsletter CTA", type: "string", group: "newsletter" }),
    pageSectionsField,
  ],
  preview: { prepare: () => ({ title: "Get Involved" }) },
});
