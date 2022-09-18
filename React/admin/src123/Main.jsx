import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from "./Pages/Dashboard";
import Index from "./Pages/Index";

import Add_categories from "./Pages/Add_categories";
import Add_customer_db from "./Pages/Add_customer_db";
import Manage_customer_db from "./Pages/Manage_customer_db";

function Main() {
  return (
    <Routes>
         <Route Index path='/' element={<Index/>}></Route>
         <Route path='/dashboard' element={<Dashboard/>}></Route>
         <Route path='/add_category' element={<Add_categories/>}></Route>     
         <Route path='/add_customer_db' element={<Add_customer_db/>}></Route>     
         <Route path='/manage_customer_db' element={<Manage_customer_db/>}></Route>      
    </Routes>
  )
}

export default Main