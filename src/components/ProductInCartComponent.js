import { addToCart, removeFromCart, decreaseCart, getTotals } from '../features/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from 'styled-components';


const ProductInCartWrapper = styled.div`
    border: solid 2px #F2F2F2;
    border-radius: 10px;
    padding: 10px 15px;
`
const ProductInCartImage = styled.img`
`
const ProductInCartContainer = styled.div`
    padding: 1rem;
`
const ProductInCartDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ProductInCartDetails = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;

    @media (max-width: 768px) {
    font-size: 1rem;
    }
`
const ProductInCartPrice = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    margin: 0 25px;

    @media (max-width: 768px) {
    font-size: 1.1rem;
    }
`
const ProductInCartName = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
`
const ProductInCartQuantity = styled.button`
    background: #BB0000;
    border-radius: 50px;
    padding: 0 13px;
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    border: none;
`
const ProductButtonContainer = styled.button`
    background: #BB0000;
    border-radius: 24px;
    padding: 5px 25px;
    font-family: 'Montserrat';
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    border: none;
`
const ProductInCartComponent = (props) => {
    const cart = useSelector(state => state.cart)
    const {id,name,price,description,image,cartQuantity}=props.data
    const dispatch = useDispatch()
    const {items}= useSelector(state=>state.products)
    const cartItem = items.find(item => item.id === id);
    
    useEffect(()=>{
        dispatch(getTotals())
    },[cart, dispatch])
    
    const handleRemoveFromCart = (cartItem) =>{
        dispatch(removeFromCart(cartItem))
    } 
    const handleDecrease = (cartItem) =>{
        dispatch(decreaseCart(cartItem))
    }
    const handleIncrease = (cartItem) => {
        dispatch(addToCart(cartItem))
    }
    return ( 
        <ProductInCartWrapper className='row mt-2 mb-2'>
            <ProductInCartImage src={image} alt="Product Image" className='col-lg-3 p-lg-3'>
            </ProductInCartImage>
            <ProductInCartContainer className='col-lg-4'>
                <ProductInCartName>{name}</ProductInCartName>
                <ProductInCartDetailsContainer>
                    <ProductInCartDetails>Price: </ProductInCartDetails> 
                    <ProductInCartPrice>{price}</ProductInCartPrice>
                </ProductInCartDetailsContainer>
                <ProductInCartDetailsContainer>
                    <ProductInCartDetails>Quantity:</ProductInCartDetails>
                    <div className='d-flex align-items-center'>
                        <ProductInCartQuantity onClick={() => handleDecrease(cartItem)} style={{padding: "0 15px", fontSize: "17px"}}>-</ProductInCartQuantity>
                            <div style={{fontFamily: "Montserrat", fontSize: "1rem", fontWeight: "500", margin: "0 7px"}}>{cartQuantity}</div>
                        <ProductInCartQuantity onClick={() => handleIncrease(cartItem)}>+</ProductInCartQuantity>
                    </div>
                </ProductInCartDetailsContainer>
                 <ProductInCartDetailsContainer>
                    <ProductInCartDetails>Total price: </ProductInCartDetails>
                    <ProductInCartPrice>{cartQuantity*price}</ProductInCartPrice>
                 </ProductInCartDetailsContainer>
                    
                <div className='row mt-lg-5 mt-4 px-lg-2'>
                    <ProductButtonContainer onClick={()=>handleRemoveFromCart(cartItem)}>Remove</ProductButtonContainer>
                </div>
            </ProductInCartContainer>
        </ProductInCartWrapper>
     );
}
 
export default ProductInCartComponent;