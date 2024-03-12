import React, { createContext, useState } from "react"
import useGetProducts from "../getProducts";

export const ShopContext = createContext(null);

const GetDefaultCart = () => {
    const {productList}=useGetProducts()
    let cart = {}
    for(let item in productList){
        const itemId=productList[item].id
        cart[itemId]=0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(GetDefaultCart());

    const addToCart = (itemId) =>{
        setCartItems((prev)=>{
            if(!prev[itemId]){
                return {...prev, [itemId]:1}
            }

            return {...prev,[itemId]:prev[itemId]+1}
        })
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
    const contextValue={cartItems,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}