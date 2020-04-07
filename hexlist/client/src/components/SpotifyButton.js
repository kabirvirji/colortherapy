import React, { Component } from 'react';

const buttonStyle = {
    'backgroundColor': '#1DB954',
    'border': 'none',
    'color': 'white',
    'padding': '20px',
    'textAlign': 'center',
    'textDecoration': 'none',
    'display': 'inline-block',
    'fontSize': '16px',
    'margin': '4px 2px',
    'borderRadius': '50px',
    'width': '250px',
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
