import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding-top: 1.5rem;

    & h3 {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0.5px;
        color: rgb(0, 0, 0);
    }

    & textarea {
        width: 300px;
        height: 100px;
        resize: none;
        background-color: transparent;
        border: 0.5px solid rgba(224, 224, 224, 0.8);
        font-family: 'League Spartan', sans-serif;
        letter-spacing: 0.5px;
        transition: all 0.5s;
        padding: 10px;

        &:hover {
            background-color: rgb(240, 240, 240);
        }

        &:focus {
            outline: none;
            border-color: rgb(68, 148, 178);
            box-shadow: 0 0 5px rgba(68, 148, 255, 0.5);
        }
    }
`;

export const AddPostButton = styled.button`
    width: 100px;
    height: 35px;
    background-color: transparent;
    border: 0.5px solid rgba(224, 224, 224, 0.8);
    font-family: 'League Spartan', sans-serif;
    letter-spacing: 0.5px;
    font-size: 16px;
    transition: all 0.5s;

    &:hover {
        background-color: rgb(240, 240, 240);
    }
`;
