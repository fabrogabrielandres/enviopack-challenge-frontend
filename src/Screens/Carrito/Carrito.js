import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { CardCarrito } from '../../components/CardCarrito/CardCarrito'
import { SuccessAndError } from '../../components/SuccessAndError/SuccessAndError'
import { Button, Footer, Resume, Title, Total, Wrapper } from './styles'

export const Carrito = () => {
    const [loading, setloading] = useState(false)
    const [total, setTotal] = useState(0)
    const [itspurchasable, setItsPurchasable] = useState(false)
    const [succes, setSucces] = useState(false)

    const navigate = useNavigate()
    const shoppingCart = useSelector(state => state.user.shoppingCart)
    const credit = useSelector(state => state.user.datos.credit)

    const buy = () => {
        if ((credit - total) > 0) {
            setItsPurchasable(true);
        }
    }

    useEffect(() => {
        if (shoppingCart.length !== 0) {
            setloading(true)
            setTotal(
                shoppingCart.reduce((acc, next) =>
                    (acc = acc + next.price), 0)
            )
        }
        else {
            setloading(false)
        }
    }, [shoppingCart])


    if (loading === false) { return (<Title>sin articulos en carritos</Title>) }

    return (
        <>
            (  )
            {/* <SuccessAndError message="error"/> */}
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
                <Footer>
                    <Button
                        onClick={() => navigate("/")}
                    >
                        Volver a Catalogo
                    </Button>
                    <Button
                        onClick={() => {
                            buy()
                            setSucces(true)
                        }}
                    >
                        Finalizar Compra
                    </Button>
                </Footer>
            </Wrapper >
        </>

    )

}