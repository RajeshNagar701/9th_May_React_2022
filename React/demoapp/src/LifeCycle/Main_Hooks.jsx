import React,{useState,useEffect} from 'react'
import Img_Hooks from './Img_Hooks'

function Main_Hooks() {

const [isImage,setimage] = useState(false);
const [number1,setnumber1]=useState(0);
const [number2,setnumber2]=useState(1);

useEffect(()=>{
    console.log('Main Mounted/updated');
    },[number1,isImage]) ;    
    
  return (
    <div className='container mt-5'>
        <button onClick={()=>setimage(true)}>Show</button>
        <button onClick={()=>setimage(false)}>hide</button>
        {isImage ? <Img_Hooks/> : null}

        <hr />
        <button onClick={()=>setnumber1(number1+1)}>Number1 +</button>
        <h1>{number1}</h1>
        <button onClick={()=>setnumber2(number2+1)}>Number2 +</button>
        <h1>{number2}</h1>
    </div>
  )
}

export default Main_Hooks