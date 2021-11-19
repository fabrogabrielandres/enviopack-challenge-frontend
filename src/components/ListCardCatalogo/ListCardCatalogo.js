import React from 'react'
import products from "../../products.json"
import image from "../../assets/image-product.jpg"
import { CardCatalogo } from '../CardCatalogo/CardCatalogo'
import { RenderList, Wrapper } from './styled'

export const ListCardCatalogo = () => {
    return (
        <Wrapper>
            {
                products.productos.map((product, idx) =>
                    <RenderList key={idx}>
                        <CardCatalogo image={image} product={product} />
                    </RenderList>
                )
            }
        </Wrapper>
    )
}
