import React from 'react'

function funcionconsumirapi(endpoint,ComponenteOriginal){
 class reqapi extends React.Component{
  constructor(props){
    super(props)
   
    this.state = {
        data: []
    }
  }
  
 
  componentDidMount() {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      })
      .catch(err => console.log(err.message))
  }

render(){
return <ComponenteOriginal data={this.state.data} {...this.props} />
 }


 }
 return reqapi
}

export default funcionconsumirapi