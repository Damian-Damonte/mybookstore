import styled from "styled-components";

export const FullWidthContainer = styled.div`
  width: 100%;
  background-color: ${({$backgroundColor}) => $backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MaxWidthStyledContainer = styled.div`
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  
  @media (min-width: 700px) {
    padding: 0px 40px;
  }
`

export const LoaderStyled = styled.span`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border: ${({ $borderWidth }) => $borderWidth} solid ${({ $bgcColor }) => $bgcColor};
  border-bottom-color: ${({ $loaderColor}) => $loaderColor};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 0.8s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;