import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Brand name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "legalName", title: "Legal name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "subhead", title: "Default description", type: "text", rows: 3 }),
    defineField({ name: "email", title: "General email", type: "string" }),
    defineField({ name: "partnerEmail", title: "Partner email", type: "string" }),
    defineField({
      name: "locations",
      title: "Locations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Name" }),
            defineField({ name: "city", type: "string", title: "City" }),
            defineField({ name: "role", type: "string", title: "Role" }),
          ],
          preview: { select: { title: "name", subtitle: "city" } },
        },
      ],
    }),
    defineField({
      name: "navLinks",
      title: "Main navigation",
      description:
        "Leave empty to use the default pages. Add links to include custom pages (e.g. /recipes). Custom pages with “Show in main navigation” are also merged in automatically.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label", validation: (r) => r.required() }),
            defineField({
              name: "href",
              type: "string",
              title: "URL path",
              description: "Example: /crops or /recipes",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({
      name: "newsletterHeading",
      title: "Newsletter heading",
      type: "string",
    }),
    defineField({
      name: "newsletterBody",
      title: "Newsletter body",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "footerBlurb",
      title: "Footer blurb",
      type: "text",
      rows: 3,
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
