import styled from "styled-components";
import { v } from "../../../styles/constant/Variables";

export const SMain = styled.main`
    display:flex;
    flex-direction:column;
    width:100%;
    padding: calc(${v.smSpacing} * 2);
    h1 {
        font-size: 14px;
    }
`;