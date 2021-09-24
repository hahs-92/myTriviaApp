import styled from "styled-components";

export const CardGameOverWrapper = styled.article `
    display: grid;
    grid-template: 60px 1fr 60px / 1fr;
    padding: 5%;
    height: 100%;

    .Title {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ImageWrapper {
        & img {
            width: 100%;
        }
    }

    .ButtonWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`