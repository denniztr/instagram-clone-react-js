import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1500px;
    height: auto;
    margin-top: 2rem;
`;

export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));  // пропсом уменьшить размер карточек
    gap: 0.5rem;
`;


