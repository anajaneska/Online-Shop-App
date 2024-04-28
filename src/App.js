
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/login/register';
import NotFound from './pages/not-found';
import Login from './pages/login/login';
import Home from './pages/products/home';
import ProductDetails from './pages/products/product-details';
import Header from './components/header';
import Footer from './components/footer';
import ShoppingCart from './pages/cart/shopping-cart';
import { ShopContext, ShopContextProvider } from "./context/shop-context";
import useGetProducts from "./getProducts";
import { useContext, useState } from "react";

function App() {
  const {productList} = useGetProducts()
  

  return (
    <ShopContextProvider products={productList}>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home products={productList}/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/product/:id' element={<ProductDetails products={productList}/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </ShopContextProvider>
  );
}

export default App;
