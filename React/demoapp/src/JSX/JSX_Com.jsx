import React from 'react'

function JSX_Com() {

  var name="Raj nagar";  
  var age=<i>31</i>
  const list=(<ol>
                <li>Raj</li>
                <li>Nirav</li>
                <li>Akash</li>
            </ol>)
  var input=<input type="text" />          
  return (
    <div>
        <h1>Hi i am jsx html</h1>
        <h1>{5+5}</h1>
        <h1>Hi my name is {name}</h1>
        <h1>My age is {age}</h1>
        Name : {input}
        {list}
    </div>
  )
}

export default JSX_Com