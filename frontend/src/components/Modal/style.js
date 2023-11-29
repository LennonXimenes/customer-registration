import styled from "styled-components";

export const StyledModal = styled.dialog `
    height: auto;
    
    width: 100%;
    position: fixed;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    inset: 0;
    
    background: rgba(0,0,0,.3);
    
    > .container {
        position: relative;
        
        display: flex;
        flex-direction: column;

        height: auto;
        min-height: 275px;
        max-height: fit-content;
        width: 100%;
        min-width: 275px;
        max-width: 370px;

        border-radius: 4px;

        background-color: var(--color--grey-3);
    }

    label {
        margin-top: 2rem;
    }
`

export const StyledTitleButton = styled.div `
    height: 3.125rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    margin-bottom: 1rem;

    border-radius: .25rem .25rem 0rem 0rem;
    background-color: var(--color--grey-2);

    button {
        margin-top: .0625rem;
    }
`

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    padding: 0 1rem;

    label {
        margin-top: 1rem;
    }
    
    input {
        height: 3.125rem;
        width: 100%;

        margin-top: 16px;
        margin-bottom: 16px;
        padding: .625rem;
        
        background-color: var(--color--grey-2);
        color: var(--color--grey-0);

        border-radius: .25rem;

        font-size: 1rem;

        :hover {
            border: 1px solid var(--color--grey-0);
        }

        :focus {
            border: 1px solid var(--color--grey-0);
        }
    }

    select {
        height: 50px;
        width: 100%;

        margin-top: 1rem;
        padding: 10px;
        
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

    .register {
        height: 50px;
        width: 100%;

        margin-top: 0.8rem;
        margin-bottom: 1.5rem;
        padding: 10px;
        
        background-color: var(--color-primary);
        color: var(--color--grey-0);
        border-radius: 4px;

        font-size: 16px;

        :hover {
            background-color: var(--color--primary-hover);
        }

        :focus {
            background-color: var(--color--primary-focus);
        }
    }

    .delete{
        height: 50px;
        width: 100%;

        margin-top: 0.8rem;
        margin-bottom: 1.5rem;
        padding: 10px;
        
        background-color: var(--color--grey-2);
        color: var(--color--grey-0);
        border-radius: 4px;

        font-size: 16px;

        :hover {
            background-color: var(--color--primary-hover);
        }

        :focus {
            background-color: var(--color--primary-0);
        }
    }
`

export const StyledBtn = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    button {
        height: 50px;
        
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        padding: 10px;
        
        color: var(--color--grey-0);
        border-radius: 4px;

        font-size: 16px;
    }

    .save {
        width: 200px;
        background-color: var(--color-primary);
        
        :hover {
            background-color: var(--color--primary-hover);
        }

        :focus {
            background-color: var(--color--primary-focus);
        }
     }

     .dlt {
        width: 100px;
        background-color: var(--color--grey-1);
        
        :hover {
            background-color: var(--color--grey-2);
        }

        :focus {
            background-color: var(--color--grey-2);
        }
     }
`