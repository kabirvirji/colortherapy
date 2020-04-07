import React, { Component } from 'react';

const buttonStyle = {
    'backgroundColor': '#1DB954',
    'border': 'none',
    'color': 'white',
    'padding': '10px',
    'textAlign': 'center',
    'textDecoration': 'none',
    'display': 'inline-block',
    'fontSize': '14px',
    'borderRadius': '50px',
    'width': '200px',
    'float': 'left',
    'marginTop': '30px',
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
