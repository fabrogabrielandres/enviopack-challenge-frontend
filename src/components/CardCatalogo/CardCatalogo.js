import React from 'react'
import { useDispatch } from 'react-redux'
import { itWasAdd } from '../../redux/productsSlice'
import { addToCard } from '../../redux/userSlice'
import { Button, Wrapper, Description, Img, Price } from './styles'

export const CardCatalogo = ({ image, product }) => {

    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Img src={image} />
            <Description>
                {product.title}
            </Description>
            <Price>
                {`$ ${product.price}`}
            </Price>
            {
                product.isAdd === true ?
                    <Button

                    >
                        Ver Carrito
                    </Button>
                    :
                    <Button
                        onClick={
                            () => {
                                dispatch(addToCard(product))
                                dispatch(itWasAdd(product))
                            }
                        }
                    >
                        Agregar al Carrito
                    </Button>
            }
        </Wrapper >
    )
}
