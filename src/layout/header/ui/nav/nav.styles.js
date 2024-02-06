import styled from 'styled-components';
import { FaRegUser } from 'react-icons/fa';

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
`;

export const RegUserIcon = styled(FaRegUser)`
    cursor: pointer;
`;
