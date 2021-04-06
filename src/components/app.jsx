import React from 'react';
import runescapist from '../images/runescapist.png';
import example from '../images/example.png'

const App = () =>  <div className=" ">
    <h1 className="card-title btn  btn-secondary dsmoke" onClick={() => { console.log('this shits works!') }}>
      Funciona?  <i className="bi bi-wifi"></i>
    </h1>
    <img src={runescapist} alt=""/>
    <img src={example} alt=""/>
    </div>
    


export default App;