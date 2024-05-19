import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Product from "../../components/ProductCardComponent";

const AllProductsWrapper = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
`
const ProductsWrapper = styled.div`
    padding: 2rem;
`

const Products = ({products}) => {
    const navigate = useNavigate();
    const [search, setSearch] =useState('');
    const [selectedCategory, setSelectedCategory]=useState('')
    
    function handleAdd(e){
        setSelectedCategory(e.target.value)
     }
    
    return (
        <AllProductsWrapper className="container">
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
            })}
        
        <ProductsWrapper className="row">
            {products.map((product) => (
                <Product key={product.id} data={product}/>
            ))}
        </ProductsWrapper>
        
        </AllProductsWrapper>
    );
};

export default Products;
