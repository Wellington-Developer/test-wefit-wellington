import styled from "styled-components";

export const HeaderContainerWrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px;
    
    & h1 {
        font-size: 20px;
        line-height: 27.24px;
        font-weight: 700;
        color: #FFF;
    }

    & div {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;

        & span {
            text-align: end;

            & h1 {
                font-size: 14px;
                line-height: 19.07px;
                color: #FFF;
                font-weight: 600;
            }

            & p {
                font-size: 12px;
                line-height: 16.34px;
                color: #999999;
                font-weight: 600;
            }
        }
    }

    @media screen and (max-width: 576px) {
        & div {
            & span {
                & h1 {
                    display: none;
                }
            }
        }
    }
`