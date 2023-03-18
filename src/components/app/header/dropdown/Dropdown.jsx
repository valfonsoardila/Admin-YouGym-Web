import React, { useState } from "react";
import { SidebarLabel, DropdownLink, Deployment } from "./DropdownStyles";
import {
  SLinkContainer,
  SLink,
  SLinkIcon,
  SLinkLabel,
} from "./../SidebarStyles";
import { useLocation } from "react-router-dom";

const SubMenu = ({ item, isOpen }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const { pathname } = useLocation();
  return (
    <>
      <SLinkContainer
        key={item.label}
        isActive={pathname === item.to}
        isOpen={isOpen}
      >
        <SLink to={item.to}>
          <SLinkIcon>{item.icon}</SLinkIcon>
          <SLinkLabel onClick={item.subNav && showSubnav} isActive={pathname === item.to} isOpen={isOpen} >{item.label}</SLinkLabel>
          <Deployment isOpen={isOpen} onClick={item.subNav && showSubnav}>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </Deployment>
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