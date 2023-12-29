import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >span {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }

  >button {
    background-color: #61f4de;
    /* background-color: #87C19B; */
    /* background-color: #EFE081; */
    background-color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    cursor: pointer;
    font-weight: 500;
    
    &:hover {
      background-color: #eee;
    }
  }
`