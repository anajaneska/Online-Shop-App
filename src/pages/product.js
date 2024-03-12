import { useContext } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ShopContext } from '../context/shop-context'
const Product = (props) => {
    const {id,name,price,description}=props.data
    const {addToCart,cartItems} =useContext(ShopContext)

    const cartItemAmount=cartItems[id]

    return ( 
        <div className="col-md-3 m-4" style={{borderColor: "black",borderWidth:"3px"}}>
        <div className="card">
            <img className="card-img-top" src="..." alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{description}</p>
                <h6>{price}ден</h6>
                <button className="btn btn-primary" onClick={()=>addToCart(id)}>
                    Add to cart {cartItemAmount>0 && <>({cartItemAmount})</>}
                </button>
            </div>
        </div>
    </div>
     );
}
 
export default Product;