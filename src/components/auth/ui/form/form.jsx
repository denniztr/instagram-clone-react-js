import {useState} from "react";
import {Link} from "react-router-dom";
import {useRegisterUserMutation} from "../../../../store/api/index.js";

import * as Styled from './form.styles.js'

export const AuthForm = () => {
    const [isRegister, setIsRegister] = useState(false)
    const [name, setName] = useState(null)
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)

    const [registerUser] = useRegisterUserMutation()

    const handleRegister = (event) => {
        event.preventDefault()
        registerUser({name, login, password})
            .then(res => console.log(res))
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
                    <input
                        type="file"
                        onChange={(event) => setImage(event.target.files[0])}
                    />
                    <Styled.Button onClick={(event) => handleRegister(event)}>Create account</Styled.Button>
                    <Styled.FormText>Already have an account?<span onClick={() => setIsRegister(false)}> Log in. </span></Styled.FormText>
                </Styled.Form>
            ) : (
                <Styled.Form>
                    <input type="text" placeholder="login"/>
                    <input type="password" placeholder="password"/>
                    <Styled.Button>Log in</Styled.Button>
                    <Styled.FormText>No account?<span onClick={() => setIsRegister(true)}> Register now.</span></Styled.FormText>
                </Styled.Form>
            )}
      </Styled.FormContainer>)
}