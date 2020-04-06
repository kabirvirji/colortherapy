import React, { Component } from 'react';

const buttonStyle = {
    'background-color': '#1DB954',
    'border': 'none',
    'color': 'white',
    'padding': '20px',
    'text-align': 'center',
    'text-decoration': 'none',
    'display': 'inline-block',
    'font-size': '16px',
    'margin': '4px 2px',
    'border-radius': '50px',
    'width': '250px'
  }

class SpotifyButton extends Component {


  
render() {
    return (
      <div>
          <a href="/"><button style={buttonStyle}>Login with Spotify</button></a>
      </div>
    );
  }
}

export default SpotifyButton;
