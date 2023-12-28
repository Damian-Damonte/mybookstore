import { FullWidthContainer, MaxWidthStyledContainer } from "../../common/commonStyled";
import { HeaderContainer } from "./styledHeader";

export default function Header() {
  return (
    <FullWidthContainer $backgroundColor="#0B7072">
      <MaxWidthStyledContainer>
        <HeaderContainer>
          <span>My Bookstore</span>
          <button>Add Book</button>
        </HeaderContainer>
      </MaxWidthStyledContainer>
    </FullWidthContainer>
  )
}
