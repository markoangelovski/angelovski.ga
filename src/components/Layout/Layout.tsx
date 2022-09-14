import Meta from "../Meta/Meta";
import Header from "../Header/Header";

import { LayoutProps } from "./Layout.types";

const Layout = (props: LayoutProps) => {
  const { metaData, children, globalComponents } = props;

  const headerData = globalComponents.header;

  return (
    <>
      <Meta metaData={metaData} />
      <Header {...headerData} />
      <main className="mx-auto max-w-7xl px-2">{children}</main>
    </>
  );
};

export default Layout;
