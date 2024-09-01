import styled from "styled-components";

export const ContainerMovies = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    gap: 16px;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`