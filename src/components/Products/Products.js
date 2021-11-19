import React from 'react'
import products from "../../products.json"
import image from "../../assets/image-product.jpg"
import { CardCatalogo } from '../CardCatalogo/CardCatalogo'
import { RenderProducts, Wrapper } from './styled'

export const Products = () => {
    return (
        <Wrapper>
            {
                products.productos.map((product, idx) =>
                    <RenderProducts key={idx}>
                        <CardCatalogo image={image} product={product} />
                    </RenderProducts>
                )
            }
        </Wrapper>
    )
}
