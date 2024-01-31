import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import {Modal} from '../modal/index.js'
import * as Styled from './nav.styles.js';

export const Navigation = ({user}) => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    const userIconClick = () => {
      if (user) {
        setModal(!modal)
      } else {
        navigate('/authorization')
      }
    };

    return (
        <Styled.NavContainer>
            <FaRegHeart size={20} />
            <FaRegUser
                size={20}
                style={{ cursor: 'pointer' }}
              onClick={() => userIconClick()}
            />
          {modal && <Modal />}
        </Styled.NavContainer>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
}
