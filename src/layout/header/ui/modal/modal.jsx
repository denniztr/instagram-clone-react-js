import { useNavigate } from 'react-router-dom';
import * as Styled from './modal.styles.js';

export const Modal = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/');
        location.reload();
    };

    return (
        <Styled.ModalContainer>
            <ul>
                <li onClick={handleSignOut}>Exit</li>
            </ul>
        </Styled.ModalContainer>
    );
};
