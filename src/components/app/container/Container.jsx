import React from 'react'
import {SLayout, SMain} from "./ContainerStyles";

const Container = ({children}) => {
  return (
    <SLayout>
    <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Container;