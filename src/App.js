
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/login/register';
import NotFound from './pages/not-found';
import Login from './pages/login/login';
import Products from "./pages/products/products";
import ProductDetails from './pages/products/productDetail';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import ShoppingCart from './pages/cart/shopping-cart';
import { ShopContext, ShopContextProvider } from "./context/shop-context";
import useGetProducts from "./getProducts";
import { useContext, useState } from "react";
import HomeProducts from "./pages/products/homeProducts";
import ClothesProducts from "./pages/products/clothesProducts";
import AccessoriesProducts from "./pages/products/accessoriesProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

function App() {
  const {productList} = useGetProducts()
  
  return (
    <ShopContextProvider>
    
    <BrowserRouter>
    <Header></Header>
    <ToastContainer/>
      <Routes>
        
        <Route path='/products' element={<Products/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/products/home" element={<HomeProducts />}></Route>
        <Route path="/products/clothes" element={<ClothesProducts products={productList}/>}></Route>
        <Route path="/products/accessories" element={<AccessoriesProducts products={productList}/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
