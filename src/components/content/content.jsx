import PropTypes from "prop-types";
import {Card} from './ui/index.js'
import * as Styled from './content.styles.js'

export const Content = ({contentWidth}) => {
      return (
          <Styled.Wrapper>
              <Styled.Container style={{width: contentWidth}}>
                  <Styled.GridContainer>
                      <Card />
                  </Styled.GridContainer>
              </Styled.Container>
          </Styled.Wrapper>
      )
}

Content.propTypes = {
    contentWidth: PropTypes.string,
}