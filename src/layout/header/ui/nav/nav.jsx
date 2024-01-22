import { FaRegUser, FaRegHeart } from "react-icons/fa";

import * as Styled from './nav.styles.js'


export const Navigation = () => {
  return (
      <Styled.NavContainer>
        <FaRegHeart size={20}/>
        <FaRegUser size={20}/>
      </Styled.NavContainer>
  )
}