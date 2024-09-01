import styled from "styled-components";

export const PurchasedConfirmationWrapper = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 16px;    

    button {
        width: 173px;
    }
    
    & div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 24px;
        border-radius: 4px;
        background: ${({theme}) => theme.colors.white};
        transition: all 0.3s;
        padding: 64px 64px 102px 64px;

        & h1 {
            font-size: 20px;
            font-weight: 700;
            line-height: 27.24px;
            text-align: center;
        }

        & img {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 500px) {
        & div {
            border: 1px solid red;

            & h1 {
                max-width: 200px;
            }
        }
    }
` 