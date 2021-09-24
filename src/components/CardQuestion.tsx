//styles
import React, { Children } from 'react'
import { CardQuestionWrapper } from '../styles/components/CardQuestionStyles'
//components
import Button from "./Button"


type CardQuestionProps = {
    title: string,
    questions: string[],
    render: (answer: string, index: number) => JSX.Element 
    children?: | React.ReactChild

}

const CardQuestion:React.FC<CardQuestionProps> = ({title, children, questions, render}) => {
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
                <Button title='Next'/>
            </section>
        </CardQuestionWrapper>
    )
}

export default CardQuestion 