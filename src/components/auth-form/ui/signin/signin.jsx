import PropTypes from 'prop-types'
import * as Styled from '../style/input.styles.js'

export const SignIn = ({setIsSignUp, setLogin, setPassword, handleLogin}) => {
  return (
    <Styled.Form>
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
      <Styled.Button
        onClick={(event) => handleLogin(event)}
      >
        Log in
      </Styled.Button>
      <Styled.FormText>
        No account?
        <span
          onClick={() => setIsSignUp(true)}
        >
                            {' '}
          Register now.
                        </span>
      </Styled.FormText>
    </Styled.Form>
  )
}

SignIn.propTypes = {
  setIsSignUp: PropTypes.func,
  setLogin: PropTypes.func,
  setPassword: PropTypes.func,
  handleLogin: PropTypes.func,
}