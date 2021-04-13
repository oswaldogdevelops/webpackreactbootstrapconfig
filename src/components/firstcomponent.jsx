import React from 'react';
import runescapist from '../images/runescapist.png';
import example from '../images/example.png'

const Comp1 = ({title}) =>  <div className=" ">
    <h1 className="card-title btn  btn-secondary dsmoke" onClick={() => { console.log('this shits works!') }}>
      {title}  <i className="bi bi-wifi"></i>
    </h1>
    <img src={runescapist} alt=""/>
    <img src={example} alt=""/>
    </div>
    


export default Comp1;