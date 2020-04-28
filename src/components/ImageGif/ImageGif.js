import React, { Component } from "react";
import "./ImageGif.css";
import gif from "../../images/loginGif.gif";

class ImageGif extends Component {
  render() {
    return (
      <div className='media1'>
        <img src={gif} alt='color grid being clicked'></img>
      </div>
    );
  }
}

export default ImageGif;
