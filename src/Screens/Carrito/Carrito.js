import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { CardCarrito } from '../../components/CardCarrito/CardCarrito'
import { SuccessAndError } from '../../components/SuccessAndError/SuccessAndError'
import { resetProducts } from '../../redux/productsSlice'
import { debitCredit } from '../../redux/userSlice'
import { Button, Footer, Resume, Title, Total, Wrapper } from './styles'

export const Carrito = () => {

    // para saber si hay articulos en el carrito
    const [loading, setloading] = useState(false)
    //total acumulado de dinero para hacer la compra
    const [total, setTotal] = useState(0)
    //determina si alcanza el monto para realizar la compra 
    const [itspurchasable, setItsPurchasable] = useState(false)
    //determina si intente hacer la compra
    const [succes, setSucces] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.user.shoppingCart)
    const credit = useSelector(state => state.user.datos.credit)

    const buy = () => {
        if ((credit - total) > 0) {
            // setItsPurchasable(true)
            dispatch(debitCredit(credit - total))
            dispatch(resetProducts())
        }
        else {
            setItsPurchasable(false)
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
            {(succes && !itspurchasable) && <SuccessAndError itspurchasable={itspurchasable} setSucces={setSucces} />}
           
            {!succes &&
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
                        <Button onClick={() => navigate("/")}>
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
            }
        </>

    )

}