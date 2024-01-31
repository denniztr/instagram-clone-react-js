import { UploadImage } from '../../shared/index.js';
import * as Styled from './add-post-form.styles.js';

export const AddPostForm = () => {
    return (
        <Styled.FormContainer>
            <h3>Add post</h3>
            <UploadImage />
            <label>
                <textarea placeholder="Add description"></textarea>
            </label>
            <Styled.AddPostButton>Add post</Styled.AddPostButton>
        </Styled.FormContainer>
    );
};
