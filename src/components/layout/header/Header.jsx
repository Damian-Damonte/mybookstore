import { useState } from "react";
import {
  FullWidthContainer,
  MaxWidthStyledContainer,
} from "../../common/commonStyled";
import { HeaderContainer } from "./styledHeader";
import AddBookModal from "../../home/modals/addBook/AddBookModal";

export default function Header() {
  const [openAddBook, setOpenAddBook] = useState(false);
  const handleClicAddBook = () => {
    setOpenAddBook(!openAddBook);
    !openAddBook
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  };

  return (
    <FullWidthContainer $backgroundColor="#0B7072">
      <MaxWidthStyledContainer>
        <HeaderContainer>
          <span>My Bookstore</span>
          <button onClick={handleClicAddBook}>Add Book</button>
          <AddBookModal
            openAddBook={openAddBook}
            handleClicAddBook={handleClicAddBook}
          />
        </HeaderContainer>
      </MaxWidthStyledContainer>
    </FullWidthContainer>
  );
}
