import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";
import {db} from "../../firebase"
import { useEffect, useState, useContext} from "react";
import {getDocs,collection} from 'firebase/firestore'

import useGetProducts from "../../getProducts";
import Product from "./product";
import { ShopContext } from "../../context/shop-context";



const Home = ({products}) => {
    const navigate = useNavigate();
    //const { products } = useContext(ShopContext);

    const handleLogout = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            navigate("/login");
        }).catch((error) => { });
    }

    //const {productList}=useGetProducts()


    return(
        <div>
            Home
            <button type="submit" onClick={handleLogout}>Logout</button>
        
            {products.map((product) => (
                <Product key={product.id} data={product}/>
            ))}
            
        
        </div>
    );
};

export default Home;