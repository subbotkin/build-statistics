import React, { Component } from 'react';
import logo from './settings.svg';
import './App.css';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Counter/>
      </div>
    );
  }
}

export default App;
