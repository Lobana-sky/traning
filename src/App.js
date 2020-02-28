import React from 'react';
import Pic from './Pic'
import './App.css';
import data from "./data"
function App() {

const ff=(persons)=>{
  return persons.map(p=>{
        return <Pic 
        name={p.name} 
        age={p.age}
        surname={p.sur}/>
      })
    
}

  return (
    <div className="App">
      <header className="App-header">
       {ff(data)}
      </header>
    </div>
  );
}
export default App;
