import { useState } from "react";
import { auth, db } from "../../firebase";
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
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
const LoginLink = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #BB0000;
    margin: 0 10px;
`
const Register = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    
    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
      
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              email: user.email,
              displayName: displayName,
              shoppingCart: [],
            });
      
            setEmail('');
            setPassword('');
            setDisplayName('');
            alert('User registered successfully!');
          } catch (error) {
            setError(error.message);
            console.error("Error adding user to Firestore: ", error);
          }
    };

    
    return (
    <div className="container px-5">
        <div className="container my-5 d-flex justify-content-center">
            <div>
            <form onSubmit={handleRegister}>
            <SubheadingComponent1 text="Register"></SubheadingComponent1>
                <DescriptionContainer>Create an account!</DescriptionContainer>
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

                <LabelContainer>Display Name</LabelContainer>
                <div className="row">
                    <InputContainer
                    type="text" 
                    placeholder="your name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)} 
                />
                </div>
                {error && <DescriptionContainer>Invalid input!</DescriptionContainer>}

                <div className="row mt-4 mb-2">
                    <ProductButtonContainer type="submit">Register</ProductButtonContainer>
                </div>
            </form>
                <div className="d-flex justify-content-center align-items-center mt-5"> 
                    <AccountContainer>Already have an account?</AccountContainer>
                    <LoginLink href="/login">Login here</LoginLink>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;
