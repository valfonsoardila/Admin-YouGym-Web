import React, { useContext, useRef, useState } from "react";
import {
  SDivider,
  SLogo,
  SSearch,
  BottonBar,
  SSearchIcon,
  SSidebar,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./SidebarStyles";
import { SidebarData } from './data/SidebarData';
import SubMenu from './dropdown/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { logoPNG } from "./../../../resources/Resources";

import {
  AiOutlineSearch,
} from "react-icons/ai";
import { ThemeContext } from "./../../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <BottonBar isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
          <FontAwesomeIcon icon={faBars} />
        </BottonBar>
      </>
      <SLogo>
        <img src={logoPNG} alt="logo" />
      </SLogo>
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

export default Sidebar;
