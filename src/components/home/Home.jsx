import { useEffect, useState } from "react";
import { FullWidthContainer, MaxWidthStyledContainer } from "../common/commonStyled";
import BooksContainer from "./BooksContainer";
import PageNavigation from "./PageNavigation";
import SearchNav from "./SearchNav";
import { getBooks, searchBooksByTitle } from "../../service/books";

export default function Home() {
  const [booksState, setBooksState] = useState({books:[], loading: false, error: null});

  useEffect(() => {
    const fetch = async() => {
      setBooksState({books:[], loading: true, error: null})
      const response = await getBooks();
      response.error
        ? setBooksState({books:[], loading: false, error: response.error})
        : setBooksState({books:response.data.data, loading: false, error: null})
      };
    
      fetch();
  }, []);

  const handleSearch = async(title) => {
    setBooksState({books:[], loading: true, error: null})
    const response = await searchBooksByTitle(title);
    response.error
      ? setBooksState({books:[], loading: false, error: response.error})
      : setBooksState({books:response.data.data, loading: false, error: null})
  };

  const updateBookState = (book) => {
    const booksCopy = [...booksState.books];
    const bookIndex = booksCopy.findIndex(b => b.id === book.id);
    booksCopy[bookIndex] = book;
    setBooksState({...booksState, books: booksCopy});
  };

  const deleteBookState = (id) => {
    const booksCopy = [...booksState.books];
    const booksFilter = booksCopy.filter(b => b.id !== id);
    setBooksState({...booksState, books: booksFilter});
  };

  return (
    <FullWidthContainer $backgroundColor="#fffcef">
      <MaxWidthStyledContainer >
        <SearchNav handleSearch={handleSearch} />
        <BooksContainer booksState={booksState} updateBookState={updateBookState} deleteBookState={deleteBookState}/>
        <PageNavigation />
      </MaxWidthStyledContainer>
    </FullWidthContainer>
  );
}
