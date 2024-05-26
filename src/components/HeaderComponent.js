import { Link } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import React from 'react';
import styled from 'styled-components';
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Logo from "../images/logos.png";

const Header = styled.header`
    background: #FCFCFC;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
`
const HeaderLinkContainer = styled.span`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`
const HeaderLink = styled.a`
    padding: 0 2rem;
    color: #000;
    text-decoration: none;
    font-family: 'Montserrat';
`
const HeaderImage = styled.img`
    width: 90px;
    padding: 0.5rem 0;
    border-radius: 50%;
`
const ProductButtonContainer = styled.button`
    background: #713D30;
    border-radius: 24px;
    padding: 8px 30px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 0.9rem;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    border: none;
`

const HeaderComponent = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const {cartTotalQuantity} = useSelector(state=>state.cart) 

    const handleLogout = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            window.location.reload();
        }).catch((error) => { });
    }

    return <Header className='d-flex justify-content-around align-items-center'>
    <a href='/'>
        <HeaderImage src={Logo} alt="logo"></HeaderImage>
    </a >
    <HeaderLinkContainer>
        <HeaderLink href='/'>Home</HeaderLink>
        <HeaderLink href='/products'>Products</HeaderLink>
        <HeaderLink href='/shopping-cart'>
            <div>
                <IoCartOutline size={"24px"}></IoCartOutline>
                <span>{cartTotalQuantity}</span>
            </div>
        </HeaderLink>
        <HeaderLink>
            {user ? (
                <ProductButtonContainer onClick={handleLogout}>Logout</ProductButtonContainer>
            ) : (
                <Link to="/login">
                    <ProductButtonContainer>Login</ProductButtonContainer>
                </Link>
            )}
        </HeaderLink>
        
    </HeaderLinkContainer>
  </Header>;
}

export default HeaderComponent;
