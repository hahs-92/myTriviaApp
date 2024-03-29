import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../GlobalStyles'

type ButtonProps = {
    isActive?: boolean
}

export const ButtonWrapper = styled.button<ButtonProps> `
    width: 100%;
    max-width: 180px;
    height: 45px;
    background-color: transparent;
    border: 2px solid ${ GlobalVariables.blue} ;
    border-radius: 12px;
    font-size: 1.8rem;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    display: ${({isActive}) => 
        isActive
            ? 'block'
            : 'none'
    };

    &:hover {
        background-color: ${ GlobalVariables.orange };
        border: 2px solid ${ GlobalVariables.orange};
        border-bottom: 3px solid ${ GlobalVariables.black };
    }
`