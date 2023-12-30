import {
  GenericModalContainer,
  CloseModal,
  CloseModalBtn,
  GenericModal,
} from "../genericModal/GenericModalStyled";
import PropTypes from "prop-types";
import {
  UpdateBookModalContainer,
  FieldContainer,
  FormContainer,
} from "./updateBookModalStyled";
import CloseIcon from "../../../../assets/close.svg";
import { useEffect, useState } from "react";
import { updateBook } from "../../../../service/books";
import { bookValidation } from "../../../../validations/bookValidation";
import { LoaderStyled } from "../../../common/commonStyled";

const initialUpdateForm = {
  id: "",
  title: "",
  author: "",
  genre: "",
  quantity: "",
  price: "",
  image_url: "",
};

export default function UpdateBookModal({
  openUpdateModal,
  handleClicUpdateModal,
  bookToUpdate,
  updateBookState
}) {
  const [formData, setFormData] = useState(initialUpdateForm);
  const [updateState, setUpdateState] = useState({ loading: false, error: null });
  const [formValidations, setFormValidations] = useState({});

  useEffect(() => {
    setFormData(bookToUpdate);
  }, [bookToUpdate]);

  const closeModal = () => {
    setFormData(initialUpdateForm);
    setFormValidations({});
    handleClicUpdateModal(initialUpdateForm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleChangePrice = (e) => {
    const pattern = /^$|^[0-9]+\.?[0-9]*$/;
    pattern.test(e.target.value) && handleChange(e);
  };

  const handleChangeQuantity = (e) => {
    const pattern = /^$|^[0-9]+$/;
    pattern.test(e.target.value) && handleChange(e);
  };

  const handleSubmit = () => {
    setFormValidations({});
    const validations = bookValidation(formData);

    if (Object.keys(validations).length === 0) {
      handleUpdateBook();
    } else {
      setFormValidations(validations);
    }
  };

  const handleUpdateBook = async () => {
    setUpdateState({ loading: true, error: null });
    const response = await updateBook(formData.id, formData);
    if (response.error) {
      // Lanzar alerta de error
      setUpdateState({ loading: false, error: response.error });
      console.log("error actualizando book");
    } else {
      setUpdateState({ loading: false, error: null });
      updateBookState(formData);
      closeModal();
      console.log("book actualizado");
      // Lanzar alerta de exito
    }
  };

  return (
    <GenericModalContainer $openModal={openUpdateModal}>
      <CloseModal $openModal={openUpdateModal} onClick={closeModal} />
      <GenericModal
        onClick={(e) => e.stopPropagation()}
        $openModal={openUpdateModal}
      >
        <CloseModalBtn onClick={closeModal}>
          <img src={CloseIcon} />
        </CloseModalBtn>
        <UpdateBookModalContainer>
          <h2>Update Book</h2>
          <FormContainer>
            <FieldContainer>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                value={formData.title}
                onChange={handleChange}
              />
              <span>{formValidations.title}</span>
            </FieldContainer>
            <FieldContainer>
              <label htmlFor="author">Author</label>
              <input
                id="author"
                value={formData.author}
                onChange={handleChange}
              />
              <span>{formValidations.author}</span>
            </FieldContainer>
            <FieldContainer>
              <label htmlFor="genre">Genre</label>
              <input
                id="genre"
                value={formData.genre}
                onChange={handleChange}
              />
              <span>{formValidations.genre}</span>
            </FieldContainer>
            <FieldContainer>
              <label htmlFor="image_url">Image url</label>
              <input
                id="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
              <span>{formValidations.image_url}</span>
            </FieldContainer>
            <FieldContainer>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                value={formData.price}
                onChange={handleChangePrice}
              />
              <span>{formValidations.price}</span>
            </FieldContainer>
            <FieldContainer>
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                value={formData.quantity}
                onChange={handleChangeQuantity}
              />
              <span>{formValidations.quantity}</span>
            </FieldContainer>
          </FormContainer>
          <button type="button" onClick={handleSubmit}>
            {updateState.loading ? (
              <LoaderStyled
                $size="25px"
                $loaderColor="#fff"
                $bgcColor="#000"
                $borderWidth="3px"
              />
            ) : (
              "Submit"
            )}
          </button>
        </UpdateBookModalContainer>
      </GenericModal>
    </GenericModalContainer>
  );
}

UpdateBookModal.propTypes = {
  openUpdateModal: PropTypes.bool,
  handleClicUpdateModal: PropTypes.func,
  bookToUpdate: PropTypes.object,
  updateBookState: PropTypes.func
};
