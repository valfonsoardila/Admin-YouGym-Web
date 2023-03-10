import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Container from "../container/Container";
import {
  SLayout,
  LayoutContainerSidebar,
  SSidebarApp,
  SHeaderApp,
  LayoutContainer,
} from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <SLayout>
      <LayoutContainerSidebar>
        <SHeaderApp>
          <Header />
        </SHeaderApp>
        <LayoutContainer>
          <SSidebarApp>
            <Sidebar />
          </SSidebarApp>
          <Container>{children}</Container>
        </LayoutContainer>
      </LayoutContainerSidebar>
    </SLayout>
  );
};

export default Layout;
