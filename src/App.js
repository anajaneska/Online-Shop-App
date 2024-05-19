
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/login/register';
import NotFound from './pages/not-found';
import Login from './pages/login/login';
import Home from './pages/products/home';
import ProductDetails from './pages/products/productDetail';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import ShoppingCart from './pages/cart/shopping-cart';
import { ShopContext, ShopContextProvider } from "./context/shop-context";
import useGetProducts from "./getProducts";
import { useContext, useState } from "react";
import Products from "./pages/products/products";

function App() {
  const {productList} = useGetProducts()
  

  return (
    <ShopContextProvider>
    
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home products={productList}/>}></Route>
        <Route path='/product' element={<Products products={productList}/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
