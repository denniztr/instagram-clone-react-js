import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(70, 70, 70, 0.1);

    & p {
        padding: 1rem;
        font-weight: 300;
        letter-spacing: 0.7px;
    }
`;
