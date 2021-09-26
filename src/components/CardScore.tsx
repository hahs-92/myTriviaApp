//styles
import { CardScoreWrapper } from '../styles/components/CardScoreStyles'
//components
import Button from './Button'
import Item from './Item'
//custom hooks
import { useGetAwares } from '../hooks/useGetAwares'
//utils
import { sendData } from '../utils/sendData'

type CardScoreProps = {
    round: number
    userName: string
    cb: () => void
}

const CardScore: React.FC<CardScoreProps> = ({round, userName, cb}) => {
    const { data } = useGetAwares()
    const awares = [...data]

    //ENVIAR LOS GANADORES AL SERVIDOR
    const handleOnClick = () => {
        if(round === 5) sendData(userName);
        cb()
    }

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
                        awares.reverse().map((item: string) => (
                            <Item key={ item } round={ round } award={ item }/>
                        )) 
                    }
                </ul>
            </section>

            <section className='ButtonWrapper'>
                <Button title='Continue' cb={ handleOnClick } isActive={true} />
            </section>
        </CardScoreWrapper>
    )
}

export default CardScore
