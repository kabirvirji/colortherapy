import React from "react";

export default class TooManyColorsPopUp extends React.Component {
  render() {
    return (
      <div className='generate-container'>
        <div className={this.props.cardClass}>
          <p className='list'>You have already selected 5 colors</p>
          <div>
            <button onClick={this.props.handleBackToGrid}>
              Go back to grid
            </button>
            <button onClick={this.props.handleGenerate}>
              Generate Playlist
            </button>
          </div>
        </div>
      </div>
    );
  }
}
