import {UserData, Content} from '../../components/index.js'
import * as Styled from './profile-styles.js'

export const Profile = () => {
    const contentWidth = '1200px'
    return (
        <Styled.Wrapper>
            <Styled.ProfileContainer>
                <Styled.UserDataWrapper>
                    <UserData />
                </Styled.UserDataWrapper>
                <Content contentWidth={contentWidth} />
            </Styled.ProfileContainer>
        </Styled.Wrapper>
    )
}