import React from "react";
import { Link } from "react-router-dom";
import { Content, Main } from "./estilos";

import logo from "../assests/logo.svg";
import hamburger from "../assests/hamburger.svg";

export default function Header() {
  return (
    <Content>
      <Main>
        <nav>
          <Link to="/">
            <img className="img" src={logo} alt="imagem logo" />
          </Link>
          <div className="imgbar">
            <img src={hamburger} alt="imagem bar" id="icon" />
          </div>
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
        </nav>
      </Main>
    </Content>
  );
}
