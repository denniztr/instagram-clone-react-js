import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { FaRegHeart } from 'react-icons/fa';
import { useLikeActionMutation, useDislikeActionMutation } from '../../store/api/index.js'

export const LikeIcon = ({ id, likes, userId, liked }) => {
  // const [isLiked, setIsLiked] = useState()
  // const [isLiked, setIsLiked] = useState(liked)
  // console.log(isLiked)
  // useEffect(() => {
  //   const liked = likes.filter(like => like.id === userId)
  //   setIsLiked(liked)
  // }, [likes, userId])


  const [likeAction] = useLikeActionMutation()
  const [dislikeAction] = useDislikeActionMutation()


  const handleLike = (event) => {
    event.preventDefault();
    likeAction({ id }).unwrap()
      .then((res) => {
        console.log(res)
        // setIsLiked(true)
      })
      .catch((error) => console.log(error))

  };
  //
  const handleDislike = (event) => {
    event.preventDefault();
    dislikeAction({ id }).unwrap()
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }


  return (
    <FaRegHeart
      style={{ cursor: 'pointer', color: liked ? 'red' : 'black' }}
      // style={{cursor: 'pointer'}}
      // color={{click ? 'red' : 'black'}}
      //onClick={(event) => handleLike(event)}
      onClick={(event) =>
        liked ? handleDislike(event) : handleLike(event)
      }
    />
  )
}

LikeIcon.propTypes = {
  id: PropTypes.string,
  likes: PropTypes.array,
  userId: PropTypes.string,
};