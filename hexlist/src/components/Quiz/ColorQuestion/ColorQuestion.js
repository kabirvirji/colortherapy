import React from "react";
import "./ColorQuestion.css";
import Range from "../Range/Range";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function numberToWord(number) {
  if (number >= 0.9) {
    return (
      <span className="emoji" role='img'>
        &#128525;
      </span>
    );
  }
  if (number >= 0.8 && number < 0.9) {
    return (
      <span className="emoji" role='img' >
        &#128526;
      </span>
    );
  } else if (number >= 0.6 && number < 0.8) {
    return (
      <span className="emoji" role='img' >
        &#128527;
      </span>
    );
  } else if (number >= 0.4 && number < 0.6) {
    return (
      <span className="emoji" role='img' >
        &#128528;
      </span>
    );
  } else if (number >= 0.2 && number < 0.4) {
    return (
      <span className="emoji" role='img' >
        &#128530;
      </span>
    );
  } else if (number >= 0.1 && number < 0.2) {
    return (
      <span className="emoji" role='img' >
        &#128531;
      </span>
    );
  } else if (number >= 0 && number < 0.1) {
    return (
      <span className="emoji" role='img' >
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
            {numberToWord(this.props.value)}
            <Range
              onChange={this.props.onChange}
              id={this.props.id}
              value={this.props.value}
              // min and max text can also be emojis
              minText={"sad"}
              maxText={"happy"}
            />
            
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
