import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useRegisterUserMutation, useLoginUserMutation} from "../../../../store/api/index.js";
import {setUser} from "../../../../store/user-slice/user-slice.js";
import * as Styled from "./form.styles.js";

export const AuthForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isRegister, setIsRegister] = useState(false)
    const [name, setName] = useState(null)
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    // const [file, setImage] = useState(null)

    const [registerUser] = useRegisterUserMutation()
    const [loginUser] = useLoginUserMutation()

    const handleRegister = (event) => {
        event.preventDefault()
        registerUser({name: name, login: login, password: password}).unwrap()
            .then(res => console.log(res))
            .catch(error => console.log(error.data))
            .finally(() => {
                setLogin(null)
                setPassword(null)
            })
    }

    const handleLogin = (event) => {
        event.preventDefault()
        loginUser({login: login, password: password}).unwrap()
            .then((res) => {
                if (res.user) {
                    dispatch(setUser(res.user))
                    navigate('/')
                }
            })
            .catch(error => console.log(error.status))
    }

    return (
        <Styled.FormContainer>
            <Link to="/">
                <Styled.FormLogo>instapro</Styled.FormLogo>
            </Link>
            {isRegister ? (
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
                    <Styled.Button onClick={(event) => handleRegister(event)}>Create account</Styled.Button>
                    <Styled.FormText>Already have an account?<span onClick={() => setIsRegister(false)}> Log in. </span></Styled.FormText>
                </Styled.Form>
            ) : (
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
                    <Styled.Button onClick={(event) => handleLogin(event)}>Log in</Styled.Button>
                    <Styled.FormText>No account?<span onClick={() => setIsRegister(true)}> Register now.</span></Styled.FormText>
                </Styled.Form>
            )}
      </Styled.FormContainer>)
}