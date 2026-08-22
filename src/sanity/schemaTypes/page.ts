import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

export const page = defineType({
  name: "page",
  title: "Custom Page",
  type: "document",
  groups: [
    { name: "details", title: "Page details", default: true },
    { name: "extra", title: "Sections" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
      group: "details",
    }),
    defineField({
      name: "slug",
      title: "Slug (URL path)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
      description:
        "Becomes /your-slug. Avoid reserved paths: story, farms, crops, impact, get-involved, directors, studio, api.",
      group: "details",
    }),
    defineField({
      name: "description",
      title: "SEO / meta description",
      type: "text",
      rows: 2,
      group: "details",
    }),
    defineField({
      name: "includeInNav",
      title: "Show in main navigation",
      type: "boolean",
      initialValue: false,
      group: "details",
    }),
    defineField({
      name: "navLabel",
      title: "Nav label (optional)",
      type: "string",
      description: "Defaults to the page title if empty.",
      hidden: ({ parent }) => !parent?.includeInNav,
      group: "details",
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
