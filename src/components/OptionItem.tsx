//styles
import { OptionItemWrapper } from '../styles/components/OptionItem'

enum letterOptions {'A','B','C','D'}

type OptionItemProps = {
    index: number,
    option: string
}

const OptionItem: React.FC<OptionItemProps> = ({index, option}) => {
    return(
        <OptionItemWrapper>
            <section className='Option'>
                <h3>{ letterOptions[index]}</h3>
            </section>
            <section className='Answer'>
                <h3>{option}</h3>
            </section>
        </OptionItemWrapper>
    )
}

export default OptionItem