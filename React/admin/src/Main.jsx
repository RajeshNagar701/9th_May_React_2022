import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from "./Pages/Dashboard";
import Index from "./Pages/Index";
import Manage_category from "./Pages/Manage_category";

function Main() {
  return (
    <Routes>
         <Route Index path='/' element={<Index/>}></Route>
         <Route path='/dashboard' element={<Dashboard/>}></Route>    
         <Route path='/manage_category' element={<Manage_category/>}></Route>   
    </Routes>
  )
}

export default Main