import { ReactElement } from "react";

import { MetaData } from "types/contentful.types";

export type LayoutProps = {
  metaData: MetaData;
  children: ReactElement | ReactElement[];
};
