import { MetaData } from "./contentful.types";

export type Component = {
  __typename?: string;
  component: string;
  data: Record<string, unknown>;
  currentPageUrl?: string;
  pageType?: string;
  pageId?: string;
};

export type PageProps = {
  metaData: MetaData;
  components: Component[];
};
