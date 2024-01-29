import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    
    :first-child {
        margin-right: 2rem;
    }
`;

export const Image = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 60%;
    cursor: pointer;
    transition: all 0.4s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 60%;
    }

    &:hover {
        box-shadow: 0 0 5px 2px rgb(194, 87, 121);
    }
`;

export const CurrentUserImage = styled(Image)`
    position: relative;
    border: 2px solid rgb(232, 104, 143);
    
    &:before {
        content: '';
        width: 25px;
        height: 25px;
        border-radius: 50%;
        position: absolute;
        right: 5px;
        bottom: 0;
        background-color: rgb(232, 104, 143);
    }
    
`;

export const Icon = styled(FaPlus)`
    position: absolute;
    right: 10px;
    bottom: 5px;
    color: rgb(222, 232, 232);
    cursor: pointer;

`;
