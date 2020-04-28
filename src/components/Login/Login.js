import React, { Component } from "react";
import HexlistHeader from "../HexlistHeader/HexlistHeader";
import TutorialChecklist from "../TutorialChecklist/TutorialChecklist";
import TitleText from "../TitleText/TitleText";
import SpotifyButton from "../SpotifyButton/SpotifyButton";
import ImageGif from "../ImageGif/ImageGif";
import "./Login.css";

export default class Login extends Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div className='container-login'>
        <HexlistHeader></HexlistHeader>
        <div className='grid-login'>
          <div className='left'>
            <TitleText title='Use color to generate playlists based on your mood'></TitleText>
            <TutorialChecklist></TutorialChecklist>
            <SpotifyButton url={this.props.SpotifyUrl}></SpotifyButton>
          </div>
          <ImageGif />
        </div>
      </div>
    );
  }
}
