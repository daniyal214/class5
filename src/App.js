import React, { useState, useContext, useReducer } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';
import numberReducer from './numberReducer';


  
function App() {
  //let [number, setNumber] = useState (45)
  let value = useState(48);
  let number = useReducer(numberReducer);
  //let val = 77
  return (
    <ValueContext.Provider value = {value}> 
    <div>
      Hello World
      <Parent></Parent>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
