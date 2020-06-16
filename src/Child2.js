import React, { useReducer } from 'react';
import numberReducer from './numberReducer';



function Child2() {
    //let number = useReducer(numberReducer);
    let [state, dispatch] = useReducer(numberReducer, 56);
  return (
    <div>
      Child2 {state} <br/>
      <button onClick = {()=>{dispatch ({type:'INCREAMENT', val:10})}}>INCREAMENT</button>
      <button onClick = {()=>{dispatch ({type:'DECREAMENT', val: -20})}}>DECREAMENT</button>
      
    </div>
  );
}

export default Child2;