import {
  GenericModalContainer,
  CloseModal,
  CloseModalBtn,
  GenericModal,
} from "../genericModal/GenericModalStyled";
import PropTypes from "prop-types";
import { DeleteBookModalContainer } from "./deleteBookModalStyled";
import CloseIcon from "../../../../assets/close.svg";
import { useEffect, useState } from "react";
import { deleteBook, updateBook } from "../../../../service/books";
import { LoaderStyled } from "../../../common/commonStyled";
import BookDelete from "./BookDelete";

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
  const [formData, setFormData] = useState(initialUpdateForm);
  const [updateState, setUpdateState] = useState({ loading: false, error: null });

  useEffect(() => {
    setFormData(bookToDelete);
  }, [bookToDelete]);

  const closeModal = () => {
    setFormData(initialUpdateForm);
    handleClicDeleteModal(initialUpdateForm);
  };

  const handleDeleteBook = async () => {
    setUpdateState({ loading: true, error: null });
    const response = await deleteBook(formData.id);
    if (response.error) {
      // Lanzar alerta de error
      setUpdateState({ loading: false, error: response.error });
      console.log("error eliminando book");
    } else {
      setUpdateState({ loading: false, error: null });
      deleteBookState(formData.id);
      closeModal();
      console.log("book eliminando");
      // Lanzar alerta de exito
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
          <BookDelete book={formData}/>
          
          <button type="button" onClick={handleDeleteBook}>
            {updateState.loading ? (
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
