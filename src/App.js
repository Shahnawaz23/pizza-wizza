// import logo from './logo.svg';
import "./App.css";
import Main from "./components/main/Main.js";
import Menu from "./components/menu/menu.js";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/footer";

import React, { Component } from "react";
import LongIn from "./components/logIn/LongIn";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Menu />
        <Footer />
        <LongIn />
      </div>
    );
  }
}

export default App;
