import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";
import { useState} from "react";
import Product from "./product";
import { useSelector } from "react-redux";

const Home = () => {
    const {items}= useSelector(state=>state.products)
    //console.log(items);
    const navigate = useNavigate();
    const [search, setSearch] =useState('');
    const [selectedCategory, setSelectedCategory]=useState('All')
   // const {addToCart,cartItems} =useContext(ShopContext)

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


            {items
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