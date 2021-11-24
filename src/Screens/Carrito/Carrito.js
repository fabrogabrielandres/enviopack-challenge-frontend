import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { CardCarrito } from '../../components/CardCarrito/CardCarrito'
import { resetProducts } from '../../redux/productsSlice'
import { debitCredit } from '../../redux/userSlice'
import { Button, Footer, Resume, Title, Total, Wrapper } from './styles'

export const Carrito = () => {

    //total acumulado de dinero para hacer la compra
    const [total, setTotal] = useState(0)


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.user.shoppingCart)
    const credit = useSelector(state => state.user.datos.credit)

    const buy = () => {
        if ((credit - total) > 0) {
            dispatch(debitCredit(credit - total))
            dispatch(resetProducts())
        }
    }

    useEffect(() => {
        if (shoppingCart.length !== 0) {
            setTotal(
                shoppingCart.reduce((acc, next) =>
                    (acc = acc + next.price), 0)
            )
        }
        else {
            setTotal(0)
        }
    }, [shoppingCart])



    if (total === 0) { return (<Title>sin articulos en carritos</Title>) }

    return (
        <>
            {
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
                                navigate("/succces")
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