import React, { useState } from 'react';
import useSound from 'use-sound';
import mySound from './sounds/sound.mp3';
import confetti from 'canvas-confetti';
import './App.css';
import IntervalComponent from './components/IntervalComponent';
import RandomizeButton from './components/RandomizeButton';

function App() {
	const [randomNumber, setRandomNumber] = useState(0);
	const [interval, setInterval] = useState({ min: 0, max: 16 });
	const [playSound] = useSound(mySound, { volume: 0.15 });

	const handleRandomize = () => {
		setRandomNumber(
			Math.floor(Math.random() * (interval.max - interval.min + 1)) +
				interval.min
		);
		playSound();
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
			<RandomizeButton onClick={handleRandomize} />
			<IntervalComponent
				handleSetInterval={handleSetInterval}
				min={interval.min}
				max={interval.max}
			/>
		</div>
	);
}

export default App;
