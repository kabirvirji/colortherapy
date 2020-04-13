import React from "react";
import "./ColorQuestion.css";
import Range from "../Range/Range";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default class ColorQuestion extends React.Component {
  render() {
    if (this.props.onClick) {
      return (
        <div className='card'>
          <div
            className='color-square'
            id={this.props.id}
            style={{ background: this.props.id }}></div>
          <Range
            onChange={this.props.onChange}
            id={this.props.id}
            value={this.props.value}
          />
          {this.props.value}
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
          <Range
            onChange={this.props.onChange}
            id={this.props.id}
            value={this.props.value}
          />
          {this.props.value}
          <Link to='/colorpicker'>
            <Button onClick={this.props.onClick}>Next</Button>
          </Link>
        </div>
      );
    }
  }
}
