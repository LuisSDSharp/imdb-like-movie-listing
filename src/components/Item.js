"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import { Collapse, Well } from "react-bootstrap";
import StarBasedRating from "./StarBasedRating";

import "../styles/Item.css";

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = { isExpanded: false };
	}

	handleClick() {
		this.setState({ isExpanded: !this.state.isExpanded });
	}

	render() {
		let {
			id,
			url,
			title,
			year,
			rating,
			score,
			synopsis,
			director
		} = this.props.movieData;

		let { review } = this.props.reviewData;
		let { isExpanded } = this.state;

		return (
			<div className="item-wrapper">
				<div className="item">
					<img
						className="item__cover"
						src={this.props.movieData["cover-url"]}
						alt=""
					/>

					<div className="item__info">
						<div className="item__info__title">
							<p className="item__info__title__text">{id}.</p>
							<a
								href={url}
								className="item__info__title__text item__info__title__text--movie-name"
							>
								{title}
							</a>
							<p className="item__info__title__text item__info__title__text--gray">
								({year})
							</p>
						</div>

						<p className="item__info__subtitle item__info--paragraph item__info--small-text">
							{rating} | {this.props.movieData["runtime-in-minutes"]} min
						</p>

						<div className="item__info__scores">
							<StarBasedRating score={(score * 10).toFixed(1)} max={10} />
						</div>

						<p className="item__info__synopsis item__info--paragraph">
							{synopsis}
						</p>

						<div className="item__info__director item__info--paragraph item__info--small-text">
							Director:
							<p className="item__info__director__value">{director}</p>
						</div>

						<div className="item__info__review">
							<button
								className="item__info__review__btn"
								onClick={this.handleClick.bind(this)}
							>
								{isExpanded ? "Close" : "Open"} Review
							</button>
						</div>
					</div>
				</div>

				<Collapse in={isExpanded}>
					<div>
						<Well bsClass="review">{review}</Well>
					</div>
				</Collapse>
			</div>
		);
	}
}

Item.PropTypes = {
	movieData: React.PropTypes.object.isRequired,
	reviewData: React.PropTypes.object.isRequired
};

export default Item;
