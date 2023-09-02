import Nav from "@/components/Nav/Nav";
import React, { ReactNode } from "react";
import { NextPage } from "next";
import Footer from "@/components/footer/Footer";

type LayoutProps = {
  children: ReactNode;
  requiresLoginButton?: boolean;
};

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
