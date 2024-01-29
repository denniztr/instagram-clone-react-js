import {Outlet} from "react-router-dom";
import {Logo, Navigation} from './ui/index.js'
import * as Styled from './header.styles.js'



export const Header = () => {
  return (
      <>
          <Styled.Wrapper>
              <Styled.Container>
                  <Logo />
                  <Navigation />
              </Styled.Container>
          </Styled.Wrapper>
          <Outlet />
      </>
  )
}