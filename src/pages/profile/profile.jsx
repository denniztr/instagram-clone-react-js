import {UserData, Content} from '../../components/index.js'
import * as Styled from './profile-styles.js'

export const Profile = () => {
    return (
        <Styled.Wrapper>
            <Styled.ProfileContainer>
                <Styled.UserDataWrapper>
                    <UserData />
                </Styled.UserDataWrapper>
                <p>стили карточек нужно изменить, передать пропсом другие стили из компонента profile в компонент card</p>
                <Content />
            </Styled.ProfileContainer>
        </Styled.Wrapper>
    )
}