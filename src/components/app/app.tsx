import React from "react";
import { Editor } from "../editor";
import { Header } from "../header/header";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Editor />
      </>
    );
  }
}

export default App;
