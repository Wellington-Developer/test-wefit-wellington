import styled from "styled-components";

export const CartItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr 1fr;
    
    div {
        flex: 1;
    }

    div:first-child {
        width: 100%;
        max-width: 280px;
    }

    @media screen and (max-width: 650px) {
        grid-template-columns: 1fr 1fr 1fr 32px;
        width: 100%;
        position: relative;

        div:first-child {
            width: 100%;
            max-width: 100%;
        }
    }

`