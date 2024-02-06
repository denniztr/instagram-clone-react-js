import { useEffect } from 'react';
import { Content } from '../../components/index.js';
import { useGetPostsQuery } from '../../store/api/index.js';
import { Loader } from '../../shared/index.js';
import * as Styled from './main.styles.jsx';

export const Main = () => {
    const { data, isLoading, refetch } = useGetPostsQuery();
    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <Styled.Wrapper>
            <Styled.Main>
                {isLoading ? (
                    <Loader />
                ) : (
                    <Content posts={data} refetch={refetch} />
                )}
            </Styled.Main>
        </Styled.Wrapper>
    );
};
