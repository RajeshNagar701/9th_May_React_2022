import React,{useState} from 'react'
import A from './A'

function UseContextmain() {
  const [name,Setname]=useState("Rajesh")

  return (
    <div>
        <h1>My name is : {name} </h1>
        <A name={name}/>
    </div>
  )
}

export default UseContextmain