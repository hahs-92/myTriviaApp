import React from 'react'
//styles
import { CardQuestionWrapper } from '../styles/components/CardQuestionStyles'
//components
import Button from './Button'


type CardQuestionProps = {
    title: string,
    questions: string[],
    userAnswer: string | null
    render: (answer: string, index: number) => JSX.Element 
    children?: | React.ReactChild
}

const CardQuestion:React.FC<CardQuestionProps> = ({
    title, 
    children, 
    userAnswer,
    questions, 
    render 
}) => {

    return(
        <CardQuestionWrapper>
            <section className='QuestionWrapper'>
                <h2>{title}</h2>
            </section>

            <section >
                <ul className='QuestionList'>
                    { questions.map(render)}
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