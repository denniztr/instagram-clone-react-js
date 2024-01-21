import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 30px;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    padding-left: 1rem;
    
    & img {
        width: 16px;
        cursor: pointer;
    }
`;
