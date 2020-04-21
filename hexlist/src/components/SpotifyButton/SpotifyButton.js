import React, { Component } from "react";
import "./SpotifyButton.css";

class SpotifyButton extends Component {
  render() {
    return (
      <div>
        <a href={this.props.url}>
          <button className='spotify-button'>Login with Spotify</button>
        </a>
      </div>
    );
  }
}

export default SpotifyButton;
