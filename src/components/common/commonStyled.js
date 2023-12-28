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
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  
  @media (min-width: 700px) {
    padding: 0px 40px;
  }
`