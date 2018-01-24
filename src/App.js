import React, { Component } from 'react';
import logo from './settings.svg';
import compiling from './compiling.png';
import './App.css';
import BuildTimeCounter from './components/counter/BuildTimeCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BuildTimeCounter/>
        <img src={compiling} className="App-compiling" alt="compiling" />
      </div>
    );
  }
}

export default App;
