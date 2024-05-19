import {useState} from "react";
import { useSelector } from "react-redux";
import Products from "./products";

const AccessoriesProducts = () => {
    const [search, setSearch] =useState('');
    const {items}= useSelector(state=>state.products)

    return(
        <div>
            Accessories
        <form>
            <input placeholder='Search products' 
            onChange={(e) => setSearch(e.target.value)}>
          </input>
        </form>

            {items
            .filter((item) => {
                return search.toLowerCase() === ''
                ? item
                : item.name.toLowerCase().includes(search)
            })
            .filter((item)=>{
                if(item.category==='Accessory')
                return true
            })
            .map((product) => (
                <Products key={product.id} data={product}/>
            ))}
            
        
        </div>
    );
}
 
export default AccessoriesProducts;