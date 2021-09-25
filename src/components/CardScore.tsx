//styles
import { CardScoreWrapper } from '../styles/components/CardScoreStyles'
//components
import Button from './Button'
import Item from './Item'
//custom hooks
import { useGetAwares } from '../hooks/useGetAwares'

type CardScoreProps = {
    round: number,
    cb: () => void
}

const CardScore: React.FC<CardScoreProps> = ({round,cb}) => {
    const { data } = useGetAwares()
    const awares = [...data].reverse()
    return(
        <CardScoreWrapper >
            <section className='Title'>
                { round < 1 
                    ?  <h2>You got 0K</h2>
                    :  <h2>Congratulations</h2>
                }
            </section>

            <section>
                <ul className='ScoreOptions'>
                    { 
                        awares.map((item) => (
                            <Item key={ item } round={ round } award={ item }/>
                        )) 
                    }
                </ul>
            </section>

            <section className='ButtonWrapper'>
                <Button title='Try again¡¡' cb={ cb } isActive={true} />
            </section>
        </CardScoreWrapper>
    )
}

export default CardScore