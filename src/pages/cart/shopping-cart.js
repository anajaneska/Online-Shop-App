const ShoppingCart = () => {
    const productsInCart=[]
   


    return ( 
        <div className="cart">
            
            <h2>Your Cart Items: </h2>


            {!productsInCart.length && <div>Your Shopping cart is empty</div>}
        </div>
     );
}
 
export default ShoppingCart;