import React from 'react'
import { useSelector } from 'react-redux'
import { Products } from '../../components/Products/Products'
import { useSortAndFind } from '../../components/useSortAndFind/useSortAndFind'
import { HeaderLeft, HeaderRight, Wrapper, Header, Title, SubTitle, Input, Select, Option } from './styled'


export const Catalogo = () => {

    const products = useSelector(state => state.product.Products)
    const SortAndFind = useSortAndFind(products)


    return (
        <Wrapper>
            <Title>
                Catalogo
            </Title>
            <Header>
                <HeaderLeft>
                    <Input placeholder="Buscar productos por nombre"
                        onChange={(e) => SortAndFind.setFind(e.target.value)}
                    />
                </HeaderLeft>
                <HeaderRight>
                    <SubTitle>Ordenar Por</SubTitle>
                    <Select
                        onChange={(e) => SortAndFind.setSort(e.target.value)}
                    >
                        <Option value="default">Seleccionar</Option>
                        <Option value="asc">Precio (asc)</Option>
                        <Option value="desc">Precio (desc)</Option>
                    </Select>
                </HeaderRight>
            </Header>
            <Products OrderProducts={SortAndFind.OrderProducts} />
        </Wrapper>
    )

}
