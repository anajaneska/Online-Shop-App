
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
import HomeProducts from "./pages/products/homeProducts";
import ClothesProducts from "./pages/products/clothesProducts";
import AccessoriesProducts from "./pages/products/accessoriesProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"


function App() {
  const {productList} = useGetProducts()
  
  return (
    <ShopContextProvider products={productList}>
    <Header></Header>
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/product/:id' element={<ProductDetails products={productList}/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/products/home" element={<HomeProducts products={productList}/>}></Route>
        <Route path="/products/clothes" element={<ClothesProducts products={productList}/>}></Route>
        <Route path="/products/accessories" element={<AccessoriesProducts products={productList}/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </ShopContextProvider>
  );
}

export default App;
