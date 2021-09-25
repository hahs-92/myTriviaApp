//assest
import React from 'react'
import imgInfo from '../assets/question.svg'
//styles
import  { CardRegisterWrapper } from '../styles/components/CardRegisterStyles'
//componentes
import Button from './Button'

type CardRegisterProps = {
    inputValue: string | null
    cb?: (e:React.ChangeEvent<HTMLInputElement>) => void
    children?: React.ReactChild
}

const CardRegister: React.FC<CardRegisterProps> = ({children,inputValue,cb}) => {
    return(
        <CardRegisterWrapper>
            <section className='ImageWrapper'>
                <img src={ imgInfo } alt="avatar-info" />
            </section>

            <section className='FormWrapper'>
                <form onSubmit={ (e) => e.preventDefault()}>
                    <input type="text" placeholder='userName' onChange={ cb } />
                </form>
            </section>

            <section className='ButtonWrapper'>
                { children }
            </section>
        </CardRegisterWrapper>
    )
}

export default CardRegister