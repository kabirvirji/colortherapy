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
        const generateValue = () => {
            return Math.floor(Math.random() * 255)
        }
        while (1) {
            let color = `rgb(${generateValue()}, ${generateValue()}, ${generateValue()})`
            if (!this.state.usedRGB.includes(color)) {
                this.state.usedRGB.push(color)
                return {
                    backgroundColor: color
                }
            }
        }
    
    }
    handlePick(e, color) {
        this.state.currentColor = color
        if (!this.state.chosenRGB.includes(color)) {
            this.state.chosenRGB.push(color)
        }
        console.log(e.currentTarget.style)
        e.currentTarget.style = {
            backgroundColor: '#ffffff' // makes square disappear
        }
    }
    componentDidMount() {
        //this.props.didMount();
    }
    render() {
        return (
            <div>
                <HexlistHeader></HexlistHeader>
                    <Flex flexWrap="wrap">
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
        );
    }
}
