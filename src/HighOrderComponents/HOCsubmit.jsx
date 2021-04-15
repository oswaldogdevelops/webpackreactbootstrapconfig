import React from 'react'

function submit(ComponenteOriginal){
 class newSubmitComponent extends React.Component{
     constructor(props){
         super(props)

         this.getvalue = this.getvalue.bind(this);
         this.input = React.createRef();
     
         this.state= {
           valor: ''
         }
 
     }

    
getvalue(event){
  this.setState({valor: this.input.current.value})
 event.preventDefault()
}




 render(){
return <ComponenteOriginal getvalue={this.getvalue} estado={this.input} hd={this.state.valor}  />
}


 } 
 return newSubmitComponent
}



export default submit