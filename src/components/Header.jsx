import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>DELISSIMO</h1>
        <div className="language-switcher">
          <button id="lang-sv" className="lang-btn" type="button">
            Sve
          </button>
          <button id="lang-en" className="lang-btn" type="button">
            Eng
          </button>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/menu">Meny</Link>
          </li>
          <li>
            <Link to="/about">Om oss</Link>
          </li>
          <li>
            <Link to="/booking">Boka bord</Link>
          </li>
          <li>
            <Link to="/job">Jobb</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
