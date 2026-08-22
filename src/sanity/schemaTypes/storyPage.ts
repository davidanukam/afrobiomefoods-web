import { defineField, defineType } from "sanity";
import { pageSectionsField } from "./sections";

export const storyPage = defineType({
  name: "storyPage",
  title: "Our Story",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "intro", title: "Intro" },
    { name: "mission", title: "Mission & vision" },
    { name: "pillars", title: "Guiding pillars" },
    { name: "culture", title: "Culture band" },
    { name: "extra", title: "Extra sections" },
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "title", title: "Title", type: "string", group: "hero" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true }, group: "hero" }),
    defineField({ name: "intro", title: "Intro paragraphs", type: "array", of: [{ type: "text" }], group: "intro" }),
    defineField({ name: "missionEyebrow", title: "Mission eyebrow", type: "string", group: "mission" }),
    defineField({ name: "missionHeadline", title: "Mission headline", type: "string", group: "mission" }),
    defineField({ name: "missionBody", title: "Mission body", type: "text", rows: 4, group: "mission" }),
    defineField({ name: "visionEyebrow", title: "Vision eyebrow", type: "string", group: "mission" }),
    defineField({ name: "visionHeadline", title: "Vision headline", type: "string", group: "mission" }),
    defineField({ name: "visionBody", title: "Vision body", type: "text", rows: 4, group: "mission" }),
    defineField({ name: "pillarsEyebrow", title: "Pillars eyebrow", type: "string", group: "pillars" }),
    defineField({ name: "pillarsHeadline", title: "Pillars headline", type: "string", group: "pillars" }),
    defineField({
      name: "pillars",
      title: "Guiding pillars",
      type: "array",
      group: "pillars",
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
    defineField({ name: "cultureEyebrow", title: "Culture band eyebrow", type: "string", group: "culture" }),
    defineField({ name: "cultureHeadline", title: "Culture band headline", type: "string", group: "culture" }),
    defineField({ name: "cultureBody", title: "Culture band body", type: "text", rows: 3, group: "culture" }),
    defineField({ name: "cultureImage", title: "Culture band image", type: "image", options: { hotspot: true }, group: "culture" }),
    pageSectionsField,
  ],
  preview: { prepare: () => ({ title: "Our Story" }) },
});
