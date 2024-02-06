import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import {
    useLikeActionMutation,
    useDislikeActionMutation,
} from '../../store/api/index.js';

export const LikeIcon = ({ id, liked, refetch }) => {
    const [likeAction] = useLikeActionMutation();
    const [dislikeAction] = useDislikeActionMutation();

    const handleLike = (event) => {
        event.preventDefault();
        likeAction({ id })
            .unwrap()
            .then((res) => {
                console.log(res);
                refetch();
            })
            .catch(() => {});
    };

    const handleDislike = (event) => {
        event.preventDefault();
        dislikeAction({ id })
            .unwrap()
            .then((res) => {
                refetch();
            })
            .catch((error) => console.log(error));
    };

    return (
        <FaRegHeart
            size={15}
            style={{
                cursor: 'pointer',
                color: liked ? 'red' : 'black',
            }}
            onClick={(event) =>
                liked ? handleDislike(event) : handleLike(event)
            }
        />
    );
};

LikeIcon.propTypes = {
    id: PropTypes.string,
    liked: PropTypes.bool,
};
