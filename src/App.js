// import logo from './logo.svg';
import "./App.css";
// import Main from "./components/main/Main.js";
// import Menu from "./components/menu/menu.js";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/footer.js";
import LogIn from "./components/logIn/LogIn.js";
// import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import React from "react";
import SignUp from "./components/signUp/SignUp";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <>
      <Navbar />
      {/* <Main />
      <Menu /> */}

      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
