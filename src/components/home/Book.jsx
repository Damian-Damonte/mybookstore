import { BookContainer, BookImageContainer, BtnsContainer, GenreBtnsContainer, StockPriceContainer, TitleAuthorContainer } from './homeStyled'
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import PropTypes from "prop-types";


export default function Book({book}) {
  return (
    <BookContainer>
      <GenreBtnsContainer>
        <span>{book.genre}</span>
        <BtnsContainer>
          <img src={EditIcon} />
          <img src={DeleteIcon} />
        </BtnsContainer>
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

Book.propTypes = {
  book: PropTypes.object,
};
