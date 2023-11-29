import styled, { css } from "styled-components";

export const fonts = css`
    font-family: var(--font-primary);
`

export const FontTitle = styled.h1`
    ${fonts};
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color--grey-0);
`

export const FontLabel = styled.label`
    ${fonts};
    font-size: ${({font}) => font === "big" ? "0.875rem" : ".625rem"};
    font-weight: 400;
    color: var(--color--grey-0);
`

export const FontParagraph = styled.p`
    ${fonts};
    font-size: .625rem;
    font-size: ${({font}) => font === "big" ? "0.875rem" : ".625rem"};
    font-weight: ${({weight}) => weight === "big" ? "700" : "400"};
    color: ${({color}) => color === "white" ? "var(--color--grey-0)" : "var(--color--grey-1)"};
`