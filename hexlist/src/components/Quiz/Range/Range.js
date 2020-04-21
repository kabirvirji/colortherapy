import React from "react";
import "./Range.css";

export default class Range extends React.Component {
  render() {
    return (
      <div>
        <p className='min-text'>{this.props.minText}</p>
        <p className='max-text'>{this.props.maxText}</p>
        <input
          type='range'
          min='0.01'
          max='0.99'
          step='0.0001'
          value={this.props.value}
          onChange={this.props.onChange}
          id={this.props.id}
          // className='uk-range'
        />
      </div>
    );
  }
}
