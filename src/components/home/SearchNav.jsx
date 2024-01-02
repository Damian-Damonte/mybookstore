import {
  SearchNavContainer,
  SearchInputContainer,
  SortSelectorContainer,
  SortOptionsContainer,
  SortOption,
  CloseSortOptions,
} from "./homeStyled";
import SearchIcon from "../../assets/search.svg";
import PropTypes from "prop-types";
import { useState } from "react";

export default function SearchNav({ booksState, searchParams, setSearchParams }) {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleChangeTitleInput = (e) => {
    setSearchText(e.target.value);
  };

  
  const handleShowSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(booksState.loading || searchText === searchParams.title) return;
    setSearchParams({...searchParams, title: searchText, page:1, showPagerWhileLoading: false})
  };

  const handleSort = (sort) => {
    if(booksState.loading || sort === sortOption || booksState.books.length === 0) return;
    setSortOption(sort);
    const sortParam = sort.replace(" ⬆", "").replace(" ⬇", ",desc").replace("Stock", "quantity").toLowerCase();
    setSearchParams({...searchParams, sort: sortParam, showPagerWhileLoading: true})
  };

  return (
    <SearchNavContainer>
      <SearchInputContainer onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          value={searchText}
          onChange={handleChangeTitleInput}
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </SearchInputContainer>
      <CloseSortOptions $showSortOptions={showSortOptions} onClick={handleShowSortOptions} />
      <SortSelectorContainer onClick={handleShowSortOptions} $optionSelected={sortOption===""}>
        <span>{sortOption === "" ? "Sort by..." : sortOption}</span>
        <SortOptionsContainer $showSortOptions={showSortOptions}>
          <SortOption onClick={() => handleSort("Title ⬆")}>Title ⬆</SortOption>
          <SortOption onClick={() => handleSort("Title ⬇")}>Title ⬇</SortOption>
          <SortOption onClick={() => handleSort("Stock ⬆")}>Stock ⬆</SortOption>
          <SortOption onClick={() => handleSort("Stock ⬇")}>Stock ⬇</SortOption>
          <SortOption onClick={() => handleSort("Price ⬆")}>Price ⬆</SortOption>
          <SortOption onClick={() => handleSort("Price ⬇")}>Price ⬇</SortOption>
        </SortOptionsContainer>
      </SortSelectorContainer>
    </SearchNavContainer>
  );
}

SearchNav.propTypes = {
  booksState: PropTypes.object,
  searchParams: PropTypes.object,
  setSearchParams: PropTypes.func,
};
