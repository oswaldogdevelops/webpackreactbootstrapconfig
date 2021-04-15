import React from 'react'
import colorchanger from '../HighOrderComponents/HOC1'


const Hoctest = ({classbtn, colorchange, colorstate2}) => {

    
  
return( 
<div>
         <h1 className={classbtn} onMouseOver={colorchange} onMouseLeave={colorstate2}> prueba </h1>     
   </div>
)

}



export default colorchanger(Hoctest)