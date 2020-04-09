import React, { Component } from "react";
import Login from "./components/Login/Login";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from "react-router-dom";
import Quiz from "../src/components/Quiz/Quiz";
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
      userInfo: "",
      accessToken: "",
    };
    this.didMount = this.didMount.bind(this);
  }
  componentDidMount() {
    // console.log("App component just mounted", this.state.LOGIN);
  }

  async didMount() {
    SpotifyInst.getToken();
    console.log(SpotifyInst.accessToken);
    await SpotifyInst.getUserInfo();
    if (SpotifyInst.userInfo.me) {
      this.setState({
        LOGIN: true,
        userInfo: SpotifyInst.userInfo.me,
        accessToken: SpotifyInst.accessToken,
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
          <Quiz didMount={this.didMount} />
        </Route>
      </Router>
    );
  }
}

export default App;
