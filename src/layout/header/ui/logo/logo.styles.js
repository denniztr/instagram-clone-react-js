import styled from 'styled-components';
import { device } from '../../../../global/styles/media-query.js';

export const LogoContainer = styled.div`
    width: 122px;
    height: auto;
    cursor: pointer;

    @media ${device.tablet} {
        width: 75px;
    }
`;

export const Logo = styled.h1`
    font-family: 'League Spartan', sans-serif;
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 38px;

    @media ${device.tablet} {
        font-size: 22px;
    }
`;
