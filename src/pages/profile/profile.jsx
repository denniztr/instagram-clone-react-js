import { useParams } from 'react-router-dom';
import { useGetUserPostsQuery } from '../../store/api/index.js';
import { UserData, Content } from '../../components/index.js';
import * as Styled from './profile-styles.js';

export const Profile = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetUserPostsQuery(id);
    const contentWidth = '1200px';
    return (
        <Styled.Wrapper>
            <Styled.ProfileContainer>
                <Styled.UserDataWrapper>
                    {isLoading ? null : <UserData data={data} />}
                </Styled.UserDataWrapper>
                {isLoading ? (
                    <p>Loading</p>
                ) : (
                    <Content contentWidth={contentWidth} posts={data} />
                )}
            </Styled.ProfileContainer>
        </Styled.Wrapper>
    );
};
