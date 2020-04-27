import React, { Component } from "react";
import "./Bubble.css";

class Bubble extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="bubble"></div>
      </div>
    );
  }
}

export default Bubble;
