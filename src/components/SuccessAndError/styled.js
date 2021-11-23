import styled from "styled-components";

export const Wrapper = styled.div`
    width: 30%;    
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);    

`
export const Title = styled.span`
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: bold;
    display: block;
    text-align: center;
`

export const Message = styled.span`
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
`

export const Button = styled.button`
    width: 90%;
    margin: 10px;
    background-color: black;
    color: white;
    padding: 0.5em;
    font-size: 1rem;
    border-radius: 5px;
`