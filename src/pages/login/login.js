import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SubheadingComponent1 from "../../components/SubheadingComponent1";
import styled from 'styled-components';

const DescriptionContainer = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 14px;
    text-align: center;
    margin-bottom: 30px;
`
const LabelContainer = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
`
const InputContainer = styled.input`
    border-radius: 5px;
    border: solid 1px #adb5bd;
    padding: 7px 15px;
    margin-bottom: 15px;
`
const ProductButtonContainer = styled.button`
    background: #BB0000;
    border-radius: 24px;
    padding: 8px 17px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    border: none;
    
`
const DetailsButtonContainer = styled.button`
    background: #FFFFFF;
    border-radius: 24px;
    padding: 8px 17px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    text-transform: capitalize;
    color: #BB0000;
    border: solid 1px #BB0000;
`
const AccountContainer = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`
const RegisterLink = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #BB0000;
    margin: 0 10px;
`

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    
    const provider = new GoogleAuthProvider();

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/");
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(true);
            });
    }

    const handleGoogleLogin = () => {
        
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            navigate("/")
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            
        });
    }
    
    return (
    <div className="container px-5">
        <div className="container my-5 d-flex justify-content-center">
            <div>
            <form onSubmit={handleLogin}>
                <SubheadingComponent1 text="Login"></SubheadingComponent1>
                <DescriptionContainer>Welcome back!</DescriptionContainer>
                <LabelContainer className="text-left">Email</LabelContainer>
                <div className="row">
                    <InputContainer
                    type="email"
                    placeholder="example@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <LabelContainer>Password</LabelContainer>
                <div className="row">
                    <InputContainer
                        type="password"
                        placeholder="******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <DescriptionContainer>Wrong email or password!</DescriptionContainer>}

                <div className="row mt-4 mb-2">
                    <ProductButtonContainer type="submit">Login</ProductButtonContainer>
                </div>
                <div className="row">
                <DetailsButtonContainer type="submit" onClick={handleGoogleLogin}>Login with Google</DetailsButtonContainer>
                </div>
                
            </form>
                <div className="d-flex justify-content-center align-items-center mt-5"> 
                    <AccountContainer>Don't have an account?</AccountContainer>
                    <RegisterLink href="/register">Register here</RegisterLink>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;
