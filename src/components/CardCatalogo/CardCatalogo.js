import React from 'react'
import { Button, Wrapper, Description, Img, Price } from './styles'

export const CardCatalogo = ({image,product}) => {
    console.log(product);
    
    return (
        <Wrapper>
            <Img src={image}/>
            <Description>
                {product.title}
            </Description>
            <Price>
                {`$ ${product.price}`}
            </Price>
            <Button>
                Agregar al Carrito                
            </Button>                        
        </Wrapper>
    )
}
