
import {User} from './ui/index.js'

import * as Styled from './user-list.styles.js';


export const UserList = () => {
  return (
      <Styled.Wrapper>
          <Styled.Container>
              <User />
          </Styled.Container>
      </Styled.Wrapper>
  )
}