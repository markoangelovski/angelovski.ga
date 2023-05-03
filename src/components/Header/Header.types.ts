import { ImageType, LinkType } from "types/contentful.types";

export type HeaderProps = {
  entryTitle: string;
  heroImage: ImageType;
  heroTitle: string;
  dropdownTitle: string;
  projectsDropdownCollection: { items: LinkType[] };
};
