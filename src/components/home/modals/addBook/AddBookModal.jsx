import {
  GenericModalContainer,
  CloseModal,
  CloseModalBtn,
  GenericModal,
} from "../genericModal/GenericModalStyled";
import PropTypes from "prop-types";
import {
  AddBookModalContainer,
  FieldContainer,
  FormContainer,
} from "./addBookModalStyled";
import CloseIcon from "../../../../assets/close.svg";
import { useState } from "react";
import { postBook } from "../../../../service/books";
import { bookValidation } from "../../../../validations/bookValidation";
import { LoaderStyled } from "../../../common/commonStyled";
import { renderToast } from "../../../../utils/renderToast";

const initialForm = {
  title: "",
  author: "",
  genre: "",
  quantity: "",
  price: "",
  image_url: "",
};

export default function AddBookModal({ openAddBook, handleClicAddBook }) {
  const [formData, setFormData] = useState(initialForm);
  const [postState, setPostState] = useState({ loading: false, error: null });
  const [formValidations, setFormValidations] = useState({});

  const closeModal = () => {
    setFormData(initialForm);
    setFormValidations({});
    handleClicAddBook();
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
      handlePostBook();
    } else {
      setFormValidations(validations);
    }
  };

  const handlePostBook = async() => {
    if(postState.loading) return;
    setPostState({ loading: true, error: null });
    const response = await postBook(formData);
    if(response.error) {
      renderToast("error", "Something went wrong. Please try again later.");
      setPostState({ loading: false, error: response.error });
    } else {
      renderToast("success", "Book added successfully!");
      setPostState({ loading: false, error: null });
      closeModal();
    }
  }

  return (
    <GenericModalContainer $openModal={openAddBook}>
      <CloseModal $openModal={openAddBook} onClick={closeModal} />
      <GenericModal
        onClick={(e) => e.stopPropagation()}
        $openModal={openAddBook}
      >
        <CloseModalBtn onClick={closeModal}>
          <img src={CloseIcon} />
        </CloseModalBtn>
        <AddBookModalContainer>
          <h2>Add Book</h2>
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
            {postState.loading ? (
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
        </AddBookModalContainer>
      </GenericModal>
    </GenericModalContainer>
  );
}

AddBookModal.propTypes = {
  openAddBook: PropTypes.bool,
  handleClicAddBook: PropTypes.func,
};
