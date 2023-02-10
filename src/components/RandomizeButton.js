import React from 'react';
import '../App.css';
import '../styles/RandomizeButton.css';

function RandomizeButton({ onClick }) {
	return (
		<button onClick={onClick} className="randomize-button">
			Randomize
		</button>
	);
}

export default RandomizeButton;
