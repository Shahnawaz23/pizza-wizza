import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navHead">
        <h1 className="heading">Pizza Wizza</h1>
      </nav>
      <div className="action">
        <Link className="log" to="./components/logIn/LogIn.js">
          Log In
        </Link>
        <nav className="sign">Sign Up</nav>
      </div>
    </div>
  );
}

export default Navbar;
