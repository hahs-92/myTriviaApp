import React from "react"
//styles
import { ButtonWrapper } from '../styles/components/ButtonStyles'

type ButtonProps = {
    title: string,
    isActive: boolean
    cb?: () => void
}

const Button: React.FC<ButtonProps> = ({title,isActive, cb}) => {
    return (
        <ButtonWrapper  isActive={isActive} onClick={ cb }>{ title }</ButtonWrapper>
    )
}

export default Button
