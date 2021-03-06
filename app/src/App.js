import React from 'react';
import logo from './logo.svg';
import './App.css';
import QRCode from 'qrcode.react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <QRCode
          value="https://reactjs.org"
          size={200}
          bgColor="#282c34"
          fgColor="#0DDEE5"
          level="L"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
