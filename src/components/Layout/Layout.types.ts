import { ReactElement } from "react";

import { MetaData } from "@global/adapters/contentful/types";

export type LayoutProps = {
  metaData: MetaData;
  children: ReactElement | ReactElement[];
};
