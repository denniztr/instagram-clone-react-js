import {Image, UserInfo} from './ui/index.js'
import * as Styled from './user-data.styles.js'

export const UserData = () => {
    return (
        <Styled.UserDataContainer>
            <Image />
            <UserInfo />
        </Styled.UserDataContainer>
    )
}
