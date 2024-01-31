import { useRef } from 'react';
import * as Styled from './upload-image.styles.js';

import axios from 'axios';

export const UploadImage = () => {
    const fileInputRef = useRef(null);
    const handleFileChange = (file) => {
        const data = new FormData();
        data.append('file', file);
        axios
            .post('https://wedev-api.sky.pro/api/upload/image', data)
            .then((res) => console.log(res.data));
    };
    return (
        <Styled.FormWrapper>
            <Styled.UploadImageContainer
                onClick={() => fileInputRef.current.click()}
            >
                <label htmlFor="">
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={(event) => {
                            event.preventDefault();
                            const file = event.target.files[0];
                            if (file) {
                                handleFileChange(file);
                            }
                        }}
                    />
                    <Styled.AddPostIcon size={50} />
                </label>
            </Styled.UploadImageContainer>
        </Styled.FormWrapper>
    );
};
