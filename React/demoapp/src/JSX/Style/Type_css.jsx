import React from 'react'
import './mystyle.css'
import Mystyle from './custom.module.css';
function Type_css() {
  
  var mystyle={color:'red',backgroundColor:'yellow'}  
  return (
    <div>
        <h1 style={{color:'red',backgroundColor:'yellow'}}>Inline style</h1>
        <h1 style={mystyle}>Inline style by var</h1>
        <hr/>
        <h1 class='externalcss'>Hi i am external css</h1>
        <h1 className='externalcss'>Hi i am external css</h1>
        <h2>Hi hello</h2>
        <h3>Hi hello</h3>
        <h1 className={Mystyle.externalcss}>Hi i am custom css</h1>
    </div>
  )
}

export default Type_css