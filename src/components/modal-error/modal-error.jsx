import * as Styled from './modal-error.styles.js';

export const ModalError = ({ error }) => {
    console.log(error);
    return (
        <Styled.ModalContainer>
            <p>{error}</p>
        </Styled.ModalContainer>
    );
};
