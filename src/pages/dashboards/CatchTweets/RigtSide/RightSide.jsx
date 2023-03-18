import React from "react";
import Updates from "./Updates/Updates";
import { BackGround, SubBackGround} from "./RightSideStyles";

const RightSide = () => {
  return (
    <BackGround>
      <SubBackGround>
        <h3>Usuarios</h3>
        <Updates />
      </SubBackGround>
    </BackGround>
  );
};

export default RightSide;
