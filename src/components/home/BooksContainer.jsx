import Book from "./Book";
import { BookContainerStyled } from "./homeStyled";



export default function BooksContainer() {
  return (
    <BookContainerStyled>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </BookContainerStyled>
  )
}
