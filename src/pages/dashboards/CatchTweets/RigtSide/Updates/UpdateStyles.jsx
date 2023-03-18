import styled from "styled-components";

export const BackGround = styled.div`
    background-color:${({ theme }) => theme.bgDashCatchTweets};
    border-radius: 0.7rem;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    max-height: 88vh;
    overflow-y: auto;
    overflow-x: hidden;
`;
export const ContainerInfo = styled.div`
    margin-bottom:0.5rem;
`;
export const Notification = styled.div`
    span:nth-of-type(1){
        font-weight: bold;
    }
`;
export const SubBackGround = styled.div`
    display: flex;
    gap: 0.5rem;
    img{
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
    }
`;