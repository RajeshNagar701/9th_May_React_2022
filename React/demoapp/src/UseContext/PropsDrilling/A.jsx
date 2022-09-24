import React from 'react'
import B from './B'

function A({name}) {
  return (
    <div>
        <h1>My name is  from A</h1>
        <B name={name}/>
    </div>
  )
}

export default A