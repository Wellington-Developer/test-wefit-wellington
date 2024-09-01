import { styled } from "styled-components";

export const CartButtonWrapper = styled.button`
    width: 100%;
    max-width: 317.33px;
    height: 2.5rem;
    display: flex;
    gap: 0.75rem;
    border: none;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.blue};
    transition: all 0.3s ease-in-out;
    font-size: 12px;
    line-height: 16.34px;
    font-weight: 700;
    cursor: pointer;
    color: ${({theme}) => theme.colors.white};

    &:hover {
        background: ${({theme}) => theme.colors.blueHovered};
    };

    &:disabled {
        opacity: 1;
        background-color: ${({theme}) => theme.colors.green};
    }

    & div {
        display: flex;
        font-weight: 400;
        gap: 3.4px;
        align-items: end;
    }
`