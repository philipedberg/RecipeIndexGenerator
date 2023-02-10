import React from 'react';
import '../styles/IntervalComponent.css';

function IntervalComponent({ handleSetInterval, min, max }) {
	return (
		<div className="interval-container">
			<label htmlFor="min">Min: </label>
			<input
				id="min"
				min="0"
				type="number"
				defaultValue={min}
				onChange={handleSetInterval}
			/>
			<label htmlFor="max">Max: </label>
			<input
				id="max"
				min="0"
				type="number"
				defaultValue={max}
				onChange={handleSetInterval}
			/>
		</div>
	);
}

export default IntervalComponent;
