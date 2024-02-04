import * as Styled from './modal.styles.js';

export const Modal = () => {
    const handleSignOut = () => {
        localStorage.removeItem('user');
        location.reload();
    };

    return (
        <Styled.ModalContainer>
            <ul>
                <li>Profile</li>
                <li onClick={handleSignOut}>Exit</li>
            </ul>
        </Styled.ModalContainer>
    );
};
