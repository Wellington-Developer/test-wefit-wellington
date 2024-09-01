import styled from "styled-components";

export const ButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    height: 40px;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.blue};
    font-size: 12px;
    line-height: 16.34px;
    font-weight: 700;
    border: none;
    color: ${({theme}) => theme.colors.white};
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.blueHovered}
    }
`