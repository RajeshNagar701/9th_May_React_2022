import React,{useContext} from 'react'
import {NameContext} from './UseContextmain'

function C() {
  const {name,Setname,age,Setage} = useContext(NameContext);
  return (
    <div>
      <button onClick={()=>{
        Setname("AkASH nAGAR");
        Setage("35");
        }}>Changes</button>
        <h1>My name is {name} & my age ins {age} from C</h1>
    </div>
  )
}

export default C