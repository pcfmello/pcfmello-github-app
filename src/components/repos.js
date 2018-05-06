import React from "react";
import PropTypes from "prop-types";

const Repos = ({ title, repos, isUserRepos }) => {
	return (
		<div className="card repos form-group">
			<div className="card-body">
				<h2>{title}</h2>
				<ul>
					{repos.map(repo => (
						<li key={repo.id}>
							<a href={repo.html_url}>
								{isUserRepos ? repo.name : repo.full_name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

Repos.propTypes = {
	title: PropTypes.string.isRequired,
	repos: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			html_url: PropTypes.string.isRequired
		})
	),
	isUserRepos: PropTypes.bool
};

export default Repos;
