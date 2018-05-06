import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ajax from "@fdaciuk/ajax";

import AppContent from "./components/app-content";

const GITHUB_API_URL = "https://api.github.com/users";
class App extends Component {
	constructor() {
		super();
		this.state = {
			userinfo: null,
			repos: [],
			starred: []
		};
	}

	handleSearch(e) {
		const ENTER = 13;
		const username = e.target.value;
		const keyCode = e.which || e.keyCode;
		if (keyCode === ENTER) {
			ajax()
				.get(`${GITHUB_API_URL}/${username}`)
				.then(result => {
					this.setState({
						userinfo: {
							name: result.name,
							username: result.login,
							avatar: result.avatar_url,
							repos: result.public_repos,
							followers: result.followers,
							following: result.following,
							url_repos: result.repos_url,
							url_starred: result.starred_url
						}
					});
				});
		}
	}

	getRepos(type) {
		ajax()
			.get(`${GITHUB_API_URL}/${this.state.userinfo.username}/${type}`)
			.then(result => {
				this.setState({
					[type]: result.map(repo => ({
						id: repo.id,
						name: repo.name,
						full_name: repo.full_name,
						html_url: repo.html_url
					}))
				});
			});
	}

	render() {
		return (
			<AppContent
				userinfo={this.state.userinfo}
				repos={this.state.repos}
				starred={this.state.starred}
				handleSearch={e => this.handleSearch(e)}
				getRepos={() => this.getRepos("repos")}
				getStarred={() => this.getRepos("starred")}
			/>
		);
	}
}

export default App;
