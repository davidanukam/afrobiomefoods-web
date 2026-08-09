import { defineField, defineType } from "sanity";

export const farmsPage = defineType({
  name: "farmsPage",
  title: "Farms & Facilities",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 4 }),
    defineField({
      name: "farms",
      title: "Farms & hubs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "slug", type: "string", title: "Slug / anchor id" }),
            defineField({ name: "name", type: "string", title: "Name" }),
            defineField({ name: "city", type: "string", title: "City" }),
            defineField({ name: "vibe", type: "string", title: "Vibe" }),
            defineField({ name: "grows", type: "text", title: "What we grow", rows: 3 }),
            defineField({ name: "note", type: "text", title: "Note", rows: 3 }),
            defineField({ name: "image", type: "image", title: "Image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "name", subtitle: "city", media: "image" } },
        },
      ],
    }),
    defineField({ name: "processingHeadline", title: "Processing band headline", type: "string" }),
    defineField({ name: "processingBody", title: "Processing band body", type: "text", rows: 4 }),
    defineField({
      name: "processingImage",
      title: "Processing band image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: { prepare: () => ({ title: "Farms & Facilities" }) },
});
