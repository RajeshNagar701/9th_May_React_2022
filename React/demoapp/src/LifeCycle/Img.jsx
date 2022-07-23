import React, { Component } from 'react'

export default class Img extends Component {

componentWillUnmount()
{
  console.log('comp Deleted');
} 


  render() {
    return (
      <div>
        <img src='https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg' width="200px"/>
      </div>
    )
  }
}
