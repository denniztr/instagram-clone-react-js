import {useState} from "react";
import {Link} from "react-router-dom";
import * as Styled from './form.styles.js'

export const AuthForm = () => {
    const [isRegister, setIsRegister] = useState(false)

    return (
        <Styled.FormContainer>
            <Link to="/">
                <Styled.FormLogo>instapro</Styled.FormLogo>
            </Link>
            {isRegister ? (
                <Styled.Form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="login"/>
                    <input type="password" placeholder="password"/>
                    <input type="file"/>
                    <Styled.Button>Create account</Styled.Button>
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