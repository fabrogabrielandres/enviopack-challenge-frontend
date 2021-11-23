import React from 'react'
import { useNavigate } from 'react-router'
import { Button, Message, Title, Wrapper } from './styled'

export const SuccessAndError = ({ itspurchasable ,setSucces}) => {
    let navigate = useNavigate()
    const messgeExitoso = "La Compra se realizo con exito"
    const messageFallo = "Ocurrio un error con la compra, revisa que el importe no supero el monto disponible en tu cuenta"

    return (<>
        <Title>
            Estado de compra
        </Title>
        <Wrapper>
            <Message>
                {itspurchasable ? messgeExitoso : messageFallo}
            </Message>
            <Button
                onClick={itspurchasable ? () => navigate("/") : () => setSucces(false)}
            >
                {itspurchasable ? "Volver a Catalogo" : "Volver a Carrito"}
            </Button>
        </Wrapper>
    </>
    )
}
