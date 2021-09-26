import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../GlobalStyles'

export const CardRegisterWrapper = styled.article `
    display: grid;
    grid-template: 200px 1fr 60px / 1fr;
    padding: 5%;
    height: 100%;

    .ImageWrapper {
        display: flex;
        align-items: center;

        & img {
            height: 90%;
            width: 100%;
        }
    }

    .FormWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        & form {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-evenly;
            width: 95%;

            & label {
                font-size: 1.6rem;
            }

            & input {
                padding: 5%;
                height: 40px;
                border: 1px solid ${ GlobalVariables.blue };
                border-radius: 12px;
                outline: none;
            }
        }
    }

    .ButtonWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`