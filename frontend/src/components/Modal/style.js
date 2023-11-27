import styled from "styled-components";

export const StyledModal = styled.dialog`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;

    height: 100vh;
    width: 100%;
    
    background: rgba(0,0,0,.3);
    
    > .container {
        position: relative;
        
        display: flex;
        flex-direction: column;

        height: 100%;
        min-height: 275px;
        max-height: 350px;
        width: 100%;
        min-width: 275px;
        max-width: 370px;

        border-radius: 4px;

        background-color: var(--color--grey-3);
    }
`

export const StyledTitleButton = styled.div`
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    border-radius: 4px 4px 0px 0px;
    background-color: var(--color--grey-2);
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    padding: 0 1rem;;

    label {
        margin-top: 1rem;
    }

    input {
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

        margin-top: 1.5rem;
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
`

export const StyledBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    button {
        height: 50px;
        
        margin-top: 1.5rem;
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