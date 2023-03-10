import styled from "styled-components";

import { v } from "../../../styles/constant/Variables";

export const SLayout = styled.div`
    display: flex;
    height:100vh
`;
export const SHeaderApp=styled.div`
display:flex;
flex-direction:row;
height:2.5rem;
position:relative;
width:100vw;
`;
export const SSidebarApp=styled.div`
display:flex;
top:2.5rem;
flex-direction:column;
width:auto;
`;

export const SMain = styled.main`
    display:flex;
    flex-direction:column;
    width:100%;
    padding: calc(${v.smSpacing} * 2);
    h1 {
        font-size: 14px;
    }
`;
export const LayoutContainer=styled.div`
display:flex;
flex-direction:row;
height:100vh;
`;
export const LayoutContainerSidebar=styled.div`
display:flex;
flex-direction:column;
`;