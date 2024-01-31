import PropTypes from 'prop-types';
import { UploadImage } from '../../../../shared/index.js';
import * as Styled from '../style/input.styles.js';

export const SignUp = ({
    setIsSignUp,
    setName,
    setLogin,
    setPassword,
    imageUrl,
    setImageUrl,
    handleRegister,
}) => {
    return (
        <Styled.Form>
            <input
                type="text"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type="text"
                placeholder="login"
                onChange={(event) => setLogin(event.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <UploadImage imageUrl={imageUrl} setImageUrl={setImageUrl} signup />
            <Styled.Button onClick={(event) => handleRegister(event)}>
                Create account
            </Styled.Button>
            <Styled.FormText>
                Already have an account?
                <span onClick={() => setIsSignUp(false)}> Log in. </span>
            </Styled.FormText>
        </Styled.Form>
    );
};

SignUp.propTypes = {
    setIsSignUp: PropTypes.func,
    setName: PropTypes.func,
    setLogin: PropTypes.func,
    setPassword: PropTypes.func,
    imageUrl: PropTypes.null || PropTypes.string,
    setImageUrl: PropTypes.func,
    handleRegister: PropTypes.func,
};
