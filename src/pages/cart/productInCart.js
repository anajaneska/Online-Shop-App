const ProductInCart = (props) => {
    const {id,name,price,description,image,quantity}=props.data
    return ( 
        <div>
            {/* <div>Remove item from shopping cart</div> */}
            <div>{name}</div>
            <div>{price}</div>
            <div>{quantity}</div>
        </div>
     );
}
 
export default ProductInCart;