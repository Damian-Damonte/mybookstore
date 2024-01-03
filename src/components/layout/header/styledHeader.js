import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >a {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
  }

  >button {
    background-color: #61f4de;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    
    &:hover {
      background-color: #eee;
    }
  }
`