import { ReactElement } from "react";

import { MetaData } from "types/contentful.types";
import { HeaderProps } from "../Header/Header.types";

export type LayoutProps = {
  metaData: MetaData;
  children: ReactElement | ReactElement[];
  globalComponents: {
    header: HeaderProps;
    // footer: Pick<FooterProps, Exclude<keyof FooterProps, 'pageInfo'>>;
  };
};
