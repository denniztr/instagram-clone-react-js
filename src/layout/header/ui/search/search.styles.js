import styled from "styled-components";

export const SearchContainer = styled.div`
    position: relative;
    width: 122px;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: 12px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #949393;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

    &:focus {
        background-color: #000;
    }
`;

export const HashTagIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: #fff;
`;