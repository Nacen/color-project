import React, { Component } from "react";

import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";

import "./Palette.css";

class Palette extends Component {
  state = { 
    level: 500
  };

  changeLevel = level => {
    this.setState({ level: level });
  };

  render() {
    const { palette } = this.props;
    const { level } = this.state;
    const colorBoxes = palette.colors[level].map((color, index) => {
      return <ColorBox key={index} background={color.hex} name={color.name} />;
    });
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
export default Palette;
