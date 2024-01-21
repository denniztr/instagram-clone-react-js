import styled from "styled-components";

export const Heading = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    padding-left: 0.5rem;
`;

export const Image = styled.div`
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
    
    & img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
    }
`

export const UserName = styled.h4`

`;