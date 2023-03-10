import React from 'react'
import {SMain} from "./ContainerStyles";

const Container = ({children}) => {
  return (
    <SMain>{children}</SMain>
  );
};

export default Container;