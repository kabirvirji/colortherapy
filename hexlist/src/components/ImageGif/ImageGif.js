import React, { Component } from "react";
import "./ImageGif.css";
import placeholder from "./700.png";

const media = {
  backgroundColor: "#424B54",
  width: "50rem",
  height: "80vh",
  marginRight: "50px",
};

class ImageGif extends Component {
  render() {
    return (
      <div>
        <div className='media1'>
          <img src={placeholder}></img>
        </div>
      </div>
    );
  }
}

export default ImageGif;
