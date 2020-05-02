import React from "react";
import "./ColorQuestion.css";
import Range from "../Range/Range";
import Button from "../Button/Button";

function numberToWord(number) {
  if (number >= 0.9) {
    return (
      <span className='emoji' role='img'>
        &#128525;
      </span>
    );
  }
  if (number >= 0.8 && number < 0.9) {
    return (
      <span className='emoji' role='img'>
        😁
      </span>
    );
  } else if (number >= 0.6 && number < 0.8) {
    return (
      <span className='emoji' role='img'>
        &#128527;
      </span>
    );
  } else if (number >= 0.4 && number < 0.6) {
    return (
      <span className='emoji' role='img'>
        &#128528;
      </span>
    );
  } else if (number >= 0.2 && number < 0.4) {
    return (
      <span className='emoji' role='img'>
        &#128530;
      </span>
    );
  } else if (number >= 0.1 && number < 0.2) {
    return (
      <span className='emoji' role='img'>
        &#128531;
      </span>
    );
  } else if (number >= 0 && number < 0.1) {
    return (
      <span className='emoji' role='img'>
        😢
      </span>
    );
  }
}

export default class ColorQuestion extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div
          className='color-square'
          id={this.props.id}
          style={{ background: this.props.color }}></div>
        <div className='range'>
          {numberToWord(this.props.value)}
          <Range
            onChange={this.props.onChange}
            id={this.props.id}
            value={this.props.value}
            minText={"sad"}
            maxText={"happy"}
          />
        </div>
        <Button onClick={this.props.onClick}>Next</Button>
      </div>
    );
  }
}
