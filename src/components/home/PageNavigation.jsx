import { PageBtn, PageNavigationContainer } from "./homeStyled";
import PropTypes from "prop-types";

export default function PageNavigation({ booksState, searchParams, setSearchParams }) {
  
  function getPages(currentPage, totalPages) {
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > 5) {
      if (currentPage <= 3) {
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    const pager = [];
    for (let i = startPage; i <= endPage; i++) {
      pager.push(<PageBtn key={i} $selected={searchParams.page === i} onClick={() => handleClicPage(i)}>{i}</PageBtn>);
    }

    // return pager;
    return pager;
  }

  function generatePager() {
    if (!searchParams.showPagerWhileLoading && booksState.books.length === 0) return;

    return getPages(searchParams.page, booksState.totalPages);
  }

  function handleClicPage(page) {
    console.log("clic");
    if (page === searchParams.page) return;
    setSearchParams({...searchParams, page: page, showPagerWhileLoading: true})
  }

  return (
    <PageNavigationContainer>
      {generatePager()}
    </PageNavigationContainer>
  );
}

PageNavigation.propTypes = {
  booksState: PropTypes.object,
  searchParams: PropTypes.object,
  setSearchParams: PropTypes.func
};
