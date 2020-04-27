import React from "react";
import "./GeneratePlaylistImage.css";

export default class GeneratePlaylistImage extends React.Component {
    // this is a stateless component
    // this.props.colorArr is the array of colors we will make the image from
    componentDidMount() {
        let rgb = this.props.colorArr.map(x => x.replace(/[^\d,]/g, '').split(','))
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        let imgData = ctx.createImageData(300, 300);
        let imgIndex = 0
        for (let j = 0; j < rgb.length; j++) {
            let r = parseInt(rgb[j][0])
            let g = parseInt(rgb[j][1])
            let b = parseInt(rgb[j][2])
            let currIndex = Math.floor(imgData.data.length * (j + 1) / rgb.length)
            for (imgIndex; imgIndex < currIndex; imgIndex += 4) {
                imgData.data[imgIndex+0] = r;
                imgData.data[imgIndex+1] = g;
                imgData.data[imgIndex+2] = b;
                imgData.data[imgIndex+3] = 255; // visibility
            }
            imgIndex = currIndex
        }
        ctx.putImageData(imgData, 0, 0);
        let imgBase64 = canvas.toDataURL("image/jpeg");
    }
    render() {
        return (
        <div>
            <canvas ref="canvas" width={300} height={300}></canvas>
        </div>
        );
    }
}
