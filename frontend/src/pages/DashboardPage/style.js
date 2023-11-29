import styled from "styled-components";

export const StyledContainer = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        height: 2rem;
        width: 10%;

        margin-top: 16px;
        margin-bottom: 16px;
        padding: .625rem;
        
        background-color: var(--color--grey-2);
        color: var(--color--grey-0);

        border-radius: .25rem;

        font-size: 1rem;
        text-align: center;
    }

    ul {
        height: auto;
        width: 70%;

        display: flex;
        flex-direction: column;
     
        padding: 1rem;
        margin-top: 2rem;

        border: solid .25rem var(--color--grey-3);

        li {
            height: auto;
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: space-around;

            border: solid .20rem var(--color--grey-2);
            border-radius: .55rem;

            padding: 0.5rem;
            margin-top: 0.5rem;

        }
    } 

`