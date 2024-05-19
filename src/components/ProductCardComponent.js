import { useContext } from "react"
import { ShopContext } from '../context/shop-context'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cartSlice"

const ProductCardComponent = (props) => {
    const {id,name,price,description,image,category}=props.data
    const {items}= useSelector(state=>state.products)
    const dispatch=useDispatch();

    const product = items.find(item => item.id === id);
    
    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }

    return ( 
        <div className="col-md-3" style={{borderColor: "black",borderWidth:"3px"}}>
        <div className="card">
             <img className="card-img-top" src={image} alt="Card image"/> 
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{description}</p>
                <p>{category}</p>
                <h6>{price}ден</h6>
                <button className="btn btn-primary" onClick={()=>handleAddToCart(product)}>
                    Add to cart 
                </button>
                <Link to={`/product/${id}`} className={"btn btn-info ml-2"}>
                    See details
                </Link>
            </div>
        </div>
    </div>
     );
}
 
export default ProductCardComponent;