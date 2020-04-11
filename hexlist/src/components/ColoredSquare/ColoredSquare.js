import React, { Component } from "react";
import "./ColoredSquare.css";


class ColoredSquare extends Component {
  state = {
    clicked: false
  };
  constructor(props) {
      super(props);
  }
  handleClick() {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }
  render() {
    return (
        <div 
          className="square" 
          style={!this.state.clicked ? {backgroundColor: this.props.color} : {boxShadow:'none'}} 
          onClick={() => this.handleClick()}
        >
        </div>
    );
  }
}

export default ColoredSquare;
