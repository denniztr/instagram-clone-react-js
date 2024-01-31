import PropTypes from 'prop-types';
import { useRef } from 'react';
import * as Styled from './upload-image.styles.js';

import axios from 'axios';

export const UploadImage = ({ imageUrl, setImageUrl, signup }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = (file) => {
        const data = new FormData();
        data.append('file', file);
        axios
            .post('https://wedev-api.sky.pro/api/upload/image', data)
            .then((res) => {
                setImageUrl(res.data.fileUrl);
            });
    };

    return (
        <Styled.FormWrapper signup={signup}>
            <Styled.UploadImageContainer
                signup={signup}
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
                {imageUrl && <img src={imageUrl} alt="" />}
            </Styled.UploadImageContainer>
        </Styled.FormWrapper>
    );
};

UploadImage.propTypes = {
    imageUrl: PropTypes.string,
    setImageUrl: PropTypes.func,
    signup: PropTypes.bool,
};
