import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h3 className="nav-logo">Cohort</h3>
      <ul className="nav-links">
        <li>Home</li>
        <li>Discover</li>
        <li>Join</li>
      </ul>
      <ul className="nav-links">
        <button className="nav-singin-btn">Sign in</button>
      </ul>
    </nav>
  );
}
