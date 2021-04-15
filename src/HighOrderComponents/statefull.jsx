import React from 'react';

function ComponenteActualizado(ComponenteOriginal){
  class ComponenteNuevo extends React.Component{
   constructor(props){
     super(props)

   this.state = {
     count: 0
   }
  }
  
  
  incrementCount = () => {
    this.setState(state =>{
      return {count: state.count + 1 }
    })
  }
  
  


     render(){
       return < ComponenteOriginal count={this.state.count} incrementCount={this.incrementCount} />
     }
  }
  return ComponenteNuevo
}

export default ComponenteActualizado