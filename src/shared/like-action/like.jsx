import PropTypes from 'prop-types';
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
            .catch((error) => console.log(error));
    };

    const handleDislike = (event) => {
        event.preventDefault();
        dislikeAction({ id })
            .unwrap()
            .then((res) => {
                console.log(res);
                refetch();
            })
            .catch((error) => console.log(error));
    };

    return (
        <FaRegHeart
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
