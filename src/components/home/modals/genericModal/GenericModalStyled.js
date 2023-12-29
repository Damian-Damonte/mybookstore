import styled from "styled-components";

export const AddBookContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0px;
  top: 0px;
  overflow: hidden;
  visibility: ${({ $openModal }) => ($openModal ? "visible" : "hidden")};
`

export const CloseModal = styled.div`
  position: absolute;
  height: 100%;
  width:100%;
  background-color: ${({ $openModal }) => ($openModal ? "#00000080" : "")};
  top: 0px;
  transition: all 0.3s ease-in-out;
`

export const GenericModal = styled.div`
  position: relative;
  /* height: 100%; */
  width: 100%;
  background-color: #fff;
  /* max-height: 450px; */
  max-width: 600px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease 0.3s;
  transform: ${({ $openModal }) => ($openModal ? "scale(1)" : "scale(0)")};
  margin: 0px 10px;
  overflow: hidden;
`

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 0px;
  height: 35px;
  width: 35px;
  background-color: #0B7072;
  border-radius: 5px;
  top: 15px;
  right: 15px;
  border: none;
  padding: 5px;
  cursor: pointer;

  img {
    width: 100%;
  }

  &:hover {
      background-color: #075c5e;
  }
`