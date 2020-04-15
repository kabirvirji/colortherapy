import React from "react";
import Button from "./Button/Button";
import { Link } from "react-router-dom";
import "./Quiz.css";
import Range from "./Range/Range";
import ColorQuestion from "./ColorQuestion/ColorQuestion";

const style = {
  fontSize: 30,
};

function numberToWord(number) {
  if (number >= 9) {
    return (
      <span role='img' style={style}>
        &#128175;
      </span>
    );
  }
  if (number >= 8 && number < 9) {
    return (
      <span role='img' style={style}>
        &#128293;
      </span>
    );
  } else if (number >= 6 && number < 8) {
    return (
      <span role='img' style={style}>
        &#128522;
      </span>
    );
  } else if (number >= 4 && number < 6) {
    return (
      <span role='img' style={style}>
        &#128528;
      </span>
    );
  } else if (number >= 2 && number < 4) {
    return (
      <span role='img' style={style}>
        &#128554;
      </span>
    );
  } else if (number >= 1 && number < 2) {
    return (
      <span role='img' style={style}>
        &#128560;
      </span>
    );
  } else if (number >= 0 && number < 1) {
    return (
      <span role='img' style={style}>
        &#128557;
      </span>
    );
  }
}

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.didMount();
  }
  handleClick(e) {
    const parent = e.target.parentElement.parentElement;
    const next = parent.nextSibling;
    parent.className = "card inactive";
    next.className = "card active";
  }
  render() {
    return (
      <div id='container'>
        <div className='card active'>
          <p>
            Before taking you to Color Therapy we'd like to ask you a few
            questions to know how you're feeling.
          </p>
          <Button onClick={this.handleClick}>Next</Button>
        </div>
        <div className='card'>
          <p>How energetic are you feeling today?</p>
          <div className='range'>
            <Range
              onChange={this.props.onChange}
              id='energy'
              value={this.props.value["energy"]}
            />
            {numberToWord(this.props.value["energy"])}
          </div>
          <Button onClick={this.handleClick}>Next</Button>
        </div>
        <div className='card'>
          <p>How do you feel about the following colors?</p>
          <Button onClick={this.handleClick}>Next</Button>
        </div>
        <ColorQuestion
          id={"red"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["red"]}
        />
        <ColorQuestion
          id={"blue"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["blue"]}
        />
        <ColorQuestion
          id={"yellow"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["yellow"]}
        />
        <ColorQuestion
          id={"green"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["green"]}
        />
        <ColorQuestion
          id={"white"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["white"]}
        />
        <ColorQuestion
          id={"black"}
          onChange={this.props.onChange}
          value={this.props.value["black"]}
        />
      </div>
    );
  }
}

//Add some media queries
//Explain what numbers mean for colors
