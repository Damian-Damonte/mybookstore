import styled from "styled-components";

export const AddBookModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 10px;

  h2 {
    font-size: 25px;
    font-weight: 600;
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
