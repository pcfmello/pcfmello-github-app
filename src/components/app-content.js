import React from "react";
import PropTypes from "prop-types";

import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";
import Repos from "./repos";

const AppContent = ({
	userinfo,
	repos,
	starred,
	handleSearch,
	getRepos,
	getStarred
}) => (
	<div
		className="App"
		style={{
			width: 600,
			margin: "20px auto"
		}}
	>
		<Search handleSearch={handleSearch} />
		{!!userinfo && <UserInfo userinfo={userinfo} />}
		{!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

		{!!repos.length && <Repos title="Repositórios" repos={repos} isUserRepos />}

		{!!starred.length && <Repos title="Favoritos" repos={starred} />}
	</div>
);

AppContent.propTypes = {
	userinfo: PropTypes.object,
	repos: PropTypes.array.isRequired,
	starred: PropTypes.array.isRequired,
	handleSearch: PropTypes.func.isRequired,
	getRepos: PropTypes.func.isRequired,
	getStarred: PropTypes.func.isRequired
};

export default AppContent;
