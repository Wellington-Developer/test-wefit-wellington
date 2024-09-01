import styled from "styled-components";

export const ProductCounterWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;

    p {
        padding: 3.5px 26.5px;
        border: 1px solid ${({theme}) => theme.colors.gray100};
        border-radius: 4px;
        color: ${({theme}) => theme.colors.gray500};
        font-size: 14px;
        line-height: 19.07px;
    }

    span {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        position: absolute;
        left: 80px;
        top: 60px;

        p {
            padding: 3.5px 25px;
        }
    }
`