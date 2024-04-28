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
    const [search, setSearch] =useState('');
    const [selectedCategory, setSelectedCategory]=useState('')
    

    const handleLogout = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            navigate("/login");
        }).catch((error) => { });
    }

    function handleAdd(e){
        setSelectedCategory(e.target.value)
     }

    return(
        <div>
            Home
            <button type="submit" onClick={handleLogout}>Logout</button>
        <form>
            <input placeholder='Search products' 
            onChange={(e) => setSearch(e.target.value)}>
          </input>
        </form>
        <select name="filter" onChange={handleAdd}>
          <option value="All">All</option>
          <option value="Home">Home</option>
          <option value="Accessory">Accessory</option>
          <option value="Clothing">Clothing</option>
        </select>


            {products
            .filter((item) => {
                return search.toLowerCase() === ''
                ? item
                : item.name.toLowerCase().includes(search)
            })
            .filter((item)=>{
                if(selectedCategory==='All')
                return true
                else
                return item.category===selectedCategory
            })
            .map((product) => (
                <Product key={product.id} data={product}/>
            ))}
            
        
        </div>
    );
};

export default Home;