import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <h1>Hello World! 👋</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
