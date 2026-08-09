import { defineField, defineType } from "sanity";

export const getInvolvedPage = defineType({
  name: "getInvolvedPage",
  title: "Get Involved",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "volunteerTitle", title: "Volunteer title", type: "string" }),
    defineField({ name: "volunteerBody", title: "Volunteer body", type: "text", rows: 4 }),
    defineField({
      name: "volunteerBullets",
      title: "Volunteer bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "volunteerCtaLabel", title: "Volunteer CTA label", type: "string" }),
    defineField({ name: "donateTitle", title: "Donate title", type: "string" }),
    defineField({ name: "donateBody", title: "Donate body", type: "text", rows: 3 }),
    defineField({
      name: "donationTiers",
      title: "Donation tiers",
      type: "array",
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
    defineField({ name: "donateCtaLabel", title: "Donate CTA label", type: "string" }),
    defineField({ name: "partnerTitle", title: "Partner title", type: "string" }),
    defineField({ name: "partnerBody", title: "Partner body", type: "text", rows: 4 }),
    defineField({
      name: "partnerBullets",
      title: "Partner bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "partnerCtaLabel", title: "Partner CTA label", type: "string" }),
    defineField({ name: "newsletterHeadline", title: "Bottom newsletter headline", type: "string" }),
    defineField({ name: "newsletterBody", title: "Bottom newsletter body", type: "text", rows: 2 }),
    defineField({ name: "newsletterCtaLabel", title: "Bottom newsletter CTA", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Get Involved" }) },
});
