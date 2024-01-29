import styled from "styled-components";

export const Card = styled.div`
    height: 320px;
`;

export const Image = styled.div`
    width: 100%;
    height: 260px;
    object-fit: cover;
    // border-radius: 10%;
    
    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        // border-radius: 10%;
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.5rem 0 0.5rem;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    align-items: center;
    
    & h4 {
        font-size: 16px;
        font-weight: 500;
    }
    
    & span {
        font-size: 12px;
        color: dimgray;
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
    gap: 2rem;
`;
