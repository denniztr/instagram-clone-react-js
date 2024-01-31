import styled from 'styled-components';

export const ModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 5;
    top: 0;
    backdrop-filter: blur(3px);
`;

export const Container = styled.div`
    width: 1000px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    display: flex;
    flex-direction: row;
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 55%;
    position: relative;
`;

export const Image = styled.div`
    width: calc(100% - 0.5rem - 0.5rem);
    height: calc(100% - 0.5rem - 0.5rem);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const PostActionContainer = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
`;

export const Icons = styled.div`
    align-self: flex-end;
    padding: 0.5rem;
`;

export const PostData = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    //padding-left: 0.5rem;
`;

export const UserPhoto = styled.div`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    gap: 0.5rem;

    & h4 {
        font-size: 22px;
        font-weight: 500;
    }

    & span {
        font-size: 16px;
        color: dimgray;
    }
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    height: auto;
    padding-top: 1rem;

    & p {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.5px;
        padding-bottom: 1rem;
    }
`;

export const Comments = styled.div`
    width: 100%;
    height: 100%;
`;

export const CommentsHeading = styled.h3`
    width: 100%;
    margin-top: 2rem;
    & h3 {
        font-weight: 400;
        color: dimgray;
    }
`;
