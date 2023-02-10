import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
	const [randomNumber, setRandomNumber] = useState(0);
	const [interval, setInterval] = useState({ min: 0, max: 16 });

	const handleRandomize = () => {
		setRandomNumber(
			Math.floor(Math.random() * (interval.max - interval.min + 1)) +
				interval.min
		);
		confetti({
			particleCount: 200,
			spread: 360,
			origin: { y: 0.4 },
		});
	};

	const handleSetInterval = () => {
		setInterval({
			min: Number(document.getElementById('min').value),
			max: Number(document.getElementById('max').value),
		});
	};

	return (
		<div className="App">
			<div className="number">{randomNumber}</div>
			<button onClick={handleRandomize} className="randomize-button">
				Randomize
			</button>
			<div className="interval-container">
				<label htmlFor="min">Min: </label>
				<input
					id="min"
					type="number"
					defaultValue={interval.min}
					className="interval-input"
          onChange={handleSetInterval}
				/>
				<label htmlFor="max">Max: </label>
				<input
					id="max"
					type="number"
					defaultValue={interval.max}
					className="interval-input"
          onChange={handleSetInterval}
				/>
			</div>
		</div>
	);
}

export default App;
