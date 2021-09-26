import React from 'react'
//styles
import { CardQuestionWrapper } from '../styles/components/CardQuestionStyles'
//components
import Button from './Button'


type CardQuestionProps = {
    difficulty: string
    category: string
    question: string,
    answers: string[],
    userAnswer: string | null
    checkAnswer: () => void
    render: (answer: string, index: number) => JSX.Element 
    children?: | React.ReactChild
}

const CardQuestion:React.FC<CardQuestionProps> = ({
    category,
    difficulty,
    question, 
    children, 
    userAnswer,
    answers, 
    checkAnswer,
    render 
}) => {

    return(
        <CardQuestionWrapper>
            <section className='QuestionInfo'>
                <h3>{difficulty}</h3>
                <h3>{category}</h3>
            </section>

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
                cb={ checkAnswer }
              />
            </section>
        </CardQuestionWrapper>
    )
}

export default CardQuestion 