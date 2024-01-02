import { BookContainerMsgContainer } from './homeStyled'
import PropTypes from "prop-types";


export default function BookContainerMsg({imgSrc, text}) {
  return (
    <BookContainerMsgContainer>
      <img src={imgSrc}/>
      <h2>{text}</h2>
    </BookContainerMsgContainer>
  )
}

BookContainerMsg.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
};