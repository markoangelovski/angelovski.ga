import { ImageType, LinkType } from "types/contentful.types";

export type HeaderProps = {
  entryTitle: string;
  heroImage: ImageType;
  heroTitle: string;
  projectsDropdownCollection: { items: LinkType[] };
};
