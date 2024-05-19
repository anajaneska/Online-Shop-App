import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
//import store from './store';

import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { fetchProducts } from './features/productsSlice';
import cartReducer, {getTotals} from './features/cartSlice';

const store=configureStore({
  reducer:{
    products: productsReducer,
    cart: cartReducer
  }
})

store.dispatch(fetchProducts())
store.dispatch(getTotals())

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
