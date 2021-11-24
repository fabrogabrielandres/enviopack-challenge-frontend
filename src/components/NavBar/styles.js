import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1360px;
    display: flex;
    height: 70px;
    margin: 0 auto;
    background-color:black;
    justify-content:space-between;
    position: relative;
`

export const NavLeft = styled.div`
    line-height: 70px;
`

export const LinkL = styled.p`
    font-weight: bold;
    margin: 0px 50px;
    color: white;
    cursor: pointer;    
`

export const NavRight = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    margin: 0px 50px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    background-color: black;
    transition: 2s all ease-in-out;
    @media (max-width:1000px){
        position: absolute;
        top: 70px;
        left: ${({ toggle }) => toggle ? 0 : "-100%"}; 
        margin:0;
        width: 100%;
        flex-direction: column;
    }
`

export const LinkR = styled.p`
    padding: 10px 0 10px 0;
    margin: 0px 50px;
    color: white;
    cursor: pointer;    
`
export const Burger = styled.button`
    height: 100%;
    cursor: pointer;
    width: 70px;
    display: none;
    border: none;
    color: white;
    background-color: black;
    font-weight: bold;
    font-size: 1rem;
    @media (max-width:1000px){
    display: block;
    }
`