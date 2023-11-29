import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color--primary-focus: #FF427F;
        --color--primary-hover: #59323F;

        --color--grey-0: #F8F9FA;
        --color--grey-1: #868E96;
        --color--grey-2: #343B41;
        --color--grey-3: #212529;
        --color--grey-4: #121214;

        --color--negative: #E83F5B;
        --color--warning: #FFCD07;
        --color--sucess: #3FE864;
        --color--information: #155BCB;

        --font-primary: "Inter" sans-serif;
    }

`