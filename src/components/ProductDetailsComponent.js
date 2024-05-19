import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cartSlice"
import PrimaryButtonComponent from "./PrimaryButtonComponent";

const ProductDetailsWrapper = styled.div`
`;
const ProductDetailsImage = styled.img`
`
const ProductDetailsContainer = styled.div`
    padding: 1rem;
`
const ProductHeadingContainer = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    margin-top: 1rem;
`
const ProductDescriptionContainer = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 20px;
`
const ProductPriceContainer = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
const ProductButtonContainer = styled.button`
    background: #BB0000;
    border-radius: 24px;
    padding: 11px 25px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    border: none;
`

const ProductDetailsComponent = ({}) => {
    const {id} = useParams()
    const {items}= useSelector(state=>state.products)
    const dispatch=useDispatch();

    const product = items.find(item => item.id === id);
    
    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }

    if (!product) {
        return <div>Product not found</div>;
      }

    return (
        <div className="container mx-auto px-5-lg px-3 mx-5-lg">
            <ProductDetailsWrapper className="row">
                <ProductDetailsImage src={product.image} alt="image" className="col-lg-6"></ProductDetailsImage>
                <ProductDetailsContainer className="col-lg-6">
                    <ProductHeadingContainer>{product.name}</ProductHeadingContainer>
                        <ProductDescriptionContainer>{product.description}</ProductDescriptionContainer>
                            <div>Choose color</div>
                            <div>Choose quantity</div>
                            <div className="d-flex justify-content-end">
                                <ProductPriceContainer>{product.price} ден.</ProductPriceContainer>
                            </div>
                            <div className="row px-1">
                                <ProductButtonContainer onClick={()=>handleAddToCart(product)}>
                                    Add to cart 
                                </ProductButtonContainer>
                            </div>
                </ProductDetailsContainer>
            </ProductDetailsWrapper>
        </div>
    )

};

export default ProductDetailsComponent;