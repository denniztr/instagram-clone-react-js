import styled from 'styled-components';
import { device } from '../../global/styles/media-query.js';

export const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: rgba(248, 248, 248);
`;

export const ProfileContainer = styled.main`
    padding: 25px 100px 0 100px;

    @media ${device.tablet} {
        padding: 0;
    }
`;

export const UserDataWrapper = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
`;
