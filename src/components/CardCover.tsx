import { CardCoverWrapper } from '../styles/components/CardCoverStyles'
//assests
import coverImg from '../assets/newbie.svg'
//components
import Button from './Button'

const CoverCard = () => {
    return(
        <CardCoverWrapper>
            <section>
                <h2>Who does not Wants to Be a Millionaire? </h2>
            </section>

            <section>
                <img className='CoverImage' src={ coverImg } alt="avatar" />
            </section>

            <section className='ButtonWrapper'>
                <Button title='Go¡¡'/>
            </section>
        </CardCoverWrapper>
    )
}

export default CoverCard