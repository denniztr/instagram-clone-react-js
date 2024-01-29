import styled from "styled-components";

export const UserInfoContainer = styled.div`
    min-width: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
`;

export const Heading = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & h3 {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0.5px;
        text-shadow: dimgray;
    }
`;

export const UserProfileStats = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    & p {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.5px;
        
        & span {
            font-weight: 600;
            padding-right: 0.5rem;
        }
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PrimaryButton = styled.button`
    width: 100px;
    height: 35px;
    background-color: transparent;
    border: 0.5px solid rgba(224, 224, 224, 0.8);
    font-family: "League Spartan", sans-serif;
    letter-spacing: 0.5px;
    font-size: 16px;
`;