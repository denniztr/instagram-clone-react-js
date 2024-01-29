
import * as Styled from './user-info.styles.js'

export const UserInfo = () => {
  return (
      <Styled.UserInfoContainer>
          <Styled.Heading>
              <h3>Olivia Harris</h3>
          </Styled.Heading>
          <Styled.UserProfileStats>
              <p><span>7</span>posts</p>
              <p><span>23</span>followers</p>
              <p><span>13</span>following</p>
          </Styled.UserProfileStats>
          <Styled.ButtonsContainer>
              <Styled.PrimaryButton>
                  Follow
              </Styled.PrimaryButton>
          </Styled.ButtonsContainer>
      </Styled.UserInfoContainer>
  )
}



