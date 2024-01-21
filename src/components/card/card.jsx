import {
    Heading,
    Image,
    CardAction,
} from './ui/index.js'

import * as Styled from './card.styles.js'

export const Card = () => {
  return (
      <Styled.Container>
          <Styled.Wrapper>
              <Heading />
              <Image />
              <CardAction />
              <p>Место для комментария</p>
          </Styled.Wrapper>
      </Styled.Container>
  )
}