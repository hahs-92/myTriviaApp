//styles
import React from 'react'
import { CardWrapper } from '../styles/components/CardStyles'

type CardProps = {
    start:  boolean
    isLogin: boolean
    startGame: boolean
    onStart: () => React.ReactNode | JSX.Element[]
    onRegister: () => React.ReactNode
    onQuestion: () => React.ReactNode
}

const Card: React.FC<CardProps> = ({
    start, 
    onStart ,
    isLogin,
    onRegister,
    startGame,
    onQuestion
}) => {

    return(
        <CardWrapper>
            { !startGame && start  && onStart() }
            { !startGame && !isLogin && !start && onRegister() }
            { isLogin && startGame && onQuestion() }
        </CardWrapper>
    )
}

export default Card