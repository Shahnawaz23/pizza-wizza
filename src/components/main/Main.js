import React from "react";
import bg from '../images/bg.jpg';
import logo from '../images/logo.png';
import './main.css';

function Main() {
  return (
    <div>
      <img src={bg} alt="pizza background" />
      <div className="divHead">
        <img className="logo-img" src={logo} alt="logo" />
        <h1 className="welcome">Welcome to Pizza Wizza</h1>
        <h3 className="enjoy">Enjoy your Pizza</h3>
      </div>
    </div>
  );
}

export default Main;
