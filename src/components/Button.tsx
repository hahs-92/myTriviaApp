import React from "react"
//styles
import { ButtonWrapper } from '../styles/components/ButtonStyles'

type ButtonProps = {
    title: string
}

const Button: React.FC<ButtonProps> = ({title}) => {
    return (
        <ButtonWrapper>{ title }</ButtonWrapper>
    )
}

export default Button