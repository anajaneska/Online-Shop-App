import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.button`
    border-radius: 15px;
    margin: 1rem;
    display: grid;
    background: transparent;

    &:hover {
        background: #F6F6F6;
        transition: 100ms;
        transition-timing-function: ease-in-out;

        h6 {
            color: #9F0000;
            font-weight: 500;
            transition: 100ms;
            transition-timing-function: ease-in-out;
        }
    }
`;

const CardTitle = styled.h6`
    font-family: 'Montserrat';
    font-size: 15px;
    text-align: center;
    text-transform: capitalize;
    color: #0D0909;
    font-weight: 300;
    padding-bottom: 0.5rem;
`;

const CardImage = styled.img`
    width: 130px;
    padding: 0.5rem;
`;

const CategoryCardComponent = ({ text, image }) => {
  const formattedText = text.toLowerCase();

  return <Link to={`/products/${formattedText}`}>
            <Card>
                <CardImage src={image}></CardImage>
                <CardTitle >{text}</CardTitle>
            </Card>
       </Link>;
}

export default CategoryCardComponent;