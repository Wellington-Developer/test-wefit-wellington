import styled from "styled-components";

export const ProductInfoWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    
    
    div {
        display: flex;
        flex-direction: column;
        
        h1 {
            font-weight: 700;
            font-size: 14px;
            color: ${({theme}) => theme.colors.gray500};
            line-height: 19.07px;
            margin-bottom: 8px;
        }
    
        p {
            font-weight: 700;
            font-size: 16px;
            line-height: 21.79px;
            color: ${({theme}) => theme.colors.gray500};
        }
    }

    @media screen and (max-width: 600px) {
        grid-column: 1/4;
        align-items: start;

        img {
            width: 64px;
            height: 82px;
        }

        div {
            flex-direction: row;
            justify-content: space-between;
            display: flex;
            align-items: center;
            max-width: 184px;

            h1 {
                font-size: 14px;
                line-height: 19.07px;
                margin-bottom: 0;
                max-width: 60px;
            }

            p {
                font-size: 16px;
                line-height: 21.79px;
            }
        }
    }
`