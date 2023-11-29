import styled from "styled-components";

export const StyledBox = styled.div `
    height: 100vh;
    width: 100%;
`

export const StyledMain = styled.main `
    height: 100%;
    width: 100%;

    display: flex;

    div {
        height: auto;
        width: 100%;

        margin: auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
`