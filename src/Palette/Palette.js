import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Palette.css";
import ColorBox from "../ColorBox/ColorBox";

class Palette extends Component {
  state = {
    level: 500
  };

  changelevel = level => {
    this.setState({ level });
  };

  render() {
    const { palette } = this.props;
    const { level } = this.state;
    const colorBoxes = palette.colors[level].map((color, index) => {
      return <ColorBox key={index} background={color.hex} name={color.name} />;
    });
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changelevel}
          />
        </div>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
export default Palette;
