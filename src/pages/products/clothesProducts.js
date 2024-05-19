import {useState} from "react";
import { useSelector } from "react-redux";

import ProductCardComponent from "../../components/ProductCardComponent";
const ClothesProducts = () => {
    const [search, setSearch] =useState('');
    const {items}= useSelector(state=>state.products)

    return(
        <div>
            Clothes
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
                if(item.category==='Clothing')
                return true
            })
            .map((product) => (
                <ProductCardComponent key={product.id} data={product}/>
            ))}
            
        
        </div>
    );
}
 
export default ClothesProducts;