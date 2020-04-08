import React, { Component } from "react";
import Login from "./components/Login/Login";
import { Route } from "react-router-dom";
import Quiz from "../src/components/Quiz/Quiz";

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Login} />
        <Route path='/quiz' component={Quiz} />
      </div>
    );
  }
}

export default App;
