import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

export const storyPage = defineType({
  name: "storyPage",
  title: "Our Story",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "intro", title: "Intro paragraphs", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "missionEyebrow", title: "Mission eyebrow", type: "string" }),
    defineField({ name: "missionHeadline", title: "Mission headline", type: "string" }),
    defineField({ name: "missionBody", title: "Mission body", type: "text", rows: 4 }),
    defineField({ name: "visionEyebrow", title: "Vision eyebrow", type: "string" }),
    defineField({ name: "visionHeadline", title: "Vision headline", type: "string" }),
    defineField({ name: "visionBody", title: "Vision body", type: "text", rows: 4 }),
    defineField({ name: "pillarsEyebrow", title: "Pillars eyebrow", type: "string" }),
    defineField({ name: "pillarsHeadline", title: "Pillars headline", type: "string" }),
    defineField({
      name: "pillars",
      title: "Guiding pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({ name: "cultureEyebrow", title: "Culture band eyebrow", type: "string" }),
    defineField({ name: "cultureHeadline", title: "Culture band headline", type: "string" }),
    defineField({ name: "cultureBody", title: "Culture band body", type: "text", rows: 3 }),
    defineField({ name: "cultureImage", title: "Culture band image", type: "image", options: { hotspot: true } }),
    pageSectionsField,
  ],
  preview: { prepare: () => ({ title: "Our Story" }) },
});
