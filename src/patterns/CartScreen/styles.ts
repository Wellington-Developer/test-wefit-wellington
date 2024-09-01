import styled from "styled-components";

export const CartScreenWrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    padding: 0 16px;
    margin: 0 auto;
    `

export const CartScreenContent = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;

    @media screen and (max-width: 600px) {
        padding: 16px;
    }
`

export const CartContentHeader = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr 1fr;

    div {
        flex: 1;
        color: ${({theme}) => theme.colors.gray200};
        text-transform: uppercase;
        line-height: 19.07px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    div:first-child {
        width: 100%;
        max-width: 280px;
    }

    @media screen and (max-width: 650px) {
        display: none;
    }
` 

export const CartContentBody = styled.div`
    display: grid;
    gap: 24px;

    @media screen and (max-width: 600px) {
        gap: 30px;
    }
`

export const CartContentFooter = styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.gray200};
    padding-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;

    button {
        max-width: 173px;
    }

    div {
        display: flex;
        gap: 5px;
        align-items: center;
        justify-self: end;

        span {
            font-weight: 700;
            color: ${({theme}) => theme.colors.gray200};
            font-size: 14px;
        }

        p {
            font-weight: 700;
            font-size: 24px;
            line-height: 32.68px;
            width: 130.79px;
            text-align: center;
            color: ${({theme}) => theme.colors.gray500};
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: space-between;
        align-items: center;
        padding-top: 21px;
        margin-top: 9px;

        button, div {
            align-self: center;
            justify-self: center;
        }

        button {
            max-width: 600px;
        }

        div {
            grid-row: 1;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;

            p {
                width: auto;
            }
        }
    }
`