import React,{useState,createContext } from 'react'
import A from './A'

export const NameContext=createContext();

function UseContextmain() {
  const [name,Setname]=useState("Rajesh")
  const [age,Setage]=useState("31")

  return (
    <NameContext.Provider value={{name,Setname,age,Setage}} >
        <h1>My name is : {name} </h1>
        <A/>
    </NameContext.Provider>
  )
}

export default UseContextmain