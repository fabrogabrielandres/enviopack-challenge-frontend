import React from 'react'
import { Button, Description, Img, Price,  Title, Wrapper } from './styles'
import imagen from "../../assets/image-product.jpg"
import { useDispatch } from 'react-redux'
import { removeToCart } from '../../redux/userSlice'
import { productRemove } from '../../redux/productsSlice'

export const CardCarrito = ({ item }) => {

    const dispatch = useDispatch()

    return (
        <>
            <Wrapper>
                <Img src={imagen} />
                <Description>
                    <Title>
                        {item.title}
                    </Title>
                    <Price>
                        ${item.price}
                        <Button
                            onClick={() => {
                                dispatch(removeToCart(item))
                                dispatch(productRemove(item))
                            }}
                        >
                            x
                        </Button>
                    </Price>
                </Description>

            </Wrapper>
         
        </>
    )
}
