import { useParams } from "react-router-dom";
import useGetProducts from "../getProducts";
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cartSlice"

const ProductDetailsComponent = ({}) => {
    const {id} = useParams()
    //const {productList}=useGetProducts()
    const {items}= useSelector(state=>state.products)
    const dispatch=useDispatch();

    const product = items.find(item => item.id === id);
    
    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }

    if (!product) {
        return <div>Product not found</div>;
      }

    return (
        <div>
        <img src="" alt="image"/>
           <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>{product.price} ден.</h3>
            <div>Choose color</div>
            <div>Choose quantity</div>
            <button className="btn btn-primary" onClick={()=>handleAddToCart(product)}>
                    Add to cart 
                </button>
        </div>
    )

};

export default ProductDetailsComponent;