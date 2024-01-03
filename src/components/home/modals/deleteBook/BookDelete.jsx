import { useEffect, useState } from 'react';
import { BookContainer, BookImage, BookImageContainer, GenreBtnsContainer, StockPriceContainer, TitleAuthorContainer } from './deleteBookModalStyled';
import PropTypes from "prop-types";
import NoImage from "../../../../assets/no-image.svg";

export default function BookDelete({ book }) {
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

BookDelete.propTypes = {
  book: PropTypes.object,
  handleClicUpdateModal: PropTypes.func,
  handleClicDeleteModal: PropTypes.func
};
