import styled from "styled-components";

export const CardWinnersWrapper = styled.article `
    display: grid;
    grid-template: 60px 1fr 60px / 1fr;
    padding: 5%;
    width: 100%;
    height: 100%;

    .TitleWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ContentWrapper {
        height: auto;
        max-height: 320px;
        overflow-y: auto;

        & ul {
            display: flex;
            flex-direction: column;
            gap: 10px 0px;
        }
    }

    .ButtonWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`