import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../GlobalStyles'

export const CardWrapper = styled.section `
    position: relative;
    width: 95%;
    max-width: 450px;
    min-width: 280px;
    height: 480px;
    min-height: 400px;
    background-color: ${ GlobalVariables.white };
    color: ${ GlobalVariables.black };
    border-radius: 12px;

    .Exit {
        position: absolute;
        top: -55px;
        left: 0;
        width: 80px;
        height: 50px;
        cursor: pointer;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`