import React from 'react';
import { Link } from "react-router-dom";

const Header = ({title}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Mozio App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse fr" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"}>Search</Link>
          </li>
          <li className="nav-item">
            <Link to={"/Results"}>Results</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
