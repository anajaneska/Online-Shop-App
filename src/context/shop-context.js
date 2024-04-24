import React, { createContext, useState } from "react"
import useGetProducts from "../getProducts";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
    let cart = {};
    products.forEach(item => {
        const itemId = item.id;
        cart[itemId]=0;
    });
    return cart;
}

export const ShopContextProvider = ({children}) => {
    const products = useGetProducts().productList;
    const [cartItems,setCartItems] = useState(getDefaultCart(products));
    console.log(cartItems)
    const addToCart = (itemId) =>{
        setCartItems((prev)=>{
            if(!prev[itemId]){
                return {...prev, [itemId]:1}
            }

            return {...prev,[itemId]:prev[itemId]+1}
        })
        console.log(cartItems)
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>{
            if(!prev[itemId]){
                return prev;
            }
            if(prev[itemId]===1){
                const {[itemId]:omit,...rest} =prev;
                return rest
            }
            return {...prev, [itemId]:prev[itemId]-1}
        })
    }
    const contextValue={cartItems,addToCart,removeFromCart,products}

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}