import React, { Component } from 'react';
import HexlistHeader from './components/HexlistHeader'
import TutorialChecklist from './components/TutorialChecklist'
import TitleText from './components/TitleText'
import Flex from './components/Flex'
import placeholder from './components/images/700.png'
import './App.css';
import SpotifyButton from './components/SpotifyButton'
import ImageGif from './components/ImageGif'

class App extends Component {
  
render() {
    return (
      <div className="App">
        <HexlistHeader></HexlistHeader>
        <Flex maxWidth="2000px" flexDirection="row">
          <Flex display="flex" flexDirection="column">
              <TitleText title="Use color to generate playlists based on your mood"></TitleText>
              <TutorialChecklist></TutorialChecklist>
              <SpotifyButton></SpotifyButton>
          </Flex>
            <ImageGif></ImageGif>
        </Flex>

        
      </div>
    );
  }
}

export default App;
