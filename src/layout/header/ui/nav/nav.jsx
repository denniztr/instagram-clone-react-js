import {useNavigate} from "react-router-dom";
import {FaRegUser, FaRegHeart} from "react-icons/fa"
import * as Styled from './nav.styles.js'

export const Navigation = () => {
    const navigate = useNavigate()
  return (
      <Styled.NavContainer>
          <FaRegHeart size={20}/>
              <FaRegUser size={20} style={{cursor: 'pointer'}} onClick={() => navigate('/authorization')}/>
      </Styled.NavContainer>
  )
}