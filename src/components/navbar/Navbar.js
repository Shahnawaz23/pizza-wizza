import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navHead">
        <h1 className="heading">
          <Link className="headLink" to="/">Pizza Wizza</Link>
        </h1>
      </nav>
      <div className="action">
        <Link to="/logIn" className="log-in" aria-current="page">
          Log In
        </Link>
        <Link className="sign" to="/signUp">
          Sign Up
        </Link>
        {/* <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
