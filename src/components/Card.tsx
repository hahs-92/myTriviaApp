import React from 'react'
//styles
import { CardWrapper } from '../styles/components/CardStyles'
//assest
import exitImg from '../assets/exit.svg'

type CardProps = {
    isError: boolean
    isLoading: boolean
    start:  boolean
    isLogin: boolean
    startGame: boolean
    gameOver: boolean
    isWin: boolean
    setStartGame: React.Dispatch<React.SetStateAction<boolean>>
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>
    setRound: React.Dispatch<React.SetStateAction<number>>
    onLoading: () => React.ReactNode
    onStart: () => React.ReactNode | JSX.Element[]
    onRegister: () => React.ReactNode
    onQuestion: () => React.ReactNode
    onGameOver: () => React.ReactNode
    onScore: () => React.ReactNode
    onWinners: () => React.ReactNode
}

const Card: React.FC<CardProps> = ({
    isError,
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
    isWin,
    onWinners,
    setStartGame,
    setGameOver,
    setRound
}) => {

    //PERMITIR AL USUARIO ABANDONAR EL JUEGO
    const handelOnClick = () => {
        setStartGame(false)
        setGameOver(true)
        setRound(prev => prev - 1)
    }

    return(
        <CardWrapper>
            { isError && <h1>Something went wrong¡</h1>}
            { !isError && isLoading && onLoading() }
            { !isError && !gameOver && startGame &&
                <article className='Exit' onClick={ handelOnClick }>
                    <img src={ exitImg } alt="exit" />
                </article>
            }
            { !isError && !isLoading && !startGame && start  && onStart() }
            { !isError && !isLoading && !startGame && !isLogin && !start && onRegister() }
            { !isError && !isLoading && isLogin && startGame && !gameOver && onQuestion() }
            { !isError && !isLoading && startGame && gameOver && onGameOver() }
            { !isError && !isLoading && !startGame && gameOver && !isWin && onScore() }
            { !isError && !isLoading && isWin && onWinners() }

        </CardWrapper>
    )
}

export default Card