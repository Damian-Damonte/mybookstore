import { FullWidthContainer, MaxWidthStyledContainer } from "../common/commonStyled";
import BooksContainer from "./BooksContainer";
import PageNavigation from "./PageNavigation";
import SearchNav from "./SearchNav";

export default function Home() {
  return (
    // <FullWidthContainer $backgroundColor="#fffbe5">
    <FullWidthContainer $backgroundColor="#fffcef">
      <MaxWidthStyledContainer >
        <SearchNav />
        <BooksContainer />
        <PageNavigation />
      </MaxWidthStyledContainer>
    </FullWidthContainer>
  );
}
