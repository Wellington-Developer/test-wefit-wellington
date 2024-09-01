import styled from "styled-components";

export const MovieCardWrapper = styled.div`
    padding: 16px;
    width: 100%;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.white};
    height: 324px;
    margin-bottom: 8px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & span {
        margin-top: 8px;
        font-weight: 700;

        & p {
            text-align: center;
            font-weight: 700;

        }

        & h3 {
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            line-height: 21.79px;
            margin: 8px 0;
        }
    }
`;