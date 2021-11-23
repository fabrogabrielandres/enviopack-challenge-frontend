import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CardCarrito } from '../../components/CardCarrito/CardCarrito'
import { Title, Wrapper } from './styles'

export const Carrito = () => {
    const shoppingCart = useSelector(state => state.user.shoppingCart)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        if (shoppingCart.length === 0) {
            setloading(false)
        } else {
            setloading(true)

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
                    shoppingCart.map((item,idx) => {
                        return (<CardCarrito key={idx} item={item}/>)
                    })
                }
            </Wrapper >
        )
    }
}