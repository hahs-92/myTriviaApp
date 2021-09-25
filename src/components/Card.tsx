import React from 'react'
//styles
import { CardWrapper } from '../styles/components/CardStyles'
//assest
import exitImg from '../assets/exit.svg'

type CardProps = {
    isLoading: boolean
    start:  boolean
    isLogin: boolean
    startGame: boolean
    gameOver: boolean
    setStartGame: React.Dispatch<React.SetStateAction<boolean>>
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>
    setRound: React.Dispatch<React.SetStateAction<number>>
    onLoading: () => React.ReactNode
    onStart: () => React.ReactNode | JSX.Element[]
    onRegister: () => React.ReactNode
    onQuestion: () => React.ReactNode
    onGameOver: () => React.ReactNode
    onScore: () => React.ReactNode
}

const Card: React.FC<CardProps> = ({
    isLoading,
    onLoading,
    start, 
    onStart ,
    isLogin,
    onRegister,
    startGame,
    onQuestion,
    gameOver,
    onGameOver,
    onScore,
    setStartGame,
    setGameOver,
    setRound
}) => {

    const handelOnClick = () => {
        setStartGame(false)
        setGameOver(true)
        setRound(prev => prev - 1)
    }

    return(
        <CardWrapper>
            { isLoading && onLoading() }
            { !gameOver && startGame && 
                <article className='Exit' onClick={ handelOnClick }>
                    <img src={ exitImg } alt="exit" />
                </article>
            }
            { !isLoading && !startGame && start  && onStart() }
            { !isLoading && !startGame && !isLogin && !start && onRegister() }
            { !isLoading && isLogin && startGame && !gameOver && onQuestion() }
            { !isLoading && startGame && gameOver && onGameOver() }
            { !isLoading && !startGame && gameOver  && onScore() }

        </CardWrapper>
    )
}

export default Card