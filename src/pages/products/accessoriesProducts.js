import {useState} from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import ProductCardComponent from "../../components/ProductCardComponent";
import SubheadingComponent1 from "../../components/SubheadingComponent1";

const ProductsWrapper = styled.div`
  padding: 1rem 0;
`

const SearchFilterContainer = styled.input`
    border-radius: 24px;
    border: solid 1px #adb5bd;
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


const AccessoriesProducts = () => {
    const [search, setSearch] =useState('');
    const {items}= useSelector(state=>state.products)

    return(
    <div className="container px-5">
        <div className="container my-5">
                <SubheadingComponent1 text="Accessories" className="my-3"></SubheadingComponent1>
            <form className='d-flex justify-content-end'>
                <SearchFilterContainer placeholder='Search products' 
                onChange={(e) => setSearch(e.target.value)}>
                </SearchFilterContainer>
            </form>
            <ProductsWrapper className='row'>
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
                    <ProductCardComponent key={product.id} data={product}/>
                ))}
            </ProductsWrapper>
        </div>
    </div>
    );
}
 
export default AccessoriesProducts;