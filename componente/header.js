import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Content, Main, Mobile } from "./estilos";

import logo from "../assests/logo.svg";
import hamburger from "../assests/hamburger.svg";

export default function Header() {
  const [loading, setLoading] = useState(false);

  function teste() {
    setLoading(true);
    setInterval(resete,5000);
  }

  function resete() {
    setLoading(false);
  }

  return (
    <Content>
      <Main>
        <nav>
          <Link to="/">
            <img className="img" src={logo} alt="imagem logo" />
          </Link>
          {loading === true ? (
            <Mobile>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/descobrir">Descobrir</Link>
              </li>
              <li>
                <Link to="/comeca">Começa</Link>
              </li>
            </Mobile>
          ) : (
            <div>
              <ul className="navegacao">
                <li>
                  <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                  <Link to="/descobrir">Descobrir</Link>
                </li>
                <li>
                  <Link to="/comeca">Começa</Link>
                </li>
              </ul>

              <div className="imgbar">
                <a
                  type="button"
                  onClick={() => {
                    teste();
                  }}
                  id="icon"
                >
                  <img src={hamburger} alt="imagem bar" />
                </a>
              </div>
            </div>
          )}
        </nav>
      </Main>
    </Content>
  );
}
