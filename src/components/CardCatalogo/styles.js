import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 250px;
    display: flex;
    min-height: 370px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
    margin: 10px auto;
`
export const Img = styled.img`
    width: 70%;
`
export const Description = styled.p`
    text-align: center;    
`

export const Price = styled.p`
    text-align: center;
`

export const Button = styled.button`
    text-align: center;
    background-color: black;
    color: white;
    border-bottom: none;
    width: 80%;
    padding: 0.8em;
    font-size: 1rem;
`