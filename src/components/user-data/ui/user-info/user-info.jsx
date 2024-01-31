import PropTypes from 'prop-types';
import * as Styled from './user-info.styles.js';

export const UserInfo = ({ posts }) => {
    const postsQuantity = posts.length;
    return (
        <Styled.UserInfoContainer>
            <Styled.Heading>
                <h3>{posts[0].user.name}</h3>
                <span>{posts[0].user.login}</span>
            </Styled.Heading>
            <Styled.UserProfileStats>
                <p>
                    <span>{postsQuantity}</span>posts
                </p>
                <p>
                    <span>23</span>followers
                </p>
                <p>
                    <span>13</span>following
                </p>
            </Styled.UserProfileStats>
            <Styled.ButtonsContainer>
                <Styled.PrimaryButton>Follow</Styled.PrimaryButton>
            </Styled.ButtonsContainer>
        </Styled.UserInfoContainer>
    );
};

UserInfo.propTypes = {
    posts: PropTypes.array,
};
