import { LikeButton} from './ui/like-button/like-button.jsx'
import ReviewsButton from '../../comments.svg'
import * as Styled from "./card-action.styles.js";

export const CardAction = () => {
  return (
      <Styled.Wrapper>
          <Styled.Container>
              <LikeButton />
              <img src={ReviewsButton} alt=""/>
          </Styled.Container>
      </Styled.Wrapper>
  )
}