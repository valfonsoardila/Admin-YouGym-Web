import React, { useState } from "react";
import { SidebarLink, SidebarLabel, DropdownLink } from "./DropdownStyles";
import {
  SLinkContainer,
  SLink,
  SLinkIcon,
  SLinkLabel,
} from "./../SidebarStyles";
import { useLocation } from "react-router-dom";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const { pathname } = useLocation();
  return (
    <>
      <SLinkContainer
        key={item.label}
        onClick={item.subNav && showSubnav}
        isActive={pathname === item.to}
      >
        <SLink to={item.to}>
          <SLinkIcon>{item.icon}</SLinkIcon>
          <SLinkLabel>{item.label}</SLinkLabel>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SLink>
      </SLinkContainer>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SLinkIcon>{item.icon}</SLinkIcon>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
