import styled from "styled-components";

export const CardCoverWrapper = styled.article `
    display: grid;
    grid-template: 60px 1fr 60px / 1fr;
    padding: 5%;
    width: 100%;
    height: 100%;

    .CoverImage { 
        width: 100%;
        max-height: 280px;
    }

    .ButtonWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`