import { BookContainer, BookImageContainer, GenreBtnsContainer, StockPriceContainer, TitleAuthorContainer } from './deleteBookModalStyled';
import PropTypes from "prop-types";

export default function BookDelete({ book }) {
  return (
    <BookContainer>
      <GenreBtnsContainer>
        <span>{book.genre}</span>
      </GenreBtnsContainer>
      <BookImageContainer />
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
