import styled from "styled-components";

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 0.5rem;
  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;
export const SubBackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
