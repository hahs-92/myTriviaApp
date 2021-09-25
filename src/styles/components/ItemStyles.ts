import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../GlobalStyles'

type ItemProps = {
    active?: boolean
}

export const ItemStyles = styled.li<ItemProps> `
display: flex;
justify-content: center;
align-items: center;
height: 40px;
background-color: ${({active}) => 
    active
    ? GlobalVariables.orange
    : GlobalVariables.blue
};
color: white;
font-size: 1.8rem;
border-radius: 12px;
cursor: pointer;

`