import React, { Component } from "react";
import HexlistHeader from "../HexlistHeader/HexlistHeader";
import TutorialChecklist from "../TutorialChecklist/TutorialChecklist";
import TitleText from "../TitleText/TitleText";
import Flex from "../Flex/Flex";
import SpotifyButton from "../SpotifyButton/SpotifyButton";
import ImageGif from "../ImageGif/ImageGif";

export default class Login extends Component {
  render() {
    return (
      <div className='App'>
        <HexlistHeader></HexlistHeader>
        <Flex maxWidth='2000px' flexDirection='row'>
          <Flex display='flex' flexDirection='column'>
            <TitleText title='Use color to generate playlists based on your mood'></TitleText>
            <TutorialChecklist></TutorialChecklist>
            <SpotifyButton></SpotifyButton>
          </Flex>
          <ImageGif></ImageGif>
        </Flex>
      </div>
    );
  }
}
