import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../GlobalStyles'

type ItemProps = {
    isClicked: boolean,
    isCorrect: boolean
}

export const OptionItemWrapper = styled.li<ItemProps> `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: ${({isCorrect, isClicked}) => 
        isCorrect 
            ? GlobalVariables.success
            : !isCorrect && isClicked
            ? GlobalVariables.error
            : GlobalVariables.blue
    };
    color: ${GlobalVariables.white};
    border-radius: 12px;
    cursor: pointer;

    /* &:hover {
        background-color: ${({isCorrect, isClicked}) => 
        isCorrect && isClicked
            ? GlobalVariables.success
            : !isCorrect && isClicked
            ? GlobalVariables.error
            : GlobalVariables.blue
        }   
    } */

    .Option {
        width: 10%;
    }

    .Answer {
        width: 80%;
    }
`