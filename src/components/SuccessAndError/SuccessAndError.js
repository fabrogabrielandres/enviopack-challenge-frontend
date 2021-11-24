import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Message, Title, Wrapper } from './styled'

export const SuccessAndError = () => {
    let navigate = useNavigate()
    const {shoppingCart} = useSelector(state => state.user)
    console.log(shoppingCart);
    const messgeExitoso = "La Compra se realizo con exito"
    const messageFallo = "Ocurrio un error con la compra, revisa que el importe no supero el monto disponible en tu cuenta"

    return (<>
        <Title>
            Estado de compra
        </Title>
        <Wrapper>
            <Message>
                {shoppingCart.lenght > 0 ?  messageFallo : messgeExitoso}
            </Message>
            <Button
                onClick={shoppingCart.lenght>0 ? () => navigate("/carrito") : () => navigate("/")}
            >
                {shoppingCart.lenght > 0 ? "Volver a Carrito" :  "Volver a Catalogo"}
            </Button>
        </Wrapper>
    </>
    )
}
