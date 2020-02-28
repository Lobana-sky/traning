import React from 'react';
import Pic from './Pic'
import './App.css';
import data from "./data"
function App() {


  return (
    <div className="App">
      <header className="App-header">
       <Pic data={data}/>
      </header>
    </div>
  );
}

export default App;
