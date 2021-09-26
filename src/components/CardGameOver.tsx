//components
// import Button from "./Button"
//assets
import gameOverImg from '../assets/gameover.svg'
//styles
import { CardGameOverWrapper } from '../styles/components/GameOverStyles'

type CardGameOverProps = {
    children?: React.ReactChild
}

const CardGameOver: React.FC<CardGameOverProps> = ({children}) => {
    return(
        <CardGameOverWrapper>
            <section className='Title'>
                <h2>Game Over¡¡</h2>
            </section>

            <section className='ImageWrapper'>
                <img  src={ gameOverImg } alt="avatar-gameOver" />
            </section>

            <section className='ButtonWrapper'>
                { children }
            </section>
        </CardGameOverWrapper>
    )
}

export default CardGameOver
