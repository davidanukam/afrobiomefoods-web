import { defineField, defineType } from "sanity";

const cropFields = [
  defineField({ name: "name", type: "string", title: "Name" }),
  defineField({ name: "aka", type: "string", title: "Also known as" }),
  defineField({ name: "blurb", type: "text", title: "Description", rows: 3 }),
];

export const cropsPage = defineType({
  name: "cropsPage",
  title: "Our Crops",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "leafyEyebrow", title: "Leafy greens eyebrow", type: "string" }),
    defineField({ name: "leafyHeadline", title: "Leafy greens headline", type: "string" }),
    defineField({ name: "leafyIntro", title: "Leafy greens intro", type: "text", rows: 3 }),
    defineField({
      name: "leafyGreens",
      title: "Leafy greens",
      type: "array",
      of: [{ type: "object", fields: cropFields, preview: { select: { title: "name", subtitle: "aka" } } }],
    }),
    defineField({ name: "vegEyebrow", title: "Vegetables eyebrow", type: "string" }),
    defineField({ name: "vegHeadline", title: "Vegetables headline", type: "string" }),
    defineField({
      name: "vegetables",
      title: "Vegetables & pods",
      type: "array",
      of: [{ type: "object", fields: cropFields, preview: { select: { title: "name", subtitle: "aka" } } }],
    }),
    defineField({ name: "qualityEyebrow", title: "Quality eyebrow", type: "string" }),
    defineField({ name: "qualityHeadline", title: "Quality headline", type: "string" }),
    defineField({ name: "qualityBody", title: "Quality body", type: "text", rows: 4 }),
  ],
  preview: { prepare: () => ({ title: "Our Crops" }) },
});
