import styled from "styled-components";

export const ProductPriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 16px;
        line-height: 21.79px;
        color: ${({theme}) => theme.colors.gray500};
        font-weight: 700;
        span {
            display: none;
        }
    }

    img {
        cursor: pointer;
        transition: all 0.3s;
    }

    img:hover {
        opacity: 0.8;
    }

    @media screen and (max-width: 600px) {
        h1 {
            position: absolute;
            top: 54px;
            left: 213px;

            span {
                display: block;
                font-size: 12px;
                line-height: 16.34px;
                color: ${({theme}) => theme.colors.gray200};
                font-weight: 700;
            }
        }

        img {
            position: absolute;
            top: 3px;
            right: 0;
        }
    }

    @media screen and (max-width: 360px) {
        img {
            position: absolute;
            top: 10px;
            right: 0;
        }
    }
`