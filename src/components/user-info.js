import React from "react";

const UserInfo = () => {
	return (
		<div>
			<div className="card form-group">
				<div
					className="card-body"
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<img
						src="https://avatars0.githubusercontent.com/u/4481433?v=4"
						alt="logo"
						className="img-responsive img-thumbnail"
						style={{ width: 150, height: 150 }}
					/>
					<div style={{ width: "100%", marginLeft: 20 }}>
						<h3>
							<a href="https://github.com/pcfmello">
								Paulo Cesar Ferreira de Mello
							</a>
						</h3>
						<ul className="repos-info">
							<li>Repositótios: 122</li>
							<li>Seguidores: 10</li>
							<li>Seguindo: 10</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
