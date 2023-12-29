import { FullWidthContainer, MaxWidthStyledContainer } from "../../common/commonStyled";
import { FooterContainer } from "./footerStyled";
import FacebookIcon from "../../../assets/facebook.svg";
import InstagramIcon from "../../../assets/instagram.svg";
import XSocial from "../../../assets/x-social-media.svg";

export default function Footer() {
  return (
    <FullWidthContainer $backgroundColor="#0B7072">
      <MaxWidthStyledContainer>
        <FooterContainer>
          <span>&copy; 2023. All rights reserved.</span>
          <div>
            <img src={FacebookIcon} />
            <img src={InstagramIcon} />
            <img src={XSocial} />
          </div>
        </FooterContainer>
      </MaxWidthStyledContainer>
    </FullWidthContainer>
  )
}
