import React, { Component } from "react";

import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";

import "./Palette.css";

class Palette extends Component {
  state = { 
    level: 500,
    format: 'hex'
  };

  changeLevel = level => {
    this.setState({ level: level });
  };

  changeFormat = (evt) => {
    this.setState({format: evt.target.value})
  }

  render() {
    const { palette } = this.props;
    const { level, format } = this.state;
    const colorBoxes = palette.colors[level].map((color, index) => {
      return <ColorBox key={index} background={color[format]} name={color.name} />;
    });
    return (
      <div className="Palette">
        <Navbar format={format} changeFormat={this.changeFormat} level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
export default Palette;
