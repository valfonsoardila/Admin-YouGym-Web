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
  IconModeTheme,
} from "./SidebarStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { linksArray } from "./data/SidebarData";
import SubMenu from "./dropdown/Dropdown";
import {
  faAngleLeft,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { logoPNG } from "./../../../resources/Resources";
import { modeDark, modeLight } from "./../../../resources/Resources";
import { ThemeContext } from "./../../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [changeTheme, setChangeTheme] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <BottonBar
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <FontAwesomeIcon icon={faBars} />
        </BottonBar>
      </>
      <SLogo isOpen={sidebarOpen}>
        <img src={logoPNG} alt="logo" />
      </SLogo>
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <FontAwesomeIcon icon={faSearch} />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {linksArray.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <IconModeTheme isOpen={sidebarOpen}>
          <img src={modeLight} alt="logo" />
        </IconModeTheme>
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb
            style={theme === "dark" ? { right: "1px" } : {}}
            isOpen={changeTheme}
            onClick={() => setChangeTheme((p) => !p)}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </SToggleThumb>
        </SThemeToggler>
        <IconModeTheme isOpen={sidebarOpen}>
          <img src={modeDark} alt="logo" />
        </IconModeTheme>
      </STheme>
    </SSidebar>
  );
};

export default Sidebar;
