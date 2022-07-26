import Meta from "../Meta/Meta";
import Header from "../Header/Header";

import { LayoutProps } from "./Layout.types";

const Layout = (props: LayoutProps) => {
  const { metaData, children } = props;

  return (
    <>
      <Meta metaData={metaData} />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
