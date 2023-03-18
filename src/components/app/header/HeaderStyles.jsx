import styled from "styled-components";

export const SHeader = styled.div`
display:flex;
flex-direction:row;
height:2.5rem;
width:100vw;
background-color:black;
align-items:center;
`;
export const Title=styled.div`
display:flex;
width:40%;
flex-direction:row;
justify-content:center;
color:${({ theme }) => theme.textHeader};
h5{
    background-color:${({ theme }) => theme.bgTitle};
    color:${({ theme }) => theme.Title};
}
`;
export const SHeaderInfo = styled.div`
display:flex;
flex-direction:row;
height:2.5rem;
width:60vw;
background-color:black;
align-items:center;
`;
export const SHeaderSesion = styled.div`
display:flex;
flex-direction:row;
height:2.5rem;
width:20vw;
background-color:black;
align-items:center;
:hover{
    background-color:${({ theme }) => theme.bgAlpha};
    border-radius:6px;
    width:20vw;
}
`;
export const SHeaderCog = styled.div`
display:flex;
flex-direction:row;
height:2.5rem;
width:20vw;
background-color:black;
align-items:center;
justify-content:right;
`;
export const BottonBar =styled.div`
display:flex;
margin-left:0.4rem;
height:1.5rem;
width:1.5rem;
align-items:center;
justify-content:center;
svg{
    color: ${({ theme }) => theme.bgSVG};
}
`;
export const RoutesPages =styled.div`
display:flex;
padding:0.5rem;
align-items:center;
justify-content:center;
svg{
    color:${({ theme }) => theme.textHeader};
}
`;
export const TextHeader=styled.div`
width:50%;
color:${({ theme }) => theme.textHeader};
align-items:center;
`;
export const PictureSesion =styled.div`
display:flex;
padding:0.5rem;
align-items:center;
justify-content:center;
svg{
    color:${({ theme }) => theme.textHeader};
}
`;
export const CogApp =styled.div`
display:flex;
width:32px;
padding:0.5rem;
align-items:right;
justify-content:center;
margin-right:0.5rem;
svg{
    color:${({ theme }) => theme.textHeader};
}
:hover{
    background-color:${({ theme }) => theme.bgAlpha};
    border-radius:6px;
    width:32px;
}
`;

