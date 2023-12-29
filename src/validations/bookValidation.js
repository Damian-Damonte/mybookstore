export const bookValidation = (form) => {
  let validations = {};
  const errorEmptyField = "This field is required";

  if (!form.title) {
    validations.title = errorEmptyField;
  }

  if (!form.author) {
    validations.author = errorEmptyField;
  }

  if (!form.genre) {
    validations.genre = errorEmptyField;
  }

  if (!form.price) {
    validations.price = errorEmptyField;
  } else if (parseFloat(form.price) <= 0) {
    validations.price = "Price must be greater than zero";
  }

  if (!form.quantity) {
    validations.quantity = errorEmptyField;
  }

  return validations;
};
