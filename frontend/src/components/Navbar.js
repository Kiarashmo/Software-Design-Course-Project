import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h3 className="nav-logo">Cohort</h3>
      <ul className="nav-links">
        <li>Home</li>
        <Link to="/courses">
          <li>Discover</li>
        </Link>
        <li>Join</li>
      </ul>
      <ul className="nav-links">
        <button className="nav-singin-btn">Sign in</button>
      </ul>
    </nav>
  );
}
