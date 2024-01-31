import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {SignIn, SignUp} from './ui/index.js'
import { useRegisterUserMutation, useLoginUserMutation } from '../../store/api/index.js'
import { setUser } from '../../store/user-slice/user-slice.js'
import * as Styled from './auth-form.styles.js'

export const AuthForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState(null);
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();

  const handleRegister = (event) => {
      event.preventDefault();
      registerUser({ name: name, login: login, password: password })
          .unwrap()
          .then((res) => console.log(res))
          .catch((error) => console.log(error.data))
          .finally(() => {
              setLogin(null);
              setPassword(null);
          });
  };

  const handleLogin = (event) => {
      event.preventDefault();
      loginUser({ login: login, password: password })
          .unwrap()
          .then((res) => {
              if (res.user) {
                  dispatch(setUser(res.user));
                  navigate('/');
              }
          })
          .catch((error) => console.log(error.status))
          .finally(() => {
            setLogin(null);
            setPassword(null);
          });
  };

  return (
    <Styled.AuthWrapper>
      <Styled.AuthContainer>
        <Link to="/">
          <Styled.FormLogo>instapro</Styled.FormLogo>
        </Link>
        {isSignUp ?
          <SignUp setIsSignUp={setIsSignUp} setName={setName} setLogin={setLogin} setPassword={setPassword} handleRegister={handleRegister}/>
          :
          <SignIn setIsSignUp={setIsSignUp} setLogin={setLogin} setPassword={setPassword} handleLogin={handleLogin}/>
        }
      </Styled.AuthContainer>
    </Styled.AuthWrapper>
  )
}