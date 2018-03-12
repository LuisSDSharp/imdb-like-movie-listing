"use strict";

import React, { Component } from "react";

import List from "./components/List";
import data from "./data.json";
import "./styles/App.css";

const App = () => {
	return (
		<div className="panel panel-default app">
			<div className="panel-body">
				<List data={data} />
			</div>
		</div>
	);
};

export default App;
