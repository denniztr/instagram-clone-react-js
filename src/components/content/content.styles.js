import styled from 'styled-components';
import { device } from '../../global/styles/media-query.js';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1500px;
    height: auto;
    margin-top: 2rem;

    @media ${device.tablet} {
        width: 100vw;
        margin-top: 2rem;
    }
`;

export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.3rem;

    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
    }
`;
