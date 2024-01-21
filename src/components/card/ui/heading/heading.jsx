import Avatar from '../../Avatar.png'
import * as Styled from './heading.styles.jsx'

export const Heading = () => {
    return (
        <Styled.Heading>
            <Styled.UserData>
                <Styled.Image>
                    <img src={Avatar} alt=""/>
                </Styled.Image>
                <Styled.UserName>Sam Props</Styled.UserName>
            </Styled.UserData>
        </Styled.Heading>
    )
}