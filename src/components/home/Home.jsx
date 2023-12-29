import { useEffect, useState } from "react";
import { FullWidthContainer, MaxWidthStyledContainer } from "../common/commonStyled";
import BooksContainer from "./BooksContainer";
import PageNavigation from "./PageNavigation";
import SearchNav from "./SearchNav";
import { getBooks, searchBooksByTitle } from "../../service/books";

export default function Home() {
  const [booksState, setProductState] = useState({books:[], loading: false, error: null});

  useEffect(() => {
    const fetch = async() => {
      setProductState({books:[], loading: true, error: null})
      const response = await getBooks();
      response.error
        ? setProductState({books:[], loading: false, error: response.error})
        : setProductState({books:response.data.data, loading: false, error: null})
      };
    
      fetch();
  }, []);

  const handleSearch = async(title) => {
    setProductState({books:[], loading: true, error: null})
    const response = await searchBooksByTitle(title);
    response.error
      ? setProductState({books:[], loading: false, error: response.error})
      : setProductState({books:response.data.data, loading: false, error: null})
  };

  return (
    <FullWidthContainer $backgroundColor="#fffcef">
      <MaxWidthStyledContainer >
        <SearchNav handleSearch={handleSearch} />
        <BooksContainer booksState={booksState} />
        <PageNavigation />
      </MaxWidthStyledContainer>
    </FullWidthContainer>
  );
}
