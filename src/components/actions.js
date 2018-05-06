import React from "react";
import PropTypes from "prop-types";

const Actions = ({ getRepos, getStarred }) => {
	return (
		<div
			className="actions form-group"
			style={{ display: "flex", justifyContent: "space-between" }}
		>
			<button
				className="btn btn-primary"
				style={{ width: "49%" }}
				onClick={getRepos}
			>
				Ver repositórios
			</button>
			<button
				className="btn btn-primary"
				style={{ width: "49%" }}
				onClick={getStarred}
			>
				Ver favoritos
			</button>
		</div>
	);
};

Actions.propTypes = {
	getRepos: PropTypes.func.isRequired,
	getStarred: PropTypes.func.isRequired
};

export default Actions;
