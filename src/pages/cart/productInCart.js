import { addToCart, removeFromCart, decreaseCart, getTotals } from '../../features/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProductInCart = (props) => {
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
        <div>
            <div>Name: {name}</div>
            <div>Price: {price}</div>
            <button onClick={()=>handleRemoveFromCart(cartItem)}>Remove</button>
            <div>Quantity: 
                <button onClick={() => handleDecrease(cartItem)}>-</button>
                {cartQuantity}
                <button onClick={() => handleIncrease(cartItem)}>+</button>
            </div>
            <div>Total price: {cartQuantity*price}</div>
        </div>
     );
}
 
export default ProductInCart;