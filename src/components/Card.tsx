//styles
import React from 'react'
import { CardWrapper } from '../styles/components/CardStyles'

type CardProps = {
    start:  boolean
    isLogin: boolean
    startGame: boolean
    gameOver: boolean
    onStart: () => React.ReactNode | JSX.Element[]
    onRegister: () => React.ReactNode
    onQuestion: () => React.ReactNode
    onGameOver: () => React.ReactNode
    onScore: () => React.ReactNode
}

const Card: React.FC<CardProps> = ({
    start, 
    onStart ,
    isLogin,
    onRegister,
    startGame,
    onQuestion,
    gameOver,
    onGameOver,
    onScore
}) => {

    return(
        <CardWrapper>
            { !startGame && start  && onStart() }
            { !startGame && !isLogin && !start && onRegister() }
            { isLogin && startGame && !gameOver && onQuestion() }
            { startGame && gameOver && onGameOver() }
            { !startGame && gameOver  && onScore() }

        </CardWrapper>
    )
}

export default Card