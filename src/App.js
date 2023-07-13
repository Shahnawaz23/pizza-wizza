// import logo from './logo.svg';
import "./App.css";
import Main from "./components/main/Main.js";
import Menu from "./components/menu/menu.js";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/footer.js";

import React, { Component } from "react";
import LogIn from "./components/logIn/LogIn";

import { BrowserRouter as Route } from "react-router-dom";
import { Routes } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Menu />
        <Footer />
        <Routes>
          <Route path="./components/logIn/LogIn.js" element={<LogIn/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
