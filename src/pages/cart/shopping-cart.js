import useGetProducts from "../../getProducts";
import { ShopContext, ShopContextProvider } from '../../context/shop-context'
import { useContext } from "react";
import ProductInCart from "./productInCart";
const ShoppingCart = () => {
    const {cartItems} = useContext(ShopContext)
    const { products } = useContext(ShopContext)
    console.log(cartItems, "cart in shopping-cart")
    return ( 
        <div className="cart">
            
            <h2>Your Cart Items: </h2>
            <div className="cartItems">
                {Object.entries(cartItems).map(([itemId, quantity]) => {
                    // Find the product corresponding to the itemId
                    const product = products.find(product => product.id === itemId);
                    if (quantity > 0 && product) {
                        return <ProductInCart key={itemId} data={product} quantity={quantity} />;
                    }
                    return null;
                })}
            </div>
        </div>
     );
}
 
export default ShoppingCart;