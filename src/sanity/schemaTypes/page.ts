import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

export const page = defineType({
  name: "page",
  title: "Custom Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL path)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
      description:
        "Becomes /your-slug. Avoid reserved paths: story, farms, crops, impact, get-involved, studio, api.",
    }),
    defineField({
      name: "description",
      title: "SEO / meta description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "includeInNav",
      title: "Show in main navigation",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "navLabel",
      title: "Nav label (optional)",
      type: "string",
      description: "Defaults to the page title if empty.",
      hidden: ({ parent }) => !parent?.includeInNav,
    }),
    pageSectionsField,
  ],
  preview: {
    select: { title: "title", slug: "slug.current", includeInNav: "includeInNav" },
    prepare: ({ title, slug, includeInNav }) => ({
      title: title || "Untitled page",
      subtitle: `/${slug || "…"}${includeInNav ? " · in nav" : ""}`,
    }),
  },
});
