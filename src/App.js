import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppContent from "./components/app-content";

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <AppContent />;
	}
}

export default App;
