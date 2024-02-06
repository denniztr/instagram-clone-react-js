import { AddPostForm } from '../../components/index.js';
import * as Styled from './add-post.styles.js';

export const AddPost = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <AddPostForm />
            </Styled.Container>
        </Styled.Wrapper>
    );
};
