//styles
import React from 'react'
import { CardWrapper } from '../styles/components/CardStyles'

type CardProps = {
    children: React.ReactChild
}

const Card: React.FC<CardProps> = ({ children }) => {
    return(
        <CardWrapper>
            { children }
        </CardWrapper>
    )
}

export default Card