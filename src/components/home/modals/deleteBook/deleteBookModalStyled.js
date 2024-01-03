import styled from "styled-components";

export const DeleteBookModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 10px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    padding: 0px 50px;

    @media (min-width: 400px) {
      font-size: 20px;
    }
  }

  button {
    border: none;
    background-color: #0b7072;
    margin-top: 30px;
    height: 50px;
    width: 100%;
    max-width: 250px;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: #075c5e;
    }
  }
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
  margin-top: 20px;
`;

export const GenreBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    align-self: flex-start;
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