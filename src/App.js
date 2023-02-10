import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 17);
    setNumber(randomNumber);
    confetti({
      particleCount: 200,
      spread: 360,
      origin: { y: 0.45 },
    });
  };

  return (
    <div className="App">
      <h1 className="number" >{number}</h1>
      <button className="button" onClick={handleClick}>Randomize</button>
    </div>
  );
}

export default App;
