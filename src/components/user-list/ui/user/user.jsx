import ProfilePic from '../current-user-pic.jpeg'

import * as Styled from './user.styles.js'

export const User = () => {
  return (
      <Styled.UserContainer>
          <Styled.CurrentUserImage>
              <img src={ProfilePic} alt=""/>
              <Styled.Icon />
          </Styled.CurrentUserImage>
          <Styled.Image>
              <img src={`https://i.pravatar.cc/100`} alt=""/>
          </Styled.Image>
          <Styled.Image>
              <img src={`https://i.pravatar.cc/101`} alt=""/>
          </Styled.Image>
          <Styled.Image>
              <img src={`https://i.pravatar.cc/102`} alt=""/>
          </Styled.Image>
          <Styled.Image>
              <img src={`https://i.pravatar.cc/103`} alt=""/>
          </Styled.Image>
          <Styled.Image>
              <img src={`https://i.pravatar.cc/104`} alt=""/>
          </Styled.Image>
          <Styled.Image>
              <img src={`https://i.pravatar.cc/105`} alt=""/>
          </Styled.Image>
          <Styled.Image>
              <img src={`https://i.pravatar.cc/106`} alt=""/>
          </Styled.Image>
          <Styled.Image>
              <img src={`https://i.pravatar.cc/107`} alt=""/>
          </Styled.Image>
      </Styled.UserContainer>

  )
}