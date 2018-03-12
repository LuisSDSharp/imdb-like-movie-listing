import React from "react";
import { Icon } from "react-fa";

import "../styles/StarBasedRaiting.css";

const StarBasedRating = ({ score, max }) => {
	const scoreDecimal = ((score % 1) * 10).toFixed(0);
	let fgStarName = "star";

	let fgStars = [];
	for (let i = 0; i < Math.ceil(score); i++) {
		if (i + 1 === Math.ceil(score) && (scoreDecimal > 2 && scoreDecimal < 8)) {
			fgStarName = "star-half";
		}

		fgStars.push(
			<Icon
				key={i}
				className="stars-raiting__stars__star stars-raiting__stars__star--fg"
				name={fgStarName}
			/>
		);
	}

	let bgStars = [];
	for (let i = 0; i < max; i++) {
		bgStars.push(
			<Icon
				key={i}
				className="stars-raiting__stars__star stars-raiting__stars__star--bg"
				name="star"
			/>
		);
	}

	return (
		<div className="stars-raiting panel panel-default stars-raiting--panel">
			<div className="stars-raiting__stars">
				<div className="stars-raiting__stars__bg-stars">{bgStars}</div>
				<div className="stars-raiting__stars__fg-stars">{fgStars}</div>
			</div>
			<div className="stars-raiting__score">
				<span className="stars-raiting__score__current">{score}</span>
				<p className="stars-raiting__score__max">/{max}</p>
			</div>
		</div>
	);
};

export default StarBasedRating;
