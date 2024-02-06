import styled from 'styled-components';
import { device } from '../../../../global/styles/media-query.js';

export const UserInfoContainer = styled.div`
    min-width: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media ${device.tablet} {
        min-width: 390px;
        gap: 1rem;
    }
`;

export const Heading = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & h3 {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0.5px;
        color: rgba(0, 0, 0);
    }

    & span {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.5px;
        color: rgb(148, 147, 147);
    }
`;

export const UserProfileStats = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    & p {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.5px;

        & span {
            font-weight: 600;
            padding-right: 0.5rem;
        }
    }
`;
