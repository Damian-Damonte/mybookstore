import { BookContainer, BookImageContainer, BtnsContainer, GenreBtnsContainer, StockPriceContainer, TitleAuthorContainer } from './homeStyled'
import EditIcon from "../../assets/edit.svg"
import DeleteIcon from "../../assets/delete.svg"

export default function Book() {
  return (
    <BookContainer>
      <GenreBtnsContainer>
        <span>Terror</span>
        <BtnsContainer>
          <img src={EditIcon} />
          <img src={DeleteIcon} />
        </BtnsContainer>
      </GenreBtnsContainer>
      <BookImageContainer />
      <TitleAuthorContainer>
        <span>El Alquimista</span>
        <span>Paulo Coelho</span>
      </TitleAuthorContainer>
      <StockPriceContainer>
        <span>Stock: 22</span>
        <span>$17.000</span>
      </StockPriceContainer>
    </BookContainer>
  )
}
