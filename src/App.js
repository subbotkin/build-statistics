import React, { Component } from 'react';
import logo from './settings.svg';
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
      </div>
    );
  }
}

export default App;
