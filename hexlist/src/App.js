import React, { Component } from "react";
import Login from "./components/Login/Login";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Quiz from "../src/components/Quiz/Quiz";
import ColorPicker from "../src/components/ColorPicker/ColorPicker";
import Spotify from "./util/Spotify";

const clientId = "4b2644aba9af45e0bf4cef0fd58b7d6c";
const responseType = "token";
const redirectUri = "http://localhost:3000/quiz";
const scope =
  "user-read-private playlist-modify-private user-top-read user-read-recently-played";
const SpotifyInst = new Spotify(clientId, responseType, redirectUri, scope);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LOGIN: false,
    };
    this.didMountQuiz = this.didMountQuiz.bind(this);
  }

  async didMountQuiz() {
    SpotifyInst.getToken();
    await SpotifyInst.getUserInfo();
    await SpotifyInst.getTopArtists();
    // if you run the commented lines then you will generate a playlist on your spotify!
    // await SpotifyInst.getRecommendations(
    //   [SpotifyInst.topArtists[0], SpotifyInst.topArtists[1]],
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0
    // );
    // await SpotifyInst.createPlaylist();
    await SpotifyInst.populatePlaylist();

    if (SpotifyInst.userInfo) {
      this.setState({
        LOGIN: true,
      });
    }
  }

  render() {
    return (
      <Router>
        <Route path='/' exact>
          <Login SpotifyUrl={SpotifyInst.url} />
        </Route>
        <Route path='/quiz'>
          {/* Try making this route private */}
          <Quiz didMount={this.didMountQuiz} login={this.state.LOGIN} />
        </Route>
        <Route path='/colorpicker'>
          <ColorPicker login={this.state.LOGIN} />
        </Route>
      </Router>
    );
  }
}

export default App;
