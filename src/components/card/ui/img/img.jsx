import Picture from '../../testpic1.png'
import * as Styled from './img.styles.js';

export const Image = () => {
  return (
      <Styled.ImageContainer>
          <img src={Picture} alt="" />
      </Styled.ImageContainer>
  )
}