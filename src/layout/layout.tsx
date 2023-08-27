import Nav from "@/components/Nav/Nav";
import React, { ReactNode } from "react";
import { NextPage } from "next";

type LayoutProps = {
  children: ReactNode;
  requiresLoginButton?: boolean;
};

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
