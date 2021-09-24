
import { createGlobalStyle } from "styled-components";

//variables globales
export enum GlobalVariables {
    bg= '#14279B',
    white = '#ffffff',
    black = '#2F527B',
    blue = '#6066d0d9',
    success = '#60BF88',
    error = '#EA8282',
    orange = '#F9A826'
  }

const GlobalStyles  = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
   
    html {
        font-family: 'Montserrat', sans-serif;
        font-size: 62.5%;
    }

    h1 {
        font-size: 3.6rem;
    }

    h2 {
        font-size: 1.8rem;
    }
    
    h4 {
        font-size: 1.4rem;
    }

    li {
        list-style: none;
    }
`
export default GlobalStyles