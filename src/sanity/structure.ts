import type { StructureResolver } from "sanity/structure";

const SINGLETONS = [
  { id: "siteSettings", title: "Site Settings" },
  { id: "homePage", title: "Home Page" },
  { id: "storyPage", title: "Our Story" },
  { id: "farmsPage", title: "Farms & Facilities" },
  { id: "cropsPage", title: "Our Crops" },
  { id: "impactPage", title: "Community Impact" },
  { id: "getInvolvedPage", title: "Get Involved" },
] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items(
      SINGLETONS.map((item) =>
        S.listItem()
          .title(item.title)
          .id(item.id)
          .child(S.document().schemaType(item.id).documentId(item.id).title(item.title)),
      ),
    );
