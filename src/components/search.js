import React from "react";
import PropTypes from "prop-types";

const Search = ({ handleSearch }) => {
	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control search"
				placeholder="Digite seu username"
				onKeyUp={handleSearch}
			/>
		</div>
	);
};

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired
};

export default Search;
