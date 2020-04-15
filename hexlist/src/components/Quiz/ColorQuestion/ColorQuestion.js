import React from "react";
import "./ColorQuestion.css";
import Range from "../Range/Range";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const style = {
  fontSize: 30,
};

function numberToWord(number) {
  if (number >= 9) {
    return (
      <span role='img' style={style}>
        &#128525;
      </span>
    );
  }
  if (number >= 8 && number < 9) {
    return (
      <span role='img' style={style}>
        &#128526;
      </span>
    );
  } else if (number >= 6 && number < 8) {
    return (
      <span role='img' style={style}>
        &#128527;
      </span>
    );
  } else if (number >= 4 && number < 6) {
    return (
      <span role='img' style={style}>
        &#128528;
      </span>
    );
  } else if (number >= 2 && number < 4) {
    return (
      <span role='img' style={style}>
        &#128530;
      </span>
    );
  } else if (number >= 1 && number < 2) {
    return (
      <span role='img' style={style}>
        &#128531;
      </span>
    );
  } else if (number >= 0 && number < 1) {
    return (
      <span role='img' style={style}>
        &#128534;
      </span>
    );
  }
}

export default class ColorQuestion extends React.Component {
  render() {
    if (this.props.onClick) {
      return (
        <div className='card'>
          <div
            className='color-square'
            id={this.props.id}
            style={{ background: this.props.id }}></div>
          <div className='range'>
            <Range
              onChange={this.props.onChange}
              id={this.props.id}
              value={this.props.value}
            />
            {numberToWord(this.props.value)}
          </div>
          <Button onClick={this.props.onClick}>Next</Button>
        </div>
      );
    } else {
      return (
        <div className='card'>
          <div
            className='color-square'
            id={this.props.id}
            style={{ background: this.props.id }}></div>
          <div className='range'>
            <Range
              onChange={this.props.onChange}
              id={this.props.id}
              value={this.props.value}
            />
            {numberToWord(this.props.value)}
          </div>
          <Link to='/colorpicker'>
            <Button onClick={this.props.onClick}>Next</Button>
          </Link>
        </div>
      );
    }
  }
}
