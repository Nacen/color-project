import React, { Component } from "react";
import "./SingleColorPalette.css";
import ColorBox from "../ColorBox/ColorBox";

class SingleColorPalette extends Component {
  gatherShades = (colors, colorId) => {
    let shades = [];
    for (let color in colors) {
      shades.push(
        ...colors[color].filter(shadeColor => shadeColor.id === colorId)
      );
    }
    return shades.slice(1);
  };
  render() {
    const { colors } = this.props.palette;
    const { colorId } = this.props;
    const colorBoxes = this.gatherShades(colors, colorId).map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className= "Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
