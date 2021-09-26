import { CardCoverWrapper } from '../styles/components/CardCoverStyles'
//assests
import coverImg from '../assets/newbie.svg'

type CoverCardProps = {
    children?: React.ReactChild
}

const CoverCard: React.FC<CoverCardProps> = ({children}) => {
    return(
        <CardCoverWrapper>
            <section>
                <h2>Who does not Wants to Be a Millionaire? </h2>
            </section>

            <section>
                <img className='CoverImage' src={ coverImg } alt="avatar" />
            </section>

            <section className='ButtonWrapper'>
              { children }
            </section>
        </CardCoverWrapper>
    )
}

export default CoverCard
