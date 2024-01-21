import styled from "styled-components";

export const ImageContainer = styled.div`
    width: 100%;
    height: 270px;
    //background-color: rgba(45, 42, 42, 0.66);
    position: relative;

    & img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`;
