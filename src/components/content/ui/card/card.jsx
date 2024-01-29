import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import {FaRegHeart} from "react-icons/fa";
import {LuMessageSquare } from "react-icons/lu";
import * as Styled from './card.styles.js'


export const Card = props => {
    const {
        id: postId,
        imageUrl: img,
        isLiked: liked,
        user: {
            id: userId,
            imageUrl: userImgUrl,
            login: userLogin,
            name: userName,
        },
        getPostClick: getPostClick,
    } = props

    const navigate = useNavigate()

    return (
        <Styled.Card>
            <Styled.Image onClick={() => getPostClick(postId)}>
                <img src={img} alt=""/>
            </Styled.Image>
            <Styled.Footer>
                <Styled.UserInfo>
                    <Styled.UserPhoto onClick={() => navigate(`user/${userId}`)}>
                        <img src={userImgUrl} alt=""/>
                    </Styled.UserPhoto>
                    <h4>{userName}</h4>
                    <span>{userLogin}</span>
                </Styled.UserInfo>
                <Styled.CardAction>
                    <FaRegHeart/>
                    <LuMessageSquare />
                </Styled.CardAction>
            </Styled.Footer>
        </Styled.Card>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    isLiked: PropTypes.bool,
    user: PropTypes.shape({
        id: PropTypes.string,
        imageUrl: PropTypes.string,
        login: PropTypes.string,
        name: PropTypes.string,
    }),
    getPostClick: PropTypes.func,
}