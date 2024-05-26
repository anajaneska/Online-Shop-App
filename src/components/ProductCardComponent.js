import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cartSlice"
import styled from 'styled-components';

const ProductHeadingContainer = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 0;
    color: #713D30;
`
const ProductDescriptionContainer = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 14px;
    color: #495057;
`
const ProductPriceContainer = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 1rem;
    color: #572012;
`
const ProductButtonContainer = styled.button`
    background: #713D30;
    border-radius: 24px;
    padding: 8px 17px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    border: none;
    
`
const DetailsButtonContainer = styled.button`
    background: #FFFFFF;
    border-radius: 24px;
    padding: 8px 17px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    text-transform: capitalize;
    color: #713D30;
    border: solid 2px #713D30;
`
const ProductImageContainer = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const ProductCardComponent = (props) => {
    const {id,name,price,description,image,category}=props.data
    const {items}= useSelector(state=>state.products)
    const dispatch=useDispatch();

    const product = items.find(item => item.id === id);
    
    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }

    return ( 
        <div className="col-xl-3 col-lg-4 col-md-6 mt-2 mb-2" style={{borderColor: "black", borderWidth:"3px"}}>
        <div className="card">
             <ProductImageContainer src={image} alt="Card image"/> 
            <div className="card-body">
                <ProductHeadingContainer>{name}</ProductHeadingContainer>
                {/* <p className="card-text">{description}</p> */}
                <ProductDescriptionContainer>{category}</ProductDescriptionContainer>
                <ProductPriceContainer className="text-end">{price} ден</ProductPriceContainer>
                <div className="d-flex justify-content-evenly">
                    <ProductButtonContainer onClick={()=>handleAddToCart(product)}>
                    Add to cart 
                </ProductButtonContainer>
                <Link to={`/product/${id}`}>
                    <DetailsButtonContainer>See details</DetailsButtonContainer>
                </Link>
                </div>
                
            </div>
        </div>
    </div>
     );
}
 
export default ProductCardComponent;