"use strict";

import React from "react";

import Item from "./Item";

const List = ({ data }) => {
	const itemComponents = data.movies.map((movie, i) => {
		return <Item key={i} movieData={movie} reviewData={data.reviews[i]} />;
	});

	return <div className="item-list">{itemComponents}</div>;
};

List.PropTypes = {
	data: React.PropTypes.object.isRequired
};

export default List;
