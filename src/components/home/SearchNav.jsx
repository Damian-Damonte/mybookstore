import { SearchNavContainer, SearchInputContainer } from "./homeStyled";
import SearchIcon from "../../assets/search.svg"

export default function SearchNav() {
  return (
    <SearchNavContainer>
      <SearchInputContainer>
        <input placeholder="Search"/>
        <img src={SearchIcon} />
      </SearchInputContainer>
      <select>
        <option>Price</option>
        <option>Title</option>
        <option>Stock</option>
      </select>
    </SearchNavContainer>
  );
}
