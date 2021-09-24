//assest
import imgInfo from '../assets/question.svg'
//styles
import  { CardInfoWrapper } from '../styles/components/CardInfoStyles'
//componentes
import Button from './Button'

const CardInfo = () => {
    return(
        <CardInfoWrapper>
            <section className='ImageWrapper'>
                <img src={ imgInfo } alt="avatar-info" />
            </section>

            <section className='FormWrapper'>
                <form>
                    <input type="text" placeholder='FirstName' />
                    <input type="text" placeholder='LastName' />
                </form>
            </section>

            <section className='ButtonWrapper'>
                <Button title='Start'/>
            </section>
        </CardInfoWrapper>
    )
}

export default CardInfo