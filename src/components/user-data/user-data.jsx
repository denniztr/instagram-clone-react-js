import PropTypes from "prop-types";
import {Image, UserInfo} from './ui/index.js'
import * as Styled from './user-data.styles.js'

export const UserData = ({data : {posts}}) => {
    const profileImage = posts[0].user.imageUrl
    return (
        <Styled.UserDataContainer>
            <Image profileImage={profileImage} />
            <UserInfo posts={posts} />
        </Styled.UserDataContainer>
    )
}

UserData.propTypes = {
    data: PropTypes.object,
}