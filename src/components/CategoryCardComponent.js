import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.button`
    border-radius: 15px;
    margin: 1rem;
    display: grid;
    background: transparent;
    border: none;
    &:hover {
        //background: #F6F6F6;
        transition: 100ms;
        transition-timing-function: ease-in-out;

        h6 {
            color: #713D30;
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
    font-weight: 400;
    padding-bottom: 0.5rem;
    text-decoration: underline #7A1D15 1px;
    text-underline-offset: 4px;
`;

const CardImage = styled.div`
    width: 130px;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
`;

const CategoryCardComponent = ({ text, image }) => {
  const formattedText = text.toLowerCase();

  return <Link to={`/products/${formattedText}`} className='text-decoration-none'>
            <Card>
                <CardImage>{image}</CardImage>
                <CardTitle >{text}</CardTitle>
            </Card>
       </Link>;
}

export default CategoryCardComponent;