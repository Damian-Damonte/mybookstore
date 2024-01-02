import styled from "styled-components";

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
    width: calc(100% - 130px);
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
    font-size: 16px;
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
  width: 100px;
  border-radius: 10px;
  background-color: #efe081;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  padding-left: 5px;
  position: relative;
  cursor: pointer;

  span {
    color: ${({ $optionSelected }) => ($optionSelected ? "#757575" : "#000")};
  }
`;

export const CloseSortOptions = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ $showSortOptions }) => ($showSortOptions ? "auto" : "none")};
`;

export const SortOptionsContainer = styled.div`
  width: 100px;
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
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  height: ${({ $showSortOptions }) => ($showSortOptions ? "162px" : "0px")};
  visibility: ${({ $showSortOptions }) =>
    $showSortOptions ? "visible" : "hidden"};
`;

export const SortOption = styled.div`
  width: 100%;
  height: 25px;
  padding: 0px 5px;
  cursor: pointer;

  &:hover {
    background-color: #d1c26e;
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`

export const BookContainerStyled = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  margin-top: 30px;
  min-height: 310px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-content: center;
`;

export const BookContainer = styled.div`
  width: 220px;
  background-color: #f2fcf5;
  padding: 15px;
  border-radius: 10px;
  border: #efe081 solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookImage = styled.img`
  width: ${({ $noImage }) => ($noImage ? "80%" : "100%")};
  height: ${({ $noImage }) => ($noImage ? "80%" : "100%")};
  object-fit: contain;
`;

export const TitleAuthorContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span:first-child {
    font-size: 17px;
    font-weight: 600;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
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
  justify-self: center;

  span:nth-child(1) > span {
    background-color: ${({ $noStock }) => ($noStock ? "#ff6961" : "")};
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
  background-color: ${({ $selected }) => ($selected ? "#efe081" : "#fffcef")};
  cursor: ${({ $selected }) => ($selected ? "default" : "pointer")};

  &:hover {
    background-color: ${({ $selected }) => ($selected ? "#efe081" : "#f7f3e6")};
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
`;
