import React from 'react'
import { Button, Description, Img, Price, Title, Wrapper } from './styles'
import imagen from "../../assets/image-product.jpg"

export const CardCarrito = ({ item }) => {

    console.log(item);
    return (
        <Wrapper>
            <Img src={imagen} />
            <Description>
                <Title>
                    {item.title}
                </Title>
                <Price>
                    ${item.price}
                    <Button>
                        x
                    </Button>
                </Price>

            </Description>

        </Wrapper>
    )
}
