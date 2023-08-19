import React from "react";
import "./logIn.css";

export default function LogIn() {
  return (
    <div>
      <div className="logIn-container">
        <h1 id="log">Log In</h1>
        <form className="data">
          <input
            type="email"
            className="input form"
            placeholder="Enter your Email"
            required
          />
          <input
            type="password"
            className="input form"
            placeholder="Enter your Password"
            autoComplete="username"
            required
          />
          <button type="submit" className="form subm">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
