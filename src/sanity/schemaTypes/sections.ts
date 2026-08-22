import { defineArrayMember, defineField, defineType } from "sanity";

const cardFields = [
  defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
  defineField({ name: "subtitle", title: "Subtitle / label", type: "string" }),
  defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
  defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  defineField({ name: "href", title: "Optional link URL", type: "string" }),
  defineField({ name: "linkLabel", title: "Link label", type: "string" }),
];

export const sectionTypes = [
  defineType({
    name: "heroSection",
    title: "Hero",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
      defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
      defineField({ name: "image", title: "Background image", type: "image", options: { hotspot: true } }),
      defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
      defineField({ name: "ctaHref", title: "CTA URL", type: "string" }),
    ],
    preview: {
      select: { title: "title", media: "image" },
      prepare: ({ title, media }) => ({ title: title || "Hero", subtitle: "Hero section", media }),
    },
  }),
  defineType({
    name: "textSection",
    title: "Text block",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "title", title: "Title", type: "string" }),
      defineField({
        name: "paragraphs",
        title: "Paragraphs",
        type: "array",
        of: [{ type: "text" }],
      }),
      defineField({
        name: "align",
        title: "Alignment",
        type: "string",
        options: { list: ["left", "center"] },
        initialValue: "left",
      }),
    ],
    preview: {
      select: { title: "title" },
      prepare: ({ title }) => ({ title: title || "Text block", subtitle: "Text section" }),
    },
  }),
  defineType({
    name: "cardGridSection",
    title: "Card grid",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "title", title: "Title", type: "string" }),
      defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
      defineField({
        name: "columns",
        title: "Columns",
        type: "number",
        options: { list: [2, 3] },
        initialValue: 3,
      }),
      defineField({
        name: "tone",
        title: "Background",
        type: "string",
        options: {
          list: [
            { title: "Default", value: "default" },
            { title: "Tinted", value: "tinted" },
            { title: "Leaf (dark)", value: "leaf" },
          ],
        },
        initialValue: "default",
      }),
      defineField({
        name: "cards",
        title: "Cards",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "card",
            fields: cardFields,
            preview: {
              select: { title: "title", subtitle: "subtitle", media: "image" },
            },
          }),
        ],
      }),
    ],
    preview: {
      select: { title: "title", cards: "cards" },
      prepare: ({ title, cards }) => ({
        title: title || "Card grid",
        subtitle: `${cards?.length || 0} cards`,
      }),
    },
  }),
  defineType({
    name: "metricsSection",
    title: "Metrics",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "title", title: "Title", type: "string" }),
      defineField({
        name: "tone",
        title: "Background",
        type: "string",
        options: {
          list: [
            { title: "Leaf (dark)", value: "leaf" },
            { title: "Default", value: "default" },
          ],
        },
        initialValue: "leaf",
      }),
      defineField({
        name: "metrics",
        title: "Metrics",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({ name: "value", title: "Value", type: "number" }),
              defineField({ name: "suffix", title: "Suffix", type: "string", initialValue: "+" }),
              defineField({ name: "label", title: "Label", type: "string" }),
              defineField({ name: "detail", title: "Detail", type: "text", rows: 2 }),
            ],
            preview: { select: { title: "label", subtitle: "value" } },
          }),
        ],
      }),
    ],
    preview: {
      select: { title: "title" },
      prepare: ({ title }) => ({ title: title || "Metrics", subtitle: "Metrics section" }),
    },
  }),
  defineType({
    name: "imageTextSection",
    title: "Image + text",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "title", title: "Title", type: "string" }),
      defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
      defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
      defineField({
        name: "imagePosition",
        title: "Image position",
        type: "string",
        options: { list: ["left", "right"] },
        initialValue: "left",
      }),
      defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
      defineField({ name: "ctaHref", title: "CTA URL", type: "string" }),
    ],
    preview: {
      select: { title: "title", media: "image" },
      prepare: ({ title, media }) => ({
        title: title || "Image + text",
        subtitle: "Image + text section",
        media,
      }),
    },
  }),
  defineType({
    name: "ctaSection",
    title: "Call to action",
    type: "object",
    fields: [
      defineField({ name: "title", title: "Title", type: "string" }),
      defineField({ name: "body", title: "Body", type: "text", rows: 2 }),
      defineField({ name: "primaryLabel", title: "Primary button label", type: "string" }),
      defineField({ name: "primaryHref", title: "Primary button URL", type: "string" }),
      defineField({ name: "secondaryLabel", title: "Secondary button label", type: "string" }),
      defineField({ name: "secondaryHref", title: "Secondary button URL", type: "string" }),
      defineField({
        name: "tone",
        title: "Background",
        type: "string",
        options: {
          list: [
            { title: "Leaf (dark)", value: "leaf" },
            { title: "Default", value: "default" },
          ],
        },
        initialValue: "leaf",
      }),
    ],
    preview: {
      select: { title: "title" },
      prepare: ({ title }) => ({ title: title || "CTA", subtitle: "Call to action" }),
    },
  }),
];

export const pageSectionsField = defineField({
  name: "sections",
  title: "Extra / custom sections",
  description:
    "Add any number of flexible sections (card grids, heroes, metrics, CTAs, etc.). New cards go inside a Card grid section.",
  type: "array",
  group: "extra",
  of: sectionTypes.map((type) =>
    defineArrayMember({ type: type.name, title: type.title }),
  ),
});
