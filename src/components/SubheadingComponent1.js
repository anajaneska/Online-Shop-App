import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    text-transform: uppercase;
    color: #713D30;
    text-align: center;

    @media (max-width: 1400px) {
      font-size: 2.2rem;
    }
    @media (max-width: 1200px) {
      font-size: 2.1rem;
    }
    @media (max-width: 992px) {
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
    @media (max-width: 576px) {
      font-size: 1.8rem;
    }
`;

const SubheadingComponent1 = ({ text }) => {
  return <Heading>{text}</Heading>;
}

export default SubheadingComponent1;