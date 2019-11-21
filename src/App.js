import React from 'react';
// eslint-disable-next-line
import Worker from 'workerize-loader!./test.worker'
import './App.css';

const worker = new Worker()

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        worker.postMessage({})
      }}
      >
        Worker
      </button>
    </div>
  );
}

export default App;
