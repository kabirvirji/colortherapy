import React, { Component } from 'react';

const media = {
    'backgroundColor': '#424B54',
    'width': '50rem',
    'height': '80vh',
    'marginRight': '50px'
  } // 1000 and 80

class ImageGif extends Component {
  
render() {
    return (
      <div>
          <div style={media}></div>
      </div>
    );
  }
}

export default ImageGif;
