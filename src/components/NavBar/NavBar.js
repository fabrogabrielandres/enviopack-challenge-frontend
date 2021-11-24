import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { NavLeft, NavRight, Wrapper, LinkR, LinkL, Burger } from './styles'

export const NavBar = () => {

    const { shoppingCart, datos: { credit, username } } = useSelector(state => state.user)
    let navigate = useNavigate()
    const [toggle, setToggle] = useState(false)

    return (
        <Wrapper>
            <NavLeft>
                <LinkL
                    onClick={() => navigate("/", { replace: true })}
                >
                    Tienda de Productos
                </LinkL>
            </NavLeft>
            <NavRight
                toggle={toggle}
            >
                <LinkR
                >
                    {username}
                </LinkR>
                <LinkR
                    onClick={() => navigate("/carrito", { replace: true })}
                >
                    {`Carrito (${shoppingCart.length})`}
                </LinkR>
                <LinkR>
                    {`Credito $${credit}`}
                </LinkR>
            </NavRight>
            <Burger
                onClick={() => setToggle(!toggle)}
            >
                x
            </Burger>

        </Wrapper >
    )
}
