import React from "react";
import Sidemenu from "./Sidemenu";
import Main from "./Main";

import {useState,useEffect} from 'react'
import Footer from "./Footer";
import Logout from "./Logout";
import { Routes, Route, useNavigate } from "react-router";

import Login from "./Login";
import AddCategories from "./AddCategories";

function Master() {	
  
 const navigate=useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('sessionemail'))
    {

    }
    else
    {
      navigate('/');
    }
  },[])
  
	
  return (
    <div id="wrapper">
      <Sidemenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Main />
        </div>
        <Footer />
      </div>
      <Logout />
    </div>
  );
}

export default Master;
