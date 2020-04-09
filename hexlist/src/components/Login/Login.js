import React, { Component } from "react";
import HexlistHeader from "../HexlistHeader/HexlistHeader";
import TutorialChecklist from "../TutorialChecklist/TutorialChecklist";
import TitleText from "../TitleText/TitleText";
import Flex from "../Flex/Flex";
import SpotifyButton from "../SpotifyButton/SpotifyButton";
import ImageGif from "../ImageGif/ImageGif";
import { Spotify } from "../../util/Spotify";

export default class Login extends Component {
  componentDidMount() {
    console.log("just mounted");
  }
  componentWillUnmount() {
    console.log("login unmounted");
  }
  render() {
    return (
      <div className='App'>
        <HexlistHeader></HexlistHeader>
        <Flex maxWidth='2000px' flexDirection='row'>
          <Flex display='flex' flexDirection='column'>
            <TitleText title='Use color to generate playlists based on your mood'></TitleText>
            <TutorialChecklist></TutorialChecklist>
            <SpotifyButton url={this.props.SpotifyUrl}></SpotifyButton>
          </Flex>
          <ImageGif></ImageGif>
        </Flex>
      </div>
    );
  }
}
