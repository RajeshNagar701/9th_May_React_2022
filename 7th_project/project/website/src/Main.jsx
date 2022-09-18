import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Index from './Pages/Index';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Checkout from './Pages/Checkout';
import Account from './Pages/Account';
import Single_Prod from './Pages/Single_Prod';
import Register from './Pages/Register';

function Main() {
    return (
        <div>

            <Routes>
                    <Route index path="/" element={<><Header/><Index/><Footer/></>}/>
                    <Route path="/index" element={<><Header/><Index/><Footer/></>} />
                    <Route path="/products" element={<><Header/><Products/><Footer/></>} />
                    <Route path="/contact" element={<><Header/><Contact/><Footer/></>} />
                    <Route path="/checkout" element={<><Header/><Checkout/><Footer/></>} />
                    <Route path="/account" element={<><Header/><Account/><Footer/></>} />
                    <Route path="/single" element={<><Header/><Single_Prod/><Footer/></>} />
                    <Route path="/register" element={<><Header/> <Register/>  <Footer/></>} />
                    <Route path="*"  />
            </Routes>

        </div>
    )
}

export default Main