import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { productAdd } from '../../redux/productsSlice'
import { addToCart } from '../../redux/userSlice'
import { Button, Wrapper, Description, Img, Price } from './styles'

export const CardCatalogo = ({ image, product }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()



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
                        onClick={() =>navigate("/carrito")}
                    >
                        Ver Carrito
                    </Button>
                    :
                    <Button
                        onClick={
                            () => {
                                dispatch(addToCart(product))
                                dispatch(productAdd(product))
                                navigate("/carrito")
                            }
                        }
                    >
                        Agregar al Carrito
                    </Button>
            }
        </Wrapper >
    )
}
