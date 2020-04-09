import React from "react";

export default class extends React.Component {
  componentDidMount() {
    console.log("Quiz just mounted");
    this.props.didMount();
  }
  render() {
    return <h1>Welcome to Quizz</h1>;
  }
}
