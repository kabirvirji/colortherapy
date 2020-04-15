import React from "react";
import "./Range.css";

export default class Range extends React.Component {
  render() {
    return (
      <div>
        <input
          type='range'
          min='0'
          max='10'
          step='0.001'
          value={this.props.value}
          onChange={this.props.onChange}
          id={this.props.id}
          // className='uk-range'
        />
      </div>
    );
  }
}
