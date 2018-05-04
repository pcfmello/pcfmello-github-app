import React from "react";
import logo from "./logo.svg";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div
      className="App"
      style={{
        width: 600,
        margin: "0 auto"
      }}
    >
      <div class="form-group">
        <input
          type="text"
          className="form-control search"
          placeholder="Pesquisar perfis"
        />
      </div>
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

        <div className="card repos form-group">
          <div className="card-body">
            <h2>Repositórios:</h2>
            <ul>
              <li>
                <a href="#">Nome do repositório</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card repos form-group">
          <div className="card-body">
            <h2>Favoritos:</h2>
            <ul>
              <li>
                <a href="#">Nome do repositório</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
