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
  if (number >= 0.9) {
    return (
      <span role='img' style={style}>
        &#128175;
      </span>
    );
  }
  if (number >= 0.8 && number < 0.9) {
    return (
      <span role='img' style={style}>
        &#128293;
      </span>
    );
  } else if (number >= 0.6 && number < 0.8) {
    return (
      <span role='img' style={style}>
        &#128522;
      </span>
    );
  } else if (number >= 0.4 && number < 0.6) {
    return (
      <span role='img' style={style}>
        &#128528;
      </span>
    );
  } else if (number >= 0.2 && number < 0.4) {
    return (
      <span role='img' style={style}>
        &#128554;
      </span>
    );
  } else if (number >= 0.1 && number < 0.2) {
    return (
      <span role='img' style={style}>
        &#128560;
      </span>
    );
  } else if (number >= 0 && number < 0.1) {
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
    const numberOfCards = 10;
    const cardClasses = Array(numberOfCards).fill("card");
    cardClasses.splice(0, 1, "card active");
    this.state = {
      cardStates: cardClasses,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.didMount();
  }
  handleClick(e) {
    const getIndexActive = this.state.cardStates.indexOf("card active");

    this.setState((state) => {
      const updateState = [...state.cardStates];
      updateState.splice(getIndexActive, 1, "card inactive");
      updateState.splice(getIndexActive + 1, 1, "card active");
      return { cardStates: updateState };
    });

    // const parent = e.target.parentElement.parentElement;
    // const next = parent.nextSibling;
    // parent.className = "card inactive";
    // next.className = "card active";
  }
  render() {
    return (
      <div id='container'>
        <div className={this.state.cardStates[0]}>
          <p className='list'>
            Before taking you to Color Therapy we'd like to ask you a few
            questions to know how you're feeling.
          </p>
          <Button onClick={this.handleClick}>Next</Button>
        </div>
        <div className={this.state.cardStates[1]}>
          <p className='list'>How energetic are you today?</p>
          <div className='range'>
            {numberToWord(this.props.value["energy"])}
            <Range
              onChange={this.props.onChange}
              id='energy'
              value={this.props.value["energy"]}
              minText={"A bit down"}
              maxText={"Great"}
            />
          </div>
          <Button onClick={this.handleClick}>Next</Button>
        </div>
        <div className={this.state.cardStates[2]}>
          <p className='list'>How do you feel about the following colors?</p>
          <Button onClick={this.handleClick}>Next</Button>
        </div>
        <ColorQuestion
          className={this.state.cardStates[3]}
          id={"red"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["red"]}
        />
        <ColorQuestion
          className={this.state.cardStates[4]}
          id={"blue"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["blue"]}
        />
        <ColorQuestion
          className={this.state.cardStates[5]}
          id={"yellow"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["yellow"]}
        />
        <ColorQuestion
          className={this.state.cardStates[6]}
          id={"green"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["green"]}
        />
        <ColorQuestion
          className={this.state.cardStates[7]}
          id={"white"}
          onClick={this.handleClick}
          onChange={this.props.onChange}
          value={this.props.value["white"]}
        />
        <ColorQuestion
          className={this.state.cardStates[8]}
          id={"black"}
          onChange={this.props.onChange}
          value={this.props.value["black"]}
          onClick={this.handleClick}
        />
        <div className={this.state.cardStates[9]}>
          <p className='list'>
            Select 5 colors and press the 'Generate' button to create your
            playlist.
          </p>
          <Link to='/colorpicker'>
            <Button>Next</Button>
          </Link>
        </div>
      </div>
    );
  }
}
