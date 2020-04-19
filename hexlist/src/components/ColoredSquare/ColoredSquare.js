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
    this.props.onPress()
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }
  // need to remove onclick
  render() {
    return (
        <div 
          className="square" 
          style={!this.state.clicked ? {backgroundColor: this.props.color} : {
            backgroundColor: this.props.color,
            boxShadow:'none',
            filter: 'blur(10px)'
          }} 
          onClick={() => this.handleClick()}
        >
        </div>
    );
  }
}

export default ColoredSquare;
