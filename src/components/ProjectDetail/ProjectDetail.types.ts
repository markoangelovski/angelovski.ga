import { Document } from "@contentful/rich-text-types";
import { ImageType } from "types/contentful.types";
import { Diagram } from "../EmbeddedDiagram/EmbeddedDiagram.types";

export interface ProjectDetail {
  entryTitle: string;
  title: string;
  titleType: string;
  description: Document;
  imagesSectionCollection: {
    items: ImageType[];
  };
  diagramsSectionCollection: { items: Diagram[] };
  component: string;
  __typename: string;
}
