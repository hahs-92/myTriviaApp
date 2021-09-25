//styles
import React from 'react'
import { OptionItemWrapper } from '../styles/components/OptionItem'

enum letterOptions {'A','B','C','D'}

type OptionItemProps = {
    index: number,
    option: string,
    value: string,
    cb?: (e: React.MouseEvent<HTMLLIElement>) => void
}

const OptionItem: React.FC<OptionItemProps> = ({index, option, value, cb }) => {
    return(
        <OptionItemWrapper value={value} onClick={ cb }>
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