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
        <Link to="/" style={{ textDecoration: 'none' }} className="nav-links--li">
          <li className="nav-links--li">Home</li>
        </Link>
        <Link to="/courses" style={{ textDecoration: 'none' }} className="nav-links--li">
          <li className="nav-links--li">Discover</li>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }} className="nav-links--li">
          <li className="nav-links--li">Join</li>
        </Link>
      </ul>
      <ul className="nav-links">
        <Link to="/log-in" style={{ textDecoration: 'none', background: 'none' }}>
          <button className="nav-singin-btn">Sign in</button>
        </Link>
      </ul>
    </nav>
  );
}
