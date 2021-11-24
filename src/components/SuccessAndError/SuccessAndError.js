import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Message, Title, Wrapper } from './styled'

export const SuccessAndError = () => {
    let navigate = useNavigate()
    const {shoppingCart} = useSelector(state => state.user)
    const [buy, setbuy] = useState(false)
    const messgeExitoso = "La Compra se realizo con exito"
    const messageFallo = "Ocurrio un error con la compra, revisa que el importe no supero el monto disponible en tu cuenta"

    useEffect(() => {
        if(shoppingCart.length>0 ){
            setbuy(true)
        }else{
            setbuy(false)
        }
    }, [shoppingCart])

    return (<>
        <Title>
            Estado de compra
        </Title>
        <Wrapper>
            <Message>
                { buy ?  messageFallo : messgeExitoso}
            </Message>
            <Button
                onClick={buy ? () => navigate("/carrito") : () => navigate("/")}
            >
                { buy ? "Volver a Carrito" :  "Volver a Catalogo"}
            </Button>
        </Wrapper>
    </>
    )
}
