
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/register';
import NotFound from './pages/not-found';
import Login from './pages/login';
import Home from './pages/home';
import ProductDetails from './pages/product-details';
import Header from './components/header';
import Footer from './components/footer';
import ShoppingCart from './pages/cart/shopping-cart';
import { ShopContext, ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <>
    <ShopContextProvider>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </ShopContextProvider>
    </>
    
  );
}

export default App;
