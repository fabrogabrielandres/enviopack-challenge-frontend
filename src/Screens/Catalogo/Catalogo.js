import React from 'react'
import { CatalogoLeft, CatalogoRight, CatalogoWrapper, ListCard, Title, SubTitle, Input } from './styled'

export const Catalogo = () => {
    return (
        <CatalogoWrapper>
            <Title>
                Catalogo
            </Title>
            <ListCard>
                <CatalogoLeft>
                    <Input placeholder="Buscar productos por nombre"/>
                </CatalogoLeft>
                <CatalogoRight>
                    <SubTitle>Ordenar Por</SubTitle>
                </CatalogoRight>
            </ListCard>


        </CatalogoWrapper>
    )
}
