import styled from "styled-components";

export const StyledHeader = styled.header `
    height: 5rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem;

    border-bottom: 3px solid transparent;
    background: linear-gradient(to bottom, var(--color--grey-4), var(--color--grey-3));

    ul {
        display: flex;
        flex-direction: row;

        .linkIcon {
            color:var(--color--grey-0);
            padding: 0.5rem;
        }
    }
`

export const StyledBoxHeader = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 1rem;


.box{
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content:space-around;

    margin: 1rem;

    h1 {
        margin-bottom: 1rem;
    }

    button {
        height: auto;
        width: 100%;
                
        background-color: var(--color--grey-2);
        color: var(--color--grey-0);
        border-radius: 4px;

        padding: 0.3rem;

        font-size: 0.8rem;

    }

    .exit {
        margin-top: 1rem;
    }
}

.boxBtn{
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;

    margin: 1rem;

    button {
        height: auto;
        width: 5rem;
                
        background-color: var(--color--grey-2);
        color: var(--color--grey-0);
        border-radius: 4px;

        padding: 0.3rem;
        margin-left: 1rem;

        font-size: 0.8rem;

        :hover {
            background-color: var(--color--primary-hover);
        }

        :focus {
            background-color: var(--color--primary-focus);
        }

    }
}

`