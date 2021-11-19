import React from 'react'
import { NavLeft, NavRight, Wrapper, LinkR, LinkL } from './styles'

export const NavBar = () => {
    return (
        <Wrapper>
            <NavLeft>
                <LinkL>
                    Tienda de Productos
                </LinkL>
            </NavLeft>
            <NavRight>
                <LinkR>
                    Juan Ignacio
                </LinkR>
                <LinkR>
                    Carrito(1)
                </LinkR>
                <LinkR>
                    Credito $5000
                </LinkR>
            </NavRight>

        </Wrapper>
    )
}
