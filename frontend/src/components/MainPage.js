import React from "react";
import { Link } from "react-router-dom";
import MyIcon from "../icons/app-logo.png";

export default function Navbar() {
  return (
    <main-page>
      <div className="icon-text">
        <div className="main-text">
          <h1>Welcome to cohort!</h1>
          <p>
            Find like-minded people.
            <br />
            learn together.
          </p>
          <Link to="/register" style={{ textDecoration: 'none' }} >
            <button className="main-page-button">Join now</button>
          </Link>
        </div>
        <img src={MyIcon} className="main-icon" />
      </div>
    </main-page>
  );
}
