import React from 'react';
import logo from './logo.svg';
import './App.css';

const sum =(a, b) => a + b
function App() {
  return (
    <div className="App">

        <span className='teste'>Meu primeiro JSX <br /></span>
        Diego Neves <br />
        Soma: {sum(10, 20)}
    </div>
  );
}

export default App;
