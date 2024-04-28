import React, { createContext, useState } from "react";
import useGetProducts from "../getProducts";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const { productList } = useGetProducts();
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return { ...prev, [itemId]: 1 };
      }
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return prev;
      }
      if (prev[itemId] === 1) {
        const { [itemId]: omit, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const contextValue = { productList, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
