import React, { Component } from "react";
import "./TitleText.css";

class TitleText extends Component {
  render() {
    return (
      <div className='container'>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default TitleText;
