import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    color: #FEFEFE;
    text-align: left;
    line-break: auto;
    width: 80%;

    @media (max-width: 1400px) {
      font-size: 0.9rem;
    }
    @media (max-width: 1200px) {
      font-size: 0.9rem;
    }
    @media (max-width: 992px) {
      font-size: 0.8rem;
    }
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
`;

const ParagraphComponent = ({ text }) => {
  return <Paragraph>{text}</Paragraph>;
}

export default ParagraphComponent;