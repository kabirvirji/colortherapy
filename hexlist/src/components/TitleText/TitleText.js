import React, { Component } from "react";
import "./TitleText.css";
import Flex from "../Flex/Flex";

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
