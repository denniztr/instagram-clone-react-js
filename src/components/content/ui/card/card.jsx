import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { LuMessageSquare } from 'react-icons/lu';
import {LikeIcon} from '../../../../shared/index.js'
import * as Styled from './card.styles.js';

export const Card = props => {
    const {
        id: postId,
        imageUrl: img,
        likes: likes,
        isLiked: isLiked,
        user: {
            id: userId,
            imageUrl: userImgUrl,
            login: userLogin,
            name: userName,
        },
        getPostClick: getPostClick,
        refetch: refetch,
    } = props;

    const navigate = useNavigate();

    return (
        <Styled.Card>
            <Styled.Image onClick={() => getPostClick(postId)}>
                <img src={img} alt="" />
            </Styled.Image>
            <Styled.Footer>
                <Styled.UserInfo>
                    <Styled.UserPhoto
                        onClick={() => navigate(`user/${userId}`)}
                    >
                        <img src={userImgUrl} alt="" />
                    </Styled.UserPhoto>
                    <h4>{userName}</h4>
                    <span>{userLogin}</span>
                </Styled.UserInfo>
                <Styled.CardAction>
                    <LikeIcon id={postId} likes={props.likes} userId={userId} liked={props.isLiked} refetch={refetch}/>
                    <LuMessageSquare />
                </Styled.CardAction>
            </Styled.Footer>
        </Styled.Card>
    );
};

Card.propTypes = {
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.array,
    isLiked: PropTypes.bool,
    user: PropTypes.shape({
        id: PropTypes.string,
        imageUrl: PropTypes.string,
        login: PropTypes.string,
        name: PropTypes.string,
    }),
    getPostClick: PropTypes.func,
};
