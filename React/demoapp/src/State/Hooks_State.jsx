import React,{useState} from 'react'
import Img from './Img';



function Hooks_State() {

const [name,setName]=useState("Rajesh");
const [age,setAge]=useState(31);
const [number,setNumber]=useState(1);
const [isImg,setisImg]=useState(false);
  

return (
    <div className='container'>
        <button onClick={()=> {
            setName("Raj");
            setAge("30");
        }}>Set State</button>
        <h1>My name is {name} & my age is {age}</h1> 
        <hr/>

        <button onClick={()=>setNumber(number+1)}>+</button>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number-1)}>-</button>

        <hr />

        <button onClick={()=>setisImg(true)}>Show</button>
        <button onClick={()=>setisImg(false)}>Hide</button>
        <button onClick={()=>setisImg(!isImg)}>show/hide</button>
        {
            isImg?<Img/>:null
        }
    </div>
  )
}

export default Hooks_State