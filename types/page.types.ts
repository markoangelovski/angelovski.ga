import { MetaData } from "./contentful.types";

export type Component = {
  component: string;
  data: Record<string, unknown>;
  __typename?: string;
};

export type PageProps = {
  metaData: MetaData;
  components: Component[];
  globalComponents: Component[];
};
