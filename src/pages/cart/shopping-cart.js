import ProductInCartComponent from "../../components/ProductInCartComponent";
import styled from 'styled-components';
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import { clearCart, getTotals } from '../../features/cartSlice';
import SubheadingComponent3 from "../../components/SubheadingComponent3";

const EmptyCartContainer = styled.div`
    text-transform: capitalize;
    font-family: 'Montserrat';
`
const CartButtonContainer = styled.button`
    border: solid 2px #BB0000;
    border-radius: 24px;
    padding: 5px 35px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    text-transform: capitalize;
    color: #BB0000;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
        padding: 5px 25px;
    }
`
const CartDetailsWrapper = styled.div`
    margin: 2rem 0.3rem;
`
const CartTotalContainer = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 1400px) {
        font-size: 23px;
    }
    @media (max-width: 1200px) {
        font-size: 22px;
    }
    @media (max-width: 992px) {
        font-size: 20px;
    }
    @media (max-width: 768px) {
        font-size: 18px;
    }
`
const BackToShoppingLink = styled.a`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    text-transform: capitalize;
    text-decoration: underline #687778 solid 1px;
    color: #687778;
`

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTotals())
    },[cart, dispatch])
    const handleClear = () =>{
        dispatch(clearCart())
    }
    return (
        <div className="container px-5">
            <div className="container my-5">
                <SubheadingComponent3 text="Your Cart Items:" className="my-3"></SubheadingComponent3>
           
            {cart.cartItems.length === 0 ? (
                <EmptyCartContainer>
                    <p>Your cart is empty</p>
                </EmptyCartContainer>
            ) : (
                <CartDetailsWrapper>
                    <div>
                        {cart.cartItems?.map(cartItem => (
                            <ProductInCartComponent key={cartItem.id} data={cartItem}/>
                        ))}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <CartTotalContainer>
                            Subtotal: {cart.cartTotalAmount}
                        </CartTotalContainer>
                        <CartButtonContainer onClick={()=>handleClear()}>
                            Clear Cart
                        </CartButtonContainer>
                    </div>
                </CartDetailsWrapper>
            )}
                <BackToShoppingLink href="/products">Back to shopping</BackToShoppingLink>
            </div>
        </div>
    )
}

export default ShoppingCart;