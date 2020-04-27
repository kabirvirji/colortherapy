import React from "react";
import "./TooManyColorsPopUp.css";

export default class TooManyColorsPopUp extends React.Component {
  render() {
    return (
      <div className='generate-container'>
        <div className={this.props.cardClass}>
          <p className='list'>You have already selected 5 colors</p>
          <div id='button-container'>
            <button
              onClick={this.props.handleGenerate}
              className='button too-many-colors'>
              Generate Playlist
            </button>
            <button
              onClick={this.props.handleBackToGrid}
              className='button too-many-colors'>
              Go back to grid
            </button>
          </div>
        </div>
      </div>
    );
  }
}
