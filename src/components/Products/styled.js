import styled from "styled-components";

export const RenderProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top:20px;
    justify-content: space-between;

    @media (max-width:720px){ 
        justify-content: center;
    } 
`