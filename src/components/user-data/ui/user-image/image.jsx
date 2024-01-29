import PropTypes from "prop-types";
import * as Styled from './image.styles.js'

export const Image = ({profileImage}) => {
    return (
        <Styled.Image>
            <img src={profileImage} alt=""/>
        </Styled.Image>
    )
}

Image.propTypes = {
    profileImage: PropTypes.string,
}