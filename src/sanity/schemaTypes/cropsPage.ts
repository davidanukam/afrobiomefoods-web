import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

const cropFields = [
  defineField({ name: "name", type: "string", title: "Name", validation: (r) => r.required() }),
  defineField({ name: "aka", type: "string", title: "Also known as" }),
  defineField({ name: "blurb", type: "text", title: "Description", rows: 3 }),
  defineField({ name: "image", type: "image", title: "Card image", options: { hotspot: true } }),
];

export const cropsPage = defineType({
  name: "cropsPage",
  title: "Our Crops",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "leafy", title: "Leafy greens" },
    { name: "vegetables", title: "Vegetables & pods" },
    { name: "quality", title: "Quality standards" },
    { name: "extra", title: "Extra sections" },
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "title", title: "Title", type: "string", group: "hero" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true }, group: "hero" }),
    defineField({ name: "leafyEyebrow", title: "Leafy greens eyebrow", type: "string", group: "leafy" }),
    defineField({ name: "leafyHeadline", title: "Leafy greens headline", type: "string", group: "leafy" }),
    defineField({ name: "leafyIntro", title: "Leafy greens intro", type: "text", rows: 3, group: "leafy" }),
    defineField({
      name: "leafyGreens",
      title: "Leafy greens",
      description: "Add, remove, or reorder crop cards. Each card can have its own image.",
      type: "array",
      group: "leafy",
      of: [
        {
          type: "object",
          fields: cropFields,
          preview: { select: { title: "name", subtitle: "aka", media: "image" } },
        },
      ],
    }),
    defineField({ name: "vegEyebrow", title: "Vegetables eyebrow", type: "string", group: "vegetables" }),
    defineField({ name: "vegHeadline", title: "Vegetables headline", type: "string", group: "vegetables" }),
    defineField({
      name: "vegetables",
      title: "Vegetables & pods",
      description: "Add, remove, or reorder produce cards.",
      type: "array",
      group: "vegetables",
      of: [
        {
          type: "object",
          fields: cropFields,
          preview: { select: { title: "name", subtitle: "aka", media: "image" } },
        },
      ],
    }),
    defineField({ name: "qualityEyebrow", title: "Quality eyebrow", type: "string", group: "quality" }),
    defineField({ name: "qualityHeadline", title: "Quality headline", type: "string", group: "quality" }),
    defineField({ name: "qualityBody", title: "Quality body", type: "text", rows: 4, group: "quality" }),
    pageSectionsField,
  ],
  preview: { prepare: () => ({ title: "Our Crops" }) },
});
