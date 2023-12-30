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

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  margin-top: 15px;
`;

export const FieldContainer = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  label {
    font-size: 13px;
    @media (min-width: 555px) {
      font-size: 14px;
    }
  }

  input {
    height: 30px;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #efe081;
    padding: 5px;

    @media (min-width: 555px) {
      height: 35px;
    }
  }

  span {
    align-self: flex-end;
    justify-self: flex-end;
    font-size: 12px;
    color: #ff0000;
    min-height: 15px;
    min-width: 1px;
  }
`;

export const BookContainer = styled.div`
  width: 220px;
  background-color: #f2fcf5;
  padding: 15px;
  border-radius: 10px;
  border: #efe081 solid 1px;
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