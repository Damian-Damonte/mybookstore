import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
  margin: 15px 0px;
  row-gap: 15px;

  span {
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
      width: 30px;
      cursor: pointer;
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
    column-gap: 20px;
    height: 29px;
  }
`