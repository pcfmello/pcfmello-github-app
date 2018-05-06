import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ userinfo }) => {
	return (
		<div>
			<div className="card form-group">
				<div
					className="card-body"
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<img
						src={userinfo.avatar}
						alt="logo"
						className="img-responsive img-thumbnail"
						style={{ width: 150, height: 150 }}
					/>
					<div style={{ width: "100%", marginLeft: 20 }}>
						{!!userinfo.name && (
							<h3>
								<a href={`https://github.com/${userinfo.username}`}>
									{userinfo.name}
								</a>
							</h3>
						)}
						<ul className="repos-info">
							{!!userinfo.repos && <li>Repositórios: {userinfo.repos}</li>}
							{!!userinfo.followers && (
								<li>Seguidores: {userinfo.followers}</li>
							)}
							{!!userinfo.following && <li>Seguindo: {userinfo.following}</li>}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

UserInfo.propTypes = {
	userinfo: PropTypes.shape({
		name: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		avatar: PropTypes.string,
		repos: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
		following: PropTypes.number.isRequired,
		url_repos: PropTypes.string.isRequired,
		url_starred: PropTypes.string.isRequired
	})
};

export default UserInfo;
