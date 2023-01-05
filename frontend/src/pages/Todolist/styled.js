import styled from "styled-components";

export const StyledContainerPrincipal = styled.div`
    width:100%;
    height:100vh;
    padding-top: 5%;
    background: #fafafa;
`;

export const StyledContainerContent = styled.div`
    margin: 0 auto;
    width: 700px;
    min-height: 600px;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0px 0px 14px -4px rgba(0,0,0,0.44);
    img {
        width: 500px;
        margin-top: 30px;
    }
`;  