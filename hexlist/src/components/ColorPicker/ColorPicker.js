import React from "react";
import Flex from "../Flex/Flex";
import HexlistHeader from "../HexlistHeader/HexlistHeader";
import ColoredSquare from "../ColoredSquare/ColoredSquare";
import InfiniteScroll from "react-infinite-scroll-component";
import { calculateValence, getMinMaxAvg } from "./Generate";
import TooManyColorsPopUp from "./TooManyColorsPopUp/TooManyColorsPopUp";

import "./ColorPicker.css";

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.randomRGB = this.randomRGB.bind(this);
    this.state = {
      usedRGB: [], // looks like [rgb(42, 78, 123), ...]
      chosenRGB: [], // looks like [rgb(42, 78, 123), ...]
      numberOfSquares: 60,
      refreshRate: 10, // squares per scroll
      blurGrid: "", //grid class name
      tooManyCardClass: "card",
    };
    this.handlePick = this.handlePick.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.randomRGB = this.randomRGB.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleBackToGrid = this.handleBackToGrid.bind(this);
    this.handleGenerateAgain = this.handleGenerateAgain.bind(this);
  }
  randomRGB() {
    // returns unique rgb color
    const rand = () => {
      return Math.floor(Math.random() * 255);
    };
    while (1) {
      let rgbColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
      if (!this.state.usedRGB.includes(rgbColor)) {
        // prevents duplicates
        this.setState((prevState) => ({
          usedRGB: [...prevState.usedRGB, rgbColor],
        }));
        return rgbColor;
      }
    }
  }
  handlePick(color) {
    if (!this.state.chosenRGB.includes(color)) {
      if (this.state.chosenRGB.length < 5) {
        this.setState((prevState) => ({
          chosenRGB: prevState.chosenRGB.concat([color]),
        }));
        return true;
      } else {
        this.setState({
          blurGrid: "blur",
          tooManyCardClass: "toomanycolors card active",
        });
      }
    } else {
      this.setState((state) => {
        const newState = [...state.chosenRGB];
        newState.splice(newState.indexOf(color), 1);
        return { chosenRGB: newState };
      });
      return true;
    }
  }
  fetchData() {
    // creates new squares and appends to usedRGB for infinite scroll
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
  generatePlaylistImageURL() {
    let rgb = this.state.chosenRGB.map((x) =>
      x.replace(/[^\d,]/g, "").split(",")
    );
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    let imgData = ctx.createImageData(300, 300);
    let imgIndex = 0;
    for (let j = 0; j < rgb.length; j++) {
      let r = parseInt(rgb[j][0]);
      let g = parseInt(rgb[j][1]);
      let b = parseInt(rgb[j][2]);
      let currIndex = Math.floor((imgData.data.length * (j + 1)) / rgb.length);
      for (imgIndex; imgIndex < currIndex; imgIndex += 4) {
        imgData.data[imgIndex + 0] = r;
        imgData.data[imgIndex + 1] = g;
        imgData.data[imgIndex + 2] = b;
        imgData.data[imgIndex + 3] = 255; // visibility
      }
      imgIndex = currIndex;
    }
    ctx.putImageData(imgData, 0, 0);
    let imgBase64 = canvas.toDataURL("image/jpeg");
    console.log(imgBase64, "image");
    return imgBase64;
  }
  UNSAFE_componentWillMount() {
    const init = () => {
      // creates the initial squares
      let tmp = [];
      for (let i = 0; i < this.state.numberOfSquares; i++) {
        tmp.push(this.randomRGB());
      }
      return tmp;
    };
    this.setState({
      usedRGB: init(), // initilize since we pull squares from this.state.usedRGB in render
    });
  }
  async componentDidMount() {
    await this.props.Spotify.getTopArtists();
  }

  async handleGenerate() {
    const valences = calculateValence(this.state.chosenRGB, this.props.colors);
    const [minValence, maxValence, targetValence] = getMinMaxAvg(valences);
    const seedArtists = this.props.Spotify.topArtists.slice(0, 5);
    const targetEnergy = this.props.energy;
    // const playlistImage = this.generatePlaylistImageURL();
    await this.props.Spotify.getRecommendations(
      seedArtists,
      targetEnergy,
      minValence,
      maxValence,
      targetValence
    );
    await this.props.Spotify.createPlaylist();
    await this.props.Spotify.populatePlaylist();
    // await this.props.Spotify.updatePlaylistImage(playlistImage);
    if (this.state.tooManyCardClass.includes("active")) {
      this.setState({
        blurGrid: "blur",
        tooManyCardClass: "toomanycolors card opaque",
      });
    } else {
      this.setState({ blurGrid: "blur" });
    }
  }

  handleBackToGrid() {
    this.setState({
      blurGrid: "backToGrid",
      tooManyCardClass: "toomanycolors card opaque",
    });
  }
  handleGenerateAgain() {
    this.setState({ chosenRGB: [], blurGrid: "backToGrid" });
    this.props.Spotify.reset();
  }

  render() {
    return (
      <div>
        {this.props.Spotify.playlistEmbed ? (
          <div className='final'>
            <button
              className='button back-to-grid'
              onClick={this.handleGenerateAgain}>
              Generate Another Playlist
            </button>
            <div className='embedded-playlist'>
              <iframe
                title='spotify-player'
                src={this.props.Spotify.playlistEmbed}
                allowtransparency='true'
                allow='encrypted-media'></iframe>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <TooManyColorsPopUp
          handleBackToGrid={this.handleBackToGrid}
          handleGenerate={this.handleGenerate}
          cardClass={this.state.tooManyCardClass}
        />
        <div className={this.state.blurGrid}>
          <a href="/" style={{textDecoration: 'none'}}>
            <HexlistHeader></HexlistHeader>
          </a>
          <InfiniteScroll
            dataLength={this.state.usedRGB.length}
            next={() => this.fetchData()}
            hasMore={true}>
            <div className='colorContainer'>
              <Flex flexWrap='wrap' justifyContent='center'>
                {this.state.usedRGB.map((color, index) => {
                  return (
                    <ColoredSquare
                      color={color}
                      key={index}
                      onPress={() => this.handlePick(color)}
                      numberOfSquares={this.state.chosenRGB.length}
                    />
                  );
                })}

                {/* <Bubble></Bubble> */}
                {this.state.chosenRGB.length > 4 ? (
                  <div className='overlay'>
                    <button
                      onClick={this.handleGenerate}
                      className='button generate'>
                      Generate Playlist
                    </button>
                    <canvas ref='canvas' width={300} height={300}></canvas>
                  </div>
                ) : (
                  <div></div>
                )}
              </Flex>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
