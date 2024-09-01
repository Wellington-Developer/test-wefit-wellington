import styled from "styled-components";

export const WrapperEmptyState = styled.div`
    max-width: 1080px;
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;

    button, a {
        width: 173px;
    }
    
    & section {
        display: flex;
        flex-direction: column;
        gap: 24px;
        border-radius: 4px;
        background: ${({theme}) => theme.colors.white};
        padding: 64px 64px 143px 64px;
        justify-content: center;
        align-items: center;

        & h1 {
            font-size: 20px;
            line-height: 27.24px;
            text-align: center;
        }

        & div {
            max-width: 447px;
            width: 100%;
            border-bottom: 1.36px solid #3F3D56;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media screen and (max-width: 572px) {
        & section {
            padding: 64px 64px;

            & h1 {
                height: 35px;
            }

            & div {
                max-width: 178.63px;
            }
        }
    }
`