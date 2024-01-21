import styled from "styled-components";

export const Container = styled.div`
    background-color: rgb(255, 255, 255);
    height: 450px;
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

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

export const CardActions = styled.div`
    width: 100%;
    height: 55px;
    background-color: rgba(128, 173, 93, 0.75);
`;

