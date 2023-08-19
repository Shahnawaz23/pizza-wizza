import React from "react";
import './signUp.css';
// import ReCAPTCHA from 'react-google-recaptcha';

export default function SignUp() {
  // const handleSubmit = () => {
    
  // }
  return (
    <div>
      <div className="sign-up-container">
        <h1 id="sign">Sign Up</h1>
        <form className="data1">
          <input
            type="text"
            className="input1 form1"
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            className="input1 form1"
            placeholder="Enter your Email"
            autoComplete="current-password"
            required
          />
          <input
            type="password"
            className="input1 form1"
            placeholder="Enter your Password"
            autoComplete="current-password"
            required
          />
          {/* <ReCAPTCHA
            sitekey="YOUR_RECAPTHCA_SITE_KEY"
            onChange={handleSubmit}
          /> */}
          <button type="submit" className="form1 subm1">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
