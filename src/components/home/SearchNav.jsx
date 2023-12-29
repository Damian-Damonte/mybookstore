import { SearchNavContainer, SearchInputContainer } from "./homeStyled";
import SearchIcon from "../../assets/search.svg";
import PropTypes from "prop-types";
import { useState } from "react";

export default function SearchNav({ handleSearch }) {
  const [search, setSearch] = useState("");

  const handleChangeTitleInput = (e) => {
    setSearch(e.target.value)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  }
  
  return (
    <SearchNavContainer>
      <SearchInputContainer onSubmit={handleSubmit}>
        <input placeholder="Search" value={search} onChange={handleChangeTitleInput}/>
        <button type="submit">
          <img src={SearchIcon}  />
        </button>
      </SearchInputContainer>
      <select>
        <option>Price</option>
        <option>Title</option>
        <option>Stock</option>
      </select>
    </SearchNavContainer>
  );
}

SearchNav.propTypes = {
  setSearch: PropTypes.func,
  handleSearch: PropTypes.func,
};
