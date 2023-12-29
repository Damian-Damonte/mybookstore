import { NoBooksContainer } from './homeStyled'
import PropTypes from "prop-types";


export default function BookContainerMsg({imgSrc, text}) {
  return (
    <NoBooksContainer>
      <img src={imgSrc}/>
      <h2>{text}</h2>
    </NoBooksContainer>
  )
}

BookContainerMsg.propTypes = {
  setSearch: PropTypes.string,
  handleSearch: PropTypes.string,
};