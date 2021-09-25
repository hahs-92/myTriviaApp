import React from 'react'
//styles
import { CardQuestionWrapper } from '../styles/components/CardQuestionStyles'
//components
import Button from './Button'


type CardQuestionProps = {
    question: string,
    answers: string[],
    userAnswer: string | null
    render: (answer: string, index: number) => JSX.Element 
    children?: | React.ReactChild
}

const CardQuestion:React.FC<CardQuestionProps> = ({
    question, 
    children, 
    userAnswer,
    answers, 
    render 
}) => {

    return(
        <CardQuestionWrapper>
            <section className='QuestionWrapper'>
                <h2>{question}</h2>
            </section>

            <section >
                <ul className='QuestionList'>
                    { answers.map(render)}
                    { children }
                </ul>
            </section>

            <section className='ButtonWrapper'>
              <Button 
                title='Next'
                isActive={ !!userAnswer }
              />
            </section>
        </CardQuestionWrapper>
    )
}

export default CardQuestion 