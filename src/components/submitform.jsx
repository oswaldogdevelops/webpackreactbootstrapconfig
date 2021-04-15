import React from 'react'
import submit from '../HighOrderComponents/HOCsubmit'


const Form = ({getvalue, estado, hd}) =>{

 
 
 return(
   <div>
       <h2>{hd}</h2>
        <form onSubmit={getvalue}>
            <input type="text" ref={estado} />
            <input type="submit" />
        </form>
   </div>
 
    )

}



export default submit(Form)