import { Heading } from './ui/index.js'

import TestPic from './testpic1.png'

import * as Styled from './card.styles.js'



export const Card = () => {
  return (
      <Styled.Container>
          <Styled.Wrapper>
              <Heading />
              <Styled.ImageContainer>
                  <img src={TestPic} alt="" />
              </Styled.ImageContainer>
              <Styled.CardActions>
                  <p>лайк, комментарий к посту, избранное, время поста</p>
              </Styled.CardActions>
              <p>написать комментарий</p>
          </Styled.Wrapper>
      </Styled.Container>
  )
}