import PropTypes from "prop-types";
import {Card} from './ui/index.js'
import * as Styled from './content.styles.js'

export const Content = ({contentWidth, posts}) => {
      return (
          <Styled.Wrapper>
              <Styled.Container style={{width: contentWidth}}>
                  <Styled.GridContainer>
                      {posts.posts.map(post => (
                          <Card key={post.id} {...post} />
                      ))}
                  </Styled.GridContainer>
              </Styled.Container>
          </Styled.Wrapper>
      )
}

Content.propTypes = {
    contentWidth: PropTypes.string,
    posts: PropTypes.object,
}