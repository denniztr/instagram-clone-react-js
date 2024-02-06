import styled from 'styled-components';
import { device } from '../../global/styles/media-query.js';

export const Wrapper = styled.header`
    width: 100%;
    height: 55px;
    padding: 2rem 0 2rem;
    border-bottom: 1px solid #e0e0e0;

    @media ${device.tablet} {
        padding: 1rem 0 1rem;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem 0 5rem;

    @media ${device.tablet} {
        padding: 0 1.5rem 0 1.5rem;
    }
`;
