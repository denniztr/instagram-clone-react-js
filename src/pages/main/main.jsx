import { Content } from '../../components/index.js';
import { useGetPostsQuery } from '../../store/api/index.js';
import * as Styled from './main.styles.jsx';
import { useEffect } from 'react';

export const Main = () => {
    const { data, isLoading, refetch } = useGetPostsQuery();

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <Styled.Wrapper>
            <Styled.Main>
                {isLoading ? (
                    <p>Loading</p>
                ) : (
                    <Content posts={data} refetch={refetch} />
                )}
            </Styled.Main>
        </Styled.Wrapper>
    );
};
