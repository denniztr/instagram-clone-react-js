import styled from 'styled-components';
import { device } from '../../global/styles/media-query.js';

export const UserDataContainer = styled.div`
    padding: 2rem 0 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem 0 0;
    }
`;
