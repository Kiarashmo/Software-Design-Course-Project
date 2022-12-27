import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link-header">
        <h3 className="nav-logo">Cohort</h3>
      </Link>
      <ul className="nav-links">
        <Link className="nav-links-li" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-links-li" to="/courses">
          <li>Discover</li>
        </Link>
      </ul>
      <ul className="nav-links">
        <Link className="nav-links-signin-btn" to="/log-in">
          <button className="nav-singin-btn">Sign in</button>
        </Link>
      </ul>
    </nav>
  );
}
