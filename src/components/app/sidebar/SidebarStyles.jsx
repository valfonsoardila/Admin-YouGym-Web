import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../../styles/constant/Variables";

export const SSidebar = styled.div`
  border-right: 5px solid ${({ theme }) => theme.border};
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${v.smSpacing};
  position: relative;
  transition: width 2s, ease 0s;
`;
export const BottonBar = styled.div`
  ${btnReset};
  position: absolute;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `initial` : `rotate(90deg)`)};
  display: flex;
  height: 1.5rem;
  width: 1.5rem;
  top: ${v.btnSidebar};
  border-radius: ${v.borderRadius};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  align-items: center;
  justify-content: center;
  svg {
    color: white;
  }
  :hover{
    background-color:${({ theme }) => theme.bgAlpha};
    border-radius:6px;
    width:1.5rem;
}
`;
export const SSidebarButton = styled.button`
  ${btnReset};
  position: absolute;
  top: ${v.btnSidebar};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SLogo = styled.div`
  width:auto;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  transition: 0.2s ease right;
  img {
    width: ${({ isOpen }) => (!isOpen ? `45px` : `100px`)};
    height: auto;
  }
  cursor: pointer;
  margin-bottom: ${v.lgSpacing};
`;
export const Title=styled.div`
display:${({ isOpen }) => (!isOpen ? `none` : `block`)};
`;
export const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 0.4px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.textMenu};
    background: transparent;
    ::placeholder{color: ${({ theme }) => theme.hoverSelection}};
  }
  display: flex;
`;

export const SSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.ndxSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;
  svg {
    font-size: 16px;
  }
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.ndxSpacing} 0;
`;

export const SLinkContainer = styled.div`
  background-color: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.Selector};
  border-radius: ${v.borderRadius};
  margin: 2px 0;
  svg{
    color:${({ theme, isActive }) =>
    !isActive ? theme.iconMenu : theme.svgSidebarMenuActive};
  }
  span{
    color:${({ theme, isActive }) =>
    !isActive ? theme.textMenu : theme.svgSidebarMenuActive};
  }
  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.hoverSelection};
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.ndxSpacing};
  display: flex;
  img{
    height:30px;
  }
  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  margin:0.3rem;
  display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
  flex: 1;
  margin-left: ${v.smSpacing};
  font-size:14px;
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;

  margin-right: ${v.mdSpacing};
`;

export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`;
export const SThemeToggler = styled.button`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.bgThemeToggler};
  position: relative;
`;
export const IconModeTheme=styled.div`
visibility:${({ isOpen }) => (!isOpen ? `hidden` : `visible`)};
display:${({ isOpen }) => (!isOpen ? `none` : `block`)};
img{
  height: 16px;
}
`;
export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(0deg)` : `rotate(180deg)`)};
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bgToggleThumb};
  justify-content:center;
  align-items:center;
  display:flex;
`;
