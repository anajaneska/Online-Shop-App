import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import {db} from "../firebase"
import { useEffect, useState } from "react";
import {getDocs,collection} from 'firebase/firestore'

import useGetProducts from "../getProducts";
import Product from "./product";



const Home = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            navigate("/login");
        }).catch((error) => { });
    }

    const {productList}=useGetProducts()


    return(
        <div>
            Home
            <button type="submit" onClick={handleLogout}>Logout</button>
        
            {productList.map((product) => (
                <Product data={product}/>
            ))}
        
        </div>
    );
};

export default Home;