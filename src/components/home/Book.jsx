import { BookContainer, BookImage, BookImageContainer, BtnsContainer, GenreBtnsContainer, StockPriceContainer, TitleAuthorContainer } from './homeStyled'
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import PropTypes from "prop-types";
import NoImage from "../../assets/no-image.svg";
import { useState } from 'react';

export default function Book({ book, handleClicUpdateModal, handleClicDeleteModal }) {
  const [imageUrl, setImageUrl] = useState("");

  const isInvalidImageUrl = () => {
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(false);
      img.onerror = () => resolve(true);
      img.src = book.image_url;
    }).then((isInvalid) => isInvalid ? setImageUrl(NoImage):setImageUrl(book.image_url));
  };
  isInvalidImageUrl();

  return (
    <BookContainer>
      <GenreBtnsContainer>
        <span>{book.genre}</span>
        <BtnsContainer>
          <img src={EditIcon} onClick={() => handleClicUpdateModal(book)}/>
          <img src={DeleteIcon} onClick={() => handleClicDeleteModal(book)}/>
        </BtnsContainer>
      </GenreBtnsContainer>
      <BookImageContainer>
        {imageUrl && <BookImage src={imageUrl} $noImage={imageUrl===NoImage} alt='book-image'/>}
      </BookImageContainer>
      <TitleAuthorContainer>
        <span>{book.title}</span>
        <span>{book.author}</span>
      </TitleAuthorContainer>
      <StockPriceContainer $noStock={book.quantity === 0}>
        <span>Stock:<span>{book.quantity}</span></span>
        <span>${book.price}</span>
      </StockPriceContainer>
    </BookContainer>
  )
}

Book.propTypes = {
  book: PropTypes.object,
  handleClicUpdateModal: PropTypes.func,
  handleClicDeleteModal: PropTypes.func
};
