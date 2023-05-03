import { ImageType, LinkType } from "types/contentful.types";

export interface ProjectSummary {
  entryTitle: string;
  screenshotsCollection: {
    items: ImageType[];
  };
  title: string;
  shortDescription: string;
  productUrlLink: LinkType;
  builtWithTitle: string;
  builtWithCollection: {
    items: ImageType[];
  };
  viewMoreDetailsButton: LinkType;
  component: string;
  __typename: string;
}
