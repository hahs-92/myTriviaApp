//styles
import { CardScoreWrapper, Item } from '../styles/components/CardScoreStyles'
//components
import Button from './Button'

enum awares { "50K","250K","500K","750K", "1M" }

const CardScore = () => {
    return(
        <CardScoreWrapper >
            <section className='Title'>
                <h2>Congratulations</h2>
            </section>

            <section>
                <ul className='ScoreOptions'>
                    <Item >{awares[4]}</Item>
                    <Item active={true}>{awares[3]}</Item>
                    <Item>{awares[2]}</Item>
                    <Item>{awares[1]}</Item>
                    <Item>{awares[0]}</Item>
                </ul>
            </section>

            <section className='ButtonWrapper'>
                {/* <Button title='Continue'/> */}
            </section>
        </CardScoreWrapper>
    )
}

export default CardScore