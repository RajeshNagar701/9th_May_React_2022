import React,{useState,useEffect} from 'react'

function Img_Hooks() {
   
useEffect(()=>{
    console.log('DidMount 2');
    return()=>{ console.log('Deleted'); }
    },[])  
  return (
    <div>
        <img src="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg" width="300px" alt="" />
    </div>
  )
}

export default Img_Hooks