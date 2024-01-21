import {Logo, Button} from './ui/index.js'

import * as Styled from './header.styles.js'


export const Header = () => {
  return (
      <Styled.Wrapper>
          <Styled.Container>
              <Logo />
              <Button />
          </Styled.Container>
      </Styled.Wrapper>
  )
}