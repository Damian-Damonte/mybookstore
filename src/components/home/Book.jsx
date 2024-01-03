import { BookContainer, BookImage, BookImageContainer, BtnsContainer, GenreBtnsContainer, StockPriceContainer, TitleAuthorContainer } from './homeStyled'
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import PropTypes from "prop-types";
import NoImage from "../../assets/no-image.svg";
import { useEffect, useState } from 'react';

export default function Book({ book, handleClicUpdateModal, handleClicDeleteModal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = book.image_url;
      img.onload = () => resolve();
      img.onerror = () => reject();
    }).then(() => setImageUrl(book.image_url))
    .catch(() => setImageUrl(NoImage));
  }, []);

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
