import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../GlobalStyles'

export const CardScoreWrapper = styled.article `
    display: grid;
    grid-template: 60px 1fr 60px / 1fr;
    padding: 5%;
    width: 100%;
    height: 100%;

    .Title {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ScoreOptions {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;

    } 

    .ButtonWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`