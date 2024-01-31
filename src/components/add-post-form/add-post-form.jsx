import { useState } from 'react';
import { UploadImage } from '../../shared/index.js';
import { useUploadPostMutation } from '../../store/api/index.js';
import * as Styled from './add-post-form.styles.js';

export const AddPostForm = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [description, setDescription] = useState(null);

    const [uploadPost] = useUploadPostMutation();

    const handleUpload = () => {
        uploadPost({ description: description, imageUrl: imageUrl }).then(
            (res) => {
                console.log(res);
            },
        );
    };

    return (
        <Styled.FormContainer>
            <h3>Add post</h3>
            <UploadImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
            <label>
                <textarea
                    placeholder="Add description"
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <Styled.AddPostButton onClick={handleUpload}>
                Add post
            </Styled.AddPostButton>
        </Styled.FormContainer>
    );
};
