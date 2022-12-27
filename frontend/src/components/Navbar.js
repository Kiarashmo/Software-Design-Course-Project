import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="left-part">
        <Link to="/">
          <h3 className="nav-logo">Cohort</h3>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }} >
          <h3 className="nav-item">Home</h3>
        </Link>
          <Link to="/courses" style={{ textDecoration: 'none' }} >
              <h3 className="nav-item">Discover</h3>
          </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <h3 className="nav-item">Join</h3>
            </Link>
        </div>
        <div>
          <Link to="/log-in" style={{ textDecoration: 'none', background: 'none' }}>
            <h3 className="sign-in-btn">Sign in</h3>
          </Link>
         </div>
    </nav>
  );
}
