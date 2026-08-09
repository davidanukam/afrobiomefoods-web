import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

export const impactPage = defineType({
  name: "impactPage",
  title: "Community Impact",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "metrics",
      title: "Impact metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "number", title: "Value" }),
            defineField({ name: "suffix", type: "string", title: "Suffix", initialValue: "+" }),
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "detail", type: "text", title: "Detail", rows: 2 }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
    defineField({ name: "foodBoxEyebrow", title: "Food box eyebrow", type: "string" }),
    defineField({ name: "foodBoxHeadline", title: "Food box headline", type: "string" }),
    defineField({ name: "foodBoxBody", title: "Food box body", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "foodBoxImage", title: "Food box image", type: "image", options: { hotspot: true } }),
    defineField({ name: "sroiEyebrow", title: "SROI eyebrow", type: "string" }),
    defineField({ name: "sroiHeadline", title: "SROI headline", type: "string" }),
    defineField({ name: "sroiBody", title: "SROI body", type: "text", rows: 3 }),
    defineField({ name: "sroiCtaLabel", title: "SROI CTA label", type: "string" }),
    pageSectionsField,
  ],
  preview: { prepare: () => ({ title: "Community Impact" }) },
});
