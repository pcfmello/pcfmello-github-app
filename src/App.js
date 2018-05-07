import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ajax from "@fdaciuk/ajax";

import AppContent from "./components/app-content";

class App extends Component {
	constructor() {
		super();
		this.state = {
			userinfo: null,
			repos: [],
			starred: [],
			isFetching: false
		};

		// Forma recomendada de fazer o bind das funções de classes com ReactJS
		this.getGithubApiUrl = this.getGithubApiUrl.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	getGithubApiUrl(username, type) {
		const internalUsername = username ? `/${username}` : "";
		const internalType = type ? `/${type}` : "";
		return `https://api.github.com/users${internalUsername}${internalType}`;
	}

	handleSearch(e) {
		// Persiste o evento para ser acessado posteriormente, não anulando-o conforme ação padrão do React
		//const eventTarget = e.target;

		const ENTER = 13;
		const username = e.target.value;
		const keyCode = e.which || e.keyCode;
		if (keyCode === ENTER && username) {
			//eventTarget.disabled = true;
			this.setState({
				isFetching: true
			});
			ajax()
				.get(this.getGithubApiUrl(username))
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
						},
						repos: [],
						starred: []
					});
				})
				.always(() => {
					//eventTarget.disabled = false;
					this.setState({
						isFetching: false
					});
				});
		}
	}

	getRepos(type) {
		return () => {
			ajax()
				.get(this.getGithubApiUrl(this.state.userinfo.username, type))
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
		};
	}

	render() {
		return (
			<AppContent
				userinfo={this.state.userinfo}
				repos={this.state.repos}
				starred={this.state.starred}
				isFetching={this.state.isFetching}
				handleSearch={this.handleSearch}
				getRepos={this.getRepos("repos")}
				getStarred={this.getRepos("starred")}
			/>
		);
	}
}

export default App;
