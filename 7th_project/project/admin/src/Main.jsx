import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';

import Index from './Pages/Index';
import Add_Category from './Pages/Add_Category';
import Manage_Category from './Pages/Manage_Category';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Manage_contact from './Pages/Manage_contact';
import Manage_customer from './Pages/Manage_customer';
import Add_Product from './Pages/Add_Product';
import Manage_Product from './Pages/Manage_Product';
import Edit_Product from './Pages/Edit_Product';

function Main() {
  return (
    <div  id="wrapper">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/add_category" element={<><Header/><Add_Category/><Footer/></>} />
        <Route path="/manage_category" element={<><Header/><Manage_Category/><Footer/></>} />
        <Route path="/add_product" element={<><Header/><Add_Product/><Footer/></>} />
        <Route path="/manage_product" element={<><Header/><Manage_Product/><Footer/></>} />
        <Route path="/manage_contact" element={<><Header/> <Manage_contact/> <Footer/></>} />
        <Route path="/manage_customer" element={<><Header/> <Manage_customer/> <Footer/></>} />
        <Route path="/dashboard" element={<><Header/><Dashboard/><Footer/></>} />
        <Route path="/profile" element={<><Header/><Profile/><Footer/></>} />
        <Route path="/edit_product/:id" element={<><Header/><Edit_Product/><Footer/></>} />
      </Routes>
    </div>
  )
}

export default Main