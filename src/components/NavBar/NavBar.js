import React from 'react'
import { NavLeft, NavRight, NavWrapper, LinkR, LinkL } from './styles'

export const NavBar = () => {
    return (
        <NavWrapper>
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

        </NavWrapper>
    )
}
