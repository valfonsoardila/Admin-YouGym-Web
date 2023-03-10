import React from "react";
import {
  SHeader,
  SHeaderInfo,
  SHeaderSesion,
  SHeaderCog,
  BottonBar,
  RoutesPages,
  TextHeader,
  PictureSesion,
  CogApp,
} from "./HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faServer,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
