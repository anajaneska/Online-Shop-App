import { useParams } from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import useGetProducts from "../../getProducts";
import { ShopContext, ShopContextProvider } from '../../context/shop-context'

const ProductDetails = ({products}) => {
    const {id} = useParams()
    const {productList}=useGetProducts()
    const product = productList.find(product => product.id === id);
    //const productList = useGetProducts()
    //const [selectedProduct, setSelectedProduct] = useState(null);
    // useEffect(() => {
    //     const product = productList.find(product => product.id === id);
    //     setSelectedProduct(product);
    //   }, [id, productList]);
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
            <div>Add to shopping cart</div>
        </div>
    )

};

export default ProductDetails;