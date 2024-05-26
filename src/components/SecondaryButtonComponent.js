import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
    border: 1px solid #713D30;
    border-radius: 24px;
    padding: 11px 25px;
    background-color: transparent;
    margin: 0 1.5rem;
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
        margin: 0 1rem;
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
    color: #713D30;
    
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
const SecondaryButtonComponent = ({ text, link }) => {
  return (<Button>
            <Link to={link} className='text-decoration-none'>
                <ButtonText>
                    {text}
                </ButtonText>
            </Link>
        </Button>);
}

export default SecondaryButtonComponent;