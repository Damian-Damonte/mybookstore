import { LoaderStyled } from "../common/commonStyled";
import Book from "./Book";
import BookContainerMsg from "./NoBooks";
import { BookContainerStyled } from "./homeStyled";
import PropTypes from "prop-types";
import IconNotFound from "../../assets/notFound.svg";
import IconError from "../../assets/error.svg";
import { useState } from "react";
import UpdateBookModal from "./modals/updateBook/UpdateBookModal";
import DeleteBookModal from "./modals/deleteBook/DeleteBookModal";

const initialUpdateForm = {
  id:"",
  title: "",
  author: "",
  genre: "",
  quantity: "",
  price: "",
  image_url: "",
};

export default function BooksContainer({ booksState, updateBookState, deleteBookState }) {
  const { books, loading, error } = booksState;
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [bookToUpdate, setBookToUpdate] = useState(initialUpdateForm);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(initialUpdateForm);

  const handleClicUpdateModal = (book) => {
    setOpenUpdateModal(!openUpdateModal);
    setBookToUpdate(book);
    !openUpdateModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  };

  const handleClicDeleteModal = (book) => {
    setOpenDeleteModal(!openDeleteModal);
    setBookToDelete(book);
    !openDeleteModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  };

  const renderElements = () => {
    let elements;
    if (error) {
      elements = (
        <BookContainerMsg
          imgSrc={IconError}
          text="Oops! Something went wrong with your search. Please try again later."
        />
      );
    } else if (loading) {
      elements = (
        <LoaderStyled
          $size="50px"
          $loaderColor="#fffcef"
          $bgcColor="#0B7072"
          $borderWidth="4px"
        />
      );
    } else if (books.length === 0) {
      elements = (
        <BookContainerMsg
          imgSrc={IconNotFound}
          text="No books found matching your search"
        />
      );
    } else {
      elements = books.map((book) => (
        <Book
          key={book.id}
          book={book}
          handleClicUpdateModal={handleClicUpdateModal}
          handleClicDeleteModal={handleClicDeleteModal}
        />
      ));
    }
    return elements;
  };

  return (
    <BookContainerStyled>
      {renderElements()}
      <UpdateBookModal
        openUpdateModal={openUpdateModal}
        handleClicUpdateModal={handleClicUpdateModal}
        bookToUpdate={bookToUpdate}
        updateBookState={updateBookState}
      />
      <DeleteBookModal 
        openDeleteModal={openDeleteModal}
        handleClicDeleteModal={handleClicDeleteModal}
        bookToDelete={bookToDelete}
        deleteBookState={deleteBookState}
      />
    </BookContainerStyled>
  );
}

BooksContainer.propTypes = {
  booksState: PropTypes.object,
  updateBookState: PropTypes.func,
  deleteBookState: PropTypes.func
};
