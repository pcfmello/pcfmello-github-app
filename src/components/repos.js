import React from "react";
import PropTypes from "prop-types";

const Repos = ({ title, repoList }) => {
	return (
		<div className="card repos form-group">
			<div className="card-body">
				<h2>{title}</h2>
				<ul>
					{repoList.map((repo, index) => (
						<li key={index}>
							<a href={repo.link}>{repo.linkText}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

Repos.propTypes = {
	title: PropTypes.string.isRequired,
	repoList: PropTypes.array
};

export default Repos;
