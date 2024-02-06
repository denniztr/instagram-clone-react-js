import { AuthForm } from '../../components/index.js';
import * as Styled from './auth.styles.js';

export const Auth = () => {
    return (
        <Styled.AuthWrapper>
            <Styled.AuthContainer>
                <AuthForm />
            </Styled.AuthContainer>
        </Styled.AuthWrapper>
    );
};
