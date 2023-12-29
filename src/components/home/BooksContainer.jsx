import { LoaderStyled } from "../common/commonStyled";
import Book from "./Book";
import BookContainerMsg from "./NoBooks";
import { BookContainerStyled } from "./homeStyled";
import PropTypes from "prop-types";
import IconNotFound from "../../assets/delete.svg";

export default function BooksContainer({ booksState }) {
  const { books, loading, error } = booksState;

  // TODO Actualizar icons
  const renderElements = () => {
    let elements;
    if (error) {
      elements = <BookContainerMsg imgSrc={IconNotFound} text="Oops! Something went wrong with your search. Please try again later."/>;
    } else if (loading) {
      elements = (
        <LoaderStyled
          $size="50px"
          $loaderColor="#fffcef"
          $bgcColor="#0B7072"
          $borderWidth="4px"
        />
      );
    } else if(books.length === 0) {
      elements = <BookContainerMsg imgSrc={IconNotFound} text="No books found matching your search"/>;
    } else {
      elements = books.map((book) => <Book key={book.id} book={book} />);
    }

    return elements;
  };
  return (
    <BookContainerStyled>
        {renderElements()}
    </BookContainerStyled>
  );
}

BooksContainer.propTypes = {
  booksState: PropTypes.object,
};
