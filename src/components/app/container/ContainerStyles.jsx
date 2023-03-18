import styled from "styled-components";
import { v } from "../../../styles/constant/Variables";

export const SLayout = styled.div`
    display: flex;
`;
export const SMain = styled.main`
    display:flex;
    flex-direction:row;
    width:100%;
    padding: calc(${v.smSpacing} * 2);
    h1 {
        font-size: 14px;
    }
`;