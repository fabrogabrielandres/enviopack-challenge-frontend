import React from 'react'
import { Button, CardWrapper, Description, Img, Price } from './styles'

export const CardCatalogo = ({image,product}) => {
    
    return (
        <CardWrapper>
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
        </CardWrapper>
    )
}
