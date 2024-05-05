import {useState} from "react";

import Product from "./product";

const AccessoriesProducts = ({products}) => {
    const [search, setSearch] =useState('');

    return(
        <div>
            Accessories
        <form>
            <input placeholder='Search products' 
            onChange={(e) => setSearch(e.target.value)}>
          </input>
        </form>

            {products
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
                <Product key={product.id} data={product}/>
            ))}
            
        
        </div>
    );
}
 
export default AccessoriesProducts;