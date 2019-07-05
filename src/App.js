import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <code> Mrunal Meshram </code>
        </h1>
        <code>
          <a
            className="App-link"
            href="https://mrunal.ml"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go To My Profile
        </a>
        </code>
      </header>
    </div>
  );
}

export default App;
