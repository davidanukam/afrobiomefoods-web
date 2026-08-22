import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

export const directorsPage = defineType({
  name: "directorsPage",
  title: "Directors",
  type: "document",
  groups: [
    { name: "hero", title: "Intro", default: true },
    { name: "directors", title: "Directors" },
    { name: "extra", title: "Extra sections" },
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "title", title: "Title", type: "string", group: "hero" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 3, group: "hero" }),
    defineField({
      name: "heroImage",
      title: "Optional header image",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "people",
      title: "Directors",
      description: "Add, remove, or reorder leadership profiles. Photos, bios, and contact details appear on /directors.",
      type: "array",
      group: "directors",
      of: [
        {
          type: "object",
          name: "director",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
            defineField({ name: "role", title: "Title / role", type: "string", validation: (r) => r.required() }),
            defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
            defineField({
              name: "photo",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "emails",
              title: "Emails",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({ name: "phone", title: "Phone", type: "string" }),
          ],
          preview: {
            select: { title: "name", subtitle: "role", media: "photo" },
          },
        },
      ],
    }),
    pageSectionsField,
  ],
  preview: { prepare: () => ({ title: "Directors" }) },
});
