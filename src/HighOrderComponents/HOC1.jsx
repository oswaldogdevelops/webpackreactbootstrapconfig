import React from 'react'

function colorchanger(ComponenteOriginal){
 class color extends React.Component{
      constructor(props){
       super(props)

  this.state={
     color: 'btn btn-success'
  }

 }

 colorstatein = () =>{
  this.setState({
      color: 'btn btn-danger'
  })
 }

 colorstateout = () =>{
    this.setState({
        color: 'btn btn-success'
    })
   }


 render(){
    return <ComponenteOriginal classbtn={this.state.color} colorchange={this.colorstatein} colorstate2={this.colorstateout} />
}

 
 }
   return color
}



export default colorchanger