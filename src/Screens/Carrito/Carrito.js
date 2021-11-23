import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CardCarrito } from '../../components/CardCarrito/CardCarrito'
import { Resume, Title, Total, Wrapper } from './styles'

export const Carrito = () => {
    const shoppingCart = useSelector(state => state.user.shoppingCart)
    const [loading, setloading] = useState(false)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (shoppingCart.length === 0) {
            setloading(false)
        } else {
            setloading(true)

            setTotal(
                shoppingCart.reduce((acc, next) => {
                    return (acc = acc + next.price)
                }, 0)
            )
        }
    }, [shoppingCart])

    if (loading === false) {
        return (<h1>sin elemntos en carritos</h1>)
    }
    else {
        return (
            < Wrapper >
                <Title>
                    Carrito
                </Title>
                {
                    shoppingCart.map((item, idx) => {
                        return (<CardCarrito key={idx} item={item} />)
                    })
                }
                <Resume>
                    <Total>
                        Total
                    </Total>
                    <Total>
                        {`$ ${total}`}
                    </Total>
                </Resume>
            </Wrapper >
        )
    }
}