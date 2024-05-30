import { Fragment, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => (
  <Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </Fragment>
);

export default Layout;
