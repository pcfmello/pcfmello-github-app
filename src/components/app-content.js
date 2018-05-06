import React from "react";

import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";
import Repos from "./repos";

const AppContent = () => (
	<div
		className="App"
		style={{
			width: 600,
			margin: "20px auto"
		}}
	>
		<Search />
		<UserInfo />
		<Actions />

		<Repos
			title="Repositórios"
			repoList={[
				{ link: "#", linkText: "Nome do repositório" },
				{ link: "#", linkText: "Nome do repositório" }
			]}
		/>
		<Repos
			title="Favoritos"
			repoList={[
				{ link: "#", linkText: "Nome do repositório" },
				{ link: "#", linkText: "Nome do repositório" },
				{ link: "#", linkText: "Nome do repositório" }
			]}
		/>
	</div>
);

export default AppContent;
