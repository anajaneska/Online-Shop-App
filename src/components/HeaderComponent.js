import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import React from 'react';
import styled from 'styled-components';
import { IoCartOutline } from "react-icons/io5";

const Header = styled.header`
    background: #FCFCFC;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
`
const HeaderLinkContainer = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`
const HeaderLink = styled.a`
    padding: 0 2rem;
    color: red;
    text-decoration: none;
`
const HeaderImage = styled.img`
    width: 50px;
    padding: 0.5rem 0;
`

const HeaderComponent = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    const handleLogout = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            
        }).catch((error) => { });
    }

    return <Header className='d-flex justify-content-around align-items-center'>
    <a href='/'>
        <HeaderImage src={""} alt="logo"></HeaderImage>
    </a >
    <HeaderLinkContainer>
        <HeaderLink href='/'>Home</HeaderLink>
        <HeaderLink href='/'>Categories</HeaderLink>
        <HeaderLink href='/shopping-cart'>
            <IoCartOutline size={"24px"}></IoCartOutline>
        </HeaderLink>
        {user ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <Link to="/login">Login</Link>
            )}
    </HeaderLinkContainer>
  </Header>;
}

export default HeaderComponent;
