import { useEffect, useState } from "react";
import {
  FullWidthContainer,
  LoaderStyled,
  MaxWidthStyledContainer,
} from "../common/commonStyled";
import BooksContainer from "./BooksContainer";
import PageNavigation from "./PageNavigation";
import SearchNav from "./SearchNav";
import { getBooks, searchBooksByTitle } from "../../service/books";

import IconNotFound from "../../assets/notFound.svg";
import IconError from "../../assets/error.svg";
import BookContainerMsg from "./BookContainerMsg";
import { HomeContainer } from "./homeStyled";

export default function Home() {
  const [booksState, setBooksState] = useState({
    books: [],
    currentPage: 1,
    totalPages: 1,
    loading: true,
    error: null,
  });

  const [searchParams, setSearchParams] = useState({
    title: "",
    sort: "",
    page: 1,
    showPagerWhileLoading: false
  });

  useEffect(() => {
    const fetch = async () => {
      setBooksState({ books: [], currentPage: booksState.currentPage, totalPages: booksState.totalPages, loading: true, error: null });
      const response = await searchBooksByTitle(
        searchParams.title,
        searchParams.sort,
        searchParams.page
      );

      if (response.error) {
        setBooksState({
          books: [],
          currentPage: 1,
          totalPages: 1,
          loading: false,
          error: response.error,
        });
      } else {
        setBooksState({
          books: response.data.data,
          currentPage: response.data.currentPage + 1,
          totalPages: response.data.totalPages,
          loading: false,
          error: null,
        });
      }
    };

    fetch();
  }, [searchParams]);

  const updateBookState = (book) => {
    const booksCopy = [...booksState.books];
    const bookIndex = booksCopy.findIndex((b) => b.id === book.id);
    booksCopy[bookIndex] = book;
    setBooksState({ ...booksState, books: booksCopy });
  };

  const deleteBookState = (id) => {
    const booksCopy = [...booksState.books];
    const booksFilter = booksCopy.filter((b) => b.id !== id);
    setBooksState({ ...booksState, books: booksFilter });
  };

  const renderElements = () => {
    let elements;
    if (booksState.error) {
      elements = (
        <BookContainerMsg
          imgSrc={IconError}
          text="Oops! Something went wrong with your search. Please try again later."
        />
      );
    } else if (booksState.loading) {
      elements = (
        <LoaderStyled
          $size="50px"
          $loaderColor="#fffcef"
          $bgcColor="#0B7072"
          $borderWidth="4px"
        />
      );
    } else if (booksState.books.length === 0) {
      elements = (
        <BookContainerMsg
          imgSrc={IconNotFound}
          text="No books found matching your search"
        />
      );
    } else {
      elements =
        <BooksContainer
          booksState={booksState}
          updateBookState={updateBookState}
          deleteBookState={deleteBookState}
        />;
    }
    return elements;
  };

  return (
    <FullWidthContainer $backgroundColor="#fffcef">
      <MaxWidthStyledContainer>
        
        <SearchNav
          booksState={booksState}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <HomeContainer>
          {renderElements()}
        </HomeContainer>
        <PageNavigation
          booksState={booksState}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </MaxWidthStyledContainer>
    </FullWidthContainer>
  );
}
