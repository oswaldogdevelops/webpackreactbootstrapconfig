import React from 'react'
import ComponenteActualizado from './statefull'

const Liandkey = ({count , incrementCount}) => {

    
    return (
        <div>
        <button onClick={incrementCount}>haga click </button>
        <h1 > {count}</h1>
        </div>
      )
}




export default ComponenteActualizado(Liandkey)