import React from "react";
import Flex from '../Flex/Flex'
import HexlistHeader from "../HexlistHeader/HexlistHeader";
import "./ColorPicker.css";

const numberOfSquares = 500 

export default class extends React.Component {
    state = {
        currentColor: '',
        usedRGB: [],
        chosenRGB: []
    };
    constructor(props) {
        super(props);
        this.randomRGB = this.randomRGB.bind(this)
        // this.handlePick = this.handlePick.bind(this)
    }
    randomRGB() { 
        const rand = () => {
            return Math.floor(Math.random() * 255)
        }
        while (1) {
            let color = `rgb(${rand()}, ${rand()}, ${rand()})`
            if (!this.state.usedRGB.includes(color)) {
                this.state.usedRGB.push(color)
                return {
                    backgroundColor: color
                }
            }
        }
    
    }
    handlePick(e, color) {
        if (!this.state.chosenRGB.includes(color)) {
            let rgbArr = color.replace(/[^\d,]/g, '').split(',');
            this.state.chosenRGB.push(rgbArr)
        }
        e.currentTarget.style = {
            backgroundColor: '#ffffff' // makes square disappear
        }
        console.log(this.state)
    }
    componentDidMount() {
        //this.props.didMount();
    }
    render() {
        return (
            <div>
                <HexlistHeader></HexlistHeader>
                <div className="colorContainer">
                        <Flex flexWrap="wrap" justifyContent="center">
                            {[...Array(numberOfSquares)].map(() => {
                                let color = this.randomRGB()
                                return (
                                    <div className="square" style={color} onClick={(e) => this.handlePick(e, color.backgroundColor)} key={color.backgroundColor}>
                                        <div className="inner"></div>
                                    </div>
                                )}
                            )}
                        </Flex>
                </div>
            </div>
        );
    }
}
