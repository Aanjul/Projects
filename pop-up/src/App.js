import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Drawer from 'react-drag-drawer'

function getButtontext() {
  return "Click on me";
}

const App = () => {
  const buttonText = { text: 'Click me'};
  const  style = { backgroundColor: 'blue', color: 'white'};
return (
  <div>
    <label className="label" for="name">
  Enter name:
    </label>
    <input id="name" type="text" />
    <button
    //style={style}
    style={{ backgroundColor: 'blue', color: 'white'}}>
    {buttonText.text}
    </button>
  </div>
)
}

export default App;
