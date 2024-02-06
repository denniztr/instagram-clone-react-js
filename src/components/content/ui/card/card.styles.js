import styled from 'styled-components';
import { device } from '../../../../global/styles/media-query.js';

export const Card = styled.div`
    height: 340px;

    @media ${device.tablet} {
        height: 500px;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 260px;
    object-fit: contain;

    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;

        @media ${device.tablet} {
            object-fit: contain;
        }
    }

    @media ${device.tablet} {
        height: 400px;
        background-color: #f1f1f1;
        object-fit: contain;
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;

    @media ${device.tablet} {
        gap: 0.7rem;
        padding: 1rem;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    align-items: center;

    & h4 {
        font-size: 14px;
        font-weight: 500;

        @media ${device.tablet} {
            font-size: 16px;
        }
    }

    & span {
        font-size: 12.5px;
        color: dimgray;

        @media ${device.tablet} {
            font-size: 14px;
        }
    }
`;

export const UserPhoto = styled.div`
    width: 25px;
    height: 25px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const CardAction = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;

    & p {
        font-size: 14px;
    }
`;

export const CardActionFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    & span {
        color: dimgray;
    }
`;
