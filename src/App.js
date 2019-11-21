import React from 'react';
// eslint-disable-next-line
import Worker from 'workerize-loader!./test.worker'
import logo from './logo.svg';
import './App.css';

const worker = new Worker()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {
          worker.postMessage({})
        }}
        >
          Worker
        </button>
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
