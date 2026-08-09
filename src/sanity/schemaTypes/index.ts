import { cropsPage } from "./cropsPage";
import { farmsPage } from "./farmsPage";
import { getInvolvedPage } from "./getInvolvedPage";
import { homePage } from "./homePage";
import { impactPage } from "./impactPage";
import { page } from "./page";
import { sectionTypes } from "./sections";
import { siteSettings } from "./siteSettings";
import { storyPage } from "./storyPage";

export const schemaTypes = [
  siteSettings,
  homePage,
  storyPage,
  farmsPage,
  cropsPage,
  impactPage,
  getInvolvedPage,
  page,
  ...sectionTypes,
];
