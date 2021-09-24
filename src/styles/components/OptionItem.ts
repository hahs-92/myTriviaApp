import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../GlobalStyles'

export const OptionItemWrapper = styled.li `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: ${ GlobalVariables.blue };
    color: ${GlobalVariables.white};
    border-radius: 12px;
    cursor: pointer;

    &:hover {
        background-color: ${ GlobalVariables.bg };
    }

    .Option {
        width: 10%;
    }

    .Answer {
        width: 80%;
    }
`