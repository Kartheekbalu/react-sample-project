import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World! 👋</h1>
        <p>Welcome to your React Sample Project</p>
        <p>
          This is a simple React application demonstrating the basics.
        </p>
        <button className="App-button" onClick={() => alert('Button clicked!')}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
