import {
  GenericModalContainer,
  CloseModal,
  CloseModalBtn,
  GenericModal,
} from "../genericModal/GenericModalStyled";
import PropTypes from "prop-types";
import { DeleteBookModalContainer } from "./deleteBookModalStyled";
import CloseIcon from "../../../../assets/close.svg";
import { useState } from "react";
import { deleteBook } from "../../../../service/books";
import { LoaderStyled } from "../../../common/commonStyled";
import BookDelete from "./BookDelete";
import { renderToast } from "../../../../utils/renderToast";

const initialUpdateForm = {
  id: "",
  title: "",
  author: "",
  genre: "",
  quantity: "",
  price: "",
  image_url: "",
};

export default function DeleteBookModal({
  openDeleteModal,
  handleClicDeleteModal,
  bookToDelete,
  deleteBookState
}) {
  // const [formData, setFormData] = useState(initialUpdateForm);
  const [deleteState, setDeleteState] = useState({ loading: false, error: null });

  // useEffect(() => {
  //   setFormData(bookToDelete);
  // }, [bookToDelete]);

  const closeModal = () => {
    // setFormData(initialUpdateForm);
    handleClicDeleteModal(initialUpdateForm);
  };

  const handleDeleteBook = async () => {
    if (deleteState.loading) return;
    setDeleteState({ loading: true, error: null });
    const response = await deleteBook(bookToDelete.id);
    if (response.error) {
      renderToast("error", "Something went wrong. Please try again later.");
      setDeleteState({ loading: false, error: response.error });
    } else {
      setDeleteState({ loading: false, error: null });
      deleteBookState(bookToDelete.id);
      closeModal();
      renderToast("success", "Book deleted successfully!");
    }
  };

  return (
    <GenericModalContainer $openModal={openDeleteModal}>
      <CloseModal $openModal={openDeleteModal} onClick={closeModal} />
      <GenericModal
        onClick={(e) => e.stopPropagation()}
        $openModal={openDeleteModal}
      >
        <CloseModalBtn onClick={closeModal}>
          <img src={CloseIcon} />
        </CloseModalBtn>
        <DeleteBookModalContainer>
          <h2>Are you sure you want to delete this book?</h2>
          <BookDelete book={bookToDelete}/>
          
          <button type="button" onClick={handleDeleteBook}>
            {deleteState.loading ? (
              <LoaderStyled
                $size="25px"
                $loaderColor="#fff"
                $bgcColor="#000"
                $borderWidth="3px"
              />
            ) : (
              "Delete"
            )}
          </button>
        </DeleteBookModalContainer>
      </GenericModal>
    </GenericModalContainer>
  );
}

DeleteBookModal.propTypes = {
  openDeleteModal: PropTypes.bool,
  handleClicDeleteModal: PropTypes.func,
  bookToDelete: PropTypes.object,
  deleteBookState: PropTypes.func
};
