import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { LikeIcon } from '../../../../shared/index.js';
import { formatDistanceToNow } from 'date-fns';
import * as Styled from './card.styles.js';

export const Card = (props) => {
    const {
        id: postId,
        imageUrl: img,
        description: description,
        likes: likes,
        isLiked: liked,
        createdAt: createdAt,
        user: {
            id: userId,
            imageUrl: userImgUrl,
            login: userLogin,
            name: userName,
        },
        refetch: refetch,
    } = props;

    const navigate = useNavigate();

    return (
        <Styled.Card>
            <Styled.Image>
                <img src={img} alt="" />
            </Styled.Image>
            <Styled.Footer>
                <Styled.CardActionFooter>
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
                        <p>{likes.length}</p>
                        <LikeIcon id={postId} liked={liked} refetch={refetch} />
                    </Styled.CardAction>
                </Styled.CardActionFooter>
                <Styled.DescriptionContainer>
                    <p>{description}</p>
                    <span>{formatDistanceToNow(new Date(createdAt))} ago</span>
                </Styled.DescriptionContainer>
            </Styled.Footer>
        </Styled.Card>
    );
};

Card.propTypes = {
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.array,
    isLiked: PropTypes.bool,
    createdAt: PropTypes.string,
    user: PropTypes.shape({
        id: PropTypes.string,
        imageUrl: PropTypes.string,
        login: PropTypes.string,
        name: PropTypes.string,
    }),
    getPostClick: PropTypes.func,
};
