import React from "react";
import { Link, Redirect } from "react-router-dom";

export default class Quiz extends React.Component {
  componentDidMount() {
    this.props.didMount();
  }
  render() {
    return (
      <div>
        <h1>Welcome to Quizz</h1>
        <Link
          to={{
            pathname: "/colorpicker",
          }}>
          ColorPicker
        </Link>
      </div>
    );
  }
}
