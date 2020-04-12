import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";
import Button from "./Button/Button";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.didMount();
  }
  handleClick(e) {}
  render() {
    return (
      <div id='container'>
        <div className='card active'>
          <p>
            Before taking you to Color Therapy we'd like to ask you a few
            questions to know how you're feeling.
          </p>
          <Button onClick={this.handleClick}>Next</Button>
        </div>
        <div className='card' id='1'>
          something
        </div>
      </div>
    );
  }
}
