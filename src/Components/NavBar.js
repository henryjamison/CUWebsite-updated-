import React, { useEffect } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const logo = (
    <NavLink className="navbar-brand navbar-logo" to="/" exact>
      <img
        src="logo-trimmed-final.png"
      ></img>
    </NavLink>
  );

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark navbar-mainbg"
      style={{ position: "fixed", top: 0, width: "100%", height: 80 }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {logo}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNav"
          style={{ textAlign: "right" }}
        >
          <ul class="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/alumni" exact>
                Alumni
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/parents" exact>
                Parents
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rush" exact>
                Rush/Events
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
