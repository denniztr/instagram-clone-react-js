import styled from 'styled-components';
import { MdOutlineAdd } from 'react-icons/md';

export const FormWrapper = styled.div``;

export const UploadImageContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: transparent;
    border: 2px dashed rgb(200, 200, 200);
    position: relative;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 2px;

    &:hover {
        background-color: rgb(240, 240, 240);
    }

    & input {
        display: none;
    }

    & img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 5;
    }
`;

export const AddPostIcon = styled(MdOutlineAdd)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(200, 200, 200);
    cursor: pointer;
`;
