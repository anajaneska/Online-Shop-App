import React from 'react';
import styled from 'styled-components';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = styled.footer`
    padding: 3rem 2rem;
    background: #9F0000;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        display: grid;
    }
    overflow: hidden;
`
const FooterLinkContainer = styled.div`
    margin: 0 3rem;
    @media (max-width: 768px) {
       padding: 1.5rem 0.5rem;
       margin: 0 2rem;
    }
`
const FooterLinksWrapper = styled.div`
    display: flex;
    align-items: top;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`
const FooterTitle = styled.h2`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    color: #FFFFFF;
`
const FooterLink = styled.a`
    padding: 0.3rem 0;
    color: #FFFFFF;
    &:hover {
        color: #FFFFFF;
        font-weight: 500;
        transition: 100ms;
        transition-timing-function: ease-in-out;
    }
`
const FooterImage = styled.img`
    width: 180px;
    padding: 2rem 0;
`
const ImageLink = styled.a`
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`
const FooterComponent = () => {
  return <Footer>
    <ImageLink href='/'>
        <FooterImage src={"/"}>
        </FooterImage>
    </ImageLink>
    <FooterLinksWrapper>
        <FooterLinkContainer className='d-grid text-left'>
            <FooterTitle>Navigation</FooterTitle>
            <FooterLink href='/'>Home</FooterLink>
            <FooterLink href='/'>Category One</FooterLink>
            <FooterLink href='/'>Category Two</FooterLink>
            <FooterLink href='/'>Category Three</FooterLink>
        </FooterLinkContainer>
        <FooterLinkContainer className='d-grid text-left'>
            <FooterTitle>Customer Care</FooterTitle>
                <FooterLink href='/cookie-policy'>Cookies</FooterLink>
                <FooterLink href='/privacy-policy'>Privacy Policy</FooterLink>
                <FooterLink href='/terms-and-conditions'>Terms & Conditions</FooterLink>
        </FooterLinkContainer>
        <FooterLinkContainer className='d-grid text-left'>
            <FooterTitle>Follow Us</FooterTitle>
            <div className='d-flex justify-content-between'>
                <FooterLink href='https://www.facebook.com/'><FaFacebook color='#FFFFFF'></FaFacebook></FooterLink>
                <FooterLink href='https://twitter.com/?lang=en'><FaXTwitter color='#FFFFFF'></FaXTwitter></FooterLink>
                <FooterLink href='https://www.instagram.com/'><FaInstagram color='#FFFFFF'></FaInstagram></FooterLink>
            </div>
        </FooterLinkContainer>
    </FooterLinksWrapper>
  </Footer>;
}

export default FooterComponent;