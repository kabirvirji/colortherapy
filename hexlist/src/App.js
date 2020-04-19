import React, { Component } from "react";
import Login from "./components/Login/Login";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Quiz from "../src/components/Quiz/Quiz";
import ColorPicker from "../src/components/ColorPicker/ColorPicker";
import SpotifyAPI from "./util/Spotify";

const clientId = "4b2644aba9af45e0bf4cef0fd58b7d6c";
const responseType = "token";
const redirectUri = "http://localhost:3000/quiz";
const scope =
  "user-read-private playlist-modify-private user-top-read user-read-recently-played";
const Spotify = new SpotifyAPI(clientId, responseType, redirectUri, scope);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LOGIN: true,
      energy: 0.5,
      red: 0.5,
      green: 0.5,
      blue: 0.5,
      yellow: 0.5,
      white: 0.5,
      black: 0.5,
    };
    this.didMountQuiz = this.didMountQuiz.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
  }

  async didMountQuiz() {
    Spotify.getToken();
    await Spotify.getUserInfo();
    // await
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
    // await SpotifyInst.populatePlaylist();

    if (Spotify.userInfo) {
      console.log(Spotify.userInfo, "userinfo");
      this.setState({
        LOGIN: true,
      });
    }
  }

  handleChangeSlider(e) {
    const id = e.target.getAttribute("id");
    this.setState({
      [id]: Number(e.target.value),
    });
  }

  render() {
    return (
      <Router>
        <Route path='/' exact>
          <Login SpotifyUrl={Spotify.url} />
        </Route>
        <Route path='/quiz'>
          <Quiz
            didMount={this.didMountQuiz}
            login={this.state.LOGIN}
            onChange={this.handleChangeSlider}
            value={{
              energy: this.state.energy,
              red: this.state.red,
              green: this.state.green,
              blue: this.state.blue,
              yellow: this.state.yellow,
              white: this.state.white,
              black: this.state.black,
            }}
          />
        </Route>
        <Route path='/colorpicker'>
          {this.state.LOGIN ? (
            <ColorPicker
              Spotify={Spotify}
              energy={this.state.energy}
              colors={{
                red: this.state.red,
                blue: this.state.blue,
                green: this.state.green,
                yellow: this.state.yellow,
                black: this.state.black,
                white: this.state.white,
              }}
            />
          ) : (
            <Redirect to='/' />
          )}
        </Route>
      </Router>
    );
  }
}

export default App;
