import PropTypes from "prop-types";
import {useState} from "react";
import {Card} from './ui/index.js'
import {Modal} from '../modal/index.js'
import * as Styled from './content.styles.js'

export const Content = ({contentWidth, posts}) => {
    const [isModal, setIsModal] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null)

    const getPostClick = (postId) => {
        const filterSelectedPost = posts.posts.filter(post => post.id === postId)
        setSelectedPost(filterSelectedPost)
        setIsModal(true)
    }

    return (
        <Styled.Wrapper>
            {isModal ? <Modal post={selectedPost} setIsModal={setIsModal} /> : null}
            <Styled.Container style={{width: contentWidth}}>
                <Styled.GridContainer>
                    {posts.posts.map(post => (
                        <Card key={post.id} {...post} getPostClick={getPostClick} />
                    ))}
                </Styled.GridContainer>
            </Styled.Container>
        </Styled.Wrapper>
      )
}

Content.propTypes = {
    contentWidth: PropTypes.string,
    posts: PropTypes.object,
}