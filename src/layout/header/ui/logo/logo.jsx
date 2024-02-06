import { Link } from 'react-router-dom';
import * as Styled from './logo.styles.js';

export const Logo = () => {
    return (
        <Styled.LogoContainer>
            <Link to="/">
                <Styled.Logo>instapro</Styled.Logo>
            </Link>
        </Styled.LogoContainer>
    );
};
