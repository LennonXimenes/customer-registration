import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body {
        background-color: var(--color--grey-4);
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input {
        border: none;
        background: transparent;
        outline: none;
        box-shadow: none;
    }

    .noStyle {
        text-decoration: none;
        color: inherit;
        background-color: transparent;
    }
`