import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { Modal } from '../modal/index.js';
import * as Styled from './nav.styles.js';

export const Navigation = ({ user }) => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    const userIconClick = () => {
        if (user) {
            setModal(!modal);
        } else {
            navigate('/authorization');
        }
    };

    return (
        <Styled.NavContainer>
            <Styled.RegUserIcon size={20} onClick={() => userIconClick()} />
            {modal && <Modal />}
        </Styled.NavContainer>
    );
};

Navigation.propTypes = {
    user: PropTypes.object,
};
