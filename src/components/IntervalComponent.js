import React, { useState } from 'react';
import '../App.css';

function IntervalComponent({ handleSetInterval, min, max }) {
	return (
		<div className="interval-container">
			<label htmlFor="min">Min: </label>
			<input
				id="min"
				type="number"
				defaultValue={min}
				className="interval-input"
				onChange={handleSetInterval}
			/>
			<label htmlFor="max">Max: </label>
			<input
				id="max"
				type="number"
				defaultValue={max}
				className="interval-input"
				onChange={handleSetInterval}
			/>
		</div>
	);
}

export default IntervalComponent;
