import React from 'react'
import { Products } from '../../components/Products/Products'
import { HeaderLeft, HeaderRight, Wrapper, Header, Title, SubTitle, Input, Select, Option } from './styled'

export const Catalogo = () => {
    return (
        <Wrapper>
            <Title>
                Catalogo
            </Title>
            <Header>
                <HeaderLeft>
                    <Input placeholder="Buscar productos por nombre" />
                </HeaderLeft>
                <HeaderRight>
                    <SubTitle>Ordenar Por</SubTitle>
                        <Select>
                            <Option selected>Seleccionar</Option>
                            <Option>Precio (asc)</Option>
                            <Option>Precio (desc)</Option>
                        </Select>                    
                </HeaderRight>
            </Header>
            <Products />
        </Wrapper>
    )
}
