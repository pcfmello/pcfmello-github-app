import React from "react";
import PropTypes from "prop-types";

const Search = ({ handleSearch, isDisabled }) => {
	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control search"
				placeholder="Digite seu username"
				onKeyUp={handleSearch}
				disabled={isDisabled}
			/>
		</div>
	);
};

Search.propTypes = {
	isDisabled: PropTypes.bool.isRequired,
	handleSearch: PropTypes.func.isRequired
};

export default Search;
