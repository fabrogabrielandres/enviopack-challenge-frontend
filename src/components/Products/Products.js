import React  from 'react'
import image from "../../assets/image-product.jpg"
import { CardCatalogo } from '../CardCatalogo/CardCatalogo'
import { RenderProducts, Wrapper } from './styled'


export const Products = ({OrderProducts}) => {

  
    return (
        <Wrapper>
             {
                OrderProducts.map((product, idx) =>
                    <RenderProducts key={idx}>
                        <CardCatalogo image={image} product={product} />
                    </RenderProducts>
                )
            }
        </Wrapper>
    )
}
