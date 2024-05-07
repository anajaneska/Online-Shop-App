import ProductInCart from "./productInCart";
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import { clearCart, getTotals } from '../../features/cartSlice';

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
        <div className="cart">
            <h2>Your Cart Items: </h2>
            {cart.cartItems.length === 0 ? (
                <div>
                    <p>Your cart is empty</p>
                </div>
            ) : (
                <div>
                    <div className="titles">
                        <h3 className="product-name">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div>
                        {cart.cartItems?.map(cartItem => (
                            <ProductInCart key={cartItem.id} data={cartItem}/>
                        ))}
                    </div>
                </div>
            )}

            <div>
                <button onClick={()=>handleClear()}>Clear cart</button>
                <div>
                    Subtotal: {cart.cartTotalAmount}
                </div>
                <div>
                    <a href="/">Back to shopping</a>
                </div>
            </div>

        </div>
    )
}

export default ShoppingCart;