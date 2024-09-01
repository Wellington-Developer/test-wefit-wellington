import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
    max-width: 1080px;
    width: 100%;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    & img {
        max-width: 83px;
        max-height: 83px;
        animation: ${rotate} 2s linear infinite;
    }
`