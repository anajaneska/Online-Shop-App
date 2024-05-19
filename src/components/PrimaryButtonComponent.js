import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
    background: #BB0000;
    border-radius: 24px;
    padding: 11px 25px;
    display: flex;
    align-items: center;

    @media (max-width: 1400px) {
        padding: 10px 24px;
    }
    @media (max-width: 1200px) {
        padding: 9px 23px;
    }
    @media (max-width: 992px) {
        padding: 9px 23px;
    }
    @media (max-width: 768px) {
        padding: 8px 22px;
    }
`

const ButtonText = styled.text`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;

    @media (max-width: 1400px) {
        font-size: 0.9rem;
    }
    @media (max-width: 1200px) {
        font-size: 0.8rem;
    }
    @media (max-width: 992px) {
        font-size: 0.8rem;
    }
    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`

const PrimaryButtonComponent = ({ text, link }) => {
  return (<Button className='border border-0'>
        <Link to={link} className='text-decoration-none d-flex align-items-center'>
                <ButtonText className='text-white'>
                    {text}
                </ButtonText>
        </Link>
    </Button>);
}

export default PrimaryButtonComponent;