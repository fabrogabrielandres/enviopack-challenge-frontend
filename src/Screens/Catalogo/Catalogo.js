import React, { useEffect, useState } from 'react'
import { Products } from '../../components/Products/Products'
import { HeaderLeft, HeaderRight, Wrapper, Header, Title, SubTitle, Input, Select, Option } from './styled'


export const Catalogo = () => {
    const [loading, setLoading] = useState(true)
    const [sort, setSort] = useState("default")
    const [find, setFind] = useState("")

    if (loading === false) {
        return (
            <h1>cargando</h1>
        )
    } else {
        return (
            <Wrapper>
                <Title>
                    Catalogo
                </Title>
                <Header>
                    <HeaderLeft>
                        <Input placeholder="Buscar productos por nombre"
                            onChange={(e) => setFind(e.target.value)}
                        />
                    </HeaderLeft>
                    <HeaderRight>
                        <SubTitle>Ordenar Por</SubTitle>
                        <Select
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <Option value="default">Seleccionar</Option>
                            <Option value="asc">Precio (asc)</Option>
                            <Option value="desc">Precio (desc)</Option>
                        </Select>
                    </HeaderRight>
                </Header>
                <Products
                    sort={sort}
                    find={find}
                />
            </Wrapper>
        )
    }
}
