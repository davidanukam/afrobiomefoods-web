import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

export const impactPage = defineType({
  name: "impactPage",
  title: "Community Impact",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "metrics", title: "Impact metrics" },
    { name: "foodBox", title: "Food box program" },
    { name: "sroi", title: "Social return" },
    { name: "extra", title: "Extra sections" },
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "title", title: "Title", type: "string", group: "hero" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true }, group: "hero" }),
    defineField({
      name: "metrics",
      title: "Impact metrics",
      type: "array",
      group: "metrics",
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
    defineField({ name: "foodBoxEyebrow", title: "Food box eyebrow", type: "string", group: "foodBox" }),
    defineField({ name: "foodBoxHeadline", title: "Food box headline", type: "string", group: "foodBox" }),
    defineField({ name: "foodBoxBody", title: "Food box body", type: "array", of: [{ type: "text" }], group: "foodBox" }),
    defineField({ name: "foodBoxImage", title: "Food box image", type: "image", options: { hotspot: true }, group: "foodBox" }),
    defineField({ name: "sroiEyebrow", title: "SROI eyebrow", type: "string", group: "sroi" }),
    defineField({ name: "sroiHeadline", title: "SROI headline", type: "string", group: "sroi" }),
    defineField({ name: "sroiBody", title: "SROI body", type: "text", rows: 3, group: "sroi" }),
    defineField({ name: "sroiCtaLabel", title: "SROI CTA label", type: "string", group: "sroi" }),
    pageSectionsField,
  ],
  preview: { prepare: () => ({ title: "Community Impact" }) },
});
