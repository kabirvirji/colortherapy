import React from "react";
import Flex from "../Flex/Flex";
import HexlistHeader from "../HexlistHeader/HexlistHeader";
import InfiniteScroll from "react-infinite-scroll-component";
import "./ColorPicker.css";
import { Redirect } from "react-router-dom";

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usedRGB: [], // looks like [{backgroundColor: color}]
      chosenRGB: [], // looks like [["152", "33", "89"]]
      numberOfSquares: 40,
      refreshRate: 10, // squares per scroll
    };
    this.randomRGB = this.randomRGB.bind(this);
  }
  randomRGB() {
    // returns unique rgb color
    const rand = () => {
      return Math.floor(Math.random() * 255);
    };
    while (1) {
      let color = `rgb(${rand()}, ${rand()}, ${rand()})`;
      if (!this.state.usedRGB.includes(color)) {
        let formattedColor = {
          backgroundColor: color,
        };
        this.setState((prevState) => ({
          usedRGB: [...prevState.usedRGB, formattedColor],
        }));
        return formattedColor;
      }
    }
  }
  handlePick(e, color) {
    let rgbArr = color.replace(/[^\d,]/g, "").split(",");
    if (!this.state.chosenRGB.includes(rgbArr)) {
      this.setState((prevState) => ({
        chosenRGB: prevState.chosenRGB.concat([rgbArr]),
      }));
    }
    e.currentTarget.style = {
      backgroundColor: "#ffffff", // makes square disappear
    };
  }
  fetchData() {
    let freshColors = [];
    for (let i = 0; i < this.state.refreshRate; i++) {
      freshColors[i] = this.randomRGB();
    }
    setTimeout(() => {
      this.setState((prevState) => ({
        usedRGB: [...prevState.usedRGB, ...freshColors],
      }));
    }, 1500);
  }
  UNSAFE_componentWillMount() {
    const init = () => {
      let tmp = [];
      for (let i = 0; i < this.state.numberOfSquares; i++) {
        tmp.push(this.randomRGB());
      }
      return tmp;
    };
    this.setState({
      usedRGB: init(),
    });
  }
  render() {
    if (this.props.login) {
      return (
        <div>
          <HexlistHeader></HexlistHeader>
          <InfiniteScroll
            dataLength={this.state.usedRGB.length}
            next={() => this.fetchData()}
            hasMore={true}>
            <div className='colorContainer'>
              <Flex flexWrap='wrap' justifyContent='center'>
                {this.state.usedRGB.map((color, index) => {
                  return (
                    <div
                      className='square'
                      style={color}
                      onClick={(e) => this.handlePick(e, color.backgroundColor)}
                      key={index}>
                      <div className='inner'></div>
                    </div>
                  );
                })}
              </Flex>
            </div>
          </InfiniteScroll>
        </div>
      );
    } else {
      return <Redirect to='/' />;
    }
  }
}
