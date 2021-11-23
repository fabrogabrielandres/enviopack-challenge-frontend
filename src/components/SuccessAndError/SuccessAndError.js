


import React from 'react'
import { Title, Wrapper } from './styled'

export const SuccessAndError = ({message="estado de compra"}) => {
    return (
        <Wrapper>
            <Title>
                {`${message}`}
            </Title>
        </Wrapper>
    )
}
