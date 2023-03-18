import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.bgDashCatchTweets};
  border-radius:8px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  input{
    color: ${({ theme }) => theme.textMenu};
    ::placeholder{color: ${({ theme }) => theme.textMenu}};
  }
`;
export const SubContainer = styled.div`
  width:auto;
  display: flex;
  align-items: center;
  justify-content: right;
`;
export const Botton=styled.button`
display:flex;
border-radius:6px;
width:32px;
height:100%;
align-items:center;
justify-content:center;
border:none;
:hover{
  background-color:${({ theme }) => theme.bgAlpha};
  transition:300ms;
  width:45px;
  svg{
    color:white;
  }
}
`;