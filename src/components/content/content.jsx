import {Card} from './ui/index.js'
import * as Styled from './content.styles.js'

export const Content = () => {
      return (
          <Styled.Wrapper>
              <Styled.Container>
                  <Styled.GridContainer>
                      <Card />
                  </Styled.GridContainer>
              </Styled.Container>
          </Styled.Wrapper>
      )
}