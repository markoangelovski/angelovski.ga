import { ImageType } from "types/contentful.types";

export interface Diagram {
  entryTitle: string;
  title: string;
  description: string;
  height: number;
  mobileImage: ImageType;
  diagramIframeSource: {
    content: {
      content: {
        value: string;
      }[];
    }[];
  };
  __typename: string;
  componentId: string;
}
