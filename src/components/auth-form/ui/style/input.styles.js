import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const FormLogo = styled.h2`
    font-family: 'League Spartan', sans-serif;
    letter-spacing: 2px;
    font-weight: 350;
    font-size: 26px;
    text-align: center;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & input {
        width: 100%;
        font-family: 'League Spartan', sans-serif;
        letter-spacing: 0.3px;
        padding: 0.5rem;
        border: 1px solid rgb(224, 224, 224);
        color: rgb(130, 130, 130);
        &:focus {
            background-color: rgb(234, 234, 234);
        }
    }
`;

export const Button = styled.button`
    height: 35px;
    background-color: transparent;
    border: 0.5px solid rgba(224, 224, 224, 0.8);
    font-family: 'League Spartan', sans-serif;
    letter-spacing: 0.5px;
    font-size: 16px;
    margin-top: 2rem;
    transition: all 0.5s;

    &:hover {
        background-color: rgb(240, 240, 240);
    }
`;

export const FormText = styled.p`
    text-align: center;
    font-size: 12px;
    margin-top: 0.5rem;
    letter-spacing: 0.2px;
    & span {
        padding-bottom: 1px;
        cursor: pointer;
        &:hover {
            border-bottom: 0.5px solid black;
        }
    }
`;
