// import logo from './logo.svg';
import "./App.css";
import Main from "./components/main/Main";
import Menu from "./components/menu/menu.js";
import Navbar from './components/navbar/Navbar.js';
import Footer from "./components/footer/footer";

import React, { Component } from "react";

class App extends Component {
 
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
        <Menu/>
        <Footer/>
      </div>
    )
  }
}

export default App;
