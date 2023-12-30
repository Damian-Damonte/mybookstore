import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #e8e8e8;
  height: 700px;
  width: 100%;
`;

export const SearchNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  row-gap: 15px;

  @media (min-width: 400px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const SearchInputContainer = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  max-width: 700px;
  min-width: 10px;

  @media (min-width: 400px) {
    width: calc(100% - 110px);
  }

  input {
    border: none;
    border-radius: 10px;
    height: 35px;
    width: calc(100% - 45px);
    cursor: pointer;
    padding: 5px;
    border: #000 solid 1px;
    background-color: #efe081;
    min-width: 0px;
  }

  button {
    width: 35px;
    border-radius: 10px;
    background-color: #fff;
    height: 35px;
    padding: 4px;
    cursor: pointer;
    border: #000 solid 1px;
    background-color: #efe081;

    &:hover {
      background-color: #ddce77;
    }

    img {
      width: 100%;
    }
  }
`;

export const SortSelectorContainer = styled.div`
  height: 35px;
  width: 90px;
  background-color: red;
  border-radius: 10px;
  background-color: #efe081;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  padding-left: 5px;
  position: relative;
`

export const SortOptionsContainer = styled.div`
  width: 90px;
  /* height: 100px; */
  background-color: red;
  position: absolute;
  top: 40px;
  left: 0px;
  border-radius: 10px;
  background-color: #efe081;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 5px; */
  padding: 5px 5px;
`

export const SortOption = styled.div`
  width: 100%;
  height: 25px;
  /* background-color: red; */
  /* border-top: 1px solid #000;
  border-bottom: 1px solid #000; */
`

export const BookContainerStyled = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  min-height: 310px;

`;

export const BookContainer = styled.div`
  width: 220px;
  background-color: #f2fcf5;
  padding: 15px;
  border-radius: 10px;
  border: #efe081 solid 1px;
`;
export const GenreBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    align-self: flex-start;
  }
`;

export const BtnsContainer = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 30px;
    background-color: red;
    border-radius: 5px;
    height: 30px;
    padding: 4px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  img:nth-child(1) {
    background-color: #84b6f4;
    &:hover {
      background-color: #76a3db;
    }
  }

  img:nth-child(2) {
    background-color: #ff6961;
    &:hover {
      background-color: #dd5b54;
    }
  }
`;

export const BookImageContainer = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 150px;
  background-image: url(https://http2.mlstatic.com/D_NQ_NP_696382-MLA72416180393_102023-O.webp);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TitleAuthorContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span:first-child {
    font-size: 18px;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 12px;
  }
`;

export const StockPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  span:nth-child(1)>span {
    background-color: ${({ $noStock }) => $noStock ? "#ff6961" : ""};
    padding: 2px 5px;
    border-radius: 5px;
  }
  span:nth-child(2) {
    background-color: #b0f2c2;
    padding: 2px;
    border-radius: 5px;
  }
`;

export const PageNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const PageBtn = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 5px;
  border: #000 solid 1px;
  background-color: #efe081;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ddce77;
  }
`;

export const BookContainerMsgContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #efe081;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;

  img {
    width: 60px;
  }

  h2 {
    margin-top: 15px;
    text-align: center;
    font-size: 20px;
  }
`