import React from "react";
import Footer from "../footer";
import Navbar from "../navigator";
import { PropsWithChildren } from "react";

export interface ICommonLayoutProps {}

const CommonLayout: React.FunctionComponent<
  PropsWithChildren<ICommonLayoutProps>
> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main> <Footer />
    </>
  );
};

export default CommonLayout;
