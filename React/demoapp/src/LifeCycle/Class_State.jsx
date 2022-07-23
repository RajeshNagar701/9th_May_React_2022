import React, { Component } from 'react'
import Img from './Img';

export default class Class_State extends Component {

  componentDidMount(){
    console.log('comp created');
  }
  componentDidUpdate(){
    console.log('comp updated');
  }

  
  constructor()
  {
    super();
    this.state={
      name:"Raj nagar",
      age:31,
      number:1,
      isImg:false
    }
  }

  plus=()=>{
    this.setState({number:this.state.number+1})
  }

  minus=()=>{
    this.setState({number:this.state.number-1})
  }
  render() {
    return (
      <div className='container'>
        <button onClick={()=>this.setState({name:"Rajesh nagar",age:32})}>Set State</button>
        <h1>My name is {this.state.name} & my age is {this.state.age}</h1> 
        <hr/>

        <button onClick={this.plus}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={this.minus}>-</button>

        <hr />

        <button onClick={()=>this.setState({isImg:true})}>Show</button>
        <button onClick={()=>this.setState({isImg:false})}>Hide</button>
        <button onClick={()=>this.setState({isImg:!this.state.isImg})}>show/hide</button>
        {
        this.state.isImg?<Img/>:null
        }
      </div>
    )
  }
}
