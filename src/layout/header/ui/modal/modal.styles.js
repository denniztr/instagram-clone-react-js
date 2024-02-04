import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 75px;
    //height: 70px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50px;
    right: 10px;

    & ul {
        padding: 0.7rem;

        & li {
            font-size: 16px;
            letter-spacing: 0.6px;
            font-weight: 400;
            cursor: pointer;
        }

        & li:last-child {
            margin-top: 0.5rem;
        }
    }
`;
