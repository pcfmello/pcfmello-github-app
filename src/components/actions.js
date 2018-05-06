import React from "react";

const Actions = () => {
	return (
		<div
			className="actions form-group"
			style={{ display: "flex", justifyContent: "space-between" }}
		>
			<button className="btn btn-primary" style={{ width: "49%" }}>
				Ver repositórios
			</button>
			<button className="btn btn-primary" style={{ width: "49%" }}>
				Ver favoritos
			</button>
		</div>
	);
};

export default Actions;
