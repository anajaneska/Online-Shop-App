import styled from 'styled-components';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";
import { useState } from "react";
import ProductCardComponent from "../../components/ProductCardComponent";
import { useSelector } from "react-redux";
import SubheadingComponent1 from "../../components/SubheadingComponent1";

const ProductsWrapper = styled.div`
  padding: 1rem 0;
`
const ProductFilterWrapper = styled.div`
`
const SearchFilterContainer = styled.input`
    border-radius: 24px;
    padding: 8px 25px;

    @media (max-width: 1400px) {
        padding: 8px 24px;
    }
    @media (max-width: 1200px) {
        padding: 7px 23px;
    }
    @media (max-width: 992px) {
        padding: 7px 23px;
    }
    @media (max-width: 768px) {
        padding: 5px 13px;
    }
`
const CategoryFilterContainer = styled.select`
    padding: 8px 15px;

    @media (max-width: 1400px) {
        font-size: 0.8rem;
        padding: 8px 24px;
    }
    @media (max-width: 1200px) {
        padding: 7px 23px;
    }
    @media (max-width: 992px) {
        padding: 7px 23px;
    }
    @media (max-width: 768px) {
        padding: 3px 10px;
    }
`

const Products = () => {
    const {items}= useSelector(state=>state.products)
    const navigate = useNavigate();
    const [search, setSearch] =useState('');
    const [selectedCategory, setSelectedCategory]=useState('All')

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
    <div className="container px-5">
            {/* Home
            <button type="submit" onClick={handleLogout}>Logout</button> */}
        <div className="container my-5">
            <SubheadingComponent1 text="All Products" className="my-3"></SubheadingComponent1>
            <ProductFilterWrapper className='d-flex justify-content-end'>
                <form>
                    <SearchFilterContainer placeholder='Search products' 
                    onChange={(e) => setSearch(e.target.value)}>
                    </SearchFilterContainer>
                </form>
                <CategoryFilterContainer name="filter" onChange={handleAdd}>
                    <option value="All">All</option>
                    <option value="Home">Home</option>
                    <option value="Accessory">Accessory</option>
                    <option value="Clothing">Clothing</option>
                </CategoryFilterContainer>
            </ProductFilterWrapper>
            <ProductsWrapper className='row'>
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
                    <ProductCardComponent key={product.id} data={product}/>
                ))}
            </ProductsWrapper>
        </div>
    </div>
    );
};

export default Products;