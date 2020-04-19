import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} className='quiz'>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
