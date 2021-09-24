import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../GlobalStyles'

export const CardQuestionWrapper = styled.article `
    display: grid;
    grid-template: 1fr 2fr 60px / 1fr;
    padding: 5%;
    width: 100%;
    height: 100%;

    .QuestionWrapper {
        display: flex;
        align-items: center;
    }

    .QuestionList {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
    }

    .ButtonWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`