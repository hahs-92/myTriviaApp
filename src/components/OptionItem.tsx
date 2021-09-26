//styles
import React, { useState } from 'react'
import { OptionItemWrapper } from '../styles/components/OptionItem'

enum letterOptions {'A','B','C','D'}

type OptionItemProps = {
    index: number
    option: string
    value: string
    correct_answer: string
    userAnswer: string | null
    cb: (e: React.MouseEvent<HTMLLIElement>) => void
}

const OptionItem: React.FC<OptionItemProps> = ({index, option, value, cb, correct_answer, userAnswer }) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleOnClick = (e:React.MouseEvent<HTMLLIElement> ) => {
        if(userAnswer) return
        cb(e)
        setIsClicked(true)
    }

    return(
        <OptionItemWrapper
            value={value} 
            onClick={ handleOnClick }
            isClicked={ isClicked }
            isCorrect={ !!userAnswer && value === correct_answer }
            >
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
