import styled from "styled-components"
//interfaces
import { GlobalVariables } from '../styles/GlobalStyles'


export const AppWrapper = styled.div `
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template: 1fr 50px / 1fr;
    min-height: 100vh;
    background-color: ${ GlobalVariables.bg };

    & .Main {
        display: flex;
        justify-content: center;
    }

    & .Footer {
        grid-row-start: 2;
        justify-self: center;
        align-self: center;
        font-size: 1.8rem;
        color: ${ GlobalVariables.white};
    }
`