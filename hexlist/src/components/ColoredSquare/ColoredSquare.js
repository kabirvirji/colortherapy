import React, { Component } from "react";
import "./ColoredSquare.css";

class ColoredSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const maxColors = this.props.onPress();
    if (maxColors) {
      this.setState((prevState) => ({
        clicked: !prevState.clicked,
      }));
    }
  }
  // need to remove onclick
  render() {
    return (
      <div
        className='square'
        style={
          !this.state.clicked
            ? { backgroundColor: this.props.color }
            : {
                backgroundColor: this.props.color,
                boxShadow: "none",
                filter: "blur(10px)",
              }
        }
        onClick={() => this.handleClick()}></div>
    );
  }
}

export default ColoredSquare;
