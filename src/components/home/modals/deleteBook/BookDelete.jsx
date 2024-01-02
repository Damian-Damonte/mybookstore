import { useState } from 'react';
import { BookContainer, BookImage, BookImageContainer, GenreBtnsContainer, StockPriceContainer, TitleAuthorContainer } from './deleteBookModalStyled';
import PropTypes from "prop-types";
import NoImage from "../../../../assets/no-image.svg";

export default function BookDelete({ book }) {
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
      </GenreBtnsContainer>
      {/* <BookImageContainer /> */}
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

BookDelete.propTypes = {
  book: PropTypes.object,
  handleClicUpdateModal: PropTypes.func,
  handleClicDeleteModal: PropTypes.func
};
