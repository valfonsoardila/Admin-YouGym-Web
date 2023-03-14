import React, { useContext } from "react";
import {
  SHeader,
  SHeaderInfo,
  SHeaderSesion,
  SHeaderCog,
  BottonBar,
  RoutesPages,
  TextHeader,
  Title,
  PictureSesion,
  CogApp,
} from "./HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faServer,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./../../../App";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <SHeader>
      <SHeaderInfo>
        <BottonBar>
        </BottonBar>
        <RoutesPages>
          <FontAwesomeIcon icon={faServer} />
        </RoutesPages>
        <TextHeader>
          <h5>Inicio</h5>
        </TextHeader>
        <Title>
          <h5>You</h5>
          <h4>Gym</h4>
        </Title>
      </SHeaderInfo>
      <SHeaderSesion>
        <PictureSesion>
          <FontAwesomeIcon icon={faUserCircle} />
        </PictureSesion>
        <TextHeader>
          <h5>Name</h5>
        </TextHeader>
      </SHeaderSesion>
      <SHeaderCog>
        <CogApp>
          <FontAwesomeIcon icon={faCog} />
        </CogApp>
      </SHeaderCog>
    </SHeader>
  );
};

export default Header;
