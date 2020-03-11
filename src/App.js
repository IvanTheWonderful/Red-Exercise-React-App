import React from 'react';
import Hero from "./Components/Div-Hero/Div-Hero.js"
import Tickets from "./Components/Div-Tickets/Div-Tickets.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Tickets />
      </header>
    </div>
  );
}

export default App;
