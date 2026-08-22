import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

export const farmsPage = defineType({
  name: "farmsPage",
  title: "Farms & Facilities",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "intro", title: "Intro" },
    { name: "farms", title: "Farms & hubs" },
    { name: "processing", title: "Processing band" },
    { name: "extra", title: "Extra sections" },
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "title", title: "Title", type: "string", group: "hero" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true }, group: "hero" }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 4, group: "intro" }),
    defineField({
      name: "farms",
      title: "Farms & hubs",
      type: "array",
      group: "farms",
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
    defineField({ name: "processingHeadline", title: "Processing band headline", type: "string", group: "processing" }),
    defineField({ name: "processingBody", title: "Processing band body", type: "text", rows: 4, group: "processing" }),
    defineField({
      name: "processingImage",
      title: "Processing band image",
      type: "image",
      options: { hotspot: true },
      group: "processing",
    }),
    pageSectionsField,
  ],
  preview: { prepare: () => ({ title: "Farms & Facilities" }) },
});
