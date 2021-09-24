import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../GlobalStyles'

export const CardWrapper = styled.section `
    width: 95%;
    max-width: 450px;
    min-width: 280px;
    height: auto;
    min-height: 400px;
    background-color: ${ GlobalVariables.white };
    color: ${ GlobalVariables.black };
    border-radius: 12px;
`