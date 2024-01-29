import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import * as Styled from './card.styles.js'


export const Card = props => {
    const {
        imageUrl: img,
        isLiked: liked,
        user: {
            imageUrl: userImgUrl,
            login: userLogin,
            name: userName,
        }
    } = props

    return (
        <Styled.Card>
            <Styled.Image>
                <img src={img} alt=""/>
            </Styled.Image>
            <Styled.Footer>
                <Styled.UserInfo>
                    <Styled.UserPhoto>
                        <img src={userImgUrl} alt=""/>
                    </Styled.UserPhoto>
                          {/*<h4>{userName}<span>{userLogin}</span></h4>*/}
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
    imageUrl: PropTypes.string,
    isLiked: PropTypes.bool,
    user: PropTypes.shape({
        imageUrl: PropTypes.string,
        login: PropTypes.string,
        name: PropTypes.string,
    }),
}