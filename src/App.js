import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = { title: "" };
  render() {
    return (
      <div className="App">
        <p className="title">{this.state.title}</p>
      </div>
    );
  }
}

export default App;
