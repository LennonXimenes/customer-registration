import styled from "styled-components";

export const StyledForm = styled.form `
    height:100%;
    width: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;

    padding: 2rem;

    background-color: var(--color--grey-3);

    h1 {
        margin-bottom: 1.5rem;
    }
    
    label {
        color: var(--color--grey-0);
        font-size: .875rem;
    }

    input {
        height: 2.5rem;
        width: 100%;

        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: .625rem;
        
        background-color: var(--color--grey-2);
        color: var(--color--grey-0);

        border-radius: 4px;

        font-size: 16px;

        :hover {
            border: 1px solid var(--color--grey-0);
        }

        :focus {
            border: 1px solid var(--color--grey-0);
        }
    }
`
export const StyledBoxBtn = styled.div `
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    button {
        height: 2.5rem;
        width: 100%;

        margin-top: 1rem;
        padding: .625rem;
        
        background-color: var(--color--grey-2);
        color: var(--color--grey-0);

        border-radius: .25rem;

        font-size: 1rem;

        :hover {
            background-color: var(--color--primary-hover);            
        }

        :focus {
            background-color: var(--color--primary-focus);
        }
    }
`