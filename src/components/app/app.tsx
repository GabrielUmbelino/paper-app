import "./app.css";
import React from "react";
import { Header } from "../header/header";
import { Routes } from "../../routes";
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Routes />
      </>
    );
  }
}

export default App;
